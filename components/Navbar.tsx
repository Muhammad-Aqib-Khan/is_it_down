'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaGlobeAmericas, FaBars, FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                            <FaGlobeAmericas className="text-xl text-white" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-900">
                            IsItDownForEveryone<span className="text-blue-600">.site</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/"
                            className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
                        >
                            Checker
                        </Link>
                        <Link
                            href="/top-servers"
                            className={`text-sm font-medium transition-colors ${isActive('/top-servers') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
                        >
                            Top Servers
                        </Link>

                        <Link
                            href="/about"
                            className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className={`text-sm font-medium transition-colors ${isActive('/contact') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
                        >
                            Contact
                        </Link>
                        <Link
                            href="/privacy"
                            className={`text-sm font-medium transition-colors ${isActive('/privacy') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
                        >
                            Privacy
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors focus:outline-none"
                        >
                            {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-slate-200">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 rounded-lg text-base font-medium ${isActive('/') ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
                        >
                            Checker
                        </Link>
                        <Link
                            href="/top-servers"
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 rounded-lg text-base font-medium ${isActive('/top-servers') ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
                        >
                            Top Servers
                        </Link>

                        <Link
                            href="/about"
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 rounded-lg text-base font-medium ${isActive('/about') ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 rounded-lg text-base font-medium ${isActive('/contact') ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
                        >
                            Contact
                        </Link>
                        <Link
                            href="/privacy"
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 rounded-lg text-base font-medium ${isActive('/privacy') ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
                        >
                            Privacy
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
