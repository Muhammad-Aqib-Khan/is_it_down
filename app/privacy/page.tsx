
import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Privacy() {
    return (
        <main className="min-h-screen relative overflow-hidden">
            {/* Decorative Blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-100/40 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 py-12 relative z-10">
                {/* Privacy Content */}
                <section className="max-w-4xl mx-auto mb-24">
                    <div className="text-center mb-16">
                        <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FaShieldAlt className="text-3xl text-emerald-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            We value your privacy. This policy explains how we handle your data when you use our server status checker.
                        </p>
                        <p className="text-sm text-slate-400 mt-4">Last Updated: {new Date().toLocaleDateString()}</p>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 prose prose-slate max-w-none">
                        <h3>1. Information We Collect</h3>
                        <p>
                            When you use IsItDown?, we collect minimal information necessary to provide our service. This includes:
                        </p>
                        <ul>
                            <li><strong>URLs Checked:</strong> We log the domains you check to provide real-time status updates and aggregate statistics on popular services.</li>
                            <li><strong>Usage Data:</strong> We may collect anonymous usage data (e.g., browser type, time of access) to improve our website performance.</li>
                        </ul>

                        <h3>2. How We Use Your Information</h3>
                        <p>
                            We use the information we collect for the following purposes:
                        </p>
                        <ul>
                            <li>To perform real-time server status checks requested by you.</li>
                            <li>To maintain and improve the functionality of our website.</li>
                            <li>To detect and prevent abuse of our services.</li>
                        </ul>

                        <h3>3. Cookies</h3>
                        <p>
                            We use cookies to enhance your experience. You can choose to disable cookies through your browser settings, but this may affect some features of the site.
                        </p>

                        <h3>4. Third-Party Services</h3>
                        <p>
                            We may use third-party services for analytics and advertising. These parties may access your data in accordance with their own privacy policies.
                        </p>

                        <h3>5. Data Security</h3>
                        <p>
                            We implement appropriate security measures to protect your data. However, no method of transmission over the internet is 100% secure.
                        </p>

                        <h3>6. Contact Us</h3>
                        <p>
                            If you have any questions about this Privacy Policy, please <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link>.
                        </p>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
