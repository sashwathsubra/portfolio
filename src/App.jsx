import { motion } from "framer-motion";
import { 
  ArrowUpRight, Mail, Phone, 
  Code2, Database, BrainCircuit, ShieldCheck, FileText, Briefcase, GraduationCap
} from "lucide-react";

// Variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-300 font-sans selection:bg-white selection:text-black">
      
      {/* Minimalist Header */}
      <header className="fixed w-full top-0 z-50 bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-semibold text-lg tracking-tight text-white">S Sashwath Subramaniam</span>
          <div className="flex gap-4 sm:gap-5 items-center">
            <a href="https://github.com/sashwathsubra" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/s-sashwath-subramaniam-b460aa328/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://www.hackerrank.com/profile/sashwathsub" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-400 hover:text-[#2EC866] transition-colors">
              HackerRank
            </a>
            <a href="https://leetcode.com/sashwathsubramaniam" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-400 hover:text-[#FFA116] transition-colors">
              LeetCode
            </a>
            <a href="https://www.credly.com/users/s-sashwath-subramaniam" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-400 hover:text-[#FF6B00] transition-colors hidden sm:block">
              Credly
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-24 pb-16 space-y-12">
        
        {/* HERO SECTION */}
        <motion.section 
          initial="hidden" animate="visible" variants={containerVariants}
          className="space-y-4"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-800/50 border border-zinc-700/50 text-xs font-medium text-zinc-300 tracking-wide uppercase">
            B.E. Computer Science & Engineering
          </motion.div>
          <motion.div variants={itemVariants} className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-tight"
            >
              Full-Stack Developer <br className="hidden md:block"/>& AI/ML Engineer.
            </motion.h1>
          </motion.div>
          <motion.p variants={itemVariants} className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Specializing in full-stack commercial web platforms, predictive machine learning models, and IoT network architecture. Focused on scalable systems and data-driven solutions.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2 text-sm font-medium">
            <a href="mailto:sashwathsub@gmail.com" className="flex items-center gap-2 text-zinc-900 bg-white hover:bg-zinc-200 px-5 py-2.5 rounded-md transition-colors">
              <Mail size={16} /> sashwathsub@gmail.com
            </a>
            <span className="flex items-center gap-2 text-zinc-300 px-5 py-2.5 border border-zinc-700 rounded-md bg-zinc-900/50">
              <Phone size={16} /> +91 8681987243
            </span>
          </motion.div>
        </motion.section>

        <hr className="border-zinc-800/80" />

        {/* CORE COMPETENCIES */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}
          className="grid md:grid-cols-4 gap-5"
        >
          <div className="md:col-span-1">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">Technical Skills</h2>
          </div>
          <div className="md:col-span-3 grid sm:grid-cols-2 gap-5">
            <div className="space-y-2 group hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-2 text-white font-medium mb-2"><Code2 size={18} className="text-zinc-400"/> Programming & Web</div>
              <p className="text-zinc-400 text-sm leading-relaxed">Python (Strong), Java, SQL, C. Git, and Full-Stack Development pipelines.</p>
            </div>
            <div className="space-y-2 group hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-2 text-white font-medium mb-2"><BrainCircuit size={18} className="text-zinc-400"/> AI & Machine Learning</div>
              <p className="text-zinc-400 text-sm leading-relaxed">Machine Learning, Natural Language Processing (NLP), and Predictive Modeling.</p>
            </div>
            <div className="space-y-2 group hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-2 text-white font-medium mb-2"><ShieldCheck size={18} className="text-zinc-400"/> Networking & OS</div>
              <p className="text-zinc-400 text-sm leading-relaxed">Cisco NetAcad certified. Network Fundamentals, Operating Systems Basics, IoT Systems Design.</p>
            </div>
            <div className="space-y-2 group hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-2 text-white font-medium mb-2"><Database size={18} className="text-zinc-400"/> Other Competencies</div>
              <p className="text-zinc-400 text-sm leading-relaxed">Technical Writing, Leadership, Communication Skills.</p>
            </div>
          </div>
        </motion.section>

        <hr className="border-zinc-800/80" />

        {/* PROJECTS & IMPACT */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}
          className="grid md:grid-cols-4 gap-5"
        >
          <div className="md:col-span-1">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">Production & Research</h2>
          </div>
          <div className="md:col-span-3 space-y-6">
            {/* Reconcile */}
            <motion.div className="group hover:-translate-y-1 transition-transform duration-300" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-medium text-white">Reconcile — Agentic Bookkeeping</h3>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/sashwathsubra/reconcile" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                    Code <ArrowUpRight size={16} />
                  </a>
                  <a href="https://reconcile-app-p4sp.onrender.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                    Live Site <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
              <ul className="list-disc list-outside ml-4 text-zinc-400 space-y-2 leading-relaxed">
                <li>Built an autonomous bookkeeping agent that reasons through each bank transaction step-by-step — parsing, proposing a vendor/category, and assessing confidence.</li>
                <li>Designed confidence-based routing: high-confidence transactions post automatically, moderate request info, and low escalate to a human reviewer.</li>
                <li>Implemented persistent learning from human corrections and end-to-end audit logging of every decision.</li>
              </ul>
              <div className="flex gap-2 mt-3 text-xs font-mono text-zinc-500">
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Python</span>
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">AI Agents</span>
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Full-Stack</span>
              </div>
            </motion.div>

            {/* Live Sign Language Translator */}
            <motion.div className="group hover:-translate-y-1 transition-transform duration-300" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-medium text-white">Live Sign Language Translator</h3>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/sashwathsubra/sign-language-translator-with-custom-hand-sign-recognition" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                    Code <ArrowUpRight size={16} />
                  </a>
                  <a href="https://sign-language-translator-with-custo-beige.vercel.app" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                    Live Site <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Built a real-time sign-language translation web app that tracks live hand landmarks from a webcam feed and matches gestures against a user-trained vocabulary of recorded templates. Implemented a "teach a sign" flow letting users record and store custom gesture templates locally.
              </p>
              <div className="flex gap-2 mt-3 text-xs font-mono text-zinc-500">
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Computer Vision</span>
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Web</span>
              </div>
            </motion.div>

            {/* Brim Clocks */}
            <motion.div className="group hover:-translate-y-1 transition-transform duration-300" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-medium text-white">Brim Clocks Platform</h3>
                <a href="https://www.brimclocks.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                  Live Site <ArrowUpRight size={16} />
                </a>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Built and deployed an end-to-end web platform for a live business. Scaled site traffic to generate <strong>20,000+ ad-driven views</strong> and consistently capture <strong>~50 daily customer enquiries</strong>.
              </p>
              <div className="flex gap-2 mt-3 text-xs font-mono text-zinc-500">
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">React</span>
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Full-Stack</span>
              </div>
            </motion.div>

            {/* PDF Teacher */}
            <motion.div className="group hover:-translate-y-1 transition-transform duration-300" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-medium text-white">PDF Teacher</h3>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/sashwathsubra/PDF-Teacher" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                    Code <ArrowUpRight size={16} />
                  </a>
                  <a href="https://pdf-teacher-phi.vercel.app" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                    Live Site <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Built a web app that lets users upload PDF study material and ask natural-language questions about it, as if asking a teacher.
              </p>
              <div className="flex gap-2 mt-3 text-xs font-mono text-zinc-500">
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">NLP</span>
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Full-Stack</span>
              </div>
            </motion.div>

            {/* AI Job Predictor */}
            <motion.div className="group hover:-translate-y-1 transition-transform duration-300" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-medium text-white">AI Job Predictor</h3>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Developed an ML classification model to predict career opportunities based on user profile inputs. Trained the model on real-world career datasets and deployed it as a functional, user-facing application.
              </p>
              <div className="flex gap-2 mt-3 text-xs font-mono text-zinc-500">
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Machine Learning</span>
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Python</span>
              </div>
            </motion.div>

            {/* Research Papers as Team Lead */}
            <motion.div className="group hover:-translate-y-1 transition-transform duration-300" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
              <h3 className="text-xl font-medium text-white mb-2">Research & Architecture</h3>
              <ul className="list-disc list-outside ml-4 text-zinc-400 space-y-2 leading-relaxed">
                <li>
                  <strong className="text-zinc-300 font-medium">AI Plagiarism Detector:</strong> Engineered an NLP-based detection system to identify plagiarism in both natural language text and source code. Applied advanced similarity techniques for accurate cross-document comparison.
                </li>
                <li>
                  <strong className="text-zinc-300 font-medium">Earthquake Detection System:</strong> Designed a sensor-based IoT architecture for early-warning earthquake detection. Proposed for implementation at Meenakshi Sundararajan Engineering College.
                </li>
                <li>
                  <strong className="text-zinc-300 font-medium">A Mathematical Approach to Networking:</strong> Authored a formal mathematical treatment of core networking principles and protocol concepts. Presented findings at multiple intercollege technical symposia.
                </li>
              </ul>
              <div className="flex gap-2 mt-3 text-xs font-mono text-zinc-500">
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">IoT</span>
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Networking</span>
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">NLP</span>
              </div>
            </motion.div>

          </div>
        </motion.section>

        <hr className="border-zinc-800/80" />

        {/* CERTIFICATIONS & ACCOLADES */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}
          className="grid md:grid-cols-4 gap-5"
        >
          <div className="md:col-span-1">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">Credentials & Awards</h2>
          </div>
          <div className="md:col-span-3 grid sm:grid-cols-2 gap-x-5 gap-y-6">
            
            {/* Certifications List */}
            <motion.div className="hover:-translate-y-1 transition-transform duration-300" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
              <h3 className="text-white font-medium flex items-center gap-2 mb-3 border-b border-zinc-800 pb-2"><FileText size={16} className="text-zinc-400"/> Industry Certifications</h3>
              <ul className="space-y-2.5 text-sm text-zinc-400">
                <li><strong className="text-zinc-200 font-medium">NPTEL:</strong> Data Science for Engineers (Elite); Cryptography & Network Security (Elite); Advanced Computer Networks.</li>
                <li><strong className="text-zinc-200 font-medium">Cisco NetAcad:</strong> Python Essentials 1, Networking Basics, Operating Systems Basics.</li>
                <li><strong className="text-zinc-200 font-medium">IBM SkillsBuild:</strong> Getting Started with Artificial Intelligence.</li>
                <li><strong className="text-zinc-200 font-medium">Udemy:</strong> Complete Python Bootcamp (In Progress).</li>
              </ul>
            </motion.div>

            {/* Achievements List */}
            <motion.div className="hover:-translate-y-1 transition-transform duration-300" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
              <h3 className="text-white font-medium flex items-center gap-2 mb-3 border-b border-zinc-800 pb-2"><GraduationCap size={16} className="text-zinc-400"/> Problem Solving & Achievements</h3>
              <ul className="space-y-2.5 text-sm text-zinc-400">
                <li><strong className="text-zinc-200 font-medium">HackerRank:</strong> 6-Star Gold in Data Structures & Algorithms (DSA), 5-Star Silver in Java.</li>
                <li><strong className="text-zinc-200 font-medium">LeetCode:</strong> Multiple Hard-difficulty DSA problems solved.</li>
              </ul>
            </motion.div>

          </div>
        </motion.section>

        <hr className="border-zinc-800/80" />

        {/* LEADERSHIP & EXPERIENCE */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}
          className="grid md:grid-cols-4 gap-5"
        >
          <div className="md:col-span-1">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">Experience</h2>
          </div>
          <div className="md:col-span-3 space-y-5">
             <motion.div className="flex gap-4 items-start border border-zinc-800/60 bg-zinc-900/30 p-5 rounded-xl hover:-translate-y-1 transition-transform duration-300" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
                <Code2 className="text-zinc-400 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-medium">Executive — Product Development Club</h4>
                  <p className="text-sm text-zinc-400 mt-1.5 leading-relaxed">
                    Meenakshi Sundararajan Engineering College. Directed product ideation sessions and conducted technical workshops to upskill club members.
                  </p>
                </div>
             </motion.div>
             <motion.div className="flex gap-4 items-start border border-zinc-800/60 bg-zinc-900/30 p-5 rounded-xl hover:-translate-y-1 transition-transform duration-300" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
                <Briefcase className="text-zinc-400 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-medium">Secretary — EDI CSE Club</h4>
                  <p className="text-sm text-zinc-400 mt-1.5 leading-relaxed">
                    Meenakshi Sundararajan Engineering College. Directed event planning and execution. Devised outreach strategies that grew club membership beyond its quota.
                  </p>
                </div>
             </motion.div>
             <motion.div className="flex gap-4 items-start border border-zinc-800/60 bg-zinc-900/30 p-5 rounded-xl hover:-translate-y-1 transition-transform duration-300" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
                <Database className="text-zinc-400 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-medium">Part-Time People Management</h4>
                  <p className="text-sm text-zinc-400 mt-1.5 leading-relaxed">
                    Insurance Broker Firm. Coordinated team operations and facilitated seamless client interactions while balancing academic commitments.
                  </p>
                </div>
             </motion.div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}