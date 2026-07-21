"use client";
import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  badgeText: string;
  badgeVariant?: "primary" | "danger";
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionHeader({
  badgeText,
  badgeVariant = "primary",
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: {
      wrapper: "max-lg:mx-auto text-center lg:text-left mx-0",
      badge: "justify-center lg:justify-start",
      description: "mx-auto lg:mx-0",
    },
    center: {
      wrapper: "text-center mx-auto",
      badge: "justify-center",
      description: "mx-auto",
    },
    right: {
      wrapper: "text-right ml-auto mr-0",
      badge: "justify-end",
      description: "ml-auto mr-0",
    },
  }[align];

  return (
    <div
      className={`${alignmentClasses.wrapper} max-w-3xl mb-6 space-y-4 px-4 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`inline-flex w-full ${alignmentClasses.badge}`}
      >
        <div
          className={`inline-flex items-center justify-center bg-white px-6 py-2 rounded-full border border-neutral-100/80 shadow-lg shadow-brand-primary/10 backdrop-blur-md ${badgeVariant === "danger" && "shadow-brand-danger/10!"}`}
        >
          <span
            className={`font-figtree font-semibold ${
              badgeVariant === "danger"
                ? "text-brand-danger"
                : "text-brand-primary"
            }`}
          >
            {badgeText}
          </span>
        </div>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="font-poppins text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`font-figtree max-sm:text-sm font-semibold text-neutral-500 leading-relaxed max-w-2xl ${alignmentClasses.description}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
