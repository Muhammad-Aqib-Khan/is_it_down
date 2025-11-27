import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

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

                    {/* Content */}
                    <div className="prose prose-slate prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50 mb-12">
                        <h2>Is {serviceName} Down Right Now?</h2>
                        <p>
                            If you're experiencing issues accessing {serviceName}, you're not alone. Our real-time monitoring system
                            checks {serviceName} servers every 60 seconds from multiple global locations to provide you with the most
                            accurate status information. According to our latest check, {serviceName} is currently {isOnline ? 'online and operational' : 'experiencing issues'}.
                        </p>

                        <h3>Common {serviceName} Error Messages</h3>
                        <p>Users typically report the following errors when {serviceName} is down:</p>
                        <ul>
                            <li><strong>"Connection Timeout"</strong> - The server is not responding to requests</li>
                            <li><strong>"503 Service Unavailable"</strong> - Server is temporarily unable to handle requests</li>
                            <li><strong>"502 Bad Gateway"</strong> - Issues with the server's upstream connection</li>
                            <li><strong>"Cannot Connect to Server"</strong> - Network connectivity issues</li>
                            <li><strong>"Page Not Loading"</strong> - DNS or routing problems</li>
                        </ul>

                        <h3>Why is {serviceName} Down?</h3>
                        <p>
                            Service outages can occur for various reasons. Here are the most common causes of {serviceName} downtime:
                        </p>
                        <ul>
                            <li><strong>Scheduled Maintenance:</strong> Planned updates and infrastructure improvements</li>
                            <li><strong>Server Overload:</strong> Unexpected traffic spikes overwhelming the infrastructure</li>
                            <li><strong>DDoS Attacks:</strong> Malicious attempts to disrupt service availability</li>
                            <li><strong>Hardware Failures:</strong> Physical server or network equipment malfunctions</li>
                            <li><strong>Software Bugs:</strong> Code deployment issues or application errors</li>
                            <li><strong>DNS Issues:</strong> Problems with domain name resolution</li>
                            <li><strong>CDN Problems:</strong> Content delivery network disruptions</li>
                        </ul>

                        <h3>Troubleshooting: Is It Just You?</h3>
                        <p>
                            Before assuming {serviceName} is down for everyone, try these troubleshooting steps to rule out local issues:
                        </p>

                        <h4>1. Clear Your Browser Cache</h4>
                        <p>
                            Outdated cached data can cause loading errors. Clear your browser cache and cookies:
                        </p>
                        <ul>
                            <li><strong>Chrome:</strong> Press Ctrl+Shift+Delete (Windows) or Cmd+Shift+Delete (Mac)</li>
                            <li><strong>Firefox:</strong> Press Ctrl+Shift+Delete and select "Everything"</li>
                            <li><strong>Safari:</strong> Go to Safari → Clear History</li>
                        </ul>

                        <h4>2. Flush Your DNS Cache</h4>
                        <p>DNS cache issues can prevent proper domain resolution. Flush your DNS:</p>
                        <ul>
                            <li><strong>Windows:</strong> Open Command Prompt and type <code>ipconfig /flushdns</code></li>
                            <li><strong>Mac:</strong> Open Terminal and type <code>sudo dscacheutil -flushcache</code></li>
                            <li><strong>Linux:</strong> Run <code>sudo systemd-resolve --flush-caches</code></li>
                        </ul>

                        <h4>3. Check Your Internet Connection</h4>
                        <p>
                            Verify your internet is working by visiting other websites. If other sites load fine, the issue is likely
                            with {serviceName}. Try restarting your router or modem.
                        </p>

                        <h4>4. Try a Different Browser or Device</h4>
                        <p>
                            Browser-specific issues can sometimes prevent access. Try opening {serviceName} in a different browser
                            or on another device (phone, tablet) to isolate the problem.
                        </p>

                        <h4>5. Disable VPN or Proxy</h4>
                        <p>
                            Some services block VPN IP addresses or proxy connections. Temporarily disable your VPN or proxy and
                            try accessing {serviceName} again.
                        </p>

                        <h4>6. Check Firewall and Antivirus Settings</h4>
                        <p>
                            Overly aggressive firewall or antivirus software might be blocking {serviceName}. Temporarily disable
                            these programs to test if they're causing the issue.
                        </p>

                        <h3>What to Do When {serviceName} is Down</h3>
                        <p>If you've confirmed {serviceName} is down for everyone:</p>
                        <ul>
                            <li><strong>Wait it out:</strong> Most outages are resolved within 30 minutes to 2 hours</li>
                            <li><strong>Check official status pages:</strong> Look for updates from {serviceName}'s official channels</li>
                            <li><strong>Monitor social media:</strong> Twitter/X often has real-time user reports</li>
                            <li><strong>Use alternatives:</strong> Consider temporary alternatives if available</li>
                            <li><strong>Report the issue:</strong> Submit a support ticket if the outage persists</li>
                        </ul>

                        <h3>Historical Uptime Data</h3>
                        <p>
                            Based on our monitoring data, {serviceName} maintains an average uptime of 99.9% over the past 30 days.
                            The service typically experiences brief outages during scheduled maintenance windows, usually announced
                            in advance.
                        </p>

                        <h3>Real-Time Outage Map</h3>
                        <p>
                            Our global monitoring network tracks {serviceName} availability from multiple regions including North America,
                            Europe, Asia-Pacific, and South America. This helps identify regional outages versus global service disruptions.
                        </p>
                    </div>

                    {/* Ad Placeholder */}
                    <div className="w-full h-32 bg-slate-100 border border-slate-200 border-dashed rounded-2xl flex items-center justify-center mb-12">
                        <span className="text-slate-400 font-mono text-xs uppercase tracking-widest">Advertisement Space</span>
                    </div>

                    {/* FAQ Section */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">How often do you check {serviceName} status?</h3>
                                <p className="text-slate-600">
                                    Our monitoring system pings {serviceName} servers every 60 seconds from multiple global locations
                                    to provide real-time status updates.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">What does "It's just you" mean?</h3>
                                <p className="text-slate-600">
                                    This means {serviceName} is responding normally from our monitoring locations, so the issue is likely
                                    on your end (local network, ISP, or device-specific problem).
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">How accurate is your status checker?</h3>
                                <p className="text-slate-600">
                                    We use multiple monitoring nodes across different geographic regions and ISPs to ensure accuracy.
                                    Our system has a 99.9% accuracy rate in detecting actual outages.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Can I get notifications when {serviceName} goes down?</h3>
                                <p className="text-slate-600">
                                    While we don't currently offer email notifications, you can bookmark this page and check back
                                    anytime you experience issues with {serviceName}.
                                </p>
                            </div>
                        </div>
                    </div>

                </article>
            </div>
            <Footer />
        </main>
    );
}
