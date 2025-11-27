import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Server Status Blog - Latest Outage Reports & Fixes',
    description: 'Read the latest updates on server outages, fix guides, and network status reports for popular services like AWS, Facebook, and YouTube.',
};

const ARTICLES = [
    {
        title: 'Is AWS Down? Current Status Check',
        slug: 'aws-is-it-down',
        excerpt: 'Check the real-time status of Amazon Web Services (AWS). Is it just you or a global outage? Find out now.',
        date: 'Today',
        category: 'Cloud Infrastructure'
    },
    {
        title: 'Facebook Login Issues: Live Updates',
        slug: 'facebook-is-it-down',
        excerpt: 'Having trouble logging into Facebook? Track live outage reports and see if the social giant is experiencing downtime.',
        date: 'Today',
        category: 'Social Media'
    },
    {
        title: 'YouTube Buffering? Check Server Status',
        slug: 'youtube-is-it-down',
        excerpt: 'Is YouTube not loading videos? Verify if YouTube servers are down or if it is a local network issue.',
        date: 'Today',
        category: 'Video Streaming'
    },
    {
        title: 'Instagram Feed Not Refreshing?',
        slug: 'instagram-is-it-down',
        excerpt: 'Instagram down? Check the latest server status and user reports for the popular photo-sharing app.',
        date: 'Yesterday',
        category: 'Social Media'
    },
    {
        title: 'Discord Connection Problems',
        slug: 'discord-is-it-down',
        excerpt: 'Can\'t connect to voice channels? See if Discord is down for everyone or just you.',
        date: 'Yesterday',
        category: 'Communication'
    },
    {
        title: 'Netflix Streaming Errors',
        slug: 'netflix-is-it-down',
        excerpt: 'Netflix not working? Check if the streaming service is offline or experiencing technical difficulties.',
        date: '2 days ago',
        category: 'Entertainment'
    }
];

export default function BlogIndex() {
    return (
        <main className="min-h-screen bg-slate-50 pt-24">
            <div className="container mx-auto px-4 py-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Latest Outage Reports</h1>
                    <p className="text-xl text-slate-600">
                        Stay informed about the status of your favorite services. Real-time updates and troubleshooting guides.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
                    {ARTICLES.map((article, i) => (
                        <Link key={i} href={`/blog/${article.slug}`} className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col h-full">
                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
                                    {article.category}
                                </span>
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                                {article.title}
                            </h2>
                            <p className="text-slate-600 mb-6 flex-grow">
                                {article.excerpt}
                            </p>
                            <div className="flex items-center text-slate-400 text-sm font-medium pt-6 border-t border-slate-100">
                                <span>{article.date}</span>
                                <span className="mx-auto"></span>
                                <span className="group-hover:translate-x-1 transition-transform">Read Report &rarr;</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
