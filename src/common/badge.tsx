"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center justify-center bg-white px-6 py-2 rounded-full border border-neutral-100/30 shadow-md shadow-brand-primary/5 backdrop-blur-md"
    >
      <span className="font-figtree font-semibold text-brand-primary">
        {children}
      </span>
    </motion.div>
  );
}
