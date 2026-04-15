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
      <nav className="fixed w-full top-0 z-50 bg-[#050505]/60 backdrop-blur-xl border-b border-white/5 p-5 flex justify-between items-center transition-all">
        <span className="font-extrabold text-xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500">
          Sashwath.dev
        </span>
        <div className="flex gap-5 items-center">
          {/* GitHub */}
          <a href="https://github.com/sashwathsubra" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/s-sashwath-subramaniam-b460aa328/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          {/* HackerRank (Custom SVG path for logo) */}
          <a href="https://www.hackerrank.com/profile/sashwathsub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#2EC866] transition-colors font-bold text-sm tracking-wide">
            HackerRank
          </a>
          {/* Email */}
          <a href="mailto:sashwathsub@gmail.com" className="text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
        </div>
      </nav>

      <main className="pt-32 px-6 max-w-6xl mx-auto space-y-32 pb-32">
        {/* Hero Section */}
        <motion.section
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="text-center space-y-8 mt-10 md:mt-20"
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm text-blue-300 mb-6 font-mono font-semibold">
              🎓 B.E. CS @ MSEC | 8.73 GPA | CBSE: 97%
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight">
              Sashwath <br className="hidden md:block"/> Subramaniam.
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto mt-6 font-light leading-relaxed">
              Full-stack developer, AI/ML engineer, and competitive programmer delivering <span className="text-white font-medium">production-ready code</span> and <span className="text-white font-medium">real-world impact</span>.
            </p>
          </motion.div>
        </motion.section>

        {/* The "Flex" Impact Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 hover:border-white/10 transition-colors">
              {item.icon}
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">{item.value}</h3>
              <p className="text-neutral-500 text-[10px] md:text-xs uppercase tracking-widest font-semibold text-center">{item.label}</p>
            </div>
          ))}
        </motion.section>

        {/* Scrolling Tech Stack */}
        <section className="relative flex overflow-x-hidden border-y border-white/5 py-8 bg-white/[0.02]">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex whitespace-nowrap space-x-16 items-center"
          >
            {[...techStack, ...techStack, ...techStack].map((s, i) => (
              <span key={i} className="mx-8 text-2xl font-bold text-neutral-600/80 hover:text-white transition-colors cursor-default">
                {s}
              </span>
            ))}
          </motion.div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />
        </section>

        {/* Projects Section */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Production & Research</h2>
            <p className="text-neutral-400">Deployed platforms, ML algorithms, and IoT architecture.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Project 1: Brim Clocks */}
            <div className="group relative p-8 md:p-10 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-blue-500/30 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Brim Clocks (Client Work)</h3>
                  <a href="https://brimclocks.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm font-medium flex items-center gap-1 hover:text-blue-300">
                    brimclocks.com <ExternalLink size={14} />
                  </a>
                </div>
              </div>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                Full-stack commercial website developed for a corporate client. Engineered comprehensive SEO boosting and meta-word embedding, driving <strong className="text-white">20,000+ ad-driven views</strong> and securing <strong className="text-white">~50 daily customer enquiries</strong>.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-300">
                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">React</span>
                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">MongoDB</span>
                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">SEO Strategy</span>
              </div>
            </div>

            {/* Project 2: AI Suite */}
            <div className="group relative p-8 md:p-10 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-purple-500/30 transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Machine Learning Suite</h3>
                  <span className="text-purple-400 text-sm font-medium flex items-center gap-1">
                    Python & AI Algorithms
                  </span>
                </div>
              </div>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                Developed dual AI models: an <strong>AI Job Predictor</strong> engineered to forecast career opportunities using historical data, and an <strong>AI Plagiarism Detector</strong> designed to accurately identify duplicate text and source code.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-300">
                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">Python</span>
                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">Machine Learning</span>
                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">Data Science</span>
              </div>
            </div>

            {/* Project 3: Hardware & Networking */}
            <div className="group relative p-8 md:p-10 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-emerald-500/30 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] md:col-span-2 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Hardware & Networking Research</h3>
                  <span className="text-emerald-400 text-sm font-medium flex items-center gap-1">
                    IoT & Mathematical Modeling
                  </span>
                </div>
              </div>
              <p className="text-neutral-400 mb-8 leading-relaxed max-w-3xl">
                Authored a comprehensive research paper detailing a mathematical approach to complex networking concepts. Additionally conceptualized and drafted the architecture for an <strong>Earthquake Detection Technology</strong> utilizing sensor-based IoT networks.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-300">
                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">IoT Architecture</span>
                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">Mathematics</span>
                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">Cisco NetAcad</span>
              </div>
            </div>

          </div>
        </section>

        {/* Achievements & Certifications Grid */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Credentials & Accolades</h2>
            <p className="text-neutral-400">Verified competitive programming ranks, global certifications, and hackathon victories.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Cert 1 */}
            <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-start gap-4">
              <Award className="text-blue-400 shrink-0" size={28} />
              <div>
                <h4 className="font-bold text-white text-lg">HackerRank Expert</h4>
                <p className="text-sm text-neutral-400 mt-1">6-Star Gold in DSA, 5-Star Silver in Java. Consistent competitive programmer.</p>
              </div>
            </div>

            {/* Cert 2 */}
            <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-start gap-4">
              <Server className="text-emerald-400 shrink-0" size={28} />
              <div>
                <h4 className="font-bold text-white text-lg">Cisco NetAcad & MongoDB</h4>
                <p className="text-sm text-neutral-400 mt-1">Certified in Python Essentials, Operating System Basics, Network Basics, and MongoDB.</p>
              </div>
            </div>

            {/* Cert 3 */}
            <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-start gap-4">
              <Medal className="text-amber-400 shrink-0" size={28} />
              <div>
                <h4 className="font-bold text-white text-lg">Top 15% STEM Australia</h4>
                <p className="text-sm text-neutral-400 mt-1">Awarded Certificate of Merit in the ANU STEM Challenge Test (India cohort).</p>
              </div>
            </div>

            {/* Cert 4 */}
            <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-start gap-4">
              <Trophy className="text-purple-400 shrink-0" size={28} />
              <div>
                <h4 className="font-bold text-white text-lg">Velammal Tech Dominance</h4>
                <p className="text-sm text-neutral-400 mt-1">1st Prize Tech Quiz, 2nd Prize Debugging, and Best Paper Award at Velammal Institute.</p>
              </div>
            </div>

            {/* Cert 5 */}
            <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-start gap-4">
              <Trophy className="text-cyan-400 shrink-0" size={28} />
              <div>
                <h4 className="font-bold text-white text-lg">ISRO World Space Week</h4>
                <p className="text-sm text-neutral-400 mt-1">Secured 3rd Prize in the State-level Quiz conducted by SDSC SHAR, ISRO.</p>
              </div>
            </div>

            {/* Cert 6 */}
            <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-start gap-4">
              <Award className="text-pink-400 shrink-0" size={28} />
              <div>
                <h4 className="font-bold text-white text-lg">Wadhwani Foundation</h4>
                <p className="text-sm text-neutral-400 mt-1">Completed Ignite India entrepreneurship training (Ideation & Business Modeling).</p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}