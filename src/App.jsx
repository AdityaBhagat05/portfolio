// import React from 'react';
// import { motion } from 'framer-motion';
// import { Terminal, ShieldCheck, Cpu, Database, Github, Linkedin, Code2, Binary } from 'lucide-react';

// const NavLink = ({ href, label, number }) => (
//   <a href={href} className="group flex items-center gap-2 hover:text-emerald-400 transition-colors">
//     <span className="text-[8px] font-mono text-emerald-500/50 group-hover:text-emerald-400">{number}</span>
//     <span className="text-[10px] uppercase tracking-[0.2em] font-bold">{label}</span>
//   </a>
// );

// const MetricBox = ({ label, value, description }) => (
//   <div className="bg-black/40 border border-white/5 p-4 rounded-lg">
//     <div className="text-[10px] text-zinc-500 mb-1 uppercase tracking-widest font-bold">{label}</div>
//     <div className="text-2xl font-black text-white">{value}</div>
//     <div className="text-[10px] text-zinc-400 mt-1 uppercase leading-tight">{description}</div>
//   </div>
// );

// export default function PortfolioApp() {
//   const GITHUB_URL = "https://github.com/AdityaBhagat05";
//   const RESUME_URL = "https://drive.google.com/file/d/1RpgLUu55IzuxvhNyH63UvhSJGHWqUV7d/view?usp=sharing";

//   return (
//     <div className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-emerald-500/30">
//       <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl px-8 py-5 flex justify-between items-center">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 bg-emerald-500 flex items-center justify-center text-black font-black italic rounded-sm shadow-[0_0_20px_rgba(16,185,129,0.2)]">A</div>
//           <div className="flex flex-col">
//             <span className="font-mono text-white font-bold tracking-tighter text-sm uppercase">Aditya Bhagat</span>
//             <span className="text-[9px] text-emerald-500 font-mono leading-none">BUILD_VERSION: 2026.1.0</span>
//           </div>
//         </div>
//         <div className="hidden md:flex gap-10">
//           <NavLink href="#systems" label="Systems" number="01" />
//           <NavLink href="#experience" label="Experience" number="02" />
//           <NavLink href="#projects" label="Projects" number="03" />
//         </div>
//       </nav>

//       <section className="pt-48 pb-32 px-8 max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
//           <div className="lg:col-span-8">
//             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 text-emerald-500 font-mono text-xs mb-6 px-3 py-1 bg-emerald-500/5 border border-emerald-500/10 rounded-full w-fit">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
//               </span>
//               CSE IoT // VIT COMPUTER SCIENCE
//             </motion.div>
//             <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 text-white">
//               BUILDING <br/>RELIABLE <br/><span className="text-emerald-500">INFRASTRUCTURE.</span>
//             </h1>
//             <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-medium">
//               Software Engineer specializing in automated frameworks, distributed systems, 
//               and backend architecture.
//             </p>
//             <div className="mt-12 flex gap-4">
//               <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-8 py-4 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all">
//                 Download Resume
//               </a>
//               <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="border border-white/10 px-8 py-4 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all">
//                 View Github
//               </a>
//             </div>
//           </div>
//           <div className="lg:col-span-4 space-y-4">
//             <div className="bg-white/5 border border-white/10 p-6 rounded-sm font-mono text-[11px] space-y-3">
//               <div className="text-zinc-500 mb-4 pb-2 border-b border-white/5 uppercase tracking-widest font-bold">// SYSTEM_IDENTITY</div>
//               <div className="flex justify-between"><span>GPA</span> <span className="text-white">8.81 / 10.0</span></div>
//               <div className="flex justify-between"><span>SPECIALIZATION</span> <span className="text-white">IOT / CSE</span></div>
//               <div className="flex justify-between"><span>LOCATION</span> <span className="text-white">VELLORE, IN</span></div>
//               <div className="flex justify-between"><span>STATUS</span> <span className="text-emerald-500 underline underline-offset-4">HIRING_READY</span></div>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 p-4 rounded-sm flex flex-col items-center justify-center gap-2 hover:border-emerald-500/30 transition-colors group">
//                 <Github className="w-5 h-5 group-hover:text-emerald-500" />
//                 <span className="text-[10px] font-bold uppercase">Github</span>
//               </a>
//               <a href="https://linkedin.com/in/aditya-bhagat-82b52a288" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 p-4 rounded-sm flex flex-col items-center justify-center gap-2 hover:border-emerald-500/30 transition-colors group">
//                 <Linkedin className="w-5 h-5 group-hover:text-emerald-500" />
//                 <span className="text-[10px] font-bold uppercase">LinkedIn</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="systems" className="py-32 px-8 max-w-7xl mx-auto border-t border-white/5">
//         <div className="mb-20">
//           <h2 className="text-4xl font-black text-white tracking-tighter uppercase">Engineering Stack_</h2>
//           <p className="text-zinc-500 font-mono text-sm mt-2">Tools and frameworks for scalable development</p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 border border-white/5 bg-white/5">
//           <div className="bg-[#050505] p-10 space-y-6">
//             <Terminal className="w-8 h-8 text-blue-400" />
//             <h3 className="text-white font-bold uppercase tracking-widest text-sm">Languages</h3>
//             <div className="flex flex-wrap gap-2 text-[10px] font-mono">
//               {['Java', 'Python', 'C/C++', 'Bash', 'R'].map(s => <span key={s} className="text-zinc-500">{s}</span>)}
//             </div>
//           </div>
//           <div className="bg-[#050505] p-10 space-y-6">
//             <Cpu className="w-8 h-8 text-emerald-400" />
//             <h3 className="text-white font-bold uppercase tracking-widest text-sm">Backend</h3>
//             <div className="flex flex-wrap gap-2 text-[10px] font-mono">
//               {['Spring Boot', 'FastAPI', 'Node.js', 'REST APIs'].map(s => <span key={s} className="text-zinc-500">{s}</span>)}
//             </div>
//           </div>
//           <div className="bg-[#050505] p-10 space-y-6">
//             <Database className="w-8 h-8 text-amber-400" />
//             <h3 className="text-white font-bold uppercase tracking-widest text-sm">Persistence</h3>
//             <div className="flex flex-wrap gap-2 text-[10px] font-mono">
//               {['Oracle 12c', 'MySQL', 'PostgreSQL', 'Pinecone'].map(s => <span key={s} className="text-zinc-500">{s}</span>)}
//             </div>
//           </div>
//           <div className="bg-[#050505] p-10 space-y-6">
//             <ShieldCheck className="w-8 h-8 text-purple-400" />
//             <h3 className="text-white font-bold uppercase tracking-widest text-sm">DevOps</h3>
//             <div className="flex flex-wrap gap-2 text-[10px] font-mono">
//               {['Docker', 'AWS', 'GitHub Actions', 'Linux CLI'].map(s => <span key={s} className="text-zinc-500">{s}</span>)}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="experience" className="py-32 px-8 bg-zinc-950 border-y border-white/5">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
//             <div>
//               <h2 className="text-4xl font-black text-white tracking-tighter uppercase">Professional Impact_</h2>
//               <p className="text-zinc-500 font-mono text-sm mt-2">Production engineering experience</p>
//             </div>
//             <div className="flex gap-4">
//             </div>
//           </div>
//           <div className="bg-white/5 border border-white/10 p-12 rounded-sm group hover:border-emerald-500/30 transition-all">
//             <div className="flex flex-col md:flex-row justify-between mb-8">
//               <div>
//                 <h3 className="text-3xl font-black text-white uppercase tracking-tighter">GenAI Intern</h3>
//                 <p className="text-emerald-500 font-mono font-bold">Hindustan Petroleum Corporation Ltd (HPCL)</p>
//               </div>
//               <span className="text-zinc-500 font-mono text-xs uppercase bg-white/5 h-fit px-4 py-2 rounded-full mt-4 md:mt-0">May — July 2025</span>
//             </div>
//             <p className="text-xl text-zinc-400 leading-relaxed max-w-4xl mb-8">
//               Developed a <span className="text-white">RAG-based framework</span> for automated GST document retrieval. 
//               Implemented semantic search pipelines using Google ADK to improve financial data indexing efficiency.
//             </p>
//             <div className="flex flex-wrap gap-3">
//               {['Python', 'React', 'Google ADK', 'Sentence-Transformers', 'REST APIs'].map(tag => (
//                 <span key={tag} className="text-[10px] font-mono text-zinc-500 border border-white/10 px-3 py-1 rounded-sm uppercase tracking-widest group-hover:border-emerald-500/20 group-hover:text-emerald-500 transition-colors">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="projects" className="py-32 px-8 max-w-7xl mx-auto">
//         <div className="mb-20">
//           <h2 className="text-4xl font-black text-white tracking-tighter uppercase">Engineering Gallery_</h2>
//           <p className="text-zinc-500 font-mono text-sm mt-2">Experimental and research-driven systems</p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           <div className="group space-y-6">
//             <div className="aspect-video bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/40 transition-all relative overflow-hidden">
//                <Binary className="w-16 h-16 text-emerald-500/20 group-hover:scale-110 transition-transform duration-500" />
//                <div className="absolute top-4 right-4 bg-emerald-500 text-black text-[10px] font-black px-2 py-1 uppercase tracking-tighter">94% Accuracy</div>
//             </div>
//             <div>
//               <div className="flex justify-between items-center mb-4">
//                 <h4 className="text-2xl font-black text-white uppercase tracking-tighter">Vision Mamba Cancer Detection</h4>
//               </div>
//               <p className="text-zinc-400 leading-relaxed mb-6">
//                 Engineered a Vision Mamba architecture for medical imaging. Optimized inference speed by 
//                 utilizing CUDA acceleration and Mixed Precision training.
//               </p>
//               <div className="flex gap-4 text-[10px] font-mono text-zinc-600 uppercase font-bold tracking-widest">
//                 <span>PyTorch</span>
//                 <span>CUDA</span>
//                 <span>Mixed Precision</span>
//               </div>
//             </div>
//           </div>
//           <div className="group space-y-6">
//             <div className="aspect-video bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-blue-500/40 transition-all relative overflow-hidden">
//                <Code2 className="w-16 h-16 text-blue-500/20 group-hover:scale-110 transition-transform duration-500" />
//                <div className="absolute top-4 right-4 bg-blue-500 text-white text-[10px] font-black px-2 py-1 uppercase tracking-tighter">+15% Improvement</div>
//             </div>
//             <div>
//               <div className="flex justify-between items-center mb-4">
//                 <h4 className="text-2xl font-black text-white uppercase tracking-tighter">AI Public Speaking Game</h4>
//               </div>
//               <p className="text-zinc-400 leading-relaxed mb-6">
//                 Built a real-time speech processing pipeline using Whisper STT and Coqui TTS. 
//                 Integrated MediaPipe for biomechanical posture tracking.
//               </p>
//               <div className="flex gap-4 text-[10px] font-mono text-zinc-600 uppercase font-bold tracking-widest">
//                 <span>FastAPI</span>
//                 <span>Unity</span>
//                 <span>LangChain</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <footer className="py-20 px-8 border-t border-white/5 text-center bg-zinc-950">
//         <p className="text-[10px] text-zinc-600 uppercase tracking-[0.4em] font-black mb-4">
//           Built for SDE/SDET 2027 Recruitment Cycle
//         </p>
//         <div className="flex justify-center gap-8 text-[10px] text-zinc-500 font-mono">
//           <span>Aditya Bhagat</span>
//           <span>VIT University</span>
//           <span>© 2026</span>
//         </div>
//       </footer>
//     </div>
//   );
// }


import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ShieldCheck, Cpu, Database, Github, Linkedin, Code2, Binary } from 'lucide-react';

const NavLink = ({ href, label, number }) => (
  <a href={href} className="group flex items-center gap-2 hover:text-emerald-400 transition-colors">
    <span className="text-[8px] font-mono text-emerald-500/50 group-hover:text-emerald-400">{number}</span>
    <span className="text-[10px] uppercase tracking-[0.2em] font-bold">{label}</span>
  </a>
);

const MetricBox = ({ label, value, description }) => (
  <div className="bg-black/40 border border-white/5 p-4 rounded-lg">
    <div className="text-[10px] text-zinc-500 mb-1 uppercase tracking-widest font-bold">{label}</div>
    <div className="text-2xl font-black text-white">{value}</div>
    <div className="text-[10px] text-zinc-400 mt-1 uppercase leading-tight">{description}</div>
  </div>
);

export default function PortfolioApp() {
  const GITHUB_URL = "https://github.com/AdityaBhagat05";
  const RESUME_URL = "https://drive.google.com/file/d/1RpgLUu55IzuxvhNyH63UvhSJGHWqUV7d/view?usp=sharing";

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-emerald-500/30">
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl px-8 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 flex items-center justify-center text-black font-black italic rounded-sm shadow-[0_0_20px_rgba(16,185,129,0.2)]">A</div>
          <div className="flex flex-col">
            <span className="font-mono text-white font-bold tracking-tighter text-sm uppercase">Aditya Bhagat</span>
            <span className="text-[9px] text-emerald-500 font-mono leading-none">BUILD_VERSION: 2026.1.0</span>
          </div>
        </div>
        <div className="hidden md:flex gap-10">
          <NavLink href="#systems" label="Systems" number="01" />
          <NavLink href="#experience" label="Experience" number="02" />
          <NavLink href="#projects" label="Projects" number="03" />
        </div>
      </nav>

      <section className="pt-48 pb-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 text-emerald-500 font-mono text-xs mb-6 px-3 py-1 bg-emerald-500/5 border border-emerald-500/10 rounded-full w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              CSE IoT // VIT COMPUTER SCIENCE
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 text-white">
              BUILDING <br/>RELIABLE <br/><span className="text-emerald-500">INFRASTRUCTURE.</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-medium">
              Software Engineer specializing in automated frameworks, distributed systems, 
              and backend architecture.
            </p>
            <div className="mt-12 flex gap-4">
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-8 py-4 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all">
                Download Resume
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="border border-white/10 px-8 py-4 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all">
                View Github
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white/5 border border-white/10 p-6 rounded-sm font-mono text-[11px] space-y-3">
              <div className="text-zinc-500 mb-4 pb-2 border-b border-white/5 uppercase tracking-widest font-bold">// SYSTEM_IDENTITY</div>
              <div className="flex justify-between"><span>GPA</span> <span className="text-white">8.81 / 10.0</span></div>
              <div className="flex justify-between"><span>SPECIALIZATION</span> <span className="text-white">IOT / CSE</span></div>
              <div className="flex justify-between"><span>LOCATION</span> <span className="text-white">VELLORE, IN</span></div>
              <div className="flex justify-between"><span>STATUS</span> <span className="text-emerald-500 underline underline-offset-4">HIRING_READY</span></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 p-4 rounded-sm flex flex-col items-center justify-center gap-2 hover:border-emerald-500/30 transition-colors group">
                <Github className="w-5 h-5 group-hover:text-emerald-500" />
                <span className="text-[10px] font-bold uppercase">Github</span>
              </a>
              <a href="https://linkedin.com/in/aditya-bhagat-82b52a288" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 p-4 rounded-sm flex flex-col items-center justify-center gap-2 hover:border-emerald-500/30 transition-colors group">
                <Linkedin className="w-5 h-5 group-hover:text-emerald-500" />
                <span className="text-[10px] font-bold uppercase">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="systems" className="py-32 px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="mb-20">
          <h2 className="text-4xl font-black text-white tracking-tighter uppercase">Engineering Stack_</h2>
          <p className="text-zinc-500 font-mono text-sm mt-2">Tools and frameworks for scalable development</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 border border-white/5 bg-white/5">
          <div className="bg-[#050505] p-10 space-y-6">
            <Brain className="w-8 h-8 text-blue-400" />
            <h3 className="text-white font-bold uppercase tracking-widest text-sm">AI & ML</h3>
            <div className="flex flex-wrap gap-2 text-[10px] font-mono">
              {['PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face', 'LangChain', 'MediaPipe', 'ONNX'].map(s => <span key={s} className="text-zinc-500">{s}</span>)}
            </div>
          </div>
          <div className="bg-[#050505] p-10 space-y-6">
            <Cpu className="w-8 h-8 text-emerald-400" />
            <h3 className="text-white font-bold uppercase tracking-widest text-sm">Backend / Web</h3>
            <div className="flex flex-wrap gap-2 text-[10px] font-mono">
              {['React', 'Node.js', 'FastAPI', 'MERN', 'REST APIs'].map(s => <span key={s} className="text-zinc-500">{s}</span>)}
            </div>
          </div>
          <div className="bg-[#050505] p-10 space-y-6">
            <Database className="w-8 h-8 text-amber-400" />
            <h3 className="text-white font-bold uppercase tracking-widest text-sm">Persistence</h3>
            <div className="flex flex-wrap gap-2 text-[10px] font-mono">
              {['Oracle 12c', 'MySQL', 'MongoDB', 'Pinecone'].map(s => <span key={s} className="text-zinc-500">{s}</span>)}
            </div>
          </div>
          <div className="bg-[#050505] p-10 space-y-6">
            <ShieldCheck className="w-8 h-8 text-purple-400" />
            <h3 className="text-white font-bold uppercase tracking-widest text-sm">DevOps / Cloud</h3>
            <div className="flex flex-wrap gap-2 text-[10px] font-mono">
              {['Docker', 'AWS', 'Google ADK', 'Linux CLI'].map(s => <span key={s} className="text-zinc-500">{s}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-32 px-8 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div>
              <h2 className="text-4xl font-black text-white tracking-tighter uppercase">Professional Impact_</h2>
              <p className="text-zinc-500 font-mono text-sm mt-2">Production engineering experience</p>
            </div>
            <div className="flex gap-4">
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 p-12 rounded-sm group hover:border-emerald-500/30 transition-all">
            <div className="flex flex-col md:flex-row justify-between mb-8">
              <div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">GenAI Intern</h3>
                <p className="text-emerald-500 font-mono font-bold">Hindustan Petroleum Corporation Ltd (HPCL)</p>
              </div>
              <span className="text-zinc-500 font-mono text-xs uppercase bg-white/5 h-fit px-4 py-2 rounded-full mt-4 md:mt-0">May — July 2025</span>
            </div>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-4xl mb-8">
              Developed a <span className="text-white">RAG-based framework</span> for automated GST document retrieval. 
              Implemented semantic search pipelines using Google ADK to improve financial data indexing efficiency.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Python', 'React', 'Google ADK', 'Sentence-Transformers', 'REST APIs'].map(tag => (
                <span key={tag} className="text-[10px] font-mono text-zinc-500 border border-white/10 px-3 py-1 rounded-sm uppercase tracking-widest group-hover:border-emerald-500/20 group-hover:text-emerald-500 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 px-8 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl font-black text-white tracking-tighter uppercase">Engineering Gallery_</h2>
          <p className="text-zinc-500 font-mono text-sm mt-2">Experimental and research-driven systems</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="group space-y-6">
            <div className="aspect-video bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/40 transition-all relative overflow-hidden">
               <Binary className="w-16 h-16 text-emerald-500/20 group-hover:scale-110 transition-transform duration-500" />
               <div className="absolute top-4 right-4 bg-emerald-500 text-black text-[10px] font-black px-2 py-1 uppercase tracking-tighter">94% Accuracy</div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-2xl font-black text-white uppercase tracking-tighter">Vision Mamba Cancer Detection</h4>
              </div>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Engineered a Vision Mamba architecture for medical imaging. Optimized inference speed by 
                utilizing CUDA acceleration and Mixed Precision training.
              </p>
              <div className="flex gap-4 text-[10px] font-mono text-zinc-600 uppercase font-bold tracking-widest">
                <span>PyTorch</span>
                <span>CUDA</span>
                <span>Mixed Precision</span>
              </div>
            </div>
          </div>
          <div className="group space-y-6">
            <div className="aspect-video bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-blue-500/40 transition-all relative overflow-hidden">
               <Code2 className="w-16 h-16 text-blue-500/20 group-hover:scale-110 transition-transform duration-500" />
               <div className="absolute top-4 right-4 bg-blue-500 text-white text-[10px] font-black px-2 py-1 uppercase tracking-tighter">+15% Improvement</div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-2xl font-black text-white uppercase tracking-tighter">AI Public Speaking Game</h4>
              </div>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Built a real-time speech processing pipeline using Whisper STT and Coqui TTS. 
                Integrated MediaPipe for biomechanical posture tracking.
              </p>
              <div className="flex gap-4 text-[10px] font-mono text-zinc-600 uppercase font-bold tracking-widest">
                <span>FastAPI</span>
                <span>Unity</span>
                <span>LangChain</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 px-8 border-t border-white/5 text-center bg-zinc-950">
        <p className="text-[10px] text-zinc-600 uppercase tracking-[0.4em] font-black mb-4">
          Built for SDE/SDET 2027 Recruitment Cycle
        </p>
        <div className="flex justify-center gap-8 text-[10px] text-zinc-500 font-mono">
          <span>Aditya Bhagat</span>
          <span>VIT University</span>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}
