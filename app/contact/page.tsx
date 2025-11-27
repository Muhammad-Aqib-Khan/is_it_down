import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Contact() {
    return (
        <main className="min-h-screen relative overflow-hidden">
            {/* Decorative Blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-100/40 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 py-12 relative z-10">
                {/* Contact Content */}
                <section className="max-w-5xl mx-auto mb-24">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get in Touch</h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Have questions about our server status data or want to report an issue? We're here to help.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white p-8 rounded-2xl text-center shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaEnvelope className="text-2xl text-blue-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Email Us</h3>
                            <p className="text-slate-500 mb-4">For general inquiries and support</p>
                            <a href="mailto:khansons0543@gmail.com" className="text-blue-600 font-medium hover:underline">khansons0543@gmail.com</a>
                        </div>

                        <div className="bg-white p-8 rounded-2xl text-center shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform">
                            <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaPhone className="text-2xl text-violet-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Call Us</h3>
                            <p className="text-slate-500 mb-4">Mon-Fri from 9am to 6pm EST</p>
                            <a href="tel:+15551234567" className="text-violet-600 font-medium hover:underline">+1 (555) 123-4567</a>
                        </div>

                        <div className="bg-white p-8 rounded-2xl text-center shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform">
                            <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaMapMarkerAlt className="text-2xl text-rose-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Visit Us</h3>
                            <p className="text-slate-500 mb-4">Our global headquarters</p>
                            <span className="text-rose-600 font-medium block">123 Tech Plaza, New York, NY</span>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl max-w-3xl mx-auto shadow-xl shadow-slate-200/50 border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                                <input type="text" id="subject" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="How can we help?" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Tell us more about your inquiry..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                                Send Message
                            </button>
                        </form>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
