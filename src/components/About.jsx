import React from 'react';
import { Star } from 'lucide-react';

const About = ({ searchQuery = "", viewMode = "list" }) => {
    const summaryPoints = [
        "Well-versed Software Developer with over 4+ years of professional experience specialising in backend and full-stack development. Proficient in JavaScript, Node.js, MongoDB, AWS services, and no-code platforms like Xano, bubble and Flutterflow.",
        "Skilled in building scalable REST APIs, developing serverless applications, and deploying ML models to production. Experienced in cloud computing, AI integrations, and modern web technologies, ensuring efficient and innovative solutions.",
        "Adept at working in Agile environments, applying Scrum methodologies to drive collaborative development, iterative improvements, and efficient project delivery."
    ];

    return (
        <div className="space-y-4">
            <div className="flex flex-col md:flex-row items-center gap-5 p-5 bg-white/30 backdrop-blur-md rounded-[32px] border border-white/40 shadow-inner">
                <div className="w-20 h-20 shrink-0 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/30 animate-pulse-slow bg-gradient-to-br from-[#007AFF] to-[#AF52DE]">
                    <img src="/profile.jpg" alt="Naveen Gullipalli" className="w-full h-full object-cover" />
                </div>
                <div className="text-center md:text-left flex-1 min-w-0">
                    <h1 className="text-3xl font-extrabold tracking-tight text-[#1d1d1f]">Naveen Gullipalli</h1>
                    <p className="text-[#86868b] font-medium text-lg mt-0.5">Sr. Software Developer & Architect</p>
                </div>
            </div>

            <div className="p-5 bg-white/50 rounded-3xl border border-white/40 shadow-sm hover:bg-white/70 transition-colors">
                <h3 className="text-[10px] font-black text-[#86868b] uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#FFCC00]" /> Profile Summary
                </h3>
                <div className="space-y-2.5">
                    {summaryPoints.map((point, i) => (
                        <div key={i} className="flex gap-2.5 items-start">
                            <div className="w-1 h-1 rounded-full bg-[#FFCC00] mt-2 shrink-0" />
                            <p className="text-[13px] leading-relaxed text-[#1d1d1f] font-medium">{point}</p>
                        </div>
                    ))}
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
