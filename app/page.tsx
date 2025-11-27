'use client';

import React, { useState, useEffect } from 'react';
import { FaSearch, FaCheckCircle, FaExclamationTriangle, FaServer, FaBolt, FaShieldAlt } from 'react-icons/fa';
import ServerCard from '@/components/ServerCard';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState<'idle' | 'checking' | 'up' | 'down' | 'error'>('idle');
  const [result, setResult] = useState<any>(null);
  const [popularServers, setPopularServers] = useState([
    { name: 'YouTube', url: 'youtube.com', status: 'checking' as const },
    { name: 'Facebook', url: 'facebook.com', status: 'checking' as const },
    { name: 'Amazon', url: 'amazon.com', status: 'checking' as const },
    { name: 'AWS', url: 'aws.amazon.com', status: 'checking' as const },
    { name: 'Google', url: 'google.com', status: 'checking' as const },
    { name: 'Instagram', url: 'instagram.com', status: 'checking' as const },
    { name: 'Discord', url: 'discord.com', status: 'checking' as const },
    { name: 'Netflix', url: 'netflix.com', status: 'checking' as const },
    { name: 'Roblox', url: 'roblox.com', status: 'checking' as const },
  ]);

  const checkServer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setStatus('checking');
    setResult(null);

    try {
      const res = await fetch('/api/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      setResult(data);
      setStatus(data.status === 'up' ? 'up' : 'down');
    } catch (error) {
      setStatus('error');
    }
  };

  useEffect(() => {
    const checkPopular = async () => {
      const updatedServers = await Promise.all(
        popularServers.map(async (server) => {
          try {
            const res = await fetch('/api/check', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ url: server.url }),
            });
            const data = await res.json();
            return { ...server, status: data.status === 'up' ? 'up' : 'down', latency: data.latency };
          } catch {
            return { ...server, status: 'unknown' };
          }
        })
      );
      // @ts-ignore
      setPopularServers(updatedServers);
    };
    checkPopular();
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'Is It Down For Everyone? - Server Status Checker',
        url: 'https://isitdownforeveryone.site',
        description: 'Check if a website is down for everyone or just you. Real-time server status monitoring and outage reports.',
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        featureList: ['Server Status Checker', 'Website Monitoring', 'Ping Test'],
      },
      {
        '@type': 'WebSite',
        name: 'Is It Down For Everyone?',
        url: 'https://isitdownforeveryone.site',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://isitdownforeveryone.site/?url={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      }
    ]
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Decorative Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 py-16 relative z-10">

        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto mb-24">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-medium mb-8 animate-fade-in">
            <span className="flex h-2.5 w-2.5 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
            Real-time Global Availability Check
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight text-slate-900">
            Server Status Checker <br />
            <span className="text-gradient">Is it down?</span>
          </h1>

          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Instantly check the status of any website from our global edge network.
            Get precise latency metrics and downtime confirmation in milliseconds.
          </p>

          <form onSubmit={checkServer} className="relative max-w-2xl mx-auto group mb-16">
            <div className="relative flex items-center bg-white rounded-2xl p-2 shadow-xl input-modern">
              <FaSearch className="ml-5 text-slate-400 text-xl" />
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter domain (e.g., google.com)"
                className="w-full bg-transparent border-none focus:ring-0 text-slate-900 px-4 py-4 placeholder-slate-400 outline-none text-lg"
              />
              <button
                type="submit"
                disabled={status === 'checking'}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-lg shadow-blue-600/20"
              >
                {status === 'checking' ? 'Scanning...' : 'Check Status'}
              </button>
            </div>
          </form>

          {/* Result Display */}
          {status !== 'idle' && status !== 'checking' && (
            <div className="animate-slide-up">
              <div className={`inline-flex flex-col items-center p-10 rounded-3xl border shadow-2xl bg-white ${status === 'up'
                ? 'border-emerald-100 shadow-emerald-500/5'
                : 'border-rose-100 shadow-rose-500/5'
                }`}>
                {status === 'up' ? (
                  <>
                    <div className="h-20 w-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                      <FaCheckCircle className="text-5xl text-emerald-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">It's just you!</h2>
                    <p className="text-emerald-600 font-medium text-lg mb-6">{result?.url} is online and healthy.</p>

                    <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                      <div className="bg-slate-50 rounded-xl p-4 text-center border border-slate-100">
                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Latency</div>
                        <div className="text-2xl font-bold text-slate-900">{result?.latency}ms</div>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-4 text-center border border-slate-100">
                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Code</div>
                        <div className="text-2xl font-bold text-emerald-600">{result?.statusCode}</div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="h-20 w-20 bg-rose-50 rounded-full flex items-center justify-center mb-6">
                      <FaExclamationTriangle className="text-5xl text-rose-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">It's down for everyone!</h2>
                    <p className="text-rose-600 font-medium text-lg mb-6">{result?.url || url} is unreachable.</p>
                    <div className="bg-rose-50 px-4 py-2 rounded-lg border border-rose-100">
                      <span className="text-sm text-rose-700">Confirmed from 3 locations</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </section>

        {/* Ad Placeholder 1 */}
        <div className="w-full max-w-5xl mx-auto h-32 bg-slate-50 border border-slate-200 border-dashed rounded-2xl flex items-center justify-center mb-24">
          <span className="text-slate-400 font-mono text-xs uppercase tracking-widest">Advertisement Space</span>
        </div>

        {/* Popular Servers Section */}
        <section id="popular" className="max-w-6xl mx-auto mb-24">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center">
              <div className="bg-blue-50 p-3 rounded-xl mr-4 border border-blue-100">
                <FaServer className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Top Hot Servers</h2>
                <p className="text-slate-500 text-sm mt-1">Real-time status of most searched services</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-500">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-medium">Live Updates</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularServers.map((server, index) => (
              // @ts-ignore
              <ServerCard key={index} {...server} />
            ))}
          </div>
        </section>

        {/* Ad Placeholder 2 */}
        <div className="w-full max-w-5xl mx-auto h-32 bg-slate-50 border border-slate-200 border-dashed rounded-2xl flex items-center justify-center mb-24">
          <span className="text-slate-400 font-mono text-xs uppercase tracking-widest">Advertisement Space</span>
        </div>

        {/* Latest Articles Section */}
        <section className="max-w-6xl mx-auto mb-24">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Latest Outage Reports</h2>
            <Link href="/blog" className="text-blue-600 font-medium hover:underline">View All Articles</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Is AWS Down? Current Status Check', slug: 'aws-is-it-down', date: 'Today' },
              { title: 'Facebook Login Issues: Live Updates', slug: 'facebook-is-it-down', date: 'Today' },
              { title: 'YouTube Buffering? Check Server Status', slug: 'youtube-is-it-down', date: 'Today' },
            ].map((article, i) => (
              <Link key={i} href={`/blog/${article.slug}`} className="group block bg-white rounded-2xl p-6 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-xs font-bold text-blue-600 mb-3 uppercase tracking-wider">Server Status</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{article.title}</h3>
                <div className="flex items-center text-slate-500 text-sm">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>2 min read</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Features / SEO Content */}
        <section id="about" className="max-w-5xl mx-auto mb-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50">
              <div className="bg-amber-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <FaBolt className="text-2xl text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Lightning Fast Checks</h3>
              <p className="text-slate-600 leading-relaxed">
                Our distributed architecture ensures that you get the fastest possible response times.
                We ping servers from multiple edge locations to verify availability and minimize false positives.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50">
              <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <FaShieldAlt className="text-2xl text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Reliable Diagnostics</h3>
              <p className="text-slate-600 leading-relaxed">
                Don't just guess. Get detailed status codes and latency metrics.
                We help you distinguish between a local network issue and a global service outage.
              </p>
            </div>
          </div>
        </section>

        {/* SEO Content & Trusted Resources */}
        <section className="max-w-4xl mx-auto mb-24 prose prose-slate lg:prose-lg">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Comprehensive Server & Network Tools</h2>
          <p>
            Our <strong>Server Status Checker</strong> provides real-time insights into website availability. Whether you're looking for a
            <strong>Minecraft Server List</strong> to find the best gaming communities, we have you covered.
          </p>
          <p>
            We use advanced monitoring nodes to ensure accurate results. If you are experiencing connectivity issues, our tool helps verify
            if the problem is local or global.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Trusted Resources</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
            <li>
              <a href="https://www.iana.org/domains/root/db" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-colors group">
                <span className="font-semibold text-slate-700 group-hover:text-blue-600">IANA Root Zone Database</span>
              </a>
            </li>
            <li>
              <a href="https://www.minecraft.net/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-colors group">
                <span className="font-semibold text-slate-700 group-hover:text-blue-600">Official Minecraft Site</span>
              </a>
            </li>
            <li>
              <a href="https://www.cloudflare.com/learning/dns/what-is-dns/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-colors group">
                <span className="font-semibold text-slate-700 group-hover:text-blue-600">Cloudflare DNS Learning</span>
              </a>
            </li>
            <li>
              <a href="https://developers.google.com/speed/public-dns" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-colors group">
                <span className="font-semibold text-slate-700 group-hover:text-blue-600">Google Public DNS</span>
              </a>
            </li>
          </ul>
        </section>

        {/* Ad Placeholder 2 */}
        <div className="w-full max-w-5xl mx-auto h-32 bg-slate-50 border border-slate-200 border-dashed rounded-2xl flex items-center justify-center mb-12">
          <span className="text-slate-400 font-mono text-xs uppercase tracking-widest">Advertisement Space</span>
        </div>

      </div >
      <Footer />
    </main >
  );
}
