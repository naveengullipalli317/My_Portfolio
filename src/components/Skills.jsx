import React from 'react';

const Skills = ({ searchQuery = "", viewMode = "grid" }) => {
    const categories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "JavaScript (ES6+)", val: 95, color: "bg-[#F7DF1E]" },
                { name: "TypeScript", val: 90, color: "bg-[#3178C6]" },
                { name: "SQL", val: 85, color: "bg-[#4479A1]" },
                { name: "GraphQL", val: 80, color: "bg-[#E10098]" }
            ]
        },
        {
            title: "Backend Development",
            skills: [
                { name: "Node.js", val: 95, color: "bg-[#339933]" },
                { name: "Express", val: 95, color: "bg-[#000000]" },
                { name: "RESTful API Design", val: 95, color: "bg-[#5856D6]" },
                { name: "Xano", val: 90, color: "bg-[#007AFF]" },
                { name: "Microservices Architecture", val: 90, color: "bg-[#AF52DE]" }
            ]
        },
        {
            title: "Database Management",
            skills: [
                { name: "MongoDB", val: 95, color: "bg-[#47A248]" },
                { name: "PostgreSQL", val: 85, color: "bg-[#4169E1]" },
                { name: "MySQL", val: 85, color: "bg-[#4479A1]" }
            ]
        },
        {
            title: "Cloud Computing & DevOps",
            skills: [
                { name: "AWS Lambda", val: 90, color: "bg-[#FF9900]" },
                { name: "AWS ECR", val: 90, color: "bg-[#FF9900]" },
                { name: "AWS Cognito", val: 85, color: "bg-[#FF9900]" },
                { name: "EC2", val: 85, color: "bg-[#FF9900]" },
                { name: "S3", val: 90, color: "bg-[#FF9900]" },
                { name: "Docker", val: 85, color: "bg-[#2496ED]" }
            ]
        },
        {
            title: "AI & Machine Learning",
            skills: [
                { name: "LLMs Integration", val: 95, color: "bg-[#FF9500]" },
                { name: "YOLO v3 for Image Object Detection", val: 90, color: "bg-[#FF3B30]" },
                { name: "Pre-trained ML Models Deployment", val: 85, color: "bg-[#FFCC00]" }
            ]
        },
        {
            title: "Frontend Development",
            skills: [
                { name: "Vue.js", val: 90, color: "bg-[#42B883]" },
                { name: "React", val: 90, color: "bg-[#61DAFB]" },
                { name: "HTML", val: 95, color: "bg-[#E34F26]" },
                { name: "CSS", val: 95, color: "bg-[#1572B6]" },
                { name: "Bootstrap", val: 90, color: "bg-[#7952B3]" },
                { name: "Bubble", val: 85, color: "bg-[#000000]" }
            ]
        },
        {
            title: "Software Architecture",
            skills: [
                { name: "Scalable API design", val: 95, color: "bg-[#007AFF]" },
                { name: "Cloud-based processing", val: 90, color: "bg-[#5856D6]" },
                { name: "Serverless computing", val: 95, color: "bg-[#AF52DE]" }
            ]
        },
        {
            title: "Workflow & Portfolio Tools",
            skills: [
                { name: "Bitbucket", val: 95, color: "bg-[#24292E]" },
                { name: "GitHub", val: 95, color: "bg-[#24292E]" },
                { name: "Slack", val: 90, color: "bg-[#4A154B]" },
                { name: "ClickUp", val: 90, color: "bg-[#4A154B]" },
                { name: "Jira", val: 90, color: "bg-[#4A154B]" },
                { name: "ZOHO", val: 85, color: "bg-[#4A154B]" },
                { name: "Swagger (API Documentation)", val: 90, color: "bg-[#85EA2D]" }
            ]
        }
    ];

    const filteredCategories = categories.map(cat => ({
        ...cat,
        skills: cat.skills.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
    })).filter(cat => cat.skills.length > 0);

    return (
        <div className="space-y-8 p-2 animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-y-auto max-h-full custom-scrollbar">
            <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 max-w-2xl mx-auto'}`}>
                {filteredCategories.map(cat => (
                    <div key={cat.title} className="p-6 bg-white/30 backdrop-blur-md rounded-[24px] border border-white/40 shadow-sm hover:bg-white/50 transition-colors">
                        <h3 className="text-[10px] font-black text-[#86868b] uppercase tracking-[0.2em] mb-4 pl-1">{cat.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {cat.skills.map(s => (
                                <div 
                                    key={s.name} 
                                    className={`px-3 py-1.5 rounded-xl border border-white/40 bg-white/40 text-[12px] font-black text-[#1d1d1f] shadow-sm hover:scale-105 active:scale-95 transition-all cursor-default flex items-center gap-2 group`}
                                >
                                    <div className={`w-1.5 h-1.5 rounded-full ${s.color} shadow-[0_0_8px_rgba(0,0,0,0.1)]`} />
                                    {s.name}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {filteredCategories.length === 0 && (
                <div className="py-20 flex flex-col items-center justify-center text-center opacity-40 font-bold text-sm w-full">
                    No skills found for "{searchQuery}"
                </div>
            )}
        </div>
    );
};

export default Skills;
