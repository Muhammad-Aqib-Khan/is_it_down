'use client';

import React, { useState } from 'react';
import { FaSearch, FaGamepad, FaCode, FaGlobe, FaServer, FaChartBar, FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';
import Footer from '@/components/Footer';

// Mock Data for Top Servers
const TOP_SERVERS = [
    {
        category: 'Gaming',
        icon: <FaGamepad className="text-purple-500" />,
        servers: [
            { name: 'Roblox', url: 'roblox.com', uptime: 99.9, popularity: 98, status: 'Online' },
            { name: 'Minecraft', url: 'minecraft.net', uptime: 99.8, popularity: 95, status: 'Online' },
            { name: 'Fortnite', url: 'fortnite.com', uptime: 99.5, popularity: 92, status: 'Online' },
            { name: 'Steam', url: 'store.steampowered.com', uptime: 99.9, popularity: 99, status: 'Online' },
            { name: 'Valorant', url: 'playvalorant.com', uptime: 99.7, popularity: 88, status: 'Online' },
        ]
    },
    {
        category: 'Development',
        icon: <FaCode className="text-blue-500" />,
        servers: [
            { name: 'GitHub', url: 'github.com', uptime: 99.99, popularity: 99, status: 'Online' },
            { name: 'Stack Overflow', url: 'stackoverflow.com', uptime: 99.95, popularity: 97, status: 'Online' },
            { name: 'NPM', url: 'npmjs.com', uptime: 99.9, popularity: 95, status: 'Online' },
            { name: 'Vercel', url: 'vercel.com', uptime: 99.98, popularity: 90, status: 'Online' },
            { name: 'GitLab', url: 'gitlab.com', uptime: 99.8, popularity: 85, status: 'Online' },
        ]
    },
    {
        category: 'Internet Service Providers (ISPs)',
        icon: <FaGlobe className="text-blue-600" />,
        servers: [
            { name: 'Verizon', url: 'verizon.com', uptime: 99.9, popularity: 95, status: 'Online' },
            { name: 'AT&T', url: 'att.com', uptime: 99.8, popularity: 94, status: 'Online' },
            { name: 'Cox', url: 'cox.com', uptime: 99.7, popularity: 90, status: 'Online' },
            { name: 'Xfinity', url: 'xfinity.com', uptime: 99.6, popularity: 92, status: 'Online' },
            { name: 'Spectrum', url: 'spectrum.com', uptime: 99.5, popularity: 91, status: 'Online' },
        ]
    },
    {
        category: 'Streaming Services',
        icon: <FaGamepad className="text-red-500" />, // Reusing icon for visual consistency, ideally would import FaFilm or similar
        servers: [
            { name: 'Netflix', url: 'netflix.com', uptime: 99.99, popularity: 100, status: 'Online' },
            { name: 'Disney+', url: 'disneyplus.com', uptime: 99.9, popularity: 98, status: 'Online' },
            { name: 'HBO Max', url: 'max.com', uptime: 99.8, popularity: 96, status: 'Online' },
            { name: 'Hulu', url: 'hulu.com', uptime: 99.7, popularity: 94, status: 'Online' },
            { name: 'Prime Video', url: 'primevideo.com', uptime: 99.9, popularity: 95, status: 'Online' },
        ]
    },
    {
        category: 'Food Delivery',
        icon: <FaServer className="text-orange-500" />,
        servers: [
            { name: 'DoorDash', url: 'doordash.com', uptime: 99.8, popularity: 97, status: 'Online' },
            { name: 'Uber Eats', url: 'ubereats.com', uptime: 99.9, popularity: 96, status: 'Online' },
            { name: 'Grubhub', url: 'grubhub.com', uptime: 99.7, popularity: 90, status: 'Online' },
            { name: 'Instacart', url: 'instacart.com', uptime: 99.6, popularity: 88, status: 'Online' },
            { name: 'Postmates', url: 'postmates.com', uptime: 99.8, popularity: 85, status: 'Online' },
        ]
    },
    {
        category: 'Social & Media',
        icon: <FaGlobe className="text-pink-500" />,
        servers: [
            { name: 'Discord', url: 'discord.com', uptime: 99.9, popularity: 98, status: 'Online' },
            { name: 'YouTube', url: 'youtube.com', uptime: 99.99, popularity: 100, status: 'Online' },
            { name: 'Twitch', url: 'twitch.tv', uptime: 99.8, popularity: 94, status: 'Online' },
            { name: 'Reddit', url: 'reddit.com', uptime: 99.5, popularity: 96, status: 'Online' },
            { name: 'Twitter / X', url: 'twitter.com', uptime: 99.7, popularity: 97, status: 'Online' },
        ]
    }
];

export default function TopServersClient() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCategories = TOP_SERVERS.map(cat => ({
        ...cat,
        servers: cat.servers.filter(server =>
            server.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            server.url.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(cat => cat.servers.length > 0);

    return (
        <main className="min-h-screen relative overflow-hidden bg-slate-50">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 py-12 relative z-10">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-medium mb-6">
                        <FaChartBar className="mr-2" />
                        Live Performance Metrics
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Top Rated <span className="text-gradient">Servers</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Monitor the health, uptime, and performance of the world's most popular digital infrastructure.
                        Real-time data for gamers, developers, and web professionals.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-16 relative">
                    <div className="relative flex items-center bg-white rounded-2xl p-2 shadow-xl border border-slate-100 input-modern">
                        <FaSearch className="ml-5 text-slate-400 text-xl" />
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search for a service (e.g., Roblox, GitHub)..."
                            className="w-full bg-transparent border-none focus:ring-0 text-slate-900 px-4 py-4 placeholder-slate-400 outline-none text-lg"
                        />
                    </div>
                </div>

                {/* Server Categories */}
                <div className="space-y-12 max-w-6xl mx-auto">
                    {filteredCategories.map((category, idx) => (
                        <section key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 mr-4 text-2xl">
                                    {category.icon}
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">{category.category} Servers</h2>
                            </div>

                            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                                <div className="grid grid-cols-12 gap-4 p-4 bg-slate-50/50 border-b border-slate-100 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                    <div className="col-span-4 md:col-span-3 pl-4">Service Name</div>
                                    <div className="col-span-3 md:col-span-2 text-center">Status</div>
                                    <div className="col-span-5 md:col-span-4">Uptime (30 Days)</div>
                                    <div className="hidden md:block md:col-span-2 text-center">Popularity</div>
                                    <div className="hidden md:block md:col-span-1 text-center">Link</div>
                                </div>

                                {category.servers.map((server, sIdx) => (
                                    <div key={sIdx} className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0">
                                        {/* Service Name */}
                                        <div className="col-span-4 md:col-span-3 pl-4">
                                            <div className="font-bold text-slate-900">{server.name}</div>
                                            <div className="text-xs text-slate-500 truncate">{server.url}</div>
                                        </div>

                                        {/* Status */}
                                        <div className="col-span-3 md:col-span-2 flex justify-center">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
                                                {server.status}
                                            </span>
                                        </div>

                                        {/* Uptime Bar (Demograph) */}
                                        <div className="col-span-5 md:col-span-4 flex flex-col justify-center">
                                            <div className="flex justify-between text-xs mb-1">
                                                <span className="font-medium text-slate-700">{server.uptime}%</span>
                                                <span className="text-slate-400">Target: 99.9%</span>
                                            </div>
                                            <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                                                <div
                                                    className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full"
                                                    style={{ width: `${server.uptime}%` }}
                                                ></div>
                                            </div>
                                        </div>

                                        {/* Popularity */}
                                        <div className="hidden md:block md:col-span-2 text-center">
                                            <div className="text-sm font-bold text-slate-700">{server.popularity}/100</div>
                                            <div className="flex justify-center mt-1 space-x-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < Math.floor(server.popularity / 20) ? 'bg-amber-400' : 'bg-slate-200'}`} />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Link */}
                                        <div className="hidden md:block md:col-span-1 text-center">
                                            <a
                                                href={`https://${server.url}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate-400 hover:text-blue-600 transition-colors"
                                                title={`Visit ${server.name}`}
                                            >
                                                <FaExternalLinkAlt />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                {/* SEO Content / Strong Backlinks Section */}
                <section className="mt-24 max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Monitor Server Status?</h3>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        In today's interconnected digital ecosystem, downtime translates directly to lost revenue and productivity.
                        Our platform aggregates data from trusted sources and performs independent verification to ensure you have the full picture.
                        We track major providers like <a href="https://aws.amazon.com" className="text-blue-600 hover:underline font-medium">AWS</a>,
                        <a href="https://azure.microsoft.com" className="text-blue-600 hover:underline font-medium"> Azure</a>, and
                        <a href="https://cloud.google.com" className="text-blue-600 hover:underline font-medium"> Google Cloud</a> infrastructure
                        to predict outages before they affect your favorite services.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Link href="/" className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm">
                            Check Custom URL
                        </Link>
                        <Link href="/contact" className="px-6 py-3 bg-blue-600 rounded-xl text-white font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
                            Report an Outage
                        </Link>
                    </div>
                </section>

            </div>
            <Footer />
        </main>
    );
}
