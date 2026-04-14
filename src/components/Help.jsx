import React from 'react';
import { HelpCircle, Terminal, User, Briefcase, Mail } from 'lucide-react';

const Help = ({ searchQuery = "", viewMode = "grid" }) => {
    const allSections = [
        {
            title: "Navigation",
            icon: <Terminal className="w-5 h-5 text-blue-500" />,
            content: "Use the top menu bar to navigate between sections or use the 'Go' menu for quick access."
        },
        {
            title: "Themes",
            icon: <HelpCircle className="w-5 h-5 text-purple-500" />,
            content: "Switch between different visual styles (Sequoia, Sunset, etc.) using the Control Center icon in the status bar."
        },
        {
            title: "Interactive Windows",
            icon: <User className="w-5 h-5 text-green-500" />,
            content: "Windows can be moved, minimized to the dock, or expanded to full screen using the colored buttons in the top left corner."
        },
        {
            title: "Search & Power",
            icon: <Briefcase className="w-5 h-5 text-orange-500" />,
            content: "Click the time/search icon to find content quickly, or use the Apple menu to shut down the portfolio."
        }
    ];

    const filteredSections = allSections.filter(section =>
        section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex flex-col h-full bg-white/5 backdrop-blur-md p-6 overflow-y-auto custom-scrollbar">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <HelpCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                    <h1 className="text-2xl font-black text-gray-800 tracking-tight">Portfolio Help</h1>
                    <p className="text-gray-500 font-medium tracking-tight">Learn how to explore this OS</p>
                </div>
            </div>

            <div className={`grid gap-4 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                {filteredSections.map((section, idx) => (
                    <div key={idx} className="p-4 bg-white/40 border border-white/40 rounded-2xl hover:bg-white/60 transition-colors shadow-sm animate-in zoom-in-95 duration-200">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-white/50 rounded-xl flex items-center justify-center shadow-sm">
                                {section.icon}
                            </div>
                            <h3 className="font-bold text-gray-800 tracking-tight">{section.title}</h3>
                        </div>
                        <p className="text-[13px] text-gray-600 leading-relaxed font-black tracking-tight opacity-70">
                            {section.content}
                        </p>
                    </div>
                ))}
                {filteredSections.length === 0 && (
                    <div className="col-span-full py-10 text-center opacity-40">
                        <HelpCircle className="w-10 h-10 mx-auto mb-2" />
                        <p className="font-bold">No results found for "{searchQuery}"</p>
                    </div>
                )}
            </div>

            <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-black text-blue-900 tracking-tight opacity-80">Still have questions?</span>
                </div>
                <a
                    href="mailto:anvitha.samineni9@gmail.com"
                    className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-black hover:bg-blue-700 transition-all shadow-lg active:scale-95"
                >
                    Email Me
                </a>
            </div>
        </div>
    );
};

export default Help;
