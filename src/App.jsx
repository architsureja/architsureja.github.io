import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BlogDashboard from './blog/BlogDashboard';
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
ROLE: SOFTWARE ENGINEER - II
EXPERIENCE: 10+ years
LOCATION: Toronto, Canada (Open to relocation)
CONTACT: acsureja@gmail.com, +1 647-867-0109, linkedin.com/in/architsureja, architsureja.github.io

SUMMARY:
Senior Full-Stack Software Engineer with over 10+ years of experience specializing in high-scale distributed systems, Cloud Security, and Identity & Access Management (IAM). Proven track record at Amazon (AWS) leading the modernization of critical authentication frameworks, including the end-to-end delivery of Passkey MFA and IPv6 infrastructure. Expert in architecting secure, multi-region cloud solutions using Java, AWS CDK, and React/Next.js to drive operational excellence and business value.

SKILLS:
- Languages: Java, Kotlin, TypeScript, Swift, SQL
- Cloud & Infrastructure: AWS (CDK, API Gateway, IAM, GovCloud), CI/CD (Jenkins, Sonar), Multi-region CDN Deployment, IPv6 Integration
- Backend: Spring, Node.js, MVC
- Mobile: Android SDK, Jetpack Compose, Live data, Jetpack Navigation, Coroutines, MVVM/MVP, React Native, Redux, iOS (Xcode), Mobile SDK Development
- Frontend: React, Next.js, CloudScape, HTML5/CSS3
- Testing & Quality: Cypress.io, Vitest, K6, Mockito, Mockk, TDD, E2E Canary Testing, Integration Test, Unit Test
- Architecture & Tools: Backbase, REST, Microservices, HLD/LLD, Git, Agile/Scrum, Room Database, SQLite.

WORK EXPERIENCE:
1. AMAZON (AWS) | SOFTWARE DEV. ENGINEER - II | Toronto, ON | Oct 2021 - Cont.
   - Area of Focus: Identity & Access Management (IAM), Security, and Global Infrastructure.
   - Backend & API Engineering:
     - Engineered scalable backend services using Java and Spring Boot, focusing on end-to-end SDLC.
     - Designed and implemented secure, high-traffic REST APIs for MFA and identity workflows.
     - Authored comprehensive HLD/LLD for microservices migration.
     - Architected secure cloud infrastructure using AWS CDK.
   - Security & Core Infrastructure:
     - Implemented full Dual-stack support for AWS Sign-In domain.
     - Spearheaded backend integration for Passkey as an MFA method.
     - Delivered critical Root account functionality within EUSC partition.
     - Led high-severity incident resolutions and security hardening initiatives.
   - Full-Stack, Mobile & Testing:
     - Developed Android and iOS SDKs for AWS Sign-In service.
     - Optimized frontend experiences using React, Next.js, and Node.js.
     - Designed comprehensive testing frameworks using Cypress.io, Vitest, K6.
   - Mentorship & Leadership:
     - Spearheaded strategic projects, mentored interns/engineers.
     - Hackathon Lead: Designed POC authentication system utilizing Zero-Knowledge Proofs (ZKP).

2. INFOTREE TECHNOLOGY (EXPEDIA) | SOFTWARE ENGINEER (CONTRACT) | Pointe-Claire, QC | Sep 2021 – Oct 2021
   - Area of Focus: Geospatial Mobile SDK Development.
   - SDK development for map utils using Google map and MapBox libraries.
   - Writing of Unit, Instrumental, and automation UI test cases.

3. MOBIQUITY INC. | SENIOR ENGINEER | Ahmedabad, India | Oct 2017 – Jun 2021
   - Area of Focus: Digital Banking & Mobile Frameworks.
   - Architecture & Mobile Development:
     - Designed complex technical architecture proposals for Backbase Framework integration.
     - Programmed robust mobile applications using Android, React Native, and Kotlin.
   - Leadership & Mentorship:
     - Supervised a team of 3–6 engineers.
     - Managed project deliverable milestones.
   - Operational Excellence:
     - Improved software quality by implementing integration tests (75%+ code coverage).
     - Configured and optimized Sonar and Jenkins CI/CD pipelines.

4. e-Procurement Technologies | SR. ANDROID DEV. | Ahmedabad | Jan 2017 - Oct 2017
   - Developed enterprise mobile applications using Kotlin, Android SDK, and SQLite.
   - Integrated advanced features like Beacons and NFC.

5. Techreco Solution | SR. ANDROID DEV. | Ahmedabad | Mar 2016 - Jan 2017
   - Programmed mobile applications utilizing Java and the Android framework.

6. Percept InfoTech | ANDROID DEV. | Ahmedabad | Mar 2014 - Mar 2016
   - Developed mobile applications and interactive experiences using Android, Unity3D.

7. Institute for Plasma Research | PROJECT ENGINEER | Gandhinagar | Jun 2012 - Mar 2014
   - Engineered controlling system for prototype robot using ROS, Arduino, Raspberry Pi, Xbee.

EDUCATION:
- MASTER OF TECHNOLOGY (ICT), NIRMA UNIVERSITY, Ahmedabad, 2013
- BACHELOR OF ENGINEERING (IT), GUJARAT UNIVERSITY, Ahmedabad, 2011
- DIPLOMA (IT), TECHNICAL EXAM. BOARD, Gandhinagar, 2008

AWARDS:
- Associate Android Developer
- AWS Certified Developer - Associate
`;

// --- EXPERIENCE DATA (UPDATED WITH ALL CV DETAILS) ---
const EXPERIENCES = [
  {
    role: "SOFTWARE DEV. ENGINEER - II",
    company: "AMAZON (AWS)",
    location: "Toronto, ON",
    period: "Oct 2021 - Cont.",
    description: "Area of Focus: Identity & Access Management (IAM), Security, and Global Infrastructure.",
    grid: "center",
    highlights: [
      {
        title: "Backend & API Engineering",
        items: [
          "Engineered scalable backend services using Java and Spring Boot, focusing on the end-to-end software development life cycle from technical design to deployment for traditional (Password) and Federated (SAML 2.0, OIDC) authentication flows.",
          "Designed and implemented secure, high-traffic REST APIs for MFA and identity workflows, enhancing API performance and diagnostic capabilities, utilizing industry-standard encryption for secure password transportation.",
          "Authored comprehensive High-Level and Low-Level Designs (HLD/LLD) for the migration of the Signup service and a major Sign-in Monolith into a microservices architecture, reducing deployment latency and technical debt.",
          "Developed and maintained robust backend components while managing Git, CI/CD pipelines, and automated service Canaries to ensure 99.99% availability.",
          "Architected secure cloud infrastructure using AWS CDK, specifically handling API Gateway integrations and multi-region service deployments."
        ]
      },
      {
        title: "Security & Core Infrastructure",
        items: [
          "Implemented full Dual-stack support for the AWS Sign-In domain, including complex threat modeling and infrastructure-as-code deployments for Classic and 100% compliance with GovCloud security mandates.",
          "Spearheaded the backend integration for Passkey as an MFA method, resolving dual RPID challenges and enabling cross-platform authentication.",
          "Delivered critical Root account functionality (Login, Password Reset, Account Update) within the EUSC partition, ensuring resiliency against regional failures.",
          "Led high-severity incident resolutions and drove security hardening initiatives, such as protecting non-public paths and implementing HTTP Slowloris protection."
        ]
      },
      {
        title: "Full-Stack, Mobile & Testing",
        items: [
          "Managed the complete software development life cycle, encompassing technical design, coding, testing, deployment, and maintenance.",
          "Developed Android and iOS SDKs for the AWS Sign-In service to provide secure, authenticated in-app browsing experiences.",
          "Optimized frontend experiences across Desktop and Mobile by migrating the Sign-In service to a modern stack of React, Next.js, and Node.js.",
          "Designed comprehensive testing frameworks using Cypress.io, Vitest, K6, and Mockito/Mockk, maintaining over integration tests and 100+ canaries for Signin workflows."
        ]
      },
      {
        title: "Mentorship, Leadership & Operational Excellence",
        items: [
          "Spearheaded strategic, cross-functional projects by collaborating with 8+ product and UX teams to deliver critical security features reaching millions of global users.",
          "Mentored 1 intern and 3 junior engineers on backend integration, security best practices, and achieving operational excellence.",
          "Drove team growth by actively participating in the technical recruitment and interviewing processes for engineering candidates.",
          "Led strategic, cross-functional team projects, collaborating with product stakeholders and UX teams to represent engineering considerations and meet milestones.",
          "Provided ongoing operational support to the team and identified opportunities to enhance system reliability and efficiency."
        ]
      },
      {
        title: "Hackathon Lead: ZKP-Based Authentication Framework",
        items: [
          "Designed a POC authentication system utilizing Zero-Knowledge Proofs (ZKP) to allow users to authenticate without revealing underlying sensitive data."
        ]
      }
    ],
    tech: ['Java', 'Spring Boot', 'AWS CDK', 'React', 'Next.js', 'TypeScript', 'Cypress.io', 'Vitest', 'K6', 'Mockito']
  },
  {
    role: "SENIOR ENGINEER",
    company: "MOBIQUITY INC.",
    location: "Ahmedabad, India",
    period: "Oct 2017 - Jun 2021",
    description: "Area of Focus: Digital Banking & Mobile Frameworks.",
    grid: "left",
    highlights: [
      {
        title: "Architecture & Mobile Development",
        items: [
          "Designed complex technical architecture proposals to seamlessly integrate the Backbase Framework with various third-party libraries.",
          "Programmed robust mobile applications using Android, React Native, and Kotlin, utilizing object-oriented principles to enable code abstraction and high stability.",
          "Improved software quality and system reliability by implementing comprehensive integration tests, achieving 75%+ code coverage.",
          "Delivered high-quality functional units with minimal defects, consistently meeting strict product specifications and stakeholder milestones."
        ]
      },
      {
        title: "Leadership & Mentorship",
        items: [
          "Supervised a team of 3–6 engineers, providing technical guidance and resolving project obstacles through the application of company best practices.",
          "Managed project deliverable milestones for diverse stakeholders by ensuring immediate resolution of critical issues as they arose.",
          "Mentored team members on modern development standards and the adoption of emerging cloud services and ML trends."
        ]
      },
      {
        title: "Operational Excellence",
        items: [
          "Improved software quality and reliability by implementing integration tests (with 75%+ code coverage) for robustness, security, usability.",
          "Configured and optimized Sonar and Jenkins CI/CD pipelines to enhance code quality and accelerate build delivery speeds.",
          "Orchestrated development workflows within Scrum and Agile environments to maintain project velocity and transparency."
        ]
      }
    ],
    tech: ['Android', 'React Native', 'Kotlin', 'Jenkins', 'Backbase', 'Sonar', 'Agile/Scrum']
  },
  {
    role: "SOFTWARE ENGINEER (CONTRACT)",
    company: "INFOTREE TECHNOLOGY (EXPEDIA)",
    location: "Pointe-Claire, QC",
    period: "Sep 2021 - Oct 2021",
    description: "Area of Focus: Geospatial Mobile SDK Development.",
    grid: "right",
    highlights: [
      {
        items: [
          "SDK development for map utils and features with use of Google map and MapBox libraries.",
          "Writing of Unit test cases, Instrumental test cases and automation UI test cases for robustness, security, usability.",
          "Consistently delivered and implemented quality units with functional features and minimal defects.",
          "Met product specifications and achieved goals for maintaining quality."
        ]
      }
    ],
    tech: ['Android', 'SDK Dev', 'Google Maps', 'MapBox']
  },
  {
    role: "SR. ANDROID DEV.",
    company: "Techreco Solution",
    location: "Ahmedabad, India",
    period: "Mar 2016 - Jan 2017",
    description: "Mobile application development.",
    grid: "right",
    highlights: [
      {
        items: [
          "Programmed mobile applications utilizing Java and the Android framework, delivering custom UI functional features with minimal defects.",
          "Created library modules and proof-of-concept apps to validate technical feasibility for new product requirements."
        ]
      }
    ],
    tech: ['Android', 'Java']
  },
  {
    role: "SR. ANDROID DEV.",
    company: "e-Procurement Technologies",
    location: "Ahmedabad, India",
    period: "Jan 2017 - Oct 2017",
    description: "Developed enterprise mobile applications.",
    grid: "right",
    highlights: [
      {
        items: [
          "Developed enterprise mobile applications using Kotlin, Android SDK, and SQLite, integrating advanced features like Beacons and NFC.",
          "Designed reusable library modules and proof-of-concept applications to streamline integration with external systems.",
          "Collaborated with QA teams to execute end-to-end unit and post-production testing, ensuring high-quality, defect-free releases."
        ]
      }
    ],
    tech: ['Android SDK', 'Kotlin', 'SQLite', 'Beacons', 'NFC']
  },
  {
    role: "ANDROID DEV.",
    company: "Percept InfoTech",
    location: "Ahmedabad, India",
    period: "Mar 2014 - Mar 2016",
    description: "Mobile application and interactive experience development.",
    grid: "left",
    highlights: [
      {
        items: [
          "Programmed mobile applications using Android, JAVA, Unity3D.",
          "Ensured robust software delivery by maintaining a focus on functional quality and consistent unit performance."
        ]
      }
    ],
    tech: ['Android', 'Java', 'Unity3D']
  },
  {
    role: "PROJECT ENGINEER",
    company: "Institute for Plasma Research",
    location: "Gandhinagar, India",
    period: "Jun 2012 - Mar 2014",
    description: "Robotics and control systems.",
    grid: "right",
    highlights: [
      {
        items: ["Programmed controlling system for prototype robot using ROS (Robotic Operation System), Arduino, Raspberry Pi, Xbee Technology."]
      }
    ],
    tech: ['ROS', 'Arduino', 'Raspberry Pi', 'Xbee']
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
            className={`flex-1 py-3 text-sm font-medium transition-colors flex items-center justify-center gap-2 ${activeTab === 'chat' ? 'bg-slate-800 text-blue-400 border-b-2 border-blue-400' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
          >
            <MessageSquare size={16} /> Chat with Archit AI
          </button>
          <button
            onClick={() => setActiveTab('match')}
            className={`flex-1 py-3 text-sm font-medium transition-colors flex items-center justify-center gap-2 ${activeTab === 'match' ? 'bg-slate-800 text-purple-400 border-b-2 border-purple-400' : 'text-slate-400 hover:text-white hover:bg-slate-800'
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
                    <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.role === 'user'
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

const PortfolioContent = () => {
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
      className={`text-sm font-medium transition-colors hover:text-blue-400 ${activeSection === id ? 'text-blue-400' : 'text-slate-300'
        }`}
    >
      {label}
    </button>
  );

  const MobileNavLink = ({ id, label }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`block w-full text-left py-3 px-4 text-base font-medium border-l-4 transition-colors ${activeSection === id
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
            <div className="space-y-4 mb-3">
              {data.highlights.map((section, sIdx) => (
                <div key={sIdx}>
                  {section.title && (
                    <h4 className="text-sm font-bold text-blue-400 mb-2 uppercase tracking-wider">
                      {section.title}
                    </h4>
                  )}
                  <ul className="space-y-1">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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
      <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg py-3' : 'bg-transparent py-4'
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
              <Link to="/blog" className="text-sm font-medium transition-colors hover:text-blue-400 text-slate-300">
                Blog
              </Link>
              <a
                href="mailto:acsureja@gmail.com"
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
              <Link
                to="/blog"
                className="block w-full text-left py-3 px-4 text-base font-medium border-l-4 border-transparent text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                Blog
              </Link>
              <div className="p-4">
                <a
                  href="mailto:acsureja@gmail.com"
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
                href="mailto:acsureja@gmail.com"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-600/25 flex items-center gap-2"
              >
                <Mail size={18} />
                Get in Touch
              </a>
              <a
                href="/ArchitSureja.pdf"
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
                  Senior Full-Stack Software Engineer with over 10+ years of experience specializing in high-scale distributed systems, Cloud Security, and Identity & Access Management (IAM).
                </p>
                <p>
                  Proven track record at Amazon (AWS) leading the modernization of critical authentication frameworks, including the end-to-end delivery of Passkey MFA and IPv6 infrastructure.
                </p>
                <p>
                  Expert in architecting secure, multi-region cloud solutions using Java, AWS CDK, and React/Next.js to drive operational excellence and business value.
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
                <Cpu size={20} className="text-blue-400" /> Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Java" icon={Code} />
                <SkillBadge name="Kotlin" icon={Code} />
                <SkillBadge name="TypeScript" icon={Terminal} />
                <SkillBadge name="Swift" icon={Code} />
                <SkillBadge name="SQL" icon={Database} />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Shield size={20} className="text-blue-400" /> Cloud & Infrastructure
              </h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="AWS (CDK, IAM)" icon={Server} />
                <SkillBadge name="CI/CD (Jenkins)" icon={Terminal} />
                <SkillBadge name="GovCloud" icon={Shield} />
                <SkillBadge name="IPv6 Integration" icon={Globe} />
                <SkillBadge name="Multi-region CDN" icon={Server} />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Server size={20} className="text-blue-400" /> Backend Development
              </h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Spring Boot" icon={Server} />
                <SkillBadge name="Node.js" icon={Terminal} />
                <SkillBadge name="MVC" icon={Code} />
                <SkillBadge name="REST APIs" icon={Globe} />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Smartphone size={20} className="text-blue-400" /> Mobile Development
              </h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Android SDK" />
                <SkillBadge name="Jetpack Compose" />
                <SkillBadge name="React Native" />
                <SkillBadge name="iOS (Xcode)" />
                <SkillBadge name="Mobile SDKs" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Code size={20} className="text-blue-400" /> Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="React" icon={Code} />
                <SkillBadge name="Next.js" icon={Code} />
                <SkillBadge name="CloudScape" icon={Globe} />
                <SkillBadge name="HTML5/CSS3" icon={Code} />
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
                <SkillBadge name="TDD" />
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

            {/* Mobile View */}
            <div className="md:hidden space-y-8">
              {EXPERIENCES.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  data={exp}
                  side="left"
                  isFullWidth={exp.grid === 'center'}
                />
              ))}
            </div>

            {/* Desktop View */}
            <div className="hidden md:block">
              {(() => {
                const groups = [];
                let currentSplitGroup = { left: [], right: [] };

                EXPERIENCES.forEach((exp) => {
                  if (exp.grid === 'center') {
                    if (currentSplitGroup.left.length > 0 || currentSplitGroup.right.length > 0) {
                      groups.push({ type: 'split', ...currentSplitGroup });
                      currentSplitGroup = { left: [], right: [] };
                    }
                    groups.push({ type: 'center', item: exp });
                  } else {
                    if (exp.grid === 'left') currentSplitGroup.left.push(exp);
                    else currentSplitGroup.right.push(exp);
                  }
                });

                if (currentSplitGroup.left.length > 0 || currentSplitGroup.right.length > 0) {
                  groups.push({ type: 'split', ...currentSplitGroup });
                }

                return groups.map((group, gIdx) => {
                  if (group.type === 'center') {
                    return (
                      <div key={gIdx} className="mb-12 relative z-10">
                        <ExperienceCard data={group.item} isFullWidth={true} />
                      </div>
                    );
                  } else {
                    return (
                      <div key={gIdx} className="flex gap-10 mb-12">
                        <div className="w-1/2 flex flex-col gap-12">
                          {group.left.map((item, i) => (
                            <ExperienceCard key={i} data={item} side="left" />
                          ))}
                        </div>
                        <div className="w-1/2 flex flex-col gap-12">
                          {group.right.map((item, i) => (
                            <ExperienceCard key={i} data={item} side="right" />
                          ))}
                        </div>
                      </div>
                    );
                  }
                });
              })()}
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
                  <p className="text-slate-400 text-sm mt-1">2008 • Major in Information Technology</p>
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
            <a href="mailto:acsureja@gmail.com" className="text-slate-400 hover:text-white transition-colors">
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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioContent />} />
        <Route path="/blog" element={<BlogDashboard />} />
        <Route path="/blog/:slug" element={<BlogDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;