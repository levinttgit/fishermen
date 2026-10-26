"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

interface Member {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

const members: Member[] = [
  {
    name: "Kurien (Biju) Kurien",
    role: "Vocals / Rhythm Guitar",
    bio: "Founding member delivering impassioned lead vocals and solid rhythm guitar riffs, anchoring the heartbeat and energy of the band.",
    image: "/fishermen/images/kurien.jpg",
  },
  {
    name: "Ramesh Jayakrishnan",
    role: "Lead Guitar",
    bio: "Crafting signature melodic guitar lines and searing rock solos that drive the band's anthemic rock identity.",
    image: "/fishermen/images/ramesh.jpg",
  },
  {
    name: "Denver Martin",
    role: "Vocals / Keyboard",
    bio: "Adding lush harmonic depth, keyboard textures, and complementary vocal harmonies to elevate every performance.",
    image: "/fishermen/images/denver.jpg",
  },
  {
    name: "Levin Thomas",
    role: "Bass",
    bio: "Locking down the low end with dynamic bass grooves, cementing the rhythm section with drive and precision.",
    image: "/fishermen/images/levin.jpg",
  },
  {
    name: "Jake Jacob",
    role: "Drums",
    bio: "Powering the pulse of each track with heavy rock rhythms and energetic percussion.",
    image: "/fishermen/images/jake.jpg",
  },
];

const bandPhotoUrl = "/fishermen/images/band.jpg";

export default function AboutPage() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#111111] font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-8 py-10 w-full border-b border-black/10">
        <Link href="/" className="font-display text-4xl md:text-5xl mb-6 md:mb-0 hover:opacity-75 transition">
          The Fishermen.
        </Link>
        <div className="flex gap-8 font-bold text-xs uppercase tracking-widest text-[#111111]">
          <Link href="/" className="hover:opacity-60 transition">Home</Link>
          <Link href="/#listen" className="hover:opacity-60 transition">Listen</Link>
          <Link href="/about" className="underline underline-offset-8 decoration-2 hover:opacity-60 transition">About</Link>
          <a href="https://www.instagram.com/thefishermen.music/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition">Instagram</a>
        </div>
      </nav>

      <main className="w-full">
        {/* About Header Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="px-8 py-20 md:py-28 max-w-7xl mx-auto border-b border-black/10"
        >
          <span className="font-bold tracking-[0.3em] uppercase text-xs mb-6 inline-block border border-black px-4 py-2">
            The Band
          </span>
          <h1 className="font-display text-[7rem] md:text-[11rem] leading-[0.85] uppercase mb-10">
            About <br /> The Band.
          </h1>
          <p className="text-xl md:text-3xl font-medium text-black/80 max-w-3xl leading-snug">
            We are <strong>The Fishermen</strong>. Rooted in faith and driven by a passion for authentic rock, we create music designed to uplift, inspire, and point people toward hope.
          </p>
        </motion.section>

        {/* Band Full Photo */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="px-8 py-20 max-w-7xl mx-auto"
        >
          <div className="mb-6 flex justify-center">
            <h2 className="font-display text-4xl md:text-5xl uppercase">The Fishermen</h2>
          </div>
          
          <div className="w-full flex justify-center">
            <div className="w-full max-w-2xl aspect-square bg-neutral-200 border border-black/10 relative overflow-hidden group shadow-lg">
              <img
                src={bandPhotoUrl}
                alt="The Fishermen Band"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  // Show placeholder if image not yet placed in folder
                  e.currentTarget.style.display = "none";
                  const fallback = e.currentTarget.parentElement?.querySelector(".fallback-placeholder") as HTMLElement;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <div className="fallback-placeholder hidden absolute inset-0 w-full h-full border-2 border-dashed border-black/30 flex-col items-center justify-center text-center p-8">
                <svg className="w-16 h-16 text-black/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="font-display text-2xl md:text-3xl uppercase tracking-wider text-black/60">Band Picture: band.jpg</p>
              <p className="text-xs uppercase tracking-widest text-black/40 mt-1">Place file in: public/images/band.jpg</p>
            </div>
          </div>
        </div>
        </motion.section>

        {/* Band Members Section */}
        <section className="bg-[#111111] text-white py-24 md:py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <span className="font-bold tracking-[0.3em] uppercase text-xs text-white/50 mb-4 block">Lineup</span>
              <h2 className="font-display text-6xl md:text-8xl uppercase leading-none">
                Meet The <br /> Members
              </h2>
            </div>

            <div className="space-y-16 md:space-y-24">
              {members.map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeUp}
                  className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16 border-b border-white/10 pb-16 md:pb-24`}
                >
                  {/* Photo (4x4 square) */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="w-full max-w-md aspect-square bg-neutral-900 border border-white/10 relative overflow-hidden group">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          const fallback = e.currentTarget.parentElement?.querySelector(".fallback-member-placeholder") as HTMLElement;
                          if (fallback) fallback.style.display = "flex";
                        }}
                      />
                      <div className="fallback-member-placeholder hidden absolute inset-0 w-full h-full border-2 border-dashed border-white/20 flex-col items-center justify-center p-8 text-center">
                        <svg className="w-12 h-12 text-white/20 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="font-display text-2xl uppercase tracking-wide text-white/70">{member.name}</span>
                        <span className="text-xs uppercase tracking-widest text-white/40 mt-1">Photo (4×4 Square)</span>
                        <span className="text-[11px] text-white/30 font-mono mt-2">{member.image?.replace('/fishermen/', 'public/')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Member Details */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h3 className="font-display text-5xl md:text-7xl uppercase leading-none mb-3">
                      {member.name}
                    </h3>
                    <p className="text-sm font-bold uppercase tracking-widest text-white/70 mb-6 border-b border-white/10 pb-4">
                      {member.role}
                    </p>
                    <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed mb-6">
                      {member.bio}
                    </p>
                    <div className="text-xs text-white/40 uppercase tracking-widest">
                      The Fishermen • {member.role.split('/')[0].trim()}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#111111] text-white py-16 px-8 text-center flex flex-col items-center justify-center border-t border-white/10">
        <div className="font-display text-6xl mb-8">The Fishermen.</div>
        <div className="text-xs font-bold uppercase tracking-widest text-white/40">
          <p>© 2026 The Fishermen Music. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
