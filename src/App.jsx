import { motion } from "framer-motion";
import { 
  ExternalLink, Terminal, TrendingUp, Trophy, Code2, 
  Medal, Award, Server, BrainCircuit, Globe, Briefcase, Network
} from "lucide-react";

export default function Portfolio() {
  const stats = [
    { label: "Ad-Driven Views (Client)", value: "20K+", icon: <TrendingUp className="text-blue-400 mb-2" size={24} /> },
    { label: "Daily Client Leads", value: "50+", icon: <Terminal className="text-purple-400 mb-2" size={24} /> },
    { label: "HackerRank (DSA)", value: "6-Star", icon: <Code2 className="text-emerald-400 mb-2" size={24} /> },
    { label: "Tech Prizes & Hackathons", value: "10+", icon: <Trophy className="text-amber-400 mb-2" size={24} /> },
  ];

  const techStack = [
    "Python", "React", "MongoDB", "SQL", "Java", "C++", 
    "AI/ML Algorithms", "Cisco NetAcad", "IoT Architecture", "SEO Strategy"
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans overflow-hidden relative selection:bg-blue-500/30">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-0 z-[-1] h-screen w-screen bg-[#0B1120] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.15),rgba(255,255,255,0))]"></div>

      {/* Glassmorphism Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-[#0B1120]/70 backdrop-blur-xl border-b border-slate-800/50 p-5 flex justify-between items-center transition-all">
        <span className="font-extrabold text-xl tracking-tighter text-white">
          Sashwath<span className="text-blue-500">.dev</span>
        </span>
        <div className="flex gap-4 md:gap-6 items-center">
          <a href="https://github.com/sashwathsubra" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/s-sashwath-subramaniam-b460aa328/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0A66C2] transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://www.hackerrank.com/profile/sashwathsub" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#2EC866] transition-colors font-bold text-sm tracking-wide">
            HackerRank
          </a>
          <a href="https://www.credly.com/users/s-sashwath-subramaniam" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#FF6B00] transition-colors font-bold text-sm tracking-wide hidden md:block">
            Credly
          </a>
        </div>
      </nav>

      <main className="pt-32 px-6 max-w-6xl mx-auto space-y-24 md:space-y-32 pb-32">
        
        {/* Hero Section */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center space-y-8 mt-10">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400 font-mono font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            B.E. Computer Science & Engineering
          </div>
          {/* Changed name and made it bolder */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight text-white">
            S Sashwath <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Subramaniam.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mt-6 leading-relaxed">
            I am a Full-Stack Developer, AI/ML Specialist, and highly-ranked Competitive Programmer. 
            I build commercial web platforms, design machine learning algorithms, and research IoT architecture.
          </p>
        </motion.section>

        {/* The Impact Section */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-8 rounded-3xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all shadow-lg shadow-black/20">
              {item.icon}
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{item.value}</h3>
              <p className="text-slate-400 text-[10px] md:text-xs uppercase tracking-widest font-semibold text-center">{item.label}</p>
            </div>
          ))}
        </motion.section>

        {/* Scrolling Tech Stack */}
        <section className="relative flex overflow-x-hidden border-y border-slate-800/50 py-8 bg-slate-900/20">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0B1120] to-transparent z-10" />
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex whitespace-nowrap space-x-16 items-center"
          >
            {[...techStack, ...techStack, ...techStack].map((s, i) => (
              <span key={i} className="mx-8 text-xl font-bold text-slate-600 hover:text-slate-300 transition-colors cursor-default">
                {s}
              </span>
            ))}
          </motion.div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0B1120] to-transparent z-10" />
        </section>

        {/* Featured Projects Grid */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Commercial & Research Projects</h2>
            <p className="text-slate-400">Deployed platforms, ML algorithms, and IoT systems.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Project 1: Brim Clocks */}
            <div className="group relative p-8 md:p-10 rounded-3xl bg-slate-800/30 border border-slate-700/50 hover:border-blue-500/50 transition-all shadow-xl">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                    <Globe className="text-blue-400" /> Brim Clocks
                  </h3>
                  <span className="text-blue-400 text-sm font-medium">Commercial Freelance Client</span>
                </div>
              </div>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Developed a full-stack corporate website from scratch. Engineered a comprehensive SEO strategy with targeted meta-word embedding that successfully generated <strong className="text-white">20,000+ ad-driven views</strong> and captures <strong className="text-white">~50 daily customer enquiries</strong>.
              </p>
              <div className="flex flex-col gap-5 mt-auto">
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  <span className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">React</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">MongoDB</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">SEO Architecture</span>
                </div>
                {/* Made link bolder and brighter */}
                <a href="https://brimclocks.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all font-bold text-sm w-fit shadow-md shadow-blue-500/20 active:scale-95">
                  View Live Platform <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Project 2: AI Suite */}
            <div className="group relative p-8 md:p-10 rounded-3xl bg-slate-800/30 border border-slate-700/50 hover:border-purple-500/50 transition-all shadow-xl">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                    <BrainCircuit className="text-purple-400" /> AI Application Suite
                  </h3>
                  <span className="text-purple-400 text-sm font-medium">Machine Learning & Analytics</span>
                </div>
              </div>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Designed and deployed dual AI models. The <strong>AI Job Predictor</strong> forecasts career opportunities using historical dataset analysis. The <strong>AI Plagiarism Detector</strong> accurately identifies duplicate structures in standard text and programming source code.
              </p>
              <div className="flex flex-col gap-5 mt-auto">
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  <span className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">Python</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">Machine Learning</span>
                </div>
                {/* Made link bolder and brighter */}
                <a href="https://github.com/sashwathsubra" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-xl transition-all font-bold text-sm w-fit shadow-md active:scale-95">
                  View Source Code <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Project 3: Hardware & Networking */}
            <div className="group relative p-8 md:p-10 rounded-3xl bg-slate-800/30 border border-slate-700/50 hover:border-emerald-500/50 transition-all shadow-xl md:col-span-2">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                    <Network className="text-emerald-400" /> Hardware & Network Research
                  </h3>
                  <span className="text-emerald-400 text-sm font-medium">IoT Concept & Mathematical Modeling</span>
                </div>
              </div>
              <p className="text-slate-300 mb-8 leading-relaxed max-w-4xl">
                Authored a detailed research paper providing a mathematical approach to complex networking concepts. Additionally conceptualized and drafted the technical architecture for an <strong>Earthquake Detection Technology</strong> relying on low-cost, sensor-based IoT networks for rapid seismic detection.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">IoT Architecture</span>
                <span className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">Mathematical Modeling</span>
                <span className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">Hardware Integration</span>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive: Certifications & Accolades */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Verified Credentials</h2>
            <p className="text-slate-400">Global certifications, competitive ranks, and hackathon victories.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="p-6 rounded-2xl bg-slate-800/20 border border-slate-700/50 flex items-start gap-5 hover:bg-slate-800/40 transition-colors relative group">
              {/* Made text bolder in card */}
              <Code2 className="text-blue-400 shrink-0 mt-1 group-hover:scale-110 transition-transform" size={28} />
              <div>
                <h4 className="font-bold text-white text-lg">HackerRank DSA Expert</h4>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  Achieved a massive <strong className="text-white font-bold">6-Star Gold rank in Data Structures & Algorithms</strong>, alongside a 5-Star Silver rank in Java. Consistently highly ranked in competitive programming.
                </p>
              </div>
              {/* Added a subtle glow behind icon on hover */}
              <div className="absolute inset-0 z-[-1] rounded-2xl group-hover:bg-blue-950/10 blur-xl"></div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/20 border border-slate-700/50 flex items-start gap-5 hover:bg-slate-800/40 transition-colors">
              <Server className="text-emerald-400 shrink-0 mt-1" size={28} />
              <div>
                <h4 className="font-bold text-white text-lg">Cisco NetAcad & MongoDB Certified</h4>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  Hold official, verified certificates in <strong className="text-white">Python Essentials 1, Operating Systems Basics,</strong> and <strong className="text-white">Networking Basics</strong> via Cisco, plus MongoDB Basics.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/20 border border-slate-700/50 flex items-start gap-5 hover:bg-slate-800/40 transition-colors">
              <Award className="text-amber-400 shrink-0 mt-1" size={28} />
              <div>
                <h4 className="font-bold text-white text-lg">ANU STEM Challenge - Top 15%</h4>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  Awarded a Certificate of Merit by the <strong className="text-white">Australian National University</strong> for ranking in the Top 15% of the India cohort during the rigorous STEM Challenge Test.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/20 border border-slate-700/50 flex items-start gap-5 hover:bg-slate-800/40 transition-colors">
              <Globe className="text-cyan-400 shrink-0 mt-1" size={28} />
              <div>
                <h4 className="font-bold text-white text-lg">ISRO State Quiz - 3rd Prize</h4>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  Secured 3rd Prize at the state level during World Space Week, conducted directly by the <strong className="text-white">Satish Dhawan Space Centre (SDSC SHAR), ISRO</strong>.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/20 border border-slate-700/50 flex items-start gap-5 hover:bg-slate-800/40 transition-colors">
              <Trophy className="text-purple-400 shrink-0 mt-1" size={28} />
              <div>
                <h4 className="font-bold text-white text-lg">Hackathon Dominance</h4>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  Consistent winner across collegiate symposiums: <strong className="text-white">1st Prize Tech Quiz, 1st Prize Codeathon (MSEC), 2nd Prize Debugging</strong>, and Best Paper Award at Velammal Engineering College.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/20 border border-slate-700/50 flex items-start gap-5 hover:bg-slate-800/40 transition-colors">
              <Briefcase className="text-pink-400 shrink-0 mt-1" size={28} />
              <div>
                <h4 className="font-bold text-white text-lg">Leadership & Experience</h4>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  Completed the <strong className="text-white">Wadhwani Foundation Ignite India</strong> entrepreneurship training. Currently serving as Executive for the Product Development Club and working as a Freelance Developer on Upwork.
                </p>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}