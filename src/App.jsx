import { motion, useScroll, useTransform } from "framer-motion";
import {
  ExternalLink,
  Terminal,
  TrendingUp,
  Trophy,
  Code2,
  Medal,
  Award,
  Server,
} from "lucide-react";

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const stats = [
    { label: "Brim Clocks Views", value: "20K+", icon: <TrendingUp /> },
    { label: "Daily Leads", value: "50+", icon: <Terminal /> },
    { label: "DSA Rating", value: "6★", icon: <Code2 /> },
    { label: "Awards", value: "10+", icon: <Trophy /> },
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-blue-500/30">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold tracking-tight text-lg">
          Sashwath.dev
        </h1>

        <div className="flex gap-5 text-sm text-gray-400">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#stats" className="hover:text-white">Stats</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      <main className="pt-32 px-6 max-w-6xl mx-auto space-y-32 pb-32">

        {/* HERO */}
        <motion.section
          style={{ opacity: heroOpacity }}
          className="text-center space-y-6"
        >
          <div className="text-sm text-blue-300 border border-white/10 inline-block px-4 py-1 rounded-full bg-white/5">
            CS Student • AI/ML • Full Stack Dev
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            Sashwath Subramaniam
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I build real-world systems with measurable impact — from AI tools to
            production full-stack apps.
          </p>
        </motion.section>

        {/* STATS */}
        <section id="stats" className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition"
            >
              <div className="flex justify-center mb-2 text-blue-400">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold">{s.value}</h3>
              <p className="text-xs text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </section>

        {/* PROJECTS */}
        <section id="projects" className="space-y-10">
          <h2 className="text-3xl font-bold text-center">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Project 1 */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition">
              <h3 className="text-xl font-bold mb-2">
                Brim Clocks
              </h3>
              <a
                href="https://brimclocks.com"
                className="text-blue-400 text-sm flex items-center gap-1"
              >
                Live Site <ExternalLink size={14} />
              </a>
              <p className="text-gray-400 mt-4 text-sm">
                Full-stack client project with SEO optimization generating
                20K+ views and 50+ daily leads.
              </p>
            </div>

            {/* Project 2 */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/40 transition">
              <h3 className="text-xl font-bold mb-2">
                AI ML Suite
              </h3>
              <p className="text-gray-400 text-sm">
                AI Job Predictor + Plagiarism Detector using ML models.
              </p>
            </div>

          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">
            Achievements
          </h2>

          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-400">

            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
              🏆 Codeathon Winner
            </div>

            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
              🥇 Technical Quiz Winner
            </div>

            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
              🧠 6★ HackerRank DSA
            </div>

            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
              🛰 ISRO Quiz Winner
            </div>

            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
              📄 Best Paper Award
            </div>

            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
              ⚙️ AI/ML Projects
            </div>

          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Let’s Work Together</h2>
          <p className="text-gray-400">
            Open to internships, freelance & collaborations
          </p>

          <a
            href="mailto:sashwathsub@gmail.com"
            className="inline-block px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
          >
            Contact Me
          </a>
        </section>

      </main>
    </div>
  );
}