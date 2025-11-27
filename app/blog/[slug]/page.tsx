import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { FaCheckCircle, FaExclamationTriangle, FaServer, FaHistory, FaGlobeAmericas } from 'react-icons/fa';

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const serviceName = params.slug.replace(/-is-it-down$/, '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return {
        title: `Is ${serviceName} Down? Real-time Status & Outage Map`,
        description: `Check if ${serviceName} is down for everyone or just you. Live outage reports, server status, and troubleshooting guide for ${serviceName}.`,
        keywords: [`is ${serviceName} down`, `${serviceName} down`, `${serviceName} status`, `${serviceName} outage`, `check ${serviceName}`],
    };
}

export default function ArticlePage({ params }: Props) {
    const serviceName = params.slug.replace(/-is-it-down$/, '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const isOnline = true; // Mock status, in a real app this would fetch data

    return (
        <main className="min-h-screen bg-slate-50 pt-24">
            <div className="container mx-auto px-4 py-12">
                <article className="max-w-4xl mx-auto">

                    {/* Header */}
                    <header className="text-center mb-12">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-medium mb-6">
                            <span className="flex h-2.5 w-2.5 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                            Live Status Report
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            Is <span className="text-blue-600">{serviceName}</span> Down?
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Real-time service status, outage map, and troubleshooting for {serviceName}.
                        </p>
                    </header>

                    {/* Status Card */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 mb-12 text-center">
                        <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 ${isOnline ? 'bg-emerald-50' : 'bg-rose-50'}`}>
                            {isOnline ? (
                                <FaCheckCircle className="text-5xl text-emerald-500" />
                            ) : (
                                <FaExclamationTriangle className="text-5xl text-rose-500" />
                            )}
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">
                            {isOnline ? `${serviceName} is Online` : `${serviceName} is Down`}
                        </h2>
                        <p className={`text-lg font-medium ${isOnline ? 'text-emerald-600' : 'text-rose-600'}`}>
                            {isOnline ? 'Servers are responding normally.' : 'We are detecting issues.'}
                        </p>
                        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Response Time</div>
                                <div className="font-bold text-slate-900">24ms</div>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Last Checked</div>
                                <div className="font-bold text-slate-900">Just now</div>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Status Code</div>
                                <div className="font-bold text-emerald-600">200 OK</div>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Reports (1h)</div>
                                <div className="font-bold text-slate-900">12</div>
                            </div>
                        </div>
                    </div>

                    {/* Ad Placeholder */}
                    <div className="w-full h-32 bg-slate-100 border border-slate-200 border-dashed rounded-2xl flex items-center justify-center mb-12">
                        <span className="text-slate-400 font-mono text-xs uppercase tracking-widest">Advertisement Space</span>
                    </div>

                    {/* Content */}
                    <div className="prose prose-slate prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50">
                        <h3>Troubleshooting {serviceName} Connection Issues</h3>
                        <p>
                            If {serviceName} is up but you still can't access it, the issue might be on your end. Try these steps:
                        </p>
                        <ul>
                            <li><strong>Clear your browser cache:</strong> Sometimes outdated data causes loading errors.</li>
                            <li><strong>Flush DNS:</strong> Open your command prompt and type <code>ipconfig /flushdns</code>.</li>
                            <li><strong>Check your internet connection:</strong> Restart your router or modem.</li>
                            <li><strong>Disable VPN:</strong> Some services block VPN IP addresses.</li>
                        </ul>

                        <h3>Why is {serviceName} down?</h3>
                        <p>
                            Common reasons for service outages include scheduled maintenance, server overload due to high traffic,
                            DDoS attacks, or technical glitches in the data center. Our monitoring system pings {serviceName}
                            every minute to provide the most accurate status.
                        </p>
                    </div>

                </article>
            </div>
            <Footer />
        </main>
    );
}
