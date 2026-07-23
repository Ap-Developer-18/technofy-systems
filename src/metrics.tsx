"use client";

import { motion, Variants } from "framer-motion";
import SectionHeader from "./common/section-header";

const METRICS_DATA = [
  {
    id: 1,
    value: "42%",
    label: "Conversion lift",
    subtext:
      "Average increase in user actions recorded after deploying high-end aesthetic interfaces.",
    iconPath: "/tick-icon.webp",
  },
  {
    id: 2,
    value: "50+",
    label: "Live platforms",
    subtext:
      "Premium websites and mobile applications successfully engineered and launched.",
    iconPath: "/person-icon.webp",
  },
  {
    id: 3,
    value: "100%",
    label: "Fluid response",
    subtext:
      "Ultra-fast loading targets met across all desktop viewports and physical phone screens.",
    iconPath: "/pipeline-icon.webp",
  },
  {
    id: 4,
    value: "Weeks",
    label: "Saved off launches",
    subtext:
      "Production-ready boilerplate modules cutting down core rollout timelines.",
    iconPath: "/rocket-icon.webp",
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

export default function Metrics() {
  return (
    <section className="relative w-full pt-12">
      <div className="container relative z-10">
        <SectionHeader
          badgeText="Results"
          title={
            <>
              Technofy Systems is built on{" "}
              <span className="text-brand-primary">measured outcomes</span>, not
              assumptions.
            </>
          }
          description="We don't just ship standard layouts. We deliver user traction. Translating premium design and code into the kind of performance metrics you can actually track."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {METRICS_DATA.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="
      h-full w-full rounded-[20px]
      border-2 border-neutral-50
      bg-white
      p-6
      flex flex-col justify-between
      text-left
      shadow-[0_2px_5px_rgba(0,0,0,0.02),0_7px_5px_rgba(0,0,0,0.02)]
      transition-shadow duration-300
      group
      will-change-transform
    "
            >
              <div>
                <div
                  className="
          mb-6
          flex h-12 w-12 items-center justify-center
          rounded-lg
          bg-white
          shadow-[0_2px_5px_rgba(33,61,255,0.10),0_9px_9px_rgba(33,61,255,0.09)]
          transition-transform duration-200
          group-hover:scale-105
        "
                >
                  <img
                    src={item.iconPath}
                    alt={item.label}
                    className="h-8 w-8 object-contain"
                  />
                </div>

                <div className="font-poppins mb-2 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
                  {item.value}
                </div>

                <div className="font-figtree text-sm font-semibold text-neutral-500">
                  {item.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
