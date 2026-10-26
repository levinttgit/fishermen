"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

// Clean, high-contrast monochrome social and streaming brand icons
export const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
    <polygon points="10 15 15 12 10 9 10 15"></polygon>
  </svg>
);

export const SpotifyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8 11.5c3-1 6-.5 8.5 1"></path>
    <path d="M7 9c4-1.2 8-.8 11 1.2"></path>
    <path d="M9 14.5c2.5-.8 5-.4 7 .8"></path>
  </svg>
);

export const YouTubeMusicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <polygon points="11 14 14.5 12 11 10 11 14" fill="currentColor"></polygon>
  </svg>
);

export const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polygon points="10 8 16 12 10 16 10 8"></polygon>
  </svg>
);

export const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/thefishermen.music/",
    icon: InstagramIcon,
    sub: "@thefishermen.music",
  },
  {
    name: "YouTube",
    href: "https://youtu.be/LTtWteeFRgI?si=tIfoiuuhbf3RcfS2",
    icon: YouTubeIcon,
    sub: "Watch Music Video",
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com",
    icon: SpotifyIcon,
    sub: "Stream Music",
  },
  {
    name: "YouTube Music",
    href: "https://music.youtube.com",
    icon: YouTubeMusicIcon,
    sub: "Listen Online",
  },
];
