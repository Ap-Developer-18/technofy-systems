"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Sparkles, Cpu, Globe } from "lucide-react";

const LEFT_CARDS = [
  {
    id: 1,
    type: "website",
    title: "Custom Website",
    company: "Next.js & React",
    subtext: "Beautiful, high-performance websites tailored to your business.",
    icon: <Globe className="w-4 h-4" />,
  },
  {
    id: 2,
    type: "app",
    title: "Mobile App",
    company: "Android • iOS",
    subtext: "Scalable mobile applications with a premium user experience.",
    icon: <Cpu className="w-4 h-4" />,
  },
];

const RIGHT_CARDS = [
  {
    id: 3,
    type: "performance",
    title: "Lightning Fast",
    company: "Performance Optimized",
    subtext: "Fast-loading websites designed for users and search engines.",
    icon: <Sparkles className="w-4 h-4" />,
  },
  {
    id: 4,
    type: "support",
    title: "Secure Launch",
    company: "Deployment & Support",
    subtext: "Reliable deployment with ongoing updates and maintenance.",
    icon: <Layers className="w-4 h-4" />,
  },
];

export default function AnimatedCards() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % LEFT_CARDS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-sm sm:max-w-3xl mx-auto lg:max-w-none lg:absolute lg:inset-x-0 lg:flex lg:justify-between pointer-events-none min-h-36 px-4">
      <div className="flex flex-col sm:flex-row lg:block gap-4 sm:gap-6 w-full">
        {/* ================= LEFT CARD CONTAINER ================= */}
        <div className="relative w-full sm:w-1/2 lg:w-80 mx-auto lg:absolute lg:-left-4 lg:-top-16 h-28 flex items-center justify-center pointer-events-auto">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`left-${LEFT_CARDS[index].id}`}
              initial={{ opacity: 0, y: 15, rotate: 0, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, rotate: -2, scale: 1 }}
              exit={{ opacity: 0, y: -15, rotate: 0, scale: 0.95 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full bg-white/90 backdrop-blur-md border border-neutral-200/60 rounded-2xl p-3.5 sm:p-4 shadow-[0_10px_25px_rgba(0,0,0,0.06)] flex items-center gap-3.5 text-left cursor-pointer group"
            >
              <div className="absolute -inset-x-1.5 top-1.5 -bottom-1.5 -z-10 bg-white backdrop-blur-sm border border-neutral-200/40 rounded-2xl transition-transform group-hover:translate-y-0.5" />
              <div className="w-10 h-10 shrink-0 rounded-xl bg-neutral-900 text-white flex items-center justify-center shadow-xs">
                {LEFT_CARDS[index].icon}
              </div>

              {/* Text Details */}
              <div className="grow space-y-0.5 pr-6 min-w-0">
                <span className="font-poppins text-xs font-bold text-neutral-950 block truncate">
                  {LEFT_CARDS[index].title}
                </span>
                <p className="font-figtree text-[10px] sm:text-[11px] text-neutral-400 font-medium leading-none truncate">
                  with {LEFT_CARDS[index].company}
                </p>
                <p className="font-figtree text-[11px] sm:text-xs text-neutral-500 leading-snug pt-0.5 line-clamp-2">
                  {LEFT_CARDS[index].subtext}
                </p>
              </div>

              {/* Badge */}
              <div className="absolute right-3.5 top-3.5 flex flex-col items-end gap-1 text-right">
                <span className="font-figtree text-[9px] font-semibold text-neutral-400 uppercase tracking-wider">
                  Now
                </span>
                <div className="relative flex items-center justify-center">
                  <span className="w-4 h-4 rounded-full bg-emerald-500 text-[10px] font-bold text-white flex items-center justify-center shadow-xs">
                    1
                  </span>
                  <span className="absolute -right-1 -bottom-1 w-3.5 h-3.5 rounded-full bg-emerald-500 text-[9px] font-bold text-white flex items-center justify-center border border-white shadow-xs scale-90">
                    1
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ================= RIGHT CARD CONTAINER ================= */}
        <div className="relative w-full sm:w-1/2 lg:w-80 mx-auto lg:absolute lg:-right-4 lg:-top-8 h-28 flex items-center justify-center pointer-events-auto">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`right-${RIGHT_CARDS[index].id}`}
              initial={{ opacity: 0, y: 15, rotate: 0, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, rotate: 2, scale: 1 }}
              exit={{ opacity: 0, y: -15, rotate: 0, scale: 0.95 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full bg-white/90 backdrop-blur-md border border-neutral-200/60 rounded-2xl p-3.5 sm:p-4 shadow-[0_10px_25px_rgba(0,0,0,0.06)] flex items-center gap-3.5 text-left cursor-pointer group"
            >
              {/* Stack effect background card */}
              <div className="absolute -inset-x-1.5 top-1.5 -bottom-1.5 -z-10 bg-white backdrop-blur-sm border border-neutral-200/40 rounded-2xl transition-transform group-hover:translate-y-0.5" />

              {/* Icon */}
              <div className="w-10 h-10 shrink-0 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
                {RIGHT_CARDS[index].icon}
              </div>

              {/* Text Details */}
              <div className="grow space-y-0.5 pr-6 min-w-0">
                <span className="font-poppins text-xs font-bold text-neutral-950 block truncate">
                  {RIGHT_CARDS[index].title}
                </span>
                <p className="font-figtree text-[10px] sm:text-[11px] text-neutral-400 font-medium leading-none truncate">
                  with {RIGHT_CARDS[index].company}
                </p>
                <p className="font-figtree text-[11px] sm:text-xs text-neutral-500 leading-snug pt-0.5 line-clamp-2">
                  {RIGHT_CARDS[index].subtext}
                </p>
              </div>

              {/* Badge */}
              <div className="absolute right-3.5 top-3.5 flex flex-col items-end gap-1 text-right">
                <span className="font-figtree text-[9px] font-semibold text-neutral-400 uppercase tracking-wider">
                  Now
                </span>
                <div className="relative flex items-center justify-center">
                  <span className="w-4 h-4 rounded-full bg-indigo-600 text-[10px] font-bold text-white flex items-center justify-center shadow-xs">
                    1
                  </span>
                  <span className="absolute -right-1 -bottom-1 w-3.5 h-3.5 rounded-full bg-indigo-600 text-[9px] font-bold text-white flex items-center justify-center border border-white shadow-xs scale-90">
                    1
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
