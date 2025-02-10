"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch, FaShoppingCart, FaBars, FaMapMarkerAlt } from 'react-icons/fa';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [pinCode, setPinCode] = useState('');

    return (
        <header className="bg-red-600 fixed w-full top-0 z-50">
            {/* Desktop View */}
            <div className="hidden lg:block max-w-7xl mx-auto">
                <div className="flex items-center justify-between h-16">
                    {/* Left Section - Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <Image
                                src="/rd-logo.jpg"
                                alt="Store Logo"
                                width={120}
                                height={40}
                                className="h-8 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Center Section - Search Bar */}
                    <div className="flex-1 max-w-2xl mx-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Find your favorite products"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-2 rounded-full focus:outline-none"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                <FaSearch className="h-5 w-5 text-gray-400 cursor-pointer" onClick={() => console.log(searchQuery)}/>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Pin Code, Cart, Login */}
                    <div className="flex items-center space-x-6">
                        {/* Pin Code Input */}
                        <div className="flex items-center text-white">
                            <FaMapMarkerAlt className="h-5 w-5 mr-2" />
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Enter your Pin Code"
                                    value={pinCode}
                                    onChange={(e) => setPinCode(e.target.value)}
                                    className="bg-transparent border-b border-white placeholder-white text-white text-sm w-32 focus:outline-none focus:border-white"
                                    maxLength={6}
                                />
                            </div>
                        </div>

                        {/* Cart */}
                        <Link href="/cart" className="text-white flex items-center">
                            <FaShoppingCart className="h-5 w-5" />
                            <span className="ml-1">Cart</span>
                        </Link>

                        {/* Login */}
                        <Link
                            href="/login"
                            className="text-white hover:text-gray-200 text-sm"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className="lg:hidden">
                {/* Top Bar */}
                <div className="px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center">
                        <button className="text-white mr-3 pt-3">
                            <FaBars className="h-6 w-6" />
                        </button>
                        <Link href="/">
                            <Image
                                src="/rd-logo.jpg"
                                alt="Store Logo"
                                width={120}
                                height={30}
                                className="h-8 w-auto"
                            />
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <Link href="/cart" className="text-white pt-2">
                            <FaShoppingCart className="h-6 w-6" />
                        </Link>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="bg-red-600 px-4 py-2">
                    <div className="relative flex items-center">
                        <div className="absolute left-3 text-gray-400">
                            <FaSearch className="h-5 w-5" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for products and brands"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-10 py-2 border rounded-full focus:outline-none focus:border-red-600"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;