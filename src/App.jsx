import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ExternalLink, Mail, Terminal, TrendingUp, Trophy, Code2 } from "lucide-react";

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const stats = [
    { label: "Users Reached", value: "20K+", icon: <TrendingUp className="text-blue-400 mb-2" size={24} /> },
    { label: "Daily Leads", value: "50+", icon: <Terminal className="text-purple-400 mb-2" size={24} /> },
    { label: "Projects Built", value: "10+", icon: <Code2 className="text-emerald-400 mb-2" size={24} /> },
    { label: "Competitions Won", value: "8+", icon: <Trophy className="text-amber-400 mb-2" size={24} /> },
  ];

  const techStack = ["Python", "React", "MongoDB", "AI/ML", "Networking", "Java", "C++", "Three.js", "Tailwind"];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 font-sans overflow-hidden">
      {/* Glassmorphism Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-[#050505]/60 backdrop-blur-xl border-b border-white/5 p-5 flex justify-between items-center transition-all">
        <span className="font-extrabold text-xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500">
          Sashwath.dev
        </span>
        <div className="flex gap-5">
          <a href="https://github.com/sashwathsubra" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github size={22} />
          </a>
          <a href="mailto:sashwath@example.com" className="text-gray-400 hover:text-white transition-colors">
            <Mail size={22} />
          </a>
        </div>
      </nav>

      <main className="pt-32 px-6 max-w-6xl mx-auto space-y-32 pb-32">
        {/* Hero Section with Scroll Parallax */}
        <motion.section
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="text-center space-y-8 mt-10 md:mt-20"
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm text-blue-300 mb-6 font-mono">
              🚀 2nd Year CS Student @ MSEC
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight">
              Building systems <br className="hidden md:block"/> that <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-500">scale.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto mt-6 font-light">
              I engineer high-impact digital experiences and AI-driven tools that solve real-world problems.
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
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-1">{item.value}</h3>
              <p className="text-neutral-500 text-xs md:text-sm uppercase tracking-widest font-semibold">{item.label}</p>
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

        {/* About Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
          <p className="text-neutral-400 leading-relaxed text-lg md:text-xl font-light">
            I am a Computer Science student at Meenakshi Sundararajan Engineering College, deeply passionate about building systems that create measurable impact. 
            From developing full-stack platforms serving thousands of users to deploying low-cost campus-wide IoT networks, I focus on engineering solutions that matter.
          </p>
        </motion.section>

        {/* Recruiter-Optimized Project Cards */}
        <section className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center tracking-tight">Featured Architecture</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Project 1 */}
            <div className="group relative p-8 md:p-10 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-blue-500/30 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Brim Clocks Platform</h3>
                  <a href="https://brimclocks.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm font-medium flex items-center gap-1 hover:text-blue-300">
                    Live Demo <ExternalLink size={14} />
                  </a>
                </div>
              </div>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                Full-stack platform scaling to 20K+ users. Engineered to capture 50+ daily leads with a highly optimized conversion funnel and seamless UI/UX.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-300">
                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">React</span>
                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">MongoDB</span>
                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">Framer Motion</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative p-8 md:p-10 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-purple-500/30 transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Earthquake Warning Network</h3>
                  <a href="#" className="text-neutral-500 text-sm font-medium flex items-center gap-1 cursor-not-allowed">
                    Private Repo
                  </a>
                </div>
              </div>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                Low-cost campus-wide sensor network utilizing MEMS gyroscopes and customized communication boards for rapid seismic detection.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-300">
                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">Hardware</span>
                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">C++</span>
                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">Networking</span>
              </div>
            </div>

          </div>
        </section>

        {/* GitHub Stats */}
        <section className="flex flex-col items-center pt-10 space-y-6">
          <h2 className="text-2xl font-bold text-neutral-300">Open Source Impact</h2>
          <motion.img 
            whileHover={{ scale: 1.02 }}
            src="https://github-readme-stats.vercel.app/api?username=sashwathsubra&show_icons=true&theme=transparent&bg_color=050505&hide_border=true&title_color=3b82f6&text_color=a3a3a3&icon_color=3b82f6" 
            alt="GitHub Stats" 
            className="rounded-xl border border-white/5 bg-[#0a0a0a] p-4" 
          />
        </section>

      </main>
    </div>
  );
}