"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "./button";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-4 inset-x-0 z-50 px-6 pointer-events-none">
      <div
        style={{
          backgroundColor: "rgb(255, 255, 255)",
          borderRadius: "99px",
          boxShadow: "#00000014 0px 6px 14px 0px",
          transform: "none",
          transformOrigin: "50% 50% 0px",
          opacity: 1,
          width: "100%",
        }}
        className="max-w-309 mx-auto p-2 md:pl-6 md:pr-2 md:py-2 flex items-center justify-between pointer-events-auto transition-all duration-300"
      >
        {/* Brand Identity */}
        <div className="shrink-0 pl-4 md:pl-0">
          <Link href="#" className="font-figtree flex items-center gap-2">
            <img width={44} height={44} src="/logo.svg" alt="logo" />
            <p className="text-lg font-extrabold leading-[100%] text-neutral-950">
              Technofy <br /> Systems
            </p>
          </Link>
        </div>

        {/* Center Links (Desktop Matrix) */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {[
            "Services",
            "Benefits",
            "Case studies",
            "About",
            "Blogs",
            "FAQs",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="font-figtree font-medium text-neutral-600 hover:text-neutral-950 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Action Button Segment */}
        <div className="hidden md:block">
          <Button variant="primary">Book a free strategy call</Button>
        </div>

        {/* Responsive Drawer Toggle */}
        <div className="md:hidden pr-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-neutral-600 hover:text-neutral-950 focus:outline-hidden cursor-pointer rounded-full hover:bg-neutral-50"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Symmetrical Dropdown Overlay for Mobile Screens */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden mt-3 w-full bg-white border border-neutral-100 rounded-3xl p-4 shadow-xl pointer-events-auto"
          >
            <div className="space-y-1">
              {[
                "Services",
                "Benefits",
                "Case studies",
                "About",
                "Blogs",
                "FAQs",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 font-figtree text-base font-medium text-neutral-600 hover:text-neutral-950 rounded-xl hover:bg-neutral-50/80 transition-colors"
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t border-neutral-100 px-2 mt-2">
                <Button variant="primary" className="w-full justify-between">
                  Book a free strategy call
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
