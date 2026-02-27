import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Download, 
  Server, 
  Smartphone, 
  Shield, 
  Globe, 
  Code, 
  Database, 
  Terminal, 
  Cpu, 
  Award, 
  BookOpen, 
  MapPin,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  MessageSquare,
  Send,
  Briefcase,
  Loader2,
  Bot
} from 'lucide-react';

// --- PORTFOLIO DATA CONTEXT FOR GEMINI ---
const PORTFOLIO_CONTEXT = `
NAME: Archit Sureja
ROLE: Software Engineer
EXPERIENCE: 10+ years
LOCATION: Toronto, Canada (Open to relocation)
CONTACT: lacsureja@gmail.com, +1 647-867-0109, linkedin.com/in/architsureja, architsureja.github.io

SUMMARY:
Software Engineer specializing in Backend, FrontEnd, Mobile, Cloud Security, and Infrastructure using AWS, Java, Node.js, React, Android, and Next.js. Expertise in modernizing critical authentication frameworks, delivering Passkey integration, Regionalization support, and IPv6 integration. Currently at Amazon (AWS).

SKILLS:
- Languages: Java, Kotlin, Node.js, TypeScript, Python, Swift, SQL
- Web: React.js, Next.js, Spring Boot, React Native, Redux
- Infrastructure: AWS, AWS CDK, Jenkins, Docker, Git
- Testing: Cypress.io, Vitest, K6, Mockito, Mockk, SonarQube
- Mobile: Android, Jetpack Compose, Coroutines, Dagger/Hilt, Room DB

WORK EXPERIENCE:
1. Amazon (AWS) | Software Engineer | Toronto | Oct 2021-Present
   - Full Stack Dev & Infrastructure Architecture.
   - Led Passkey for MFA implementation.
   - Architected full IPv6 support for AWS Sign-In.
   - Managed 100+ Canaries and integration tests.
   - Tech: Java, Spring Boot, AWS CDK, React, Next.js.

2. Infotree Technology | Software Engineer | Pointe-Claire | Sep 2021-Oct 2021
   - SDK development for map utils (Google Maps, MapBox).

3. Mobiquity Inc. | Senior Engineer | Ahmedabad | Oct 2017-Jun 2021
   - Banking frameworks integration, lead team of 3-6.
   - Tech: Android, React-native, Kotlin, Jenkins.

4. e-Procurement Technologies | Sr Android Dev | Jan 2017-Oct 2017
5. Techreco Solution | Sr Android Dev | Mar 2016-Jan 2017
6. Percept InfoTech | Android Dev | Mar 2014-Mar 2016
7. Institute for Plasma Research | Project Engineer | Jun 2012-Mar 2014

EDUCATION:
- M.Tech (ICT), Nirma University (2013)
- B.E. (IT), Gujarat University (2011)
- AWS Certified Developer - Associate
`;

// --- EXPERIENCE DATA (UPDATED WITH ALL CV DETAILS) ---
const EXPERIENCES = [
  {
    role: "Software Engineer",
    company: "Amazon (AWS)",
    location: "Toronto, CA",
    period: "Oct 2021 - Present",
    description: "Managing complete software development lifecycle for critical AWS Identity services. Focused on high-scale architecture, security hardening, and modernizing authentication flows.",
    highlights: [
      "Manage the complete software development life cycle: technical design, coding, testing, deployment, and maintenance.",
      "Architect and implement secure cloud infrastructure using Java, Spring Boot, and AWS CDK (Regionalization, GovCloud, CDN).",
      "Lead high-severity incident resolution and drive security hardening initiatives (HTTP slowloris, hardware token diagnostics, etc).",
      "Design and maintain comprehensive testing frameworks (Cypress.io, Vitest, K6, Mockito, Mockk) covering Root, IAM, and MFA workflows.",
      "Mentor interns and engineers on backend integration, security best practices, and operational excellence.",
      "Collaborate with stakeholders to assess UX, provide feedback, and represent engineering considerations.",
      "Lead strategic, cross-functional team projects involving multiple stakeholders.",
      "IPv6 Infrastructure & Security: Architected and implemented full IPv6 support for AWS Sign-In domain.",
      "Passkey for MFA: Led end-to-end implementation, resolving dual RPID challenges and enabling Windows 10 cross-platform support.",
      "Root Enablement (EUSC partition): Implemented Root account functionality (Login, Password Reset, Account update).",
      "Signup Architecture Redesign: Authored HLD/LLD for migrating Signup service behind Console architecture.",
      "Authentication Resiliency: Enabling Root authentication at other regions for failure resilience.",
      "New UI/UX Implementation: Migrated AWS Sign-In Service to modern stack using CloudScape, React, and NextJS.",
      "Mobile SDK Development: Developed Android and iOS SDKs for AWS Sign-In service."
    ],
    tech: ['Java', 'Spring Boot', 'AWS CDK', 'React', 'Next.js', 'TypeScript', 'Cypress.io', 'Vitest']
  },
  {
    role: "Software Engineer",
    company: "Infotree Technology",
    location: "Pointe-Claire, CA",
    period: "Sep 2021 - Oct 2021",
    description: "Specialized in SDK development focusing on geospatial technologies.",
    highlights: [
       "SDK development for map utils and features with use of Google map and MapBox libraries.",
       "Writing of Unit test cases, Instrumental test cases and automation UI test cases for robustness, security, usability.",
       "Consistently delivered and implemented quality units with functional features and minimal defects.",
       "Met product specifications and achieved goals for maintaining quality."
    ],
    tech: ['Android', 'SDK Dev', 'Google Maps API', 'MapBox']
  },
  {
    role: "Senior Engineer",
    company: "Mobiquity Inc.",
    location: "Ahmedabad, IN",
    period: "Oct 2017 - Jun 2021",
    description: "Led mobile and integration projects for banking frameworks.",
    highlights: [
      "Designed technical architecture proposals to enhance and integrate Backbase Framework systems and third-party libraries.",
      "Met all project deliverable milestones by ensuring immediate resolutions of issues.",
      "Supervised 3-6 team members to resolve obstacles following best practices strategies.",
      "Programmed mobile applications using Android, React-native, and Kotlin to enable code abstraction and reuse.",
      "Configured Sonar and Jenkins pipeline to support and enhance code quality and fast build delivery.",
      "Improved software quality and reliability by implementing integration tests (with 75%+ code coverage).",
      "Consistently delivered and implemented quality units with functional features and minimal defects.",
      "Met product specifications and achieved goals for maintaining quality while learning Cloud Services and ML."
    ],
    tech: ['Android', 'React Native', 'Kotlin', 'Jenkins', 'Backbase', 'Sonar']
  },
  {
    role: "Senior Android Developer",
    company: "e-Procurement Technologies",
    location: "Ahmedabad, IN",
    period: "Jan 2017 - Oct 2017",
    description: "Focused on specialized mobile applications and library modules.",
    highlights: [
       "Met all project deliverable milestones by ensuring immediate resolutions of issues.",
       "Programmed mobile applications using Android, Kotlin, SQLite, Beacon, NFS.",
       "Designed and implemented library modules to integrate with any system.",
       "Designed and implemented proof-of-concept application.",
       "Consistently delivered and implemented quality units with functional features and minimal defects.",
       "Collaborated with QA testers to conduct end-to-end unit testing and post-production testing."
    ],
    tech: ['Android', 'Kotlin', 'SQLite', 'Beacon', 'NFS']
  },
  {
    role: "Senior Android Developer",
    company: "Techreco Solution",
    location: "Ahmedabad, IN",
    period: "Mar 2016 - Jan 2017",
    description: "Delivered robust mobile solutions and POCs.",
    highlights: [
      "Programmed mobile applications using Android, JAVA.",
      "Designed and implemented proof-of-concept application and library module.",
      "Consistently delivered and implemented quality units with functional features and minimal defects.",
      "Collaborated with QA testers to conduct end-to-end unit testing and post-production testing."
    ],
    tech: ['Android', 'Java', 'Mobile App Dev']
  },
  {
    role: "Android Developer",
    company: "Percept InfoTech",
    location: "Ahmedabad, IN",
    period: "Mar 2014 - Mar 2016",
    description: "Early career focus on mobile and interactive applications.",
    highlights: [
      "Programmed mobile applications using Android, JAVA, Unity3D.",
      "Consistently delivered and implemented quality units with functional features and minimal defects."
    ],
    tech: ['Android', 'Java', 'Unity3D']
  },
  {
    role: "Project Engineer",
    company: "Institute for Plasma Research",
    location: "Gandhinagar, IN",
    period: "Jun 2012 - Mar 2014",
    description: "Robotics and hardware control systems.",
    highlights: ["Programmed controlling system for prototype robot using ROS (Robotic Operation System), Arduino, Raspberry Pi, Xbee Technology."],
    tech: ['ROS', 'Arduino', 'Raspberry Pi', 'C++']
  }
];

const GeminiAssistant = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('chat'); // 'chat' or 'match'
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hi! I'm Archit's AI Assistant. Ask me anything about his experience, skills, or projects!" }
  ]);
  const [jobDescription, setJobDescription] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // --- API KEY CONFIGURATION ---
  // 1. For this online preview, keep it as: const apiKey = ""; 
  // 2. For your LOCAL/GITHUB deployment, uncomment the line below:
  // const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const apiKey = ""; 

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const callGeminiAPI = async (prompt) => {
    // Note: In the preview environment, the key is injected automatically even if apiKey is empty.
    // Locally, if apiKey is missing, this check handles it.
    /* if (!apiKey) {
      return "Error: API Key is missing. Please check your .env file and App.jsx configuration.";
    } 
    */
    
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
          })
        }
      );
      const data = await response.json();
      if (data.error) throw new Error(data.error.message);
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Sorry, I'm having trouble connecting to the AI brain right now. Please try again later.";
    } finally {
      setIsLoading(false);
    }
  };

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMsg = { role: 'user', text: query };
    setMessages(prev => [...prev, userMsg]);
    setQuery('');

    const systemPrompt = `
      You are an AI assistant for Archit Sureja's portfolio website. 
      Here is Archit's resume data:
      ${PORTFOLIO_CONTEXT}

      User Question: "${query}"

      Instructions:
      1. Answer the question based ONLY on the provided resume data.
      2. Be professional, friendly, and concise.
      3. If the answer isn't in the data, say you don't have that specific info but suggest contacting Archit directly.
      4. Speak in the first person plural (e.g., "We," "Archit has," "Archit's experience") or as a helpful assistant representing him.
    `;

    const replyText = await callGeminiAPI(systemPrompt);
    setMessages(prev => [...prev, { role: 'assistant', text: replyText }]);
  };

  const handleMatchSubmit = async () => {
    if (!jobDescription.trim()) return;
    
    setAnalysis(null);
    const systemPrompt = `
      Act as a technical recruiter. Compare Archit Sureja's profile with the following Job Description.

      ARCHIT'S PROFILE:
      ${PORTFOLIO_CONTEXT}

      JOB DESCRIPTION:
      ${jobDescription}

      Task: Provide a structured analysis.
      1. Match Score (0-100%).
      2. Key Strengths (3 bullet points).
      3. Potential Gaps (if any).
      4. Brief verdict (1-2 sentences).

      Output Format: Return the result in PLAIN TEXT with clear headers like "Match Score:", "Key Strengths:", etc. Do not use Markdown formatting like bold or headers, just plain text with newlines.
    `;

    const result = await callGeminiAPI(systemPrompt);
    setAnalysis(result);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-800 bg-slate-900 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="text-blue-400" size={20} />
            <h3 className="font-bold text-white text-lg">AI Recruiter Assistant</h3>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-800">
          <button 
            onClick={() => setActiveTab('chat')}
            className={`flex-1 py-3 text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
              activeTab === 'chat' ? 'bg-slate-800 text-blue-400 border-b-2 border-blue-400' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <MessageSquare size={16} /> Chat with Archit AI
          </button>
          <button 
            onClick={() => setActiveTab('match')}
            className={`flex-1 py-3 text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
              activeTab === 'match' ? 'bg-slate-800 text-purple-400 border-b-2 border-purple-400' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Briefcase size={16} /> Job Fit Analyzer
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-hidden flex flex-col bg-slate-900/50">
          
          {/* CHAT TAB */}
          {activeTab === 'chat' && (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-br-none' 
                        : 'bg-slate-800 border border-slate-700 text-slate-200 rounded-bl-none'
                    }`}>
                      {msg.role === 'assistant' && (
                        <div className="flex items-center gap-2 mb-1 text-xs text-blue-400 font-bold uppercase tracking-wider">
                          <Bot size={12} /> Archit AI
                        </div>
                      )}
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-slate-800 rounded-2xl px-4 py-3 flex items-center gap-2">
                      <Loader2 size={16} className="animate-spin text-blue-400" />
                      <span className="text-xs text-slate-400">Thinking...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              <form onSubmit={handleChatSubmit} className="p-4 border-t border-slate-800 bg-slate-900">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ask about AWS experience, skills, or relocation..."
                    className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <button 
                    type="submit" 
                    disabled={isLoading || !query.trim()}
                    className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </>
          )}

          {/* MATCH TAB */}
          {activeTab === 'match' && (
            <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-slate-700">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Paste Job Description
                  </label>
                  <textarea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Paste the JD here to see how well Archit fits the role..."
                    className="w-full h-40 bg-slate-950 border border-slate-700 rounded-xl p-4 text-sm text-slate-300 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  />
                </div>
                
                <button
                  onClick={handleMatchSubmit}
                  disabled={isLoading || !jobDescription.trim()}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-purple-900/20 flex items-center justify-center gap-2"
                >
                  {isLoading ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
                  Analyze Match
                </button>

                {analysis && (
                  <div className="mt-6 animate-in slide-in-from-bottom-4">
                    <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-6">
                      <h4 className="text-purple-400 font-bold mb-4 flex items-center gap-2">
                        <Bot size={18} /> Analysis Result
                      </h4>
                      <div className="prose prose-invert prose-sm max-w-none text-slate-300 whitespace-pre-wrap">
                        {analysis}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showGemini, setShowGemini] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'education'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  const NavLink = ({ id, label }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`text-sm font-medium transition-colors hover:text-blue-400 ${
        activeSection === id ? 'text-blue-400' : 'text-slate-300'
      }`}
    >
      {label}
    </button>
  );

  const MobileNavLink = ({ id, label }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`block w-full text-left py-3 px-4 text-base font-medium border-l-4 transition-colors ${
        activeSection === id 
          ? 'border-blue-500 bg-slate-800 text-blue-400' 
          : 'border-transparent text-slate-300 hover:bg-slate-800 hover:text-white'
      }`}
    >
      {label}
    </button>
  );

  const SkillBadge = ({ name, icon: Icon }) => (
    <div className="flex items-center gap-2 bg-slate-800 border border-slate-700 px-3 py-2 rounded-lg hover:border-blue-500/50 hover:bg-slate-800 transition-all group">
      {Icon && <Icon size={16} className="text-blue-400 group-hover:text-blue-300" />}
      <span className="text-slate-200 text-sm font-medium">{name}</span>
    </div>
  );

  // Component for Experience Card
  const ExperienceCard = ({ data, side, isFullWidth = false }) => {
    const isLeft = side === 'left';
    
    return (
      <div className={`relative group w-full ${isFullWidth ? 'mb-8' : ''}`}>
        
        {/* Only show central dots for the split columns, not the full width header */}
        {!isFullWidth && (
          <div className={`md:block absolute top-8 w-3 h-3 rounded-full border-2 border-slate-900 bg-blue-500 z-10 
            ${isLeft ? '-right-[1.65rem]' : '-left-[1.65rem]'}
          `}></div>
        )}

        {/* Mobile Connector (always show for non-full width on mobile) */}
        {!isFullWidth && (
          <>
            <div className="md:hidden absolute left-3 top-0 bottom-0 w-px bg-slate-800 group-last:h-8"></div>
            <div className="md:hidden absolute left-3 top-8 w-3 h-3 rounded-full border-2 border-slate-900 bg-blue-500 -translate-x-[5px] z-10"></div>
          </>
        )}

        <div className={`relative bg-slate-800 border border-slate-700 p-5 rounded-xl hover:border-slate-600 transition-all h-full 
          ${isFullWidth ? '' : 'pl-8 md:pl-5'} 
        `}>
            {/* If Full Width (Amazon), add a special badge */}
            {isFullWidth && (
              <div className="absolute top-0 right-0 p-4">
                <span className="px-2 py-1 text-xs font-bold text-blue-900 bg-blue-400 rounded">LATEST</span>
              </div>
            )}

            <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{data.role}</h3>
                <div className="flex items-center gap-2 text-blue-400 font-medium">
                  {data.company}
                </div>
              </div>
              <div className="text-right">
                  <div className="text-sm text-slate-400 font-mono">{data.period}</div>
                  <div className="flex items-center gap-1 text-xs text-slate-500 justify-end mt-1">
                    <MapPin size={12} /> {data.location}
                  </div>
              </div>
            </div>

            <p className="text-slate-300 text-sm mb-3 leading-relaxed">
              {data.description}
            </p>

            {data.highlights && (
              <ul className="space-y-1 mb-3">
                {data.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-slate-700/50">
              {data.tech.map((t, i) => (
                <span key={i} className="text-xs px-2 py-1 rounded bg-slate-900 text-slate-400 font-mono border border-slate-800">
                  {t}
                </span>
              ))}
            </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* Floating Action Button for Gemini AI */}
      <button
        onClick={() => setShowGemini(true)}
        className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white p-4 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-110 flex items-center gap-2 group"
      >
        <Sparkles className="animate-pulse" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
          Ask AI & Recruiter Tools
        </span>
      </button>

      {/* Gemini Modal */}
      {showGemini && <GeminiAssistant onClose={() => setShowGemini(false)} />}

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg py-3' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="/icon.svg" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">Archit Sureja</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink id="home" label="Home" />
              <NavLink id="about" label="About" />
              <NavLink id="skills" label="Skills" />
              <NavLink id="experience" label="Experience" />
              <NavLink id="education" label="Education" />
              <a 
                href="mailto:lacsureja@gmail.com" 
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-lg shadow-blue-600/20"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 shadow-xl animate-in slide-in-from-top-5">
            <div className="py-2">
              <MobileNavLink id="home" label="Home" />
              <MobileNavLink id="about" label="About" />
              <MobileNavLink id="skills" label="Skills" />
              <MobileNavLink id="experience" label="Experience" />
              <MobileNavLink id="education" label="Education" />
              <div className="p-4">
                <a 
                  href="mailto:lacsureja@gmail.com"
                  className="block w-full text-center py-3 text-sm font-bold text-white bg-blue-600 rounded-lg"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-12 md:pt-40 md:pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-sm font-medium mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for new opportunities
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Engineering the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Cloud Infrastructure
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl">
              Software Engineer with 10+ years of experience specializing in Backend, Mobile, and Cloud Security. 
              Currently modernizing critical authentication frameworks at <span className="text-white font-medium">Amazon (AWS)</span>.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="mailto:lacsureja@gmail.com"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-600/25 flex items-center gap-2"
              >
                <Mail size={18} />
                Get in Touch
              </a>
              <a 
                href = "/ArchitSureja.pdf"
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-700 transition-all flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            <div className="flex items-center gap-6 mt-12 text-slate-400">
              <a href="https://linkedin.com/in/architsureja" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://architsureja.github.io" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="tel:+16478670109" className="hover:text-blue-400 transition-colors flex items-center gap-2 text-sm">
                <Phone size={20} />
                +1 647-867-0109
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About/Summary Section */}
      <section id="about" className="py-12 bg-slate-900/50 relative border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  I am a seasoned Software Engineer based in Toronto, currently driving innovation at AWS. 
                  My expertise spans the entire development lifecycle, from architecting secure cloud infrastructure 
                  to optimizing frontend experiences.
                </p>
                <p>
                  I specialize in modernizing critical systems, having delivered high-impact solutions like 
                  Passkey integration, Regionalization support, and IPv6 integration for AWS Sign-In.
                </p>
                <p>
                  I am committed to engineering excellence, focusing on security hardening, operational resilience, 
                  and cost efficiency while mentoring the next generation of engineers.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <Server className="text-blue-400 mb-4" size={32} />
                <h3 className="text-lg font-bold text-white mb-1">Backend</h3>
                <p className="text-sm text-slate-400">Java, Spring Boot, Node.js</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <Globe className="text-indigo-400 mb-4" size={32} />
                <h3 className="text-lg font-bold text-white mb-1">Cloud</h3>
                <p className="text-sm text-slate-400">AWS, CDK, Security</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <Code className="text-green-400 mb-4" size={32} />
                <h3 className="text-lg font-bold text-white mb-1">Frontend</h3>
                <p className="text-sm text-slate-400">React, Next.js, TS</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <Smartphone className="text-purple-400 mb-4" size={32} />
                <h3 className="text-lg font-bold text-white mb-1">Mobile</h3>
                <p className="text-sm text-slate-400">Android, Kotlin, RN</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Technical Arsenal</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A comprehensive toolkit honed over a decade of solving complex engineering challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Cpu size={20} className="text-blue-400" /> Languages & Core
              </h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Java / Kotlin" icon={Code} />
                <SkillBadge name="Node.js / TS" icon={Terminal} />
                <SkillBadge name="Python" icon={Code} />
                <SkillBadge name="Swift" icon={Code} />
                <SkillBadge name="SQL / NoSQL" icon={Database} />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Globe size={20} className="text-blue-400" /> Web & Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="React.js" icon={Code} />
                <SkillBadge name="Next.js" icon={Code} />
                <SkillBadge name="Spring Boot" icon={Server} />
                <SkillBadge name="React Native" icon={Smartphone} />
                <SkillBadge name="Redux" icon={Code} />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Shield size={20} className="text-blue-400" /> Infrastructure & DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="AWS" icon={Server} />
                <SkillBadge name="AWS CDK" icon={Code} />
                <SkillBadge name="Jenkins" icon={Terminal} />
                <SkillBadge name="Docker" icon={Server} />
                <SkillBadge name="Git" icon={Code} />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Award size={20} className="text-blue-400" /> Testing & Quality
              </h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Cypress.io" />
                <SkillBadge name="Vitest" />
                <SkillBadge name="K6" />
                <SkillBadge name="Mockito / Mockk" />
                <SkillBadge name="SonarQube" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Smartphone size={20} className="text-blue-400" /> Android / Mobile
              </h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Jetpack Compose" />
                <SkillBadge name="Coroutines" />
                <SkillBadge name="Dagger / Hilt" />
                <SkillBadge name="Retrofit" />
                <SkillBadge name="Room DB" />
              </div>
            </div>
            
             <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <BookOpen size={20} className="text-blue-400" /> Concepts
              </h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="System Design" />
                <SkillBadge name="Microservices" />
                <SkillBadge name="TDD" />
                <SkillBadge name="Agile / Scrum" />
                <SkillBadge name="Cloud Security" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 bg-slate-900/50 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-16 text-center">Professional Journey</h2>
          
          <div className="relative py-8">
             {/* Central Line for Desktop Grid */}
             <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2"></div>
             
             {/* 1. Amazon (Current) - Full Width Featured */}
             <ExperienceCard data={EXPERIENCES[0]} isFullWidth={true} />

             {/* Mobile View for the rest: Single Column */}
             <div className="md:hidden space-y-8">
                {EXPERIENCES.slice(1).map((exp, index) => (
                  <ExperienceCard key={index} data={exp} side="left" />
                ))}
             </div>

             {/* Desktop View for the rest: Two Columns (Mosaic/Staggered) */}
             {/* Indices 1, 3, 5 go Left. Indices 2, 4, 6 go Right. */}
             <div className="hidden md:flex gap-10">
                {/* Left Column (Infotree, e-Procurement, Percept) */}
                <div className="w-1/2 flex flex-col gap-12">
                   <ExperienceCard data={EXPERIENCES[1]} side="left" />
                   <ExperienceCard data={EXPERIENCES[3]} side="left" />
                   <ExperienceCard data={EXPERIENCES[5]} side="left" />
                </div>

                {/* Right Column (Mobiquity, Techreco, Plasma) */}
                {/* Visual Fix: Mobiquity (2) is chronologically 'before' Infotree (1), 
                    but in a visual flow, 1 is top-left, 2 is top-right. 
                    Since 2 is much larger than 1, having them side-by-side works well. 
                */}
                <div className="w-1/2 flex flex-col gap-12">
                   <ExperienceCard data={EXPERIENCES[2]} side="right" />
                   <ExperienceCard data={EXPERIENCES[4]} side="right" />
                   <ExperienceCard data={EXPERIENCES[6]} side="right" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section id="education" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-12">
             
             <div>
               <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                 <BookOpen className="text-blue-500" /> Education
               </h2>
               <div className="space-y-6">
                 <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-white">Master of Technology</h3>
                    <p className="text-blue-400">Nirma University, Ahmedabad</p>
                    <p className="text-slate-400 text-sm mt-1">2013 • Major in Information & Communication Technology</p>
                 </div>
                 <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-white">Bachelor of Engineering</h3>
                    <p className="text-blue-400">Gujarat University, Ahmedabad</p>
                    <p className="text-slate-400 text-sm mt-1">2011 • Major in Information Technology</p>
                 </div>
                  <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-white">Diploma</h3>
                    <p className="text-blue-400">Technical Examination Board</p>
                    <p className="text-slate-400 text-sm mt-1">2008 • Major in Information Technology (1st Rank)</p>
                 </div>
               </div>
             </div>

             <div>
               <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                 <Award className="text-yellow-500" /> Certifications
               </h2>
               <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-8 rounded-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Award size={100} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">AWS Certified Developer</h3>
                  <p className="text-lg text-blue-400 font-medium mb-4">Associate Level</p>
                  <p className="text-slate-400">
                    Validated expertise in developing, deploying, and debugging cloud-based applications using AWS.
                  </p>
               </div>
               
               <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">Hobbies</h3>
                  <div className="flex gap-4">
                     <span className="px-4 py-2 bg-slate-800 rounded-lg text-slate-300 border border-slate-700 hover:border-blue-500 transition-colors cursor-default">Gaming</span>
                     <span className="px-4 py-2 bg-slate-800 rounded-lg text-slate-300 border border-slate-700 hover:border-blue-500 transition-colors cursor-default">Cooking</span>
                     <span className="px-4 py-2 bg-slate-800 rounded-lg text-slate-300 border border-slate-700 hover:border-blue-500 transition-colors cursor-default">Biking</span>
                  </div>
               </div>
             </div>

           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Let's Build Something Amazing</h2>
          <div className="flex justify-center gap-8 mb-8">
            <a href="mailto:lacsureja@gmail.com" className="text-slate-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com/in/architsureja" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
             <a href="https://architsureja.github.io" className="text-slate-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Archit Sureja. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;