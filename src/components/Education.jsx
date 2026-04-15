import React from 'react';
import { Monitor, Award } from 'lucide-react';

const Education = ({ searchQuery = "", viewMode = "list" }) => {
    const educationData = [
        {
            org: "Otto-Von-Guericke-Universität, Magdeburg, Germany",
            degree: "Master of Science in Digital Engineering (Computer Science)",
            detail: "Grade: 2.5",
            period: "2023",
            location: "Germany",
            color: "text-[#007AFF]",
            border: "border-[#007AFF]",
            points: [
                "Database Concepts",
                "Database Management Systems",
                "Transaction Processing",
                "Data Management & Engineering Applications",
                "Advanced Topics in Machine Learning"
            ]
        }
    ];

    const certificationData = [
        {
            org: "FWAI - Freedom with AI Masterclass",
            degree: "AI fundamentals and prompt engineering using ChatGPT",
            period: "2024",
            color: "text-[#AF52DE]",
            border: "border-[#AF52DE]",
            points: [
                "Understanding AI Fundamentals – Supports work with AI-powered tools like Resume WaterMarker, Resume Parser, and Recruiter Co-Pilot, ensuring effective model deployment and fine-tuning."
            ]
        },
        {
            org: "AWS Skill Builder",
            degree: "Introduction to Containers",
            period: "2022",
            color: "text-[#FF9500]",
            border: "border-[#FF9500]",
            points: [
                "Containerization Expertise – Strengthens the ability to compare Containers vs VMs, optimizing resource utilization in cloud environments.",
                "Docker Fundamentals – Equips with the core principles of Docker, enhancing the ability to containerize applications for scalability, portability, and efficient deployment."
            ]
        },
        {
            org: "Codecademy",
            degree: "Python 3",
            period: "2022",
            color: "text-[#34C759]",
            border: "border-[#34C759]",
            points: [
                "Core Python Proficiency – Builds a strong foundation in Python programming, applicable in web development, automation, and AI-driven applications.",
                "Functions & Modular Programming – Improves the ability to write efficient, reusable code, optimizing project scalability and maintainability.",
                "Data Structures & Dictionaries – Enables effective data handling, crucial for backend development, API interactions, and database management."
            ]
        },
        {
            org: "Udemy",
            degree: "Angular & NodeJS - The MEAN Stack Guide",
            period: "2021",
            color: "text-[#FF2D55]",
            border: "border-[#FF2D55]",
            points: [
                "Full-Stack Development Mastery – Covers the complete MEAN (MongoDB, Express, Angular, Node.js) stack, enabling the development of dynamic, scalable web applications.",
                "Frontend & Backend Integration – Provides hands-on experience in connecting Angular-powered frontends with Node.js/Express backends, ensuring seamless API interactions.",
                "Database Management & Optimization – Strengthens skills in MongoDB, enabling efficient data storage, retrieval, and performance optimization for real-world applications.",
                "RESTful API Design – Teaches best practices in backend development, authentication (JWT/OAuth), and CRUD operations, ensuring secure and modular code."
            ]
        }
    ];

    const filterItems = (items) => items.filter(item =>
        item.org.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.degree.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.detail && item.detail.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.points && item.points.some(p => p.toLowerCase().includes(searchQuery.toLowerCase())))
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
                            <div className="text-[14px] font-bold text-[#424245] opacity-80 mb-2">{item.degree}</div>
                            
                            {item.detail && (
                                <div className={`text-[12px] font-black ${item.color} mt-4 inline-block px-3 py-1 rounded-full bg-current/5 border border-current/10 shadow-sm`}>
                                    {item.detail}
                                </div>
                            )}

                            {item.points && (
                                <ul className="mt-4 space-y-2">
                                    {item.points.map((point, idx) => (
                                        <li key={idx} className="flex gap-2 text-[12px] text-[#86868b] leading-relaxed font-medium">
                                            <span className={`shrink-0 w-1.5 h-1.5 rounded-full mt-1.5 ${item.color.replace('text-', 'bg-')}`} />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            )}
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
