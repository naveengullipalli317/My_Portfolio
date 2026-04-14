import React from 'react';
import { Mail, Linkedin, Github, Phone, ChevronRight } from 'lucide-react';

const AppleMailIcon = ({ className }) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g filter="url(#envelopeShadow)">
            <rect x="10" y="18" width="44" height="28" rx="4" fill="white" />
            <path d="M10 20L30.1511 34.2571C31.2671 35.0476 32.7329 35.0476 33.8489 34.2571L54 20" stroke="#007AFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 44L23 33" stroke="#007AFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M54 44L41 33" stroke="#007AFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <filter id="envelopeShadow" x="0" y="10" width="64" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1" result="shape" />
            </filter>
        </defs>
    </svg>
);

const Contact = ({ searchQuery = "", viewMode = "list" }) => {
    const contacts = [
        { label: "Phone", icon: <Phone className="w-4 h-4" />, bg: "bg-[#34C759]", link: "tel:+918125290192", external: false },
        { label: "Email", icon: <Mail className="w-4 h-4" />, bg: "bg-[#007AFF]", link: "mailto:naveen.gullipalli29@gmail.com", external: false },
        { label: "LinkedIn", icon: <Linkedin className="w-4 h-4" />, bg: "bg-[#0077B5]", link: "https://www.linkedin.com/in/naveen-gullipalli/", external: true },
        { label: "GitHub", icon: <Github className="w-4 h-4" />, bg: "bg-[#1d1d1f]", link: "https://github.com/naveengullipalli", external: true }
    ];

    const filtered = contacts.filter(c =>
        c.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className={`max-w-2xl mx-auto py-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-500`}>
            {viewMode === 'list' && (
                <div className="w-20 h-20 bg-gradient-to-br from-[#007AFF] to-[#00C6FF] rounded-[24px] flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-[#007AFF]/30 animate-float">
                    <AppleMailIcon className="w-12 h-12" />
                </div>
            )}
            <h2 className="text-2xl font-black text-[#1d1d1f] mb-2 tracking-tight">Let's connect</h2>
            <p className="text-sm text-[#86868b] mb-8 font-medium">Always open for collaborations.</p>

            <div className={`grid gap-3 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 max-w-sm mx-auto'}`}>
                {filtered.map((contact, i) => (
                    <a
                        key={i}
                        href={contact.link}
                        target={contact.external ? "_blank" : undefined}
                        rel={contact.external ? "noopener noreferrer" : undefined}
                        className={`group flex items-center justify-between p-4 bg-white/60 backdrop-blur-md rounded-2xl border border-white/50 hover:bg-white transition-all shadow-sm ${viewMode === 'grid' ? 'flex-col justify-center text-center gap-4 py-8' : ''}`}
                    >
                        <div className={`flex items-center gap-3 ${viewMode === 'grid' ? 'flex-col' : ''}`}>
                            <div className={`w-10 h-10 rounded-xl ${contact.bg} flex items-center justify-center text-white shadow-md group-hover:rotate-12 transition-transform`}>
                                {contact.icon}
                            </div>
                            <span className="text-xs font-black">{contact.label}</span>
                        </div>
                        {viewMode === 'list' && <ChevronRight className="w-4 h-4 text-[#86868b] group-hover:translate-x-1 transition-transform" />}
                    </a>
                ))}
            </div>
            {filtered.length === 0 && (
                <div className="py-20 text-center opacity-40 font-bold text-sm">
                    No results for "{searchQuery}"
                </div>
            )}
        </div>
    );
};

export default Contact;
