"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';

const categories = [
    {
        title: 'MOBILES & TABLETS',
        link: '/mobiles-tablets',
        subCategories: ['Smartphones', 'Tablets', 'Accessories']
    },
    {
        title: 'TELEVISIONS',
        link: '/televisions',
        subCategories: ['Smart TVs', 'LED TVs', '4K TVs']
    },
    {
        title: 'AUDIO',
        link: '/audio',
        subCategories: ['Headphones', 'Speakers', 'Soundbars']
    },
    {
        title: 'HOME APPLIANCES',
        link: '/home-appliances',
        subCategories: ['Washing Machines', 'ACs', 'Refrigerators']
    },
    {
        title: 'COMPUTERS',
        link: '/computers',
        subCategories: ['Laptops', 'Desktops', 'Accessories']
    },
    {
        title: 'CAMERAS',
        link: '/cameras',
        subCategories: ['DSLR', 'Action Cameras', 'Lenses']
    },
    {
        title: 'KITCHEN APPLIANCES',
        link: '/kitchen-appliances',
        subCategories: ['Microwaves', 'Mixers', 'Dishwashers']
    },
    {
        title: 'PERSONAL CARE',
        link: '/personal-care',
        subCategories: ['Grooming', 'Healthcare', 'Styling']
    },
    {
        title: 'ACCESSORIES',
        link: '/accessories',
        subCategories: ['Phone Cases', 'Chargers', 'Storage']
    }
];

const CategoryNavbar = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    return (
        <nav className="bg-blue-600 text-white w-full">
            {/* Desktop View */}
            <div className="">
                <div className="w-full">
                    <ul className="flex justify-between">
                        {categories.map((category) => (
                            <li
                                key={category.title}
                                className="relative group py-2"
                                onMouseEnter={() => setActiveCategory(category.title)}
                                onMouseLeave={() => setActiveCategory(null)}
                            >
                                <Link
                                    href={category.link}
                                    className="flex items-center space-x-1 text-sm whitespace-nowrap hover:text-gray-200"
                                >
                                    <span>{category.title}</span>
                                    <FaChevronDown className="h-3 w-3" />
                                </Link>

                                {/* Dropdown Menu */}
                                <div className="absolute hidden group-hover:block w-48 bg-white text-gray-800 shadow-lg z-50 mt-2">
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
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mobile View - Horizontal Scrollable */}
            {/* <div className="lg:hidden overflow-x-auto">
                <ul className="flex whitespace-nowrap px-4 py-2">
                    {categories.map((category) => (
                        <li key={category.title} className="mr-6 last:mr-0">
                            <Link
                                href={category.link}
                                className="flex items-center space-x-1 text-sm"
                            >
                                <span className='text-black'>{category.title}</span>
                                <FaChevronDown className="h-3 w-3" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div> */}
        </nav>
    );
};

export default CategoryNavbar;