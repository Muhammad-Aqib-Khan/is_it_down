
import React from 'react';
import { FaGlobeAmericas, FaBolt, FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

export default function About() {
    return (
        <main className="min-h-screen relative overflow-hidden">
            {/* Decorative Blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-100/40 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 py-12 relative z-10">
                {/* Professional About Content */}
                <section className="max-w-6xl mx-auto mb-24">
                    <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-2xl">
                        <div className="relative z-10 p-8 md:p-12">
                            <div className="text-center mb-16">
                                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About IsItDown?</h1>
                                <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-8"></div>
                                <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                                    Empowering the internet with transparency. We provide the fastest, most reliable way to check website availability worldwide.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
                                <div className="space-y-8">
                                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-300 transition-colors">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                                            <span className="bg-blue-100 p-2.5 rounded-xl mr-4 text-blue-600">
                                                <FaGlobeAmericas />
                                            </span>
                                            Who We Are
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed text-lg">
                                            We are a team of network infrastructure engineers and data scientists dedicated to internet transparency.
                                            IsItDown was born from a simple need: to know definitively whether a connection issue is local or global.
                                            We operate a distributed network of monitoring nodes across 5 continents.
                                        </p>
                                    </div>

                                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-violet-300 transition-colors">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                                            <span className="bg-violet-100 p-2.5 rounded-xl mr-4 text-violet-600">
                                                <FaBolt />
                                            </span>
                                            Our Mission
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed text-lg">
                                            To provide the world's fastest, most accurate real-time website status information.
                                            We empower users and businesses with the data they need to troubleshoot connectivity issues instantly.
                                            We believe in an open and accessible internet for everyone.
                                        </p>
                                    </div>
                                </div>

                                <div className="relative sticky top-8">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-200/40 to-violet-200/40 blur-3xl rounded-full"></div>
                                    <div className="relative bg-white/80 backdrop-blur-xl p-10 rounded-3xl border border-slate-200 shadow-xl">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-8">Why Trust Us?</h3>
                                        <ul className="space-y-6">
                                            <li className="flex items-start">
                                                <div className="bg-emerald-100 p-1 rounded-full mr-4 mt-1">
                                                    <FaCheckCircle className="text-emerald-600 text-xl" />
                                                </div>
                                                <div>
                                                    <strong className="text-slate-900 block text-lg mb-1">Global Edge Network</strong>
                                                    <span className="text-slate-600">We verify status from 5 different continents (North America, Europe, Asia, Australia, South America) to eliminate false positives.</span>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="bg-emerald-100 p-1 rounded-full mr-4 mt-1">
                                                    <FaCheckCircle className="text-emerald-600 text-xl" />
                                                </div>
                                                <div>
                                                    <strong className="text-slate-900 block text-lg mb-1">Real-time Diagnostics</strong>
                                                    <span className="text-slate-600">Direct server pings with millisecond-precision latency reporting. We don't use cached data for live checks.</span>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="bg-emerald-100 p-1 rounded-full mr-4 mt-1">
                                                    <FaCheckCircle className="text-emerald-600 text-xl" />
                                                </div>
                                                <div>
                                                    <strong className="text-slate-900 block text-lg mb-1">99.9% Accuracy</strong>
                                                    <span className="text-slate-600">Our dual-verification system ensures you never get a wrong result. If one node fails, we check from another.</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="border-t border-slate-200 pt-12 pb-8 text-center">
                    <p className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} IsItDown? All rights reserved.</p>
                </footer>
            </div>
        </main>
    );
}
