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
    }, 4000); // 4 seconds interval loop
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto lg:max-w-none lg:absolute lg:inset-x-0 lg:flex lg:justify-between pointer-events-none w-full min-h-36 px-4">
      {/* ================= LEFT TRACKING CONTAINER ================= */}
      <div className="relative w-full max-w-xs mx-auto lg:absolute lg:-left-4 lg:-top-16 h-28 flex items-center justify-center pointer-events-auto">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`left-${LEFT_CARDS[index].id}`}
            initial={{ opacity: 0, x: -20, rotate: 0, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, rotate: -3, scale: 1 }}
            exit={{ opacity: 0, x: 20, rotate: 0, scale: 0.96 }}
            whileHover={{ rotate: 0, scale: 1.01 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full bg-white border border-neutral-100/50 rounded-2xl p-4 shadow-xl shadow-neutral-100/30 flex items-center gap-4 text-left cursor-pointer group"
          >
            <div className="absolute -inset-x-2 top-2 -bottom-2 -z-10 bg-white/60 border border-neutral-100/30 rounded-2xl transition-transform group-hover:translate-y-0.5" />

            <div className="w-10 h-10 shrink-0 rounded-full bg-neutral-50/60 border border-neutral-100/40 flex items-center justify-center text-neutral-950">
              {LEFT_CARDS[index].icon}
            </div>

            <div className="grow space-y-0.5 pr-8">
              <span className="font-poppins text-xs font-bold text-neutral-950 block">
                {LEFT_CARDS[index].title}
              </span>
              <p className="font-figtree text-[11px] text-neutral-400 font-medium leading-none">
                with {LEFT_CARDS[index].company}
              </p>
              <p className="font-figtree text-xs text-neutral-500 leading-normal pt-1">
                {LEFT_CARDS[index].subtext}
              </p>
            </div>

            <div className="absolute right-4 top-4 flex flex-col items-end gap-1 text-right">
              <span className="font-figtree text-[10px] font-medium text-neutral-400">
                Now
              </span>
              <div className="relative flex items-center justify-center">
                <span className="w-4 h-4 rounded-full bg-brand-danger text-[10px] font-bold text-white flex items-center justify-center shadow-sm">
                  1
                </span>
                <span className="absolute -right-1.5 -bottom-1.5 w-4 h-4 rounded-full bg-brand-danger text-[10px] font-bold text-white flex items-center justify-center border border-white shadow-sm scale-90">
                  1
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ================= RIGHT TRACKING CONTAINER ================= */}
      <div className="relative w-full max-w-xs mx-auto lg:absolute lg:-right-4 lg:-top-8 h-28 flex items-center justify-center pointer-events-auto mt-4 sm:mt-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`right-${RIGHT_CARDS[index].id}`}
            initial={{ opacity: 0, x: 20, rotate: 0, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, rotate: 3, scale: 1 }}
            exit={{ opacity: 0, x: -20, rotate: 0, scale: 0.96 }}
            whileHover={{ rotate: 0, scale: 1.01 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full bg-white border border-neutral-100/50 rounded-2xl p-4 shadow-xl shadow-neutral-100/30 flex items-center gap-4 text-left cursor-pointer group"
          >
            <div className="absolute -inset-x-2 top-2 -bottom-2 -z-10 bg-white/60 border border-neutral-100/30 rounded-2xl transition-transform group-hover:translate-y-0.5" />

            <div className="w-10 h-10 shrink-0 rounded-full bg-neutral-50/60 border border-neutral-100/40 flex items-center justify-center text-brand-primary">
              {RIGHT_CARDS[index].icon}
            </div>

            <div className="grow space-y-0.5 pr-8">
              <span className="font-poppins text-xs font-bold text-neutral-950 block">
                {RIGHT_CARDS[index].title}
              </span>
              <p className="font-figtree text-[11px] text-neutral-400 font-medium leading-none">
                with {RIGHT_CARDS[index].company}
              </p>
              <p className="font-figtree text-xs text-neutral-500 leading-normal pt-1">
                {RIGHT_CARDS[index].subtext}
              </p>
            </div>

            <div className="absolute right-4 top-4 flex flex-col items-end gap-1 text-right">
              <span className="font-figtree text-[10px] font-medium text-neutral-400">
                Now
              </span>
              <div className="relative flex items-center justify-center">
                <span className="w-4 h-4 rounded-full bg-brand-danger text-[10px] font-bold text-white flex items-center justify-center shadow-sm">
                  1
                </span>
                <span className="absolute -right-1.5 -bottom-1.5 w-4 h-4 rounded-full bg-brand-danger text-[10px] font-bold text-white flex items-center justify-center border border-white shadow-sm scale-90">
                  1
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
