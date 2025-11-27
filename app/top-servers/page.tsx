import type { Metadata } from 'next';
import TopServersClient from './TopServersClient';

export const metadata: Metadata = {
    title: 'Top Rated Servers - Minecraft, Gaming & Development Server List',
    description: 'Explore our curated list of top-rated servers for Minecraft, Roblox, Gaming, and Development. Real-time uptime monitoring and popularity rankings.',
    keywords: ['minecraft server list', 'top minecraft servers', 'gaming servers', 'roblox status', 'github status', 'server list', 'best minecraft servers'],
};

export default function TopServers() {
    return <TopServersClient />;
}
