import React from 'react';
import { Bot, FileSearch, Droplets, Map, Zap } from 'lucide-react';

const Projects = ({ searchQuery = "", viewMode = "grid" }) => {
    const projects = [
        {
            id: 1,
            title: "Resume WaterMarker",
            tag: "Node.js",
            tagColor: "bg-[#007AFF]/10 text-[#007AFF]",
            desc: "Designed and developed an automated tool to watermarker resumes for security, integrated into the Hiringhood HR solution.",
            icon: <Droplets className="w-6 h-6" />,
            theme: "from-[#007AFF] to-[#00C6FF]"
        },
        {
            id: 2,
            title: "Resume Parser",
            tag: "AI / Node.js",
            tagColor: "bg-[#AF52DE]/10 text-[#AF52DE]",
            desc: "Architected an intelligent algorithm to parse resumes, identify candidate capabilities, and shortlist top talent with 30% time reduction.",
            icon: <FileSearch className="w-6 h-6" />,
            theme: "from-[#AF52DE] to-[#663399]"
        },
        {
            id: 3,
            title: "Talk to Resume",
            tag: "LLM / AI",
            tagColor: "bg-[#FF9500]/10 text-[#FF9500]",
            desc: "Leveraged Large Language Models (LLMs) to enable natural language interaction with candidate profiles, optimizing screening workflows.",
            icon: <Bot className="w-6 h-6" />,
            theme: "from-[#FF9500] to-[#FFCC00]"
        },
        {
            id: 4,
            title: "Recruiter Co-Pilot",
            tag: "AI",
            tagColor: "bg-[#28C840]/10 text-[#28C840]",
            desc: "An AI-driven assistant for recruiters that enhances efficiency by 25% through automated candidate matching and role mapping.",
            icon: <Zap className="w-6 h-6" />,
            theme: "from-[#28C840] to-[#5AD866]"
        },
        {
            id: 5,
            title: "Role Mapper",
            tag: "Logic / JavaScript",
            tagColor: "bg-[#FF3B30]/10 text-[#FF3B30]",
            desc: "Developed a mapping system to match complex candidate skillsets with specific project roles accurately.",
            icon: <Map className="w-6 h-6" />,
            theme: "from-[#FF3B30] to-[#FF5F57]"
        }
    ];

    const filtered = projects.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className={`animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-y-auto max-h-full custom-scrollbar p-2 ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'space-y-4'}`}>
            {filtered.map((project) => (
                <div key={project.id} className={`group bg-white/50 backdrop-blur-md p-6 rounded-[32px] border border-white/40 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${viewMode === 'list' ? 'flex items-center gap-6' : ''}`}>
                    <div className={`w-12 h-12 shrink-0 bg-gradient-to-br ${project.theme} rounded-2xl flex items-center justify-center text-white shadow-lg ${viewMode === 'list' ? '' : 'mb-4'}`}>
                        {project.icon}
                    </div>
                    <div className="flex-1">
                        <h3 className={`font-extrabold text-[#1d1d1f] flex items-center gap-2 text-lg ${viewMode === 'grid' ? '' : 'text-base'}`}>
                            {project.title}
                            <div className={`px-2 py-0.5 ${project.tagColor} text-[9px] rounded-full uppercase font-black`}>{project.tag}</div>
                        </h3>
                        <p className={`text-xs text-[#86868b] leading-relaxed mt-2 mb-4 ${viewMode === 'list' ? 'mb-2' : ''}`}>{project.desc}</p>
                    </div>
                </div>
            ))}
            {filtered.length === 0 && (
                <div className="py-20 col-span-full flex flex-col items-center justify-center text-center opacity-40 font-bold text-sm w-full">
                    <Bot className="w-12 h-12 mb-4 opacity-20" />
                    No results found for "{searchQuery}"
                </div>
            )}
        </div>
    );
};

export default Projects;
