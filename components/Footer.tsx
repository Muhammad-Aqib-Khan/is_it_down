import React from 'react';
import Link from 'next/link';
import { FaGlobeAmericas, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 mt-24">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <FaGlobeAmericas className="text-xl text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">
                                IsItDownForEveryone<span className="text-blue-400">.site</span>
                            </span>
                        </div>
                        <p className="text-slate-400 leading-relaxed max-w-md">
                            Real-time server status monitoring from our global edge network.
                            Check website availability, latency, and uptime in milliseconds.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-blue-400 transition-colors">
                                    Server Checker
                                </Link>
                            </li>
                            <li>
                                <Link href="/top-servers" className="hover:text-blue-400 transition-colors">
                                    Top Servers
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="hover:text-blue-400 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-400 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} IsItDownForEveryone.site - All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex space-x-4">
                        <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="Twitter">
                            <FaTwitter className="text-xl" />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="GitHub">
                            <FaGithub className="text-xl" />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                            <FaLinkedin className="text-xl" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
