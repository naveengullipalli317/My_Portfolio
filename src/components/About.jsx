import React from 'react';
import { Star } from 'lucide-react';

const About = ({ searchQuery = "", viewMode = "list" }) => {

    return (
        <div className="space-y-4">
            <div className="flex flex-col md:flex-row items-center gap-5 p-5 bg-white/30 backdrop-blur-md rounded-[32px] border border-white/40 shadow-inner">
                <div className="w-20 h-20 shrink-0 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/30 animate-pulse-slow bg-gradient-to-br from-[#007AFF] to-[#AF52DE]">
                    <img src="/profile.jpg" alt="Naveen Gullipalli" className="w-full h-full object-cover" />
                </div>
                <div className="text-center md:text-left flex-1 min-w-0">
                    <h1 className="text-3xl font-extrabold tracking-tight text-[#1d1d1f]">Naveen Gullipalli</h1>
                    <p className="text-[#86868b] font-medium text-lg mt-0.5">Lead Software Engineer – Backend, AI & Cloud Systems</p>
                </div>
            </div>

            <div className="p-5 bg-white/50 rounded-3xl border border-white/40 shadow-sm hover:bg-white/70 transition-colors">
                <h3 className="text-[10px] font-black text-[#86868b] uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#FFCC00]" /> Profile Summary
                </h3>
                <div className="space-y-2.5">
                    <div className="flex gap-2.5 items-start">
                        <div className="w-1 h-1 rounded-full bg-[#FFCC00] mt-2 shrink-0" />
                        <p className="text-[13px] leading-relaxed text-[#1d1d1f] font-medium">Software Developer with 4+ years of experience in backend and full-stack development. Skilled in JavaScript, Node.js, Express, MongoDB, AWS, and no-code platforms (Xano, Bubble, Flutterflow).</p>
                    </div>
                    <div className="flex gap-2.5 items-start">
                        <div className="w-1 h-1 rounded-full bg-[#FFCC00] mt-2 shrink-0" />
                        <p className="text-[13px] leading-relaxed text-[#1d1d1f] font-medium">Experienced in building scalable REST APIs, serverless applications, and deploying ML models. Strong in cloud computing, AI integrations, and Agile (Scrum) workflows to deliver efficient, modern solutions.</p>
                    </div>
                </div>

                <div className="mt-6 flex justify-center md:justify-start">
                    <a
                        href="/Naveen-Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-2.5 bg-white/40 hover:bg-white/60 backdrop-blur-md border border-white/40 rounded-full text-[13px] font-black text-[#1d1d1f] transition-all active:scale-[0.98] shadow-sm group"
                    >
                        View Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
