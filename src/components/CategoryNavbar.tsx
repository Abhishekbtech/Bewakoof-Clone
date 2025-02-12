"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const categories = [
    {
        title: "Electronics & Gadgets",
        link: "/electronics-gadgets",
        subCategories: ["Laptop", "Mobile", "Tablet", "TV", "Audio"],
    },
    {
        title: "Home Appliances",
        link: "/home-appliances",
        subCategories: ["AC", "Refrigerator", "Washing Machine", "Kitchen Appliances"],
    },
    {
        title: "Health & Wellness",
        link: "/health-wellness",
        subCategories: ["Health"],
    },
    {
        title: "Travel & Lifestyle",
        link: "/travel-lifestyle",
        subCategories: ["Travel"],
    },
];

const CategoryNavbar = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState<string | null>(null);

    return (
        <header className="bg-blue-600 fixed text-white w-full z-50 top-[109px] lg:top-16 shadow-md">
            {/* Desktop View */}
            <nav className="hidden lg:block">
                <ul className="flex justify-between px-6">
                    {categories.map((category) => (
                        <li
                            key={category.title}
                            className="relative group py-2"
                            onMouseEnter={() => setActiveCategory(category.title)}
                            onMouseLeave={() => setActiveCategory(null)}
                        >
                            <Link
                                href={category.link}
                                className="flex items-center space-x-1 text-sm hover:text-gray-200"
                                aria-expanded={activeCategory === category.title}
                            >
                                <span>{category.title}</span>
                                {category.subCategories.length > 0 && (
                                    <FaChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
                                )}
                            </Link>

                            {/* Dropdown Menu */}
                            {category.subCategories.length > 0 && (
                                <div className="absolute hidden group-hover:block w-48 bg-white text-gray-800 shadow-lg z-50 mt-2 rounded-md">
                                    <ul className="py-2">
                                        {category.subCategories.map((sub) => (
                                            <li key={sub}>
                                                <Link
                                                    href={`${category.link}/${sub.toLowerCase()}`}
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                >
                                                    {sub}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile View */}
            <div className="lg:hidden relative">
                <nav className="px-4 py-2">
                    <ul className="flex whitespace-nowrap">
                        {categories.map((category) => (
                            <li key={category.title} className="relative mr-6 last:mr-0">
                                <button
                                    onClick={() =>
                                        setMobileOpen(mobileOpen === category.title ? null : category.title)
                                    }
                                    className="flex items-center space-x-1 text-sm text-white"
                                >
                                    <span>{category.title}</span>
                                    {category.subCategories.length > 0 && (
                                        <FaChevronDown
                                            className={`h-3 w-3 transition-transform duration-200 ${
                                                mobileOpen === category.title ? "rotate-180" : ""
                                            }`}
                                        />
                                    )}
                                </button>

                                {/* Mobile Dropdown */}
                                {mobileOpen === category.title && category.subCategories.length > 0 && (
                                    <div className="absolute left-0 w-48 bg-white text-gray-800 shadow-lg rounded-md z-50 mt-2">
                                        <ul className="py-2">
                                            {category.subCategories.map((sub) => (
                                                <li key={sub}>
                                                    <Link
                                                        href={`${category.link}/${sub.toLowerCase()}`}
                                                        className="block px-4 py-2 hover:bg-gray-100"
                                                        onClick={() => setMobileOpen(null)}
                                                    >
                                                        {sub}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default CategoryNavbar;