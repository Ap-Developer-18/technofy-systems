"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  if (variant === "secondary") {
    return (
      <button
        className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 font-figtree text-sm font-medium text-neutral-500 border-b border-transparent hover:text-neutral-950 hover:border-neutral-950 transition-all cursor-pointer ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  const motionProps = props as HTMLMotionProps<"button">;

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-4 pl-7 pr-2.5 py-2.5 bg-neutral-950 text-white font-figtree text-sm font-medium rounded-full shadow-sm transition-colors duration-200 hover:bg-brand-primary cursor-pointer ${className}`}
      {...motionProps}
    >
      {children}
      <span className="w-10 h-10 shrink-0 bg-white rounded-full flex items-center justify-center text-neutral-950 shadow-xs">
        <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
      </span>
    </motion.button>
  );
}
