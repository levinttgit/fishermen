"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

interface Member {
  name: string;
  role: string;
  bio: string | string[];
  image?: string;
}

const members: Member[] = [
  {
    name: "Kurien (Biju) Kurien",
    role: "Vocals / Rhythm Guitar",
    bio: [
      "My story is really one of God’s mercy. Jesus alone saved me from the depths of despair and set my feet upon solid ground. Through every trial, He taught me the futility of relying on myself and the absolute grace of depending on Him totally. Words will never be enough to capture all that He means to me and all that He has done in my life.",
      "My deepest desire now is to praise Him to the highest. I am constantly inspired by Scripture—Psalm 33:3 says: “Sing to Him a new song; play skillfully, and shout for joy.” While writing songs and growing in musicianship is a lifelong pursuit, I am deeply grateful for all God has enabled us to do thus far.",
      "Our band, The Fishermen, was born out of God’s leading, bringing each member together in His perfect timing. Our practices are so much more than rehearsals—they overflow into times of prayer and fellowship in God’s Word. Through one of my hardest seasons, God used this brotherhood week after week to strengthen me and my family.",
      "God has blessed me with a wonderful wife, Annie, and three boys in Mississauga, Canada. I believe the greatest gift we can offer the world isn’t merely motivation or material comfort, but the living hope found in Jesus Christ. With my brothers in the Lord, I want to offer the best I have—because the best is Him!"
    ],
    image: "/fishermen/images/kurien.jpg",
  },
  {
    name: "Ramesh Jayakrishnan",
    role: "Lead Guitar",
    bio: [
      "Like all my fellow bandmates, it is nothing but His grace that has brought my family and me from where we were to where we are, and gives us the assurance of where we are going.",
      "Born into a non-Christian family, I grew up in a loving home with all the usual experiences of family life. It was during my days at business school that I first met a dear friend in whose life I saw a peace that truly surpassed all understanding. It was through him that I eventually came to know Jesus Christ. Looking back, I cannot imagine what life would be like outside of living by His grace, strength, and resources.",
      "My love for music began early as my parents introduced me to the guitar. I am deeply grateful to God and to them for instilling that passion. Over the years, I have been inspired by musicians like Mark Knopfler, Allan Holdsworth, John McLaughlin, Keith Green, Neal Morse, and many others, shaping my lifelong journey with the instrument."
    ],
    image: "/fishermen/images/ramesh.jpg",
  },
  {
    name: "Denver Martin",
    role: "Vocals / Keyboard",
    bio: [
      "God is LOVE. I would not be who I am today if it were not for the love of God. At the age of five, I was miraculously healed from a condition I had suffered with for three years. Through that trial, my parents came to truly know and believe in Jesus. Witnessing them actively live out their faith by seeking God and praying over me daily marked the beginning of my own faith journey. In grade 9, I made a public decision to give my life to Jesus, and around that time I developed a desire to play the piano—not knowing then how God would use this gift to bless me and bring Him glory.",
      "About a decade later, I was once again miraculously healed from another painful condition. Yet, like the Israelites, after experiencing God’s miracles, I have often wandered in my own way. But the Lord, in His abundant mercy, has always brought me back to Him. It was this divine plan that led me to The Fishermen—a true band of brothers who not only share a passion for playing music for Jesus, but a sincere commitment to follow Him.",
      "God has blessed me with a wonderful wife, Annie, and our two daughters in Hamilton, Canada. Colossians 3:16 says: “Let the word of Christ dwell in you richly in all wisdom, teaching and admonishing one another in psalms and hymns and spiritual songs, singing with grace in your hearts to the Lord.” It is my continued desire to share the transformative love of Jesus through our music, songs, and lives."
    ],
    image: "/fishermen/images/denver.jpg",
  },
  {
    name: "Levin Thomas",
    role: "Bass",
    bio: [
      "At a very young age, I was deeply captivated by music. I remember sitting on the front bench at church, watching the musicians on our worship team with awe and admiration. Back then, I didn’t know a single chord or note—only pure curiosity and wonder.",
      "Today, I thank God for blessing me with the gift of music. My heart’s desire is to honor Him in unity with my brothers and to help lead people into His presence through worship.",
      "I have truly tasted and seen the goodness of God in my life and in the life of my family, and for that, I am forever grateful. He has been my source and my strength, and I long to testify of His goodness in every part of my life."
    ],
    image: "/fishermen/images/levin.jpg",
  },
  {
    name: "Jake Jacob",
    role: "Drums",
    bio: [
      "God is good. These three words encapsulate my life’s testimony. There have been many seasons where trials felt overwhelming—times of uncertainty, pain, and even silence. But through every valley, Jesus never left my side. Even when I couldn’t see a way forward, He was working behind the scenes, shaping my heart and strengthening my faith.",
      "In moments when I felt weakest, He proved Himself strong. When doors closed, He opened new ones in unexpected ways. When I was seeking direction and purpose, God clearly answered my prayers by leading me to The Fishermen. It was an unmistakable answer to prayer—giving me a place to grow, to serve, and to be surrounded by brothers who share a genuine heart for worship and ministry.",
      "He used my struggles to teach me not to lean on my own understanding, but to trust in His perfect plan. Looking back, I can see how every hardship built something deeper: character, patience, and an unshakable hope. Today, I am blessed with an amazing wife and our three boys. He has been my peace, my strength, and my provider. I stand here only because of His faithfulness—all glory to Jesus!"
    ],
    image: "/fishermen/images/jake.jpg",
  },
];

const bandPhotoUrl = "/fishermen/images/band.jpg";

export default function AboutPage() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#111111] font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#F9F9F9]/95 backdrop-blur-md flex flex-col md:flex-row justify-between items-center px-8 py-7 w-full border-b border-black/10 transition-all">
        <Link href="/" className="font-display text-4xl md:text-5xl tracking-tight mb-4 md:mb-0 hover:opacity-75 transition">
          The Fishermen.
        </Link>
        <div className="flex items-center gap-8 font-bold text-xs uppercase tracking-[0.2em] text-[#111111]">
          <Link href="/" className="hover:opacity-50 transition">Home</Link>
          <Link href="/#listen" className="hover:opacity-50 transition">Listen</Link>
          <Link href="/about" className="border-b-2 border-black pb-1 hover:opacity-50 transition">About</Link>
          <a
            href="https://www.instagram.com/thefishermen.music/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-50 transition flex items-center gap-1.5"
          >
            Instagram ↗
          </a>
        </div>
      </nav>

      <main className="w-full">
        {/* About Header & Full Band Section (Side-by-Side) */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto border-b border-black/10"
        >
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            
            {/* Band Photo (Sticky on desktop for clean reading layout) */}
            <div className="w-full lg:w-5/12 lg:sticky lg:top-28 flex flex-col items-center">
              <div className="w-full aspect-square bg-neutral-200 border border-black/10 relative overflow-hidden shadow-2xl group">
                <img
                  src={bandPhotoUrl}
                  alt="The Fishermen Band"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  onError={(e) => {
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
              
              <div className="w-full flex justify-between items-baseline mt-4 px-1">
                <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wider text-black">
                  The Fishermen
                </h2>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-black/40">
                  Brotherhood & Worship
                </span>
              </div>
            </div>

            {/* About Text */}
            <div className="w-full lg:w-7/12 flex flex-col justify-center">
              <h1 className="font-display text-6xl md:text-8xl leading-none uppercase mb-8">
                About The Band
              </h1>

              <div className="space-y-6 text-base md:text-lg font-normal text-black/80 leading-relaxed">
                <p className="text-xl md:text-2xl font-medium text-black leading-snug">
                  What brought <strong>The Fishermen</strong> together was the Love of God, the Word of God, and the sheer joy of enjoying one of His greatest gifts to mankind—music.
                </p>

                <p>
                  From diverse backgrounds, eclectic musical influences, varied writing styles, and versatile playing skills over the years, The Fishermen has grown to become a true brotherhood of musicians. We bring our God-given gifts together—sharpening, encouraging, and building one another up in faith and craft.
                </p>

                <p>
                  Amidst the fun, the privilege, and the joy of making a joyful noise, we hold fast to this truth: <strong className="text-black font-semibold">only the Word of God has the power to transform hearts, renew minds, and save lives</strong>. Music on its own cannot lead people to God. That work is solely accomplished by the Word of God and the Holy Spirit drawing hearts to Jesus Christ.
                </p>

                <p>
                  As a band, our goal is to write and play songs celebrating God’s Love, His Faithfulness, His Power, His Forgiveness, His Greatness, His Mercies, and His Unshakeable Promises—pointing every listener to the truth and glory revealed in His Word. Through our voices, our instruments, and our daily lives, our prayer is that everything we do points people directly to Jesus.
                </p>

                <p>
                  We strive to pursue musicianship with excellence—to bless, inspire, and engage everyone who has a heart for God and an ear for authentic rock. Our conviction is that when we offer Him the very best of our gifts, He takes what is ordinary and makes it extraordinary.
                </p>

                {/* Quote Block */}
                <div className="pt-6 border-t border-black/10">
                  <blockquote className="border-l-4 border-black pl-5 py-1 text-lg md:text-xl text-black font-serif italic mb-4">
                    “Follow me, and I will make you fishers of men.”
                    <span className="block text-xs not-italic font-bold font-sans uppercase tracking-[0.25em] text-black/50 mt-1.5">
                      Matthew 4:19
                    </span>
                  </blockquote>
                  <p className="font-display text-2xl md:text-3xl text-black tracking-wide uppercase pt-1">
                    Casting Sounds and Captivating Souls for His Glory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Band Members Section */}
        <section className="bg-[#111111] text-white py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Lineup Header */}
            <div className="mb-20 md:mb-24 border-b border-white/10 pb-10">
              <span className="font-bold tracking-[0.3em] uppercase text-xs text-white/50 mb-3 block">Lineup</span>
              <h2 className="font-display text-6xl md:text-8xl uppercase leading-none">
                Meet The Members
              </h2>
            </div>

            {/* Alternating Member Cards */}
            <div className="space-y-24 md:space-y-32">
              {members.map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeUp}
                  className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start gap-12 lg:gap-16 border-b border-white/10 pb-20 md:pb-28`}
                >
                  {/* Photo (4x4 Square) */}
                  <div className="w-full lg:w-5/12 flex justify-center">
                    <div className="w-full max-w-md aspect-square bg-neutral-900 border border-white/15 relative overflow-hidden group shadow-2xl">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 ease-out"
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

                  {/* Member Details & Testimony */}
                  <div className="w-full lg:w-7/12 flex flex-col justify-center">
                    <h3 className="font-display text-5xl md:text-7xl uppercase leading-none mb-3 tracking-wide">
                      {member.name}
                    </h3>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70 mb-6 border-b border-white/10 pb-4">
                      {member.role}
                    </p>
                    
                    <div className="space-y-4 mb-8 text-base md:text-lg text-white/85 font-normal leading-relaxed">
                      {Array.isArray(member.bio) ? (
                        member.bio.map((paragraph, pIdx) => (
                          <p key={pIdx}>{paragraph}</p>
                        ))
                      ) : (
                        <p>{member.bio}</p>
                      )}
                    </div>
                    
                    <div className="text-xs text-white/40 uppercase tracking-[0.25em] pt-4 border-t border-white/10 flex items-center justify-between">
                      <span>The Fishermen</span>
                      <span>{member.role.split('/')[0].trim()}</span>
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
        <div className="font-display text-6xl mb-4">The Fishermen.</div>
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/40 mb-2">
          Casting Sounds and Captivating Souls for His Glory
        </p>
        <p className="text-[11px] uppercase tracking-widest text-white/30">
          © 2026 The Fishermen Music. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
