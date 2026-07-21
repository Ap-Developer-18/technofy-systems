"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Clock, Target, Smartphone, Wrench } from "lucide-react";
import SectionHeader from "./common/section-header";

const PROBLEMS_DATA = [
  {
    id: 1,
    title: "Timeline Delays & Scope Creep",
    subtext:
      "Projects often stretch for months due to unclear planning. We prevent this using fixed-scope blueprints, milestone deadlines, and transparent weekly progress demos.",
    icon: <Clock className="w-6 h-6 text-brand-danger" strokeWidth={1.5} />,
  },
  {
    id: 2,
    title: "Low Conversions & Confusing UX",
    subtext:
      "A pretty layout means nothing if users don't convert. We structure user journeys with high-converting design tokens and clear CTA placements from day one.",
    icon: <Target className="w-6 h-6 text-brand-danger" strokeWidth={1.5} />,
  },
  {
    id: 3,
    title: "Broken Mobile Layouts & Performance",
    subtext:
      "Websites breaking on smaller screens lose active clients. We engineer mobile-first responsive layers, optimized CSS variables, and zero cumulative layout shifts.",
    icon: (
      <Smartphone className="w-6 h-6 text-brand-danger" strokeWidth={1.5} />
    ),
  },
  {
    id: 4,
    title: "Spaghetti Code & Post-Launch Friction",
    subtext:
      "Quick-fix codebases make updates slow and expensive. We build clean TypeScript architectures with modular components and complete documentation for smooth scale.",
    icon: <Wrench className="w-6 h-6 text-brand-danger" strokeWidth={1.5} />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Problems() {
  return (
    <section className="relative w-full pt-24">
      <div className="container relative z-10">
        <SectionHeader
          badgeText="Engineering Blueprint"
          badgeVariant="danger"
          title={
            <>
              Solving the core bottlenecks of{" "}
              <span className="text-brand-danger">
                digital product development.
              </span>
            </>
          }
          description="Every digital product comes with strategic and technical hurdles. Here is how we identify core project bottlenecks and apply clear architectural roadmap solutions to build scalable applications."
        />

        {/* 🎴 Original 2x2 Grid Architecture Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
        >
          {PROBLEMS_DATA.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="flex flex-col justify-stretch items-start gap-6 w-full h-full p-6 bg-white border border-neutral-50 rounded-[20px] shadow-[0_2px_5px_#00000005,0_10px_10px_#00000005] will-change-transform text-left group"
            >
              <div className="flex flex-col items-start gap-6 w-full">
                {/* 🔮 Icon Box Custom-Tailored Frame */}
                <div className="w-12 h-12 flex items-center justify-center bg-white border border-neutral-50 rounded-xl shadow-[0_4px_12px_rgba(254,95,85,0.12),0_1px_4px_rgba(254,95,85,0.06)] group-hover:scale-105 transition-transform duration-200 shrink-0">
                  {item.icon}
                </div>

                {/* Main Content Node */}
                <div className="w-full">
                  <h3 className="font-poppins text-lg font-semibold tracking-[-1px] leading-[130%] text-neutral-950">
                    {item.title}
                  </h3>

                  <p className="font-figtree text-base mt-2 font-medium tracking-normal leading-[130%] text-neutral-600">
                    {item.subtext}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
