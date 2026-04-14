import React from 'react';
import { History, Briefcase } from 'lucide-react';

const Experience = ({ searchQuery = "", viewMode = "list" }) => {
    const experiences = [
        {
            role: "Sr. Software Developer",
            org: "Employer - Hiringhood",
            type: "Full-time",
            period: "May 2023 - April 2025",
            location: "Hyderabad",
            color: "text-[#007AFF]",
            bg: "bg-[#007AFF]/10",
            desc: "Architected end-to-end HR solutions, designed and developed Smart Recruiter Applications (Resume Parser, WaterMarker, Recruiter Co-Pilot), integrated LLMs for automation, led scalable backend development, and mentored a team of 6 developers."
        },
        {
            role: "Software developer",
            org: "Employer - Must Anlaytics GmbH",
            type: "Full-time",
            period: "May 2022 - May 2023",
            location: "Berlin, Germany",
            color: "text-[#AF52DE]",
            bg: "bg-[#AF52DE]/10",
            desc: "Developed full-stack web applications for image object detection using Vue.js and Node.js. Researched and deployed Deep Learning models (YOLO v3) on AWS and implemented scalable ML processing via AWS Lambda and Docker."
        },
        {
            role: "Associate Developer",
            org: "Employer - Lodgit Desk Hotel software",
            type: "Full-time",
            period: "Feb 2021 - March 2022",
            location: "Leipzig, Germany",
            color: "text-[#34C759]",
            bg: "bg-[#34C759]/10",
            desc: "Researched and analyzed automated locking mechanisms for hotels. Developed automated check-in systems and optimized communication protocols (Bluetooth, Wi-Fi, NFC, ZigBee) for mobile-to-front-desk connectivity."
        },
        {
            role: "Teaching Assistant",
            org: "Employer - Otto-Von-Guericke-Universität",
            type: "Part-time",
            period: "April 2018 - June 2019",
            location: "Magdeburg, Germany",
            color: "text-[#FF9500]",
            bg: "bg-[#FF9500]/10",
            desc: "Conducted hands-on training in SQL and MySQL, guiding students in database management and query optimization. Led weekly exercise classes for 30 students and provided structured mentorship on core database concepts."
        }
    ];

    const filtered = experiences.filter(exp =>
        exp.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.org.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className={`animate-in fade-in slide-in-from-bottom-4 duration-500 ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-6'}`}>
            {filtered.map((exp, i) => (
                <div key={i} className={`group flex gap-6 p-6 bg-white/40 backdrop-blur-md rounded-[32px] border border-white/40 hover:bg-white/70 transition-all shadow-sm ${viewMode === 'grid' ? 'flex-col items-center text-center' : 'flex-row'}`}>
                    <div className={`w-16 h-16 shrink-0 rounded-[22px] overflow-hidden flex items-center justify-center shadow-xl border-4 border-white bg-white transition-transform duration-300 group-hover:scale-110`}>
                        <div className={`w-full h-full rounded-[16px] ${exp.bg} flex items-center justify-center ${exp.color}`}>
                            <Briefcase className="w-7 h-7" />
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className={`mb-1 ${viewMode === 'grid' ? 'flex flex-col items-center gap-2' : ''}`}>
                            <span className={`text-[10px] font-black uppercase tracking-widest opacity-40 mb-1 block`}>{exp.period} | {exp.location}</span>
                            <div className="flex justify-between items-start w-full">
                                <h4 className="text-[15px] font-black text-[#1d1d1f] tracking-tight">{exp.role}</h4>
                                <span className={`text-[10px] font-black px-2.5 py-1 rounded-full ${exp.bg} ${exp.color} border border-current/10 shadow-sm`}>{exp.type}</span>
                            </div>
                        </div>
                        <div className="text-[13px] font-bold text-[#424245] leading-tight opacity-80">{exp.org}</div>
                        <p className="text-[12px] text-[#86868b] mt-3 leading-relaxed font-medium tracking-tight">{exp.desc}</p>
                    </div>
                </div>
            ))}
            {filtered.length === 0 && (
                <div className="py-20 flex flex-col items-center justify-center text-center opacity-40 font-bold text-sm w-full col-span-full">
                    <History className="w-12 h-12 mb-4 opacity-20" />
                    No results found for "{searchQuery}"
                </div>
            )}
        </div>
    );
};

export default Experience;
