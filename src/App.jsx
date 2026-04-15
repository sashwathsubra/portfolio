import { motion } from "framer-motion";
import { 
  ArrowUpRight, Github, Linkedin, Mail, Phone, 
  Code2, Database, BrainCircuit, ShieldCheck, FileText, Briefcase, GraduationCap
} from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-300 font-sans selection:bg-white selection:text-black">
      
      {/* Minimalist Header */}
      <header className="fixed w-full top-0 z-50 bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-semibold text-lg tracking-tight text-white">S Sashwath Subramaniam</span>
          <div className="flex gap-5 items-center">
            <a href="https://github.com/sashwathsubra" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/s-sashwath-subramaniam-b460aa328/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://www.hackerrank.com/profile/sashwathsub" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-400 hover:text-[#2EC866] transition-colors">
              HackerRank
            </a>
            <a href="https://www.credly.com/users/s-sashwath-subramaniam" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-400 hover:text-[#FF6B00] transition-colors hidden sm:block">
              Credly
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-24">
        
        {/* HERO SECTION */}
        <motion.section 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-800/50 border border-zinc-700/50 text-xs font-medium text-zinc-300 tracking-wide uppercase">
            B.E. Computer Science & Engineering
          </div>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-tight">
            Software Engineer & <br className="hidden md:block"/>AI/ML Developer.
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Specializing in full-stack commercial web platforms, predictive machine learning models, and IoT network architecture. Focused on scalable systems and data-driven solutions.
          </p>
          <div className="flex flex-wrap gap-4 pt-4 text-sm font-medium">
            <a href="mailto:sashwathsub@gmail.com" className="flex items-center gap-2 text-zinc-900 bg-white hover:bg-zinc-200 px-5 py-2.5 rounded-md transition-colors">
              <Mail size={16} /> sashwathsub@gmail.com
            </a>
            <span className="flex items-center gap-2 text-zinc-300 px-5 py-2.5 border border-zinc-700 rounded-md bg-zinc-900/50">
              <Phone size={16} /> +91 8681987243
            </span>
          </div>
        </motion.section>

        <hr className="border-zinc-800/80" />

        {/* CORE COMPETENCIES */}
        <motion.section 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          <div className="md:col-span-1">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6">Technical Skills</h2>
          </div>
          <div className="md:col-span-3 grid sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-medium mb-3"><Code2 size={18} className="text-zinc-400"/> Programming & Web</div>
              <p className="text-zinc-400 text-sm leading-relaxed">Python, SQL, Java, C, C++. Full-stack web development utilizing React, Git version control, and production deployment pipelines.</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-medium mb-3"><BrainCircuit size={18} className="text-zinc-400"/> Machine Learning</div>
              <p className="text-zinc-400 text-sm leading-relaxed">Development of predictive modeling algorithms, data analytics, and automated detection systems (NLP & Code Structure analysis).</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-medium mb-3"><ShieldCheck size={18} className="text-zinc-400"/> Networking & Hardware</div>
              <p className="text-zinc-400 text-sm leading-relaxed">Cisco NetAcad certified. Experience with network topologies, Operating System fundamentals, and IoT sensor integration.</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-medium mb-3"><Database size={18} className="text-zinc-400"/> Architecture & Strategy</div>
              <p className="text-zinc-400 text-sm leading-relaxed">MongoDB database management, technical documentation, and implementation of commercial SEO architectures.</p>
            </div>
          </div>
        </motion.section>

        <hr className="border-zinc-800/80" />

        {/* PROJECTS & IMPACT */}
        <motion.section 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          <div className="md:col-span-1">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6">Production & Research</h2>
          </div>
          <div className="md:col-span-3 space-y-12">
            
            <div className="group">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-medium text-white">Brim Clocks Platform</h3>
                <a href="https://brimclocks.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                  Live Site <ArrowUpRight size={16} />
                </a>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Architected and deployed a full-stack commercial website for a corporate client. Implemented targeted meta-word embedding and technical SEO strategies, successfully scaling the platform to <strong>20,000+ ad-driven views</strong> while maintaining a conversion funnel that processes <strong>~50 daily client enquiries</strong>.
              </p>
              <div className="flex gap-2 mt-4 text-xs font-mono text-zinc-500">
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">React</span>
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">MongoDB</span>
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">SEO</span>
              </div>
            </div>

            <div className="group">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-medium text-white">Machine Learning Suite</h3>
                <a href="https://github.com/sashwathsubra" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                  Source Code <ArrowUpRight size={16} />
                </a>
              </div>
              <ul className="list-disc list-outside ml-4 text-zinc-400 space-y-2 leading-relaxed">
                <li><strong className="text-zinc-300 font-medium">AI Job Predictor:</strong> Engineered a predictive model utilizing historical dataset analysis to forecast industry-specific career opportunities.</li>
                <li><strong className="text-zinc-300 font-medium">AI Plagiarism Detector:</strong> Developed an algorithmic tool designed to detect structural similarities and plagiarism across standard text and programming source code.</li>
              </ul>
              <div className="flex gap-2 mt-4 text-xs font-mono text-zinc-500">
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Python</span>
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Scikit-Learn</span>
              </div>
            </div>

            <div className="group">
              <h3 className="text-xl font-medium text-white mb-2">Hardware & Networking Architecture</h3>
              <ul className="list-disc list-outside ml-4 text-zinc-400 space-y-2 leading-relaxed">
                <li><strong className="text-zinc-300 font-medium">Earthquake Detection Technology:</strong> Conceptualized and authored the architecture for a low-cost, sensor-based IoT network dedicated to rapid seismic detection.</li>
                <li><strong className="text-zinc-300 font-medium">Networking Research Paper:</strong> Authored a technical paper outlining a mathematical approach to optimizing complex networking concepts.</li>
              </ul>
              <div className="flex gap-2 mt-4 text-xs font-mono text-zinc-500">
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">IoT</span>
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">Mathematics</span>
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">C++</span>
              </div>
            </div>

          </div>
        </motion.section>

        <hr className="border-zinc-800/80" />

        {/* CERTIFICATIONS & ACCOLADES */}
        <motion.section 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          <div className="md:col-span-1">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6">Credentials & Awards</h2>
          </div>
          <div className="md:col-span-3 grid sm:grid-cols-2 gap-x-8 gap-y-12">
            
            {/* Certifications List */}
            <div>
              <h3 className="text-white font-medium flex items-center gap-2 mb-4 border-b border-zinc-800 pb-2"><FileText size={16} className="text-zinc-400"/> Industry Certifications</h3>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li><strong className="text-zinc-200 font-medium">Cisco Networking Academy:</strong> Verified in Python Essentials 1, Operating Systems Basics, and Networking Basics.</li>
                <li><strong className="text-zinc-200 font-medium">MongoDB:</strong> MongoDB Basics Certified (Credly Verified).</li>
                <li><strong className="text-zinc-200 font-medium">Wadhwani Foundation:</strong> Completed 42 hours of coursework in business modeling and financial planning via Ignite India.</li>
                <li><strong className="text-zinc-200 font-medium">Continuous Education:</strong> Currently pursuing advanced Python, Data Science, and Network Security via NPTEL & Udemy.</li>
              </ul>
            </div>

            {/* Achievements List */}
            <div>
              <h3 className="text-white font-medium flex items-center gap-2 mb-4 border-b border-zinc-800 pb-2"><GraduationCap size={16} className="text-zinc-400"/> Academic Recognitions</h3>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li><strong className="text-zinc-200 font-medium">ANU STEM Challenge (2021-22):</strong> Awarded Certificate of Merit by the Australian National University for ranking in the Top 15% of the India cohort.</li>
                <li><strong className="text-zinc-200 font-medium">ISRO State Quiz (2020):</strong> Secured 3rd Prize at the state level during World Space Week, conducted by SDSC SHAR, ISRO.</li>
              </ul>
            </div>

            {/* Hackathons */}
            <div className="sm:col-span-2">
              <h3 className="text-white font-medium flex items-center gap-2 mb-4 border-b border-zinc-800 pb-2"><Briefcase size={16} className="text-zinc-400"/> Technical Competitions & Problem Solving</h3>
              <div className="space-y-4 text-sm text-zinc-400">
                <p>
                  <strong className="text-zinc-200 font-medium">HackerRank:</strong> Achieved 6-Star Gold in Data Structures & Algorithms, and 5-Star Silver in Java.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  <p>• 1st Prize – Technical Quiz (Velammal Tech)</p>
                  <p>• 1st Prize – Technical Presentation</p>
                  <p>• Best Paper Award (Velammal Eng.)</p>
                  <p>• 2nd Prize – Debugging (Velammal Eng.)</p>
                  <p>• 2nd Prize – Paper Presentation</p>
                  <p>• 3rd Position – MSEC Codathon (2024-25)</p>
                  <p>• 3rd Prize – AI/ML Tech Event</p>
                  <p>• 1st/3rd Prizes – Cultural JAM Events</p>
                </div>
              </div>
            </div>

          </div>
        </motion.section>

        <hr className="border-zinc-800/80" />

        {/* LEADERSHIP & EXPERIENCE */}
        <motion.section 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          <div className="md:col-span-1">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6">Experience</h2>
          </div>
          <div className="md:col-span-3 space-y-6">
             <div className="flex gap-4 items-start border border-zinc-800/60 bg-zinc-900/30 p-6 rounded-xl">
                <Code2 className="text-zinc-400 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-medium">Freelance Software Developer</h4>
                  <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                    Providing full-stack web development and technical solutions via Upwork. Responsible for end-to-end project lifecycle, from client requirements gathering to deployment and SEO optimization.
                  </p>
                </div>
             </div>
             <div className="flex gap-4 items-start border border-zinc-800/60 bg-zinc-900/30 p-6 rounded-xl">
                <Briefcase className="text-zinc-400 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-medium">Executive, Product Development Club & Operations</h4>
                  <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                    Serve as an Executive at the collegiate level, frequently leading technical teams in competitions. Additionally hold a part-time management role at an insurance broker firm, focusing on operations and bridging the gap between technical concepts and non-technical stakeholders.
                  </p>
                </div>
             </div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}