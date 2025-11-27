import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Is It Down For Everyone? - Real-time Server Status & Website Monitoring',
    template: '%s | Is It Down For Everyone?'
  },
  description: 'Check if a website is down for everyone or just you. Real-time server status checker, outage reports, and instant ping tests for popular services like AWS, Facebook, YouTube, and more.',
  keywords: [
    'is it down',
    'is it down right now',
    'is it down or just me',
    'website down',
    'server status checker',
    'check website if it is down',
    'facebook is it down',
    'youtube is it down',
    'amazon is it down',
    'google down',
    'instagram down',
    'discord down',
    'twitter down',
    'netflix down',
    'roblox down',
    'fortnite down',
    'minecraft server list',
    'check website availability',
    'ping tool',
    'server monitor',
    'is it down for everyone or just me',
    'website outage checker',
    'internet outage',
    'network status'
  ],
  openGraph: {
    title: 'Is It Down For Everyone? - Server Status Checker',
    description: 'Check if a website is down for everyone or just you. Real-time outage reports and server monitoring.',
    type: 'website',
    siteName: 'Is It Down For Everyone?',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is It Down For Everyone? - Website Status Checker',
    description: 'Real-time server status checker. Check if your favorite site is down for everyone or just you.',
  },
  verification: {
    google: 'google-site-verification-placeholder', // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5259881996486611"
          crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
