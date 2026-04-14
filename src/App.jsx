import React, { useState, useEffect, useMemo } from 'react';
import {
  User,
  Layers,
  Search,
  Wifi,
  BatteryFull,
  Layout,
  Cpu,
  Briefcase,
  Monitor,
  ChevronRight,
  X,
  Sliders,
  Github,
  Moon,
  Sun,
  HelpCircle,
  FileText
} from 'lucide-react';

// Import custom components
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Help from './components/Help';

// Refined high-fidelity Apple Logo SVG (Classic Monochrome)
const AppleLogo = ({ className }) => (
  <svg viewBox="0 0 170 170" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.18-14.35-3.18-4.38 0-9.31 1.05-14.77 3.18-5.48 2.12-9.73 3.25-12.75 3.41-5.14.24-10.19-1.89-15.14-6.38-3.08-2.69-7.07-7.53-11.97-14.52-5.13-7.41-9.28-16.14-12.45-26.2-3.17-10.06-4.76-20.08-4.76-30.07 0-11.19 2.3-20.94 6.9-29.25 4.59-8.31 10.87-14.93 18.81-19.86 7.95-4.93 16.71-7.4 26.31-7.4 4.16 0 9.1 1.06 14.81 3.19 5.71 2.12 9.4 3.18 11.06 3.18 1.14 0 5.48-1.28 13.01-3.85 7.54-2.57 13.52-3.72 17.96-3.45 13.24.81 23.36 5.61 30.34 14.41-11.41 6.9-17.11 16.72-17.11 29.47 0 9.69 3.43 17.84 10.29 24.44 3.29 3.17 7.15 5.64 11.59 7.41-.83 2.5-1.74 4.88-2.73 7.14zm-30.31-118.06c0 10.15-3.66 19.46-10.98 27.94-8.8 10.04-19.4 15.39-30.63 15.14-.38-10.87 3.33-20.57 11.14-29.11 4-4.35 8.91-7.86 14.73-10.53 5.82-2.67 11.1-4.04 15.82-4.12.33 1.13.5 2.22.5 3.28z" />
  </svg>
);

// High-fidelity Apple Mail Icon (iOS 7+ style)
const AppleMailIcon = ({ className }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="64" height="64" rx="14" fill="url(#mailGradient)" />
    <path d="M14 22L30.1511 34.2571C31.2671 35.0476 32.7329 35.0476 33.8489 34.2571L50 22M14 22C14 20.8954 14.8954 20 16 20H48C49.1046 20 50 20.8954 50 22V42C50 43.1046 49.1046 44 48 44H16C14.8954 44 14 43.1046 14 42V22Z" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="mailGradient" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4BBFFF" />
        <stop offset="1" stopColor="#007AFF" />
      </linearGradient>
    </defs>
  </svg>
);

// High-fidelity Terminal Icon (matching user-provided image)
const TerminalIcon = ({ className }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="64" height="64" rx="14" fill="#1c1c1e" />
    <rect x="0.5" y="0.5" width="63" height="63" rx="13.5" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
    <path d="M18 18L30 30L18 42" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="34" y="38" width="14" height="5" rx="1" fill="white" />
  </svg>
);

// High-fidelity Education Icon (matching Apple Books style)
const EducationIcon = ({ className }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="64" height="64" rx="14" fill="url(#bookGradient)" />
    <path d="M32 44C32 44 26 40 16 40V18C26 18 32 22 32 22M32 44C32 44 38 40 48 40V18C38 18 32 22 32 22M32 44V22" stroke="white" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" />
    <rect x="18" y="24" width="28" height="16" rx="2" fill="white" fillOpacity="0.15" />
    <defs>
      <linearGradient id="bookGradient" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFC857" />
        <stop offset="1" stopColor="#FF8235" />
      </linearGradient>
    </defs>
  </svg>
);

const App = () => {
  const [activeWindows, setActiveWindows] = useState(['about']);
  const [focusedWindow, setFocusedWindow] = useState('about');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [maximizedWindows, setMaximizedWindows] = useState([]);
  const [minimizedWindows, setMinimizedWindows] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState('sequoia'); // 'sequoia', 'sunset', 'mint', 'midnight'
  const [isControlCenterOpen, setIsControlCenterOpen] = useState(false);
  const [isWifiOpen, setIsWifiOpen] = useState(false);
  const [isAppleMenuOpen, setIsAppleMenuOpen] = useState(false);
  const [isBatteryOpen, setIsBatteryOpen] = useState(false);
  const [systemState, setSystemState] = useState('idle'); // 'idle', 'booting', 'shutting-down', 'off'
  const [activeMenu, setActiveMenu] = useState(null); // 'File', 'Edit', 'View', 'Go', 'Window', 'Help'
  const [isDockHidden, setIsDockHidden] = useState(false);

  const themePresets = {
    sequoia: {
      bg: "bg-black",
      blurs: [
        "bg-[#007AFF] opacity-40",
        "bg-[#AF52DE] opacity-40",
        "bg-[#FF2D55] opacity-30"
      ],
      menuColor: "text-white/90",
      menuBg: "bg-white/10"
    },
    sunset: {
      bg: "bg-[#2d1b4e]",
      blurs: [
        "bg-[#FF9500] opacity-50",
        "bg-[#FF2D55] opacity-40",
        "bg-[#5856D6] opacity-30"
      ],
      menuColor: "text-white/90",
      menuBg: "bg-white/10"
    },
    mint: {
      bg: "bg-[#1a2e2a]",
      blurs: [
        "bg-[#34C759] opacity-40",
        "bg-[#007AFF] opacity-30",
        "bg-[#5AC8FA] opacity-30"
      ],
      menuColor: "text-white/90",
      menuBg: "bg-white/10"
    },
    midnight: {
      bg: "bg-slate-950",
      blurs: [
        "bg-blue-900 opacity-20",
        "bg-indigo-900 opacity-20",
        "bg-slate-800 opacity-20"
      ],
      menuColor: "text-white/90",
      menuBg: "bg-white/5"
    }
  };

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    const handleOutsideClick = (e) => {
      if (isControlCenterOpen) setIsControlCenterOpen(false);
      if (isWifiOpen) setIsWifiOpen(false);
      if (isAppleMenuOpen) setIsAppleMenuOpen(false);
      if (isBatteryOpen) setIsBatteryOpen(false);
      setActiveMenu(null);
    };
    window.addEventListener('click', handleOutsideClick);
    return () => {
      clearInterval(timer);
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isControlCenterOpen, isWifiOpen, isAppleMenuOpen, isBatteryOpen, activeMenu]);

  const handleShutDown = () => {
    setIsAppleMenuOpen(false);
    setSystemState('shutting-down');
    setTimeout(() => {
      setSystemState('off');
    }, 1500);
  };

  const handleBoot = () => {
    setSystemState('booting');
    setTimeout(() => {
      setSystemState('idle');
    }, 3000);
  };

  const minimizeAll = () => {
    setMinimizedWindows([...activeWindows]);
    setFocusedWindow(null);
  };

  const maximizeAll = () => {
    setMaximizedWindows([...activeWindows]);
  };

  const toggleWindow = (id) => {
    if (!activeWindows.includes(id)) {
      setActiveWindows([...activeWindows, id]);
      setMinimizedWindows(minimizedWindows.filter(winId => winId !== id));
      setFocusedWindow(id);
    } else if (minimizedWindows.includes(id)) {
      setMinimizedWindows(minimizedWindows.filter(winId => winId !== id));
      setFocusedWindow(id);
    } else {
      if (focusedWindow === id) {
        toggleMinimize(id);
      } else {
        setFocusedWindow(id);
      }
    }
  };

  const toggleMinimize = (id) => {
    if (minimizedWindows.includes(id)) {
      setMinimizedWindows(minimizedWindows.filter(winId => winId !== id));
      setFocusedWindow(id);
    } else {
      setMinimizedWindows([...minimizedWindows, id]);
      if (focusedWindow === id) {
        const remaining = activeWindows.filter(winId => winId !== id && !minimizedWindows.includes(winId));
        setFocusedWindow(remaining.length > 0 ? remaining[remaining.length - 1] : null);
      }
    }
  };

  const closeWindow = (id) => {
    setActiveWindows(activeWindows.filter(winId => winId !== id));
    setMinimizedWindows(minimizedWindows.filter(winId => winId !== id));
    const remaining = activeWindows.filter(winId => winId !== id);
    if (focusedWindow === id) {
      setFocusedWindow(remaining.length > 0 ? remaining[remaining.length - 1] : null);
    }
  };

  const toggleMaximize = (id) => {
    if (maximizedWindows.includes(id)) {
      setMaximizedWindows(maximizedWindows.filter(winId => winId !== id));
    } else {
      setMaximizedWindows([...maximizedWindows, id]);
    }
  };

  const windowsMetadata = {
    about: {
      title: "About Me",
      icon: <User className="w-7 h-7" />,
      theme: "from-[#007AFF] to-[#00C6FF]",
      content: <About />,
      items: ["Naveen Gullipalli", "Lead Software Engineer", "Backend", "AI", "Cloud Systems", "Node.js", "MongoDB", "AWS", "Xano", "Agile", "Scrum"]
    },
    skills: {
      title: "Skills",
      icon: <TerminalIcon className="w-10 h-10" />,
      theme: "from-[#1d1d1f] to-[#3a3a3c]",
      content: <Skills />,
      items: ["JavaScript", "TypeScript", "Node.js", "Express", "MongoDB", "AWS Lambda", "AWS ECR", "AWS Cognito", "Docker", "Microservices", "RESTful API", "Xano", "PostgreSQL", "React", "Vue.js", "GraphQL", "Swagger", "Jira", "Bitbucket", "Serverless", "YOLO v3", "LLMs", "Machine Learning"]
    },
    projects: {
      title: "Projects",
      icon: <Layers className="w-7 h-7" />,
      theme: "from-[#FF2D55] to-[#FF375F]",
      content: <Projects />,
      items: ["Resume WaterMarker", "Resume Parser", "Talk to Resume", "Role Mapper", "Recruiter Co-Pilot", "Smart Recruiter Applications", "LLM Integration", "AI Automation"]
    },
    experience: {
      title: "Experience",
      icon: <Briefcase className="w-7 h-7" />,
      theme: "from-[#FF9500] to-[#FFCC00]",
      content: <Experience />,
      items: ["Senior Backend Engineer", "Software developer", "Associate Developer", "Teaching Assistant", "Hiringhood", "Must Analytics", "Lodgit Desk", "Otto-Von-Guericke", "Hyderabad", "Berlin", "Leipzig", "Magdeburg"]
    },
    education: {
      title: "Education",
      icon: <EducationIcon className="w-full h-full" />,
      theme: "from-[#FFC857] to-[#FF8235]",
      content: <Education />,
      items: ["Otto-Von-Guericke-Universität", "Master of Science", "Digital Engineering", "Magdeburg", "Germany", "Certifications", "FWAI", "AWS Skill Builder", "Codecademy", "Udemy", "Prompt Engineering", "Python 3", "MEAN Stack"]
    },
    contact: {
      title: "Contact",
      icon: <AppleMailIcon className="w-full h-full" />,
      theme: "from-[#4BBFFF] to-[#007AFF]",
      content: <Contact />,
      items: ["Phone", "Email", "LinkedIn", "GitHub", "Naveengullipalli317@gmail.com", "+91-8125290192"]
    },
    help: {
      title: "Portfolio Help",
      icon: <HelpCircle className="w-7 h-7" />,
      theme: "from-[#007AFF] to-[#00C6FF]",
      content: <Help />
    }
  };

  const [searchQueries, setSearchQueries] = useState({});
  const [activeSearchWindows, setActiveSearchWindows] = useState([]);
  const [viewModes, setViewModes] = useState({
    projects: 'grid',
    skills: 'grid',
    experience: 'list',
    education: 'list'
  });

  const toggleSearch = (id) => {
    if (activeSearchWindows.includes(id)) {
      setActiveSearchWindows(activeSearchWindows.filter(winId => winId !== id));
      setSearchQueries({ ...searchQueries, [id]: "" });
    } else {
      setActiveSearchWindows([...activeSearchWindows, id]);
    }
  };

  const toggleLayout = (id) => {
    setViewModes({
      ...viewModes,
      [id]: viewModes[id] === 'grid' ? 'list' : 'grid'
    });
  };

  const filteredResults = useMemo(() => {
    if (searchQuery.trim() === "") return [];
    const results = [];
    const query = searchQuery.toLowerCase();

    Object.entries(windowsMetadata).forEach(([key, win]) => {
      // Check window title
      if (win.title.toLowerCase().includes(query)) {
        results.push({
          key,
          title: win.title,
          subtitle: "Application",
          icon: win.icon,
          theme: win.theme,
          searchQuery: ""
        });
      }

      // Check items within window
      if (win.items) {
        win.items.forEach(item => {
          if (item.toLowerCase().includes(query)) {
            // Avoid adding same item multiple times
            if (!results.find(r => r.title === item)) {
              results.push({
                key,
                title: item,
                subtitle: win.title,
                icon: win.icon,
                theme: win.theme,
                searchQuery: item
              });
            }
          }
        });
      }
    });

    return results;
  }, [searchQuery, windowsMetadata]);

  return (
    <div className={`h-screen w-full overflow-hidden relative font-sans ${themePresets[theme].bg}`}>
      {/* Dynamic macOS Sequoia Mesh Wallpaper */}
      <div className="absolute inset-0 z-0 transition-colors duration-1000">
        <div className={`absolute top-[-10%] left-[-5%] w-[60%] h-[70%] rounded-full blur-[140px] animate-pulse-slow transition-colors duration-1000 ${themePresets[theme].blurs[0]}`} />
        <div className={`absolute bottom-[-5%] right-[-5%] w-[50%] h-[60%] rounded-full blur-[140px] transition-colors duration-1000 ${themePresets[theme].blurs[1]}`} />
        <div className={`absolute top-[20%] right-[10%] w-[40%] h-[50%] rounded-full blur-[140px] transition-colors duration-1000 ${themePresets[theme].blurs[2]}`} />
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[100px]" />
      </div>

      {/* Top Menu Bar */}
      <div className={`h-8 w-full backdrop-blur-[40px] border-b border-white/10 flex items-center justify-between px-5 fixed top-0 z-[100] text-[12px] font-semibold shadow-sm transition-colors duration-500 ${themePresets[theme].menuBg} ${themePresets[theme].menuColor}`}>
        <div className="flex items-center gap-5">
          <div className="relative">
            <div
              onClick={(e) => { e.stopPropagation(); setIsAppleMenuOpen(!isAppleMenuOpen); }}
              className="cursor-pointer hover:bg-white/10 px-2 py-1 rounded-md transition-all active:scale-95"
            >
              <AppleLogo className="w-4 h-4" />
            </div>
            {/* Apple Menu Dropdown */}
            {isAppleMenuOpen && (
              <div className="absolute top-8 left-0 w-[240px] bg-white/90 backdrop-blur-[50px] border border-white/40 rounded-[12px] shadow-2xl p-1 z-[200] text-[#1d1d1f] font-medium animate-in fade-in zoom-in-95 duration-150">
                <div className="px-4 py-1.5 hover:bg-black/5 rounded-md cursor-default" onClick={() => toggleWindow('about')}>About Naveen</div>
                <div className="h-[1px] bg-black/5 my-1 mx-2" />
                <div className="px-4 py-1.5 hover:bg-black/5 rounded-md cursor-default" onClick={() => toggleWindow('skills')}>Skills</div>
                <div className="px-4 py-1.5 hover:bg-black/5 rounded-md cursor-default" onClick={() => toggleWindow('projects')}>Projects</div>
                <div className="px-4 py-1.5 hover:bg-black/5 rounded-md cursor-default" onClick={() => toggleWindow('experience')}>Experience</div>
                <div className="px-4 py-1.5 hover:bg-black/5 rounded-md cursor-default" onClick={() => toggleWindow('education')}>Education</div>
                <div className="px-4 py-1.5 hover:bg-black/5 rounded-md cursor-default" onClick={() => toggleWindow('contact')}>Contact</div>
                <div className="h-[1px] bg-black/5 my-1 mx-2" />
                <div
                  className="px-4 py-1.5 hover:bg-black/5 text-[#FF3B30] rounded-md cursor-default transition-colors"
                  onClick={handleShutDown}
                >
                  Shut Down Portfolio...
                </div>
              </div>
            )}
          </div>
          <span className="cursor-default font-black px-2 py-1 hover:bg-white/10 rounded-md">Finder</span>

          {[
            {
              label: "File",
              items: [
                { label: "New Portfolio Tab", onClick: () => window.open(window.location.href, '_blank') },
                { label: "Open Section...", onClick: () => setIsSearchOpen(true) },
                { label: "Get Info", onClick: () => { toggleWindow('about'); window.open('/Naveen-Resume.pdf', '_blank'); } }
              ]
            },
            {
              label: "Edit", items: [
                { label: "Copy Bio", onClick: () => navigator.clipboard.writeText("Lead Software Engineer with 4+ years of experience in backend and full-stack development. Skilled in JavaScript, Node.js, Express, MongoDB, AWS, and no-code platforms.") },
                { label: "Copy Email", onClick: () => navigator.clipboard.writeText("Naveengullipalli317@gmail.com") },
                { label: "Copy LinkedIn URL", onClick: () => navigator.clipboard.writeText("https://www.linkedin.com/in/naveen-gullipalli/") },
                { label: "Copy GitHub URL", onClick: () => navigator.clipboard.writeText("https://github.com/naveengullipalli317") }
              ]
            },
            {
              label: "View", items: [
                {
                  label: document.fullscreenElement ? "Exit Full Screen" : "Enter Full Screen", onClick: () => {
                    if (!document.fullscreenElement) {
                      document.documentElement.requestFullscreen().catch(err => console.log(err));
                    } else {
                      document.exitFullscreen();
                    }
                  }
                },
                { label: isDockHidden ? "Show Dock" : "Hide Dock", onClick: () => setIsDockHidden(!isDockHidden) },
                { label: "Refresh Content", onClick: () => window.location.reload() }
              ]
            },
            {
              label: "Go", items: [
                { label: "Go to Projects", onClick: () => toggleWindow('projects') },
                { label: "Go to Skills", onClick: () => toggleWindow('skills') },
                { label: "Go to Experience", onClick: () => toggleWindow('experience') },
                { label: "Go to Education", onClick: () => toggleWindow('education') }
              ]
            },
            {
              label: "Window", items: [
                { label: "Minimize All", onClick: minimizeAll },
                { label: "Maximize All", onClick: maximizeAll }
              ]
            },
            {
              label: "Help", items: [
                { label: "Portfolio Help", onClick: () => toggleWindow('help') },
                { label: "Contact Developer", onClick: () => window.location.href = 'mailto:Naveengullipalli317@gmail.com' }
              ]
            }
          ].map(menu => (
            <div key={menu.label} className="relative hidden md:block">
              <span
                onClick={(e) => { e.stopPropagation(); setActiveMenu(activeMenu === menu.label ? null : menu.label); }}
                className={`cursor-default px-2 py-1 rounded-md transition-colors ${activeMenu === menu.label ? 'bg-white/20' : 'hover:bg-white/10'}`}
              >
                {menu.label}
              </span>
              {activeMenu === menu.label && (
                <div className="absolute top-8 left-0 w-[200px] bg-white/90 backdrop-blur-[50px] border border-white/40 rounded-[12px] shadow-2xl p-1 z-[200] text-[#1d1d1f] font-medium animate-in fade-in zoom-in-95 duration-150">
                  {menu.items.map((item, idx) => (
                    <React.Fragment key={idx}>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          if (item.onClick) item.onClick();
                          setActiveMenu(null);
                        }}
                        className="px-4 py-1.5 hover:bg-black/5 rounded-md cursor-default text-[13px]"
                      >
                        {item.label}
                      </div>
                      {idx === 0 && <div className="h-[1px] bg-black/5 my-1 mx-2" />}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 relative">
          <div className="flex items-center gap-3 opacity-80">
            <div className="relative">
              <Wifi
                onClick={(e) => { e.stopPropagation(); setIsWifiOpen(!isWifiOpen); }}
                className={`w-4 h-4 cursor-pointer hover:opacity-100 transition-opacity ${isWifiOpen ? 'opacity-100' : 'opacity-80'}`}
              />
              {/* Wifi Dropdown */}
              {isWifiOpen && (
                <div
                  className="absolute top-8 right-0 w-[240px] bg-white/90 backdrop-blur-[50px] border border-white/40 rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.2)] p-4 z-[1000] animate-in fade-in zoom-in-95 duration-150"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] font-black text-gray-800">Wi-Fi</span>
                      <div className="w-8 h-4 bg-[#34C759] rounded-full relative">
                        <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm" />
                      </div>
                    </div>
                    <div className="h-[1px] bg-black/5 mx-[-16px]" />
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1 text-left">Connected TO</span>
                      <div className="flex items-center gap-3 p-2 bg-[#007AFF] rounded-xl text-white shadow-md">
                        <Wifi className="w-4 h-4" />
                        <span className="text-[12px] font-bold">Naveen's iPhone</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <BatteryFull
                onClick={(e) => { e.stopPropagation(); setIsBatteryOpen(!isBatteryOpen); }}
                className="w-4 h-4 text-white fill-white cursor-pointer hover:opacity-100 transition-opacity"
              />
              {/* Battery Dropdown */}
              {isBatteryOpen && (
                <div className="absolute top-8 right-0 w-[220px] bg-white/90 backdrop-blur-[50px] border border-white/40 rounded-[20px] shadow-2xl p-4 z-[1000] animate-in fade-in zoom-in-95 duration-150 text-[#1d1d1f]">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[13px] font-black">Battery</span>
                      <span className="text-[13px] font-bold text-[#86868b]">100%</span>
                    </div>
                    <div className="text-[11px] text-[#86868b] font-medium">Power Source: Portfolio Energy</div>
                  </div>
                </div>
              )}
            </div>
            <Sliders
              onClick={(e) => { e.stopPropagation(); setIsControlCenterOpen(!isControlCenterOpen); }}
              className={`w-3.5 h-3.5 cursor-pointer hover:opacity-100 transition-opacity ${isControlCenterOpen ? 'opacity-100' : 'opacity-80'}`}
            />
          </div>

          {/* Control Center Dropdown */}
          {isControlCenterOpen && (
            <div
              className="absolute top-10 right-0 w-[320px] bg-white/90 backdrop-blur-[50px] border border-white/40 rounded-[28px] shadow-[0_30px_60px_rgba(0,0,0,0.3)] p-4 z-[1000] animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white/50 backdrop-blur-md rounded-2xl p-3 border border-white/40 shadow-sm mb-3 flex items-center gap-4 hover:bg-white/60 transition-colors">
                <div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center text-[#5856D6] shrink-0 shadow-inner">
                  <Moon className="w-5 h-5 fill-current" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-black text-[#1d1d1f]">Focus Mode</span>
                  <span className="text-[11px] text-[#86868b] font-bold">Developer Mode</span>
                </div>
              </div>

              {/* Theme Settings Section */}
              <div className="bg-white/50 backdrop-blur-md rounded-2xl p-4 border border-white/40 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 bg-black/5 rounded-full flex items-center justify-center text-[#AF52DE] shadow-inner">
                    <Sun className="w-4 h-4" />
                  </div>
                  <span className="text-[13px] font-black text-[#1d1d1f]">Appearance</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {Object.keys(themePresets).map(presetKey => (
                    <button
                      key={presetKey}
                      onClick={() => setTheme(presetKey)}
                      className={`px-3 py-2 rounded-xl text-[11px] font-black capitalize transition-all border ${theme === presetKey
                        ? 'bg-[#007AFF] text-white border-transparent shadow-md scale-[1.02]'
                        : 'bg-black/5 text-[#424245] border-white/20 hover:bg-black/10'
                        }`}
                    >
                      {presetKey}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div
            onClick={() => setIsSearchOpen(true)}
            className="bg-white/10 px-3 py-1 rounded-full border border-white/5 flex items-center gap-2 cursor-pointer hover:bg-white/20 transition-all active:scale-95"
          >
            <Search className="w-3 h-3 opacity-60" />
            <span className="font-bold">
              {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        </div>
      </div>

      {/* Spotlight Search Overlay */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-[1000] flex items-start justify-center pt-[15vh] bg-black/20 backdrop-blur-sm transition-all duration-300"
          onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }}
        >
          <div
            className="w-[90%] md:w-[600px] bg-white/80 backdrop-blur-[50px] rounded-[24px] border border-white/40 shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 flex items-center gap-4 border-b border-black/5 text-[#1d1d1f]">
              <Search className="w-8 h-8 text-[#007AFF]" />
              <input
                autoFocus
                type="text"
                placeholder="Spotlight Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-[28px] font-medium placeholder-[#86868b]"
              />
            </div>

            {searchQuery && (
              <div className="p-2 max-h-[400px] overflow-y-auto">
                {filteredResults.length > 0 ? (
                  filteredResults.map((result, idx) => (
                    <div
                      key={`${result.key}-${idx}`}
                      onClick={() => {
                        toggleWindow(result.key);
                        if (result.searchQuery) {
                          setSearchQueries({ ...searchQueries, [result.key]: result.searchQuery });
                          if (!activeSearchWindows.includes(result.key)) {
                            setActiveSearchWindows([...activeSearchWindows, result.key]);
                          }
                        }
                        setIsSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#007AFF] hover:text-white group cursor-pointer transition-all"
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${result.theme} text-white shadow-md`}>
                        {React.cloneElement(result.icon, { className: "w-5 h-5" })}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-[16px] text-inherit">{result.title}</span>
                        <span className="text-[12px] opacity-60 group-hover:opacity-100 uppercase tracking-wider font-black text-inherit">{result.subtitle}</span>
                      </div>
                      <ChevronRight className="ml-auto w-4 h-4 opacity-40 text-inherit" />
                    </div>
                  ))
                ) : (
                  <div className="p-10 text-center text-[#86868b]">
                    <p className="text-[18px] font-medium">No results for "{searchQuery}"</p>
                    <p className="text-[14px]">Try searching for About, Skills, or Projects.</p>
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      )}

      {/* Desktop Interaction Layer */}
      <div className="pt-12 pb-28 h-full w-full relative z-10 p-8 overflow-hidden">


        {/* Unified Window rendering */}
        {Object.keys(windowsMetadata).map((key) => {
          if (!activeWindows.includes(key)) return null;
          const win = windowsMetadata[key];
          const isFocused = focusedWindow === key;
          const isMaximized = maximizedWindows.includes(key);
          const isMinimized = minimizedWindows.includes(key);

          return (
            <div
              key={key}
              onClick={() => setFocusedWindow(key)}
              className={`absolute transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col bg-white/85 backdrop-blur-[60px] rounded-[32px] border border-white/40 shadow-[0_30px_90px_rgba(0,0,0,0.4)] overflow-hidden
                ${isMinimized ? 'opacity-0 scale-50 translate-y-[100%] pointer-events-none' : (isFocused ? 'z-40 opacity-100' : 'z-20 opacity-60 pointer-events-none md:pointer-events-auto')} 
                ${isMaximized ? 'w-[calc(100%-32px)] h-[calc(100%-120px)] left-4 top-12 rounded-[24px]' : 'w-[94%] left-[3%] md:w-[680px] md:left-[30%] top-[12%] rounded-[32px]'}`}
              style={{
                transform: !isMaximized ? `translate(${activeWindows.indexOf(key) * 30}px, ${activeWindows.indexOf(key) * 30}px)` : 'none',
                height: !isMaximized ? '540px' : undefined
              }}
            >
              {/* Modern Unified Toolbar */}
              <div className="h-14 flex items-center justify-between px-6 select-none shrink-0">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 mr-6">
                    <button onClick={(e) => { e.stopPropagation(); closeWindow(key); }} className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/5 flex items-center justify-center group/btn shadow-inner">
                      <X className="w-1.5 h-1.5 text-black/40 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); toggleMinimize(key); }} className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/5 flex items-center justify-center group/btn shadow-inner">
                      <div className="w-1.5 h-0.5 bg-black/40 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); toggleMaximize(key); }} className="w-3 h-3 rounded-full bg-[#28C840] border border-black/5 flex items-center justify-center group/btn shadow-inner">
                      <div className="w-1.5 h-1.5 border border-black/40 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </button>
                  </div>
                  <div className="flex items-center gap-3 text-[14px] font-black text-[#1d1d1f] tracking-tight">
                    <div className={`p-1.5 rounded-lg bg-gradient-to-br ${win.theme} text-white shadow-lg`}>
                      {React.cloneElement(win.icon, { className: "w-3.5 h-3.5" })}
                    </div>
                    {win.title}
                  </div>
                </div>
                {key !== 'about' && (
                  <div className="flex gap-5 text-[#86868b]">
                    <Search onClick={() => toggleSearch(key)} className={`w-4 h-4 cursor-pointer transition-colors ${activeSearchWindows.includes(key) ? 'text-[#007AFF]' : 'hover:text-[#007AFF]'}`} />
                    <Layout onClick={() => toggleLayout(key)} className={`w-4 h-4 cursor-pointer transition-colors ${viewModes[key] === 'grid' ? 'text-[#007AFF]' : 'hover:text-[#007AFF]'}`} />
                  </div>
                )}
              </div>

              {/* Per-Window Search Input */}
              {activeSearchWindows.includes(key) && (
                <div className="px-8 py-2 pb-4 animate-in slide-in-from-top-2 duration-300">
                  <div className="flex items-center gap-3 bg-white/50 backdrop-blur-md rounded-2xl px-4 py-3 border border-black/5 shadow-sm">
                    <Search className="w-4 h-4 opacity-40" />
                    <input
                      autoFocus
                      type="text"
                      placeholder={`Search in ${win.title}...`}
                      className="bg-transparent border-none outline-none text-[14px] w-full text-[#1d1d1f] font-medium placeholder-[#86868b]"
                      value={searchQueries[key] || ""}
                      onChange={(e) => setSearchQueries({ ...searchQueries, [key]: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {/* Content Area */}
              <div className="flex-1 overflow-y-auto px-8 pb-10 custom-scrollbar">
                {React.cloneElement(win.content, {
                  searchQuery: searchQueries[key] || "",
                  viewMode: viewModes[key] || 'list'
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Sequoia Style Dock */}
      {!isDockHidden && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] animate-in slide-in-from-bottom duration-500">
          <div className="bg-white/15 backdrop-blur-[40px] border border-white/20 rounded-[34px] p-3 flex items-center gap-3.5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
            {Object.keys(windowsMetadata).filter(key => key !== 'help').map((key) => (
              <button
                key={key}
                onClick={() => toggleWindow(key)}
                className="relative group transition-all duration-300 hover:-translate-y-5 hover:scale-[1.3] active:scale-95 active:translate-y-0"
              >
                <div className={`w-14 h-14 rounded-[18px] p-0.5 bg-gradient-to-br ${windowsMetadata[key].theme} shadow-lg ring-1 ring-white/10 transition-all`}>
                  <div className="w-full h-full rounded-[16px] bg-white/10 backdrop-blur-sm flex items-center justify-center text-white overflow-hidden">
                    {React.cloneElement(windowsMetadata[key].icon, {
                      className: (key === 'skills' || key === 'contact' || key === 'education') ? "w-full h-full" : "w-7 h-7"
                    })}
                  </div>
                </div>

                {/* Floating Tooltip */}
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md text-[#1d1d1f] text-[11px] font-black py-1.5 px-3.5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-2xl border border-black/5 whitespace-nowrap">
                  {windowsMetadata[key].title}
                </div>

                {/* Running Indicator Dot */}
                {activeWindows.includes(key) && (
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)]" />
                )}
              </button>
            ))}

            <div className="h-10 w-[1px] bg-white/20 mx-1.5" />

            <a href="https://github.com/naveengullipalli317" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[18px] flex items-center justify-center shadow-lg hover:-translate-y-5 hover:scale-[1.3] transition-all group relative border-white/20">
              <Github className="w-7 h-7 text-white" />
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-white text-[#1d1d1f] text-[11px] font-black py-1.5 px-3.5 rounded-xl opacity-0 group-hover:opacity-100 transition-all shadow-2xl border border-black/5">GitHub</div>
            </a>
          </div>
        </div>
      )}
      {/* System Power States Overlays */}
      {systemState !== 'idle' && (
        <div
          className={`fixed inset-0 z-[5000] flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ${systemState === 'off' ? 'cursor-pointer' : 'cursor-default'
            } ${systemState === 'shutting-down' ? 'animate-in fade-in' : ''}`}
          onClick={() => systemState === 'off' && handleBoot()}
        >
          <div className={`transition-all duration-1000 flex flex-col items-center ${systemState === 'off' ? 'opacity-0' : 'opacity-100'
            }`}>
            <AppleLogo className="w-24 h-24 text-white mb-12" />

            {systemState === 'booting' && (
              <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden shadow-inner border border-white/5">
                <div className="h-full bg-white animate-boot-progress shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              </div>
            )}

            {systemState === 'off' && (
              <div className="mt-8 text-white/20 text-xs font-medium animate-pulse">Click to Start Portfolio</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
