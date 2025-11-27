import React from 'react';
import { FaCheckCircle, FaTimesCircle, FaClock, FaQuestionCircle, FaSpinner } from 'react-icons/fa';

interface ServerCardProps {
    name: string;
    url: string;
    status: 'up' | 'down' | 'checking' | 'unknown';
    latency?: number;
}

const ServerCard: React.FC<ServerCardProps> = ({ name, url, status, latency }) => {
    return (
        <div className="glass-panel glass-panel-hover relative group overflow-hidden rounded-2xl p-5 transition-all duration-300 bg-white">
            {/* Status Border Indicator */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 transition-colors duration-300 ${status === 'up' ? 'bg-emerald-500' :
                    status === 'down' ? 'bg-rose-500' :
                        status === 'checking' ? 'bg-blue-500' :
                            'bg-slate-300'
                }`} />

            <div className="relative z-10 flex items-center justify-between pl-2">
                <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                        {name}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 group-hover:text-slate-700 transition-colors truncate max-w-[160px]">
                        {url}
                    </p>
                </div>

                <div className="flex flex-col items-end">
                    {status === 'checking' ? (
                        <div className="flex items-center space-x-2 text-blue-600">
                            <FaSpinner className="animate-spin text-lg" />
                            <span className="text-xs font-semibold uppercase tracking-wider">Checking</span>
                        </div>
                    ) : status === 'up' ? (
                        <div className="flex items-center space-x-2 text-emerald-600">
                            <div className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </div>
                            <span className="text-sm font-bold">Online</span>
                        </div>
                    ) : status === 'down' ? (
                        <div className="flex items-center space-x-2 text-rose-600">
                            <FaTimesCircle className="text-lg" />
                            <span className="text-sm font-bold">Offline</span>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-2 text-slate-400">
                            <FaQuestionCircle className="text-lg" />
                            <span className="text-sm font-medium">Unknown</span>
                        </div>
                    )}

                    {latency !== undefined && (
                        <div className={`flex items-center text-[10px] font-mono mt-2 px-2 py-0.5 rounded-full ${latency < 200 ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' :
                                latency < 500 ? 'bg-amber-50 text-amber-700 border border-amber-100' :
                                    'bg-rose-50 text-rose-700 border border-rose-100'
                            }`}>
                            <FaClock className="mr-1.5" />
                            <span>{latency}ms</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServerCard;
