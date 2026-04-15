import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Terminal, TrendingUp, Trophy, Code2, Medal, Award, Server } from "lucide-react";

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const stats = [
    { label: "Brim Clocks Views", value: "20K+", icon: <TrendingUp className="text-blue-400 mb-2" size={24} /> },
    { label: "Daily Client Leads", value: "50+", icon: <Terminal className="text-purple-400 mb-2" size={24} /> },
    { label: "DSA (HackerRank)", value: "6-Star", icon: <Code2 className="text-emerald-400 mb-2" size={24} /> },
    { label: "Tech Prizes Won", value: "10+", icon: <Trophy className="text-amber-400 mb-2" size={24} /> },
  ];

  const techStack = ["Python", "SQL", "React", "MongoDB", "Java", "C", "AI/ML", "Cisco NetAcad", "SEO", "Git"];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 font-sans overflow-hidden">
      {/* Glassmorphism Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 p-5 flex justify-between items-center transition-all">
        <span className="font-extrabold text-xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500">
          Sashwath.dev
        </span>
        <div className="flex gap-5 items-center">
          <a href="https://github.com/sashwathsubra" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/s-sashwath-subramaniam-b460aa328/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://www.hackerrank.com/profile/sashwathsub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#2EC866] transition-colors font-bold text-sm tracking-wide">
            HackerRank
          </a>
        </div>
      </nav>

      <main className="pt-32 px-6 max-w-6xl mx-auto space-y-32 pb-32">
        {/* Hero Section */}
        <motion.section style={{ opacity: heroOpacity, scale: heroScale }} className="text-center space-y-8 mt-10 md:mt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <div className="inline-block py-1 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400 mb-6 font-mono font-semibold">
              🚀 Full-Stack Dev & Competitive Programmer
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight">
              Sashwath <br className="hidden md:block"/> Subramaniam.
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto mt-6 font-light leading-relaxed">
              I build <span className="text-white font-medium">high-performance systems</span>, deploy <span className="text-white font-medium">AI architectures</span>, and write production-ready code that solves real-world problems.
            </p>
          </motion.div>
        </motion.section>

        {/* The "Flex" Impact Section */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-colors">
              {item.icon}
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">{item.value}</h3>
              <p className="text-neutral-500 text-[10px] md:text-xs uppercase tracking-widest font-semibold text-center">{item.label}</p>
            </div>
          ))}
        </motion.section>

        {/* Projects Section */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Production & Architecture</h2>
            <p className="text-neutral-400">Deployed platforms, ML algorithms, and IoT systems.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1: Brim Clocks */}
            <div className="group relative p-8 md:p-10 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-blue-500/30 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Brim Clocks (Client Platform)</h3>
                    <span className="text-blue-400 text-sm font-medium flex items-center gap-1">Commercial Full-Stack Development</span>
                  </div>
                </div>
                <p className="text-neutral-400 mb-8 leading-relaxed">
                  Engineered a corporate website with comprehensive SEO boosting and meta-word embedding. Successfully drove <strong className="text-white">20,000+ ad-driven views</strong> and secured <strong className="text-white">~50 daily customer enquiries</strong>.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-300">
                  <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">React</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">MongoDB</span>
                </div>
                <a href="https://brimclocks.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors font-medium text-sm w-fit">
                  View Live Site <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Project 2: AI Suite */}
            <div className="group relative p-8 md:p-10 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-purple-500/30 transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Machine Learning Suite</h3>
                    <span className="text-purple-400 text-sm font-medium flex items-center gap-1">Python & Predictive Analytics</span>
                  </div>
                </div>
                <p className="text-neutral-400 mb-8 leading-relaxed">
                  Developed dual AI models: an <strong>AI Job Predictor</strong> engineered to forecast career opportunities using historical data, and an <strong>AI Plagiarism Detector</strong> designed to accurately identify duplicate text and source code.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-300">
                  <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">Python</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">ML</span>
                </div>
                <a href="https://github.com/sashwathsubra" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors font-medium text-sm w-fit">
                  View Source Code <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Project 3: Hardware & Networking */}
            <div className="group relative p-8 md:p-10 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-emerald-500/30 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] md:col-span-2">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Earthquake IoT Architecture</h3>
                  <span className="text-emerald-400 text-sm font-medium flex items-center gap-1">Hardware & Networking Research</span>
                </div>
              </div>
              <p className="text-neutral-400 mb-8 leading-relaxed max-w-3xl">
                Conceptualized and drafted the architecture for an <strong>Earthquake Detection Technology</strong> utilizing sensor-based IoT networks. Authored a comprehensive research paper detailing a mathematical approach to complex networking concepts.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-300">
                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">IoT Architecture</span>
                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">Mathematics</span>
                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">Cisco NetAcad</span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Strengths & Accolades */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Verified Accolades</h2>
            <p className="text-neutral-400">Competitive programming ranks, global certifications, and hackathon victories.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-start gap-4 hover:border-white/20 transition-colors">
              <Award className="text-blue-400 shrink-0" size={28} />
              <div>
                <h4 className="font-bold text-white text-lg">HackerRank Expert</h4>
                <p className="text-sm text-neutral-400 mt-1">6-Star Gold in DSA, 5-Star Silver in Java. High-ranking competitive programmer.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-start gap-4 hover:border-white/20 transition-colors">
              <Medal className="text-amber-400 shrink-0" size={28} />
              <div>
                <h4 className="font-bold text-white text-lg">Top 15% STEM Australia</h4>
                <p className="text-sm text-neutral-400 mt-1">Awarded Certificate of Merit in the ANU STEM Challenge Test (India cohort).</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-start gap-4 hover:border-white/20 transition-colors">
              <Trophy className="text-cyan-400 shrink-0" size={28} />
              <div>
                <h4 className="font-bold text-white text-lg">ISRO State Finalist</h4>
                <p className="text-sm text-neutral-400 mt-1">Secured 3rd Prize in the State-level Quiz conducted by SDSC SHAR, ISRO.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-start gap-4 hover:border-white/20 transition-colors">
              <Server className="text-emerald-400 shrink-0" size={28} />
              <div>
                <h4 className="font-bold text-white text-lg">Cisco & MongoDB Certified</h4>
                <p className="text-sm text-neutral-400 mt-1">Official certifications in Python Essentials, OS Basics, Networks, and MongoDB.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-start gap-4 hover:border-white/20 transition-colors">
              <Trophy className="text-purple-400 shrink-0" size={28} />
              <div>
                <h4 className="font-bold text-white text-lg">Hackathon Dominance</h4>
                <p className="text-sm text-neutral-400 mt-1">1st Prize Tech Quiz, 1st Prize Codeathon, 2nd Prize Debugging at Velammal Tech.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-start gap-4 hover:border-white/20 transition-colors">
              <Award className="text-pink-400 shrink-0" size={28} />
              <div>
                <h4 className="font-bold text-white text-lg">Wadhwani Foundation</h4>
                <p className="text-sm text-neutral-400 mt-1">Ignite India entrepreneurship training (Ideation, Scaling & Business Modeling).</p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}