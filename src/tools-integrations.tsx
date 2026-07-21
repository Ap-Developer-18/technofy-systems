"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideWorkflow, Star } from "lucide-react";
import SectionHeader from "./common/section-header";

// Working CDN Logos
const TECH_LOGOS = {
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  tailwind:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  nextjs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  typescript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  nodejs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  mongodb:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  postgresql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  shadcn: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/shadcnui.svg",
  figma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  supabase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
};

interface OrbitItem {
  name: string;
  logo: string;
}

interface OrbitRingProps {
  radius: number;
  duration: number;
  items: OrbitItem[];
  itemSizeClass: string;
}

function OrbitRing({ radius, duration, items, itemSizeClass }: OrbitRingProps) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration, ease: "linear" }}
      className="absolute rounded-full border border-neutral-200/60 pointer-events-none"
      style={{
        width: radius * 2,
        height: radius * 2,
      }}
    >
      {items.map((item, index) => {
        const angle = (360 / items.length) * index;
        return (
          <div
            key={item.name}
            className="absolute top-1/2 left-1/2 pointer-events-auto"
            style={{
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px)`,
            }}
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration, ease: "linear" }}
              style={{ transform: `rotate(-${angle}deg)` }}
              className={`${itemSizeClass} rounded-full bg-white border border-neutral-100 shadow-md flex items-center justify-center p-2.5 hover:scale-110 transition-transform`}
            >
              <img
                src={item.logo}
                alt={item.name}
                className="w-full h-full object-contain pointer-events-none"
              />
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}

export default function ToolsIntegrations() {
  const innerItems = [
    { name: "HTML5", logo: TECH_LOGOS.html },
    { name: "CSS3", logo: TECH_LOGOS.css },
    { name: "JavaScript", logo: TECH_LOGOS.javascript },
  ];

  const middleItems = [
    { name: "Tailwind CSS", logo: TECH_LOGOS.tailwind },
    { name: "Next.js", logo: TECH_LOGOS.nextjs },
    { name: "React", logo: TECH_LOGOS.react },
    { name: "TypeScript", logo: TECH_LOGOS.typescript },
  ];

  const outerItems = [
    { name: "Node.js", logo: TECH_LOGOS.nodejs },
    { name: "Express.js", logo: TECH_LOGOS.express },
    { name: "MongoDB", logo: TECH_LOGOS.mongodb },
    { name: "PostgreSQL", logo: TECH_LOGOS.postgresql },
    { name: "Shadcn UI", logo: TECH_LOGOS.shadcn },
    { name: "Supabase", logo: TECH_LOGOS.supabase },
    { name: "Figma", logo: TECH_LOGOS.figma },
  ];

  return (
    <section className="relative w-full mt-24">
      <div className="container mx-auto px-4">
        {/* 🎴 Outer Card Container */}
        <div
          className="group relative w-full h-min flex-none flex flex-col lg:flex-row justify-between items-center bg-white border-2 border-white rounded-[32px] sm:rounded-[40px] p-5 sm:p-8 md:p-10 overflow-clip z-0 shadow-[0_10px_40px_rgba(0,0,0,0.02)] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
          style={{
            willChange: "var(--framer-will-change-override, transform)",
          }}
        >
          {/* 🔷 Bluish Grid Background Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(33, 61, 255, 0.06) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(33, 61, 255, 0.06) 1px, transparent 1px)
              `,
              backgroundSize: "32px 32px",
              maskImage:
                "radial-gradient(circle at 60% 40%, black 20%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(circle at 60% 40%, black 20%, transparent 75%)",
            }}
          />

          {/* 👈 Left Content Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left relative z-10 w-full">
            <SectionHeader
              badgeText="Tech Stack"
              badgeVariant="primary"
              align="left"
              title="Mastering the modern web development ecosystem."
              description="From pixel-perfect UI designs in Figma to lightning-fast full-stack applications with Next.js, React, and robust databases — we build scalable, SEO-optimized, and high-converting digital products."
              className="px-0 mb-6 sm:mb-8!"
            />

            {/* Testimonial & Performance Widget */}
            <div className="p-4 sm:p-5 bg-white/90 backdrop-blur-md rounded-2xl max-lg:mx-auto shadow-[0_4px_20px_rgba(0,0,0,0.10)] flex flex-col sm:flex-row items-center gap-4 w-full max-w-lg">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-neutral-900 flex items-center justify-center text-white font-bold text-base sm:text-lg shrink-0">
                  <LucideWorkflow />
                </div>
                <div>
                  <h4 className="font-poppins text-xs font-bold text-neutral-900">
                    99+ Core Web Vitals
                  </h4>
                  <p className="font-figtree text-[11px] text-neutral-500 font-medium">
                    Optimized load speeds
                  </p>
                </div>
              </div>

              <div className="hidden sm:block h-10 w-px bg-neutral-100" />

              <div className="flex items-start gap-3 w-full sm:w-auto">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-neutral-200 overflow-hidden shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                    alt="Client Review"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-0.5 text-amber-400 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                    <span className="font-poppins text-[11px] font-bold text-neutral-900 ml-1">
                      Sumit Sihag
                    </span>
                  </div>
                  <p className="font-figtree text-[11px] text-neutral-500 leading-tight">
                    "Delivered an insanely fast, responsive web application well
                    ahead of schedule."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 w-full flex items-center justify-center relative min-h-[320px] sm:min-h-[440px] md:min-h-[500px] z-10 overflow-hidden sm:overflow-visible">
            <div className="relative flex items-center justify-center scale-[0.68] xs:scale-[0.8] sm:scale-90 md:scale-100 transition-transform duration-300">
              <OrbitRing
                radius={90}
                duration={20}
                items={innerItems}
                itemSizeClass="w-11 h-11 opacity-70"
              />
              <OrbitRing
                radius={150}
                duration={30}
                items={middleItems}
                itemSizeClass="w-12 h-12"
              />
              <OrbitRing
                radius={210}
                duration={40}
                items={outerItems}
                itemSizeClass="w-14 h-14"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
