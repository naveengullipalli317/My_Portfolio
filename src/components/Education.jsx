import React from 'react';
import { Monitor, Award } from 'lucide-react';

const Education = ({ searchQuery = "", viewMode = "list" }) => {
    const educationData = [
        {
            org: "Otto-Von-Guericke-Universität",
            degree: "Master of Science - Digital Engineering",
            detail: "Grade: 2.5",
            period: "2023",
            location: "Magdeburg, Germany",
            color: "text-[#007AFF]",
            border: "border-[#007AFF]"
        }
    ];

    const certificationData = [
        {
            org: "FWAI - Freedom with AI Masterclass",
            degree: "AI fundamentals and prompt engineering using ChatGPT",
            detail: "Understanding AI Fundamentals & Model Processing",
            period: "2024",
            color: "text-[#AF52DE]",
            border: "border-[#AF52DE]"
        },
        {
            org: "AWS Skill Builder",
            degree: "Introduction to Containers",
            detail: "Docker Fundamentals & Containerization",
            period: "2022",
            color: "text-[#FF9500]",
            border: "border-[#FF9500]"
        },
        {
            org: "Codecademy",
            degree: "Python 3",
            detail: "Modular Programming & Data Structures",
            period: "2022",
            color: "text-[#34C759]",
            border: "border-[#34C759]"
        },
        {
            org: "Udemy",
            degree: "Angular & NodeJS - The MEAN Stack Guide",
            detail: "Full-Stack Development & REST API Design",
            period: "2021",
            color: "text-[#FF2D55]",
            border: "border-[#FF2D55]"
        }
    ];

    const filterItems = (items) => items.filter(item =>
        item.org.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.degree.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.detail.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredEducation = filterItems(educationData);
    const filteredCertifications = filterItems(certificationData);

    const renderSection = (title, items, iconColor, Icon) => (
        <div className="mb-12 last:mb-0">
            <h3 className="text-[10px] font-black text-[#86868b] uppercase tracking-widest mb-8 flex items-center gap-2">
                <Icon className={`w-4 h-4 ${iconColor}`} /> {title}
            </h3>
            <div className={`space-y-0 ml-6 ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-8' : ''}`}>
                {items.map((item, i) => (
                    <div key={i} className={`relative border-l-2 ${item.border} pl-10 pb-12 last:pb-0 ${viewMode === 'grid' ? 'bg-white/40 p-8 rounded-[32px] border-2 border-l-8' : ''}`}>
                        <div className="flex-1 min-w-0 pt-0.5">
                            <div className="flex justify-between items-start mb-1">
                                <span className={`text-[10px] font-black uppercase tracking-widest opacity-40`}>{item.period} {item.location ? `| ${item.location}` : ''}</span>
                            </div>
                            <div className="text-[17px] font-black text-[#1d1d1f] tracking-tight leading-tight mb-1">{item.org}</div>
                            <div className="text-[14px] font-bold text-[#424245] opacity-80">{item.degree}</div>
                            <div className={`text-[12px] font-black ${item.color} mt-4 inline-block px-3 py-1 rounded-full bg-current/5 border border-current/10 shadow-sm`}>{item.detail}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className={`p-6 bg-white/50 rounded-3xl border border-white/40 shadow-sm transition-colors animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-y-auto max-h-full custom-scrollbar`}>
            {renderSection("Education History", filteredEducation, "text-[#007AFF]", Monitor)}
            {filteredCertifications.length > 0 && (
                <>
                    <div className="h-[1px] bg-black/5 my-12 mx-[-24px]" />
                    {renderSection("Certifications", filteredCertifications, "text-[#AF52DE]", Award)}
                </>
            )}
            {filteredEducation.length === 0 && filteredCertifications.length === 0 && (
                <div className="py-20 text-center opacity-40 font-bold text-xs">
                    No results for "{searchQuery}"
                </div>
            )}
        </div>
    );
};

export default Education;
