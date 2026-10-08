"use client";

import { motion } from "framer-motion";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polygon points="10 8 16 12 10 16 10 8"></polygon>
  </svg>
);

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } // cinematic ease
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#111111] font-sans selection:bg-black selection:text-white">
      {/* Navigation (Editorial & Sharp) */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-8 py-10 w-full border-b border-black/10">
        <div className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-6 md:mb-0">
          The Fishermen.
        </div>
        <div className="flex gap-8 font-bold text-xs uppercase tracking-widest text-[#111111]">
          <a href="#listen" className="hover:opacity-60 transition">Listen</a>
          <a href="#about" className="hover:opacity-60 transition">About</a>
          <a href="https://www.instagram.com/thefishermen.music/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition">Instagram</a>
        </div>
      </nav>

      <main className="w-full">
        
        {/* Hero Section (Bold, High Impact) */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="px-8 py-24 md:py-40 flex flex-col items-center text-center"
        >
          <span className="font-bold tracking-[0.3em] uppercase text-xs mb-8 block border border-black px-4 py-2">
            New Music Video
          </span>
          <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.85] mb-12">
            Hope <br/> Through <br/> Harmony.
          </h1>
          <p className="text-lg md:text-2xl font-medium text-black/60 max-w-2xl mx-auto mb-16 leading-relaxed">
            Christian rock bridging the timeless energy of Petra with the modern anthemic sound of MercyMe.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 w-full sm:w-auto">
            <a href="#listen" className="flex items-center justify-center gap-3 bg-[#111111] text-white px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-black/80 transition">
              <PlayIcon />
              Watch Video
            </a>
            <a href="https://www.instagram.com/thefishermen.music/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-transparent border-2 border-[#111111] text-[#111111] px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-[#111111] hover:text-white transition">
              <InstagramIcon />
              Instagram
            </a>
          </div>
        </motion.section>

        {/* Listen Now / Video Section (Full bleed feel) */}
        <motion.section 
          id="listen"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="w-full bg-[#111111] text-white py-32 px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                Listen <br/> Now
              </h2>
              <p className="max-w-sm text-white/60 font-medium">
                Experience the latest single. Stream it loud and share the light.
              </p>
            </div>
            
            <div className="aspect-video w-full bg-black shadow-2xl border border-white/10">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/LTtWteeFRgI?si=tIfoiuuhbf3RcfS2" 
                title="The Fishermen Music Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.section>

        {/* About Us Section (Magazine / Editorial Layout) */}
        <motion.section 
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="py-32 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32"
        >
          <div className="md:w-1/3">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
              About <br/> Us.
            </h2>
          </div>
          
          <div className="md:w-2/3 text-xl md:text-3xl font-medium text-black/80 leading-snug space-y-10">
            <p>
              We are <strong>The Fishermen</strong>. Rooted in faith and driven by a passion for authentic rock, we create music designed to uplift, inspire, and point people toward hope.
            </p>
            <p>
              Drawing inspiration from legendary Christian rock pioneers like Petra and the modern, soul-stirring melodies of MercyMe, our sound bridges the gap between powerful stadium anthems and intimate moments of worship.
            </p>
            <p className="text-sm font-bold uppercase tracking-widest text-black/50 border-t border-black/10 pt-10">
              Sharing the light through every chord and lyric.
            </p>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-[#111111] text-white py-16 px-8 text-center flex flex-col items-center justify-center">
        <div className="text-4xl font-black uppercase tracking-tighter mb-8">The Fishermen.</div>
        <div className="text-xs font-bold uppercase tracking-widest text-white/40">
          <p>© 2026 The Fishermen Music. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
