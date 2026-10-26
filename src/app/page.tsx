"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { socialLinks, PlayIcon } from "./socialLinks";

export default function Home() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#111111] font-sans selection:bg-black selection:text-white">
      {/* Sticky Top Navigation */}
      <nav className="sticky top-0 z-50 bg-[#F9F9F9]/95 backdrop-blur-md flex flex-col md:flex-row justify-between items-center px-8 py-7 w-full border-b border-black/10 transition-all">
        <Link href="/" className="font-display text-4xl md:text-5xl mb-4 md:mb-0 hover:opacity-75 transition">
          The Fishermen.
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
          <div className="flex gap-6 font-bold text-xs uppercase tracking-[0.2em] text-[#111111]">
            <a href="#listen" className="hover:opacity-50 transition">Listen</a>
            <Link href="/about" className="hover:opacity-50 transition">About</Link>
          </div>

          {/* Social Icons Bar in Header */}
          <div className="hidden sm:flex items-center gap-3 pl-6 border-l border-black/15">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  title={item.name}
                  className="p-2 border border-black/15 hover:border-black hover:bg-black hover:text-white transition duration-200"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      <main className="w-full">
        
        {/* Hero Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="px-8 py-20 md:py-36 flex flex-col items-center text-center max-w-7xl mx-auto"
        >
          <span className="font-bold tracking-[0.3em] uppercase text-xs mb-8 block border border-black px-4 py-2">
            New Music Video Out Now
          </span>
          <h1 className="font-display text-[7.5rem] sm:text-[10rem] md:text-[14rem] leading-[0.85] mb-10 tracking-tight">
            Hope <br/> Through <br/> Harmony.
          </h1>
          <p className="text-lg md:text-2xl font-normal text-black/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            Christian rock bringing authentic worship, bold musicianship, and the living hope of Jesus Christ.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto mb-16">
            <a href="#listen" className="flex items-center justify-center gap-3 bg-[#111111] text-white px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-black/80 transition">
              <PlayIcon />
              Watch Video
            </a>
            <Link href="/about" className="flex items-center justify-center gap-3 bg-transparent border-2 border-[#111111] text-[#111111] px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-[#111111] hover:text-white transition">
              About The Band
            </Link>
          </div>

          {/* Connected Streaming & Social Hub Strip */}
          <div className="w-full border-t border-b border-black/10 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-3 px-4 hover:bg-black/5 transition group"
                >
                  <span className="p-2 border border-black/20 group-hover:bg-black group-hover:text-white group-hover:border-black transition">
                    <Icon />
                  </span>
                  <div className="text-left">
                    <div className="font-display text-lg tracking-wide uppercase leading-none">{item.name}</div>
                    <div className="text-[11px] uppercase tracking-widest text-black/50 font-bold">{item.sub}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.section>

        {/* Listen Now / Video Section */}
        <motion.section 
          id="listen"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="w-full bg-[#111111] text-white py-28 md:py-36 px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 border-b border-white/10 pb-8">
              <div>
                <span className="font-bold tracking-[0.3em] uppercase text-xs text-white/50 mb-3 block">Latest Release</span>
                <h2 className="font-display text-[6rem] md:text-[9rem] leading-none">
                  Listen <br/> Now
                </h2>
              </div>
              <p className="max-w-md text-white/70 font-normal text-base md:text-lg leading-relaxed">
                Experience our latest single. Stream the video below and find us on your favorite music platforms.
              </p>
            </div>
            
            <div className="aspect-video w-full bg-black shadow-2xl border border-white/15">
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

            {/* Quick Stream Buttons under Video */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center md:justify-between items-center gap-6">
              <span className="font-bold uppercase tracking-[0.25em] text-xs text-white/50">
                Stream on your platform:
              </span>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-4 py-2.5 border border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition duration-200"
                    >
                      <Icon />
                      <span>{item.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.section>

        {/* About Preview Section linking to full /about */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="py-28 md:py-36 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32 items-start"
        >
          <div className="md:w-1/3">
            <h2 className="font-display text-[6rem] md:text-[8rem] leading-none mb-8">
              About <br/> Us.
            </h2>
          </div>
          
          <div className="md:w-2/3 text-xl md:text-3xl font-medium text-black/80 leading-snug space-y-10">
            <p>
              What brought <strong>The Fishermen</strong> together was the Love of God, the Word of God, and the sheer joy of enjoying one of His greatest gifts to mankind—music.
            </p>
            <div>
              <Link 
                href="/about" 
                className="inline-flex items-center gap-4 bg-[#111111] text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-black/80 transition"
              >
                Meet The Band Members & Read Our Story →
              </Link>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-[#111111] text-white py-16 px-8 text-center flex flex-col items-center justify-center border-t border-white/10">
        <div className="font-display text-6xl mb-4">The Fishermen.</div>
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/40 mb-8">
          Casting Sounds and Captivating Souls for His Glory
        </p>
        
        {/* Footer Social & Streaming Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-xs font-bold uppercase tracking-widest text-white/70">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline underline-offset-4 transition"
            >
              {item.name} ↗
            </a>
          ))}
        </div>

        <p className="text-[11px] uppercase tracking-widest text-white/30">
          © 2026 The Fishermen Music. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
