"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "./button";
import Link from "next/link";
import Image from "next/image";

const navitems = [
  {
    label: "Our Projects",
    path: "#projects",
  },
  {
    label: "How We Work",
    path: "#how-we-work",
  },
  {
    label: "Our Services",
    path: "#our-services",
  },
  {
    label: "Blogs",
    path: "#blogs",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full container left-1/2 -translate-x-1/2 fixed top-4 inset-x-0 z-50 px-6 pointer-events-none">
      <div
        style={{
          borderRadius: "99px",
          boxShadow: "#00000014 0px 6px 14px 0px",
          transform: "none",
          transformOrigin: "50% 50% 0px",
          opacity: 1,
          width: "100%",
        }}
        className="max-w-309 mx-auto p-2 lg:pl-6 lg:pr-2 lg:py-2 flex items-center justify-between pointer-events-auto transition-all duration-300 bg-white"
      >
        {/* Brand Identity */}
        <div className="shrink-0 pl-4 lg:pl-0">
          <a href="/#" className="font-figtree flex items-center gap-2">
            <Image src="/logo.svg" alt="logo" width={44} height={44} />
            <p className="text-lg font-extrabold leading-[100%] text-neutral-950">
              Technofy <br /> Systems
            </p>
          </a>
        </div>

        {/* Center Links (Desktop Matrix - now triggers on LG) */}
        <div className="hidden lg:flex items-center gap-8 lg:gap-10">
          {navitems.map((obj, index) => (
            <Link
              key={index}
              href={`/${obj.path}`}
              className="font-figtree font-medium text-neutral-600 hover:text-neutral-950 transition-colors"
            >
              {obj.label}
            </Link>
          ))}
        </div>

        {/* Action Button Segment */}
        <div className="hidden lg:block">
          <Link href={"/get-a-quote"}>
            <Button variant="primary">Get a quote</Button>
          </Link>
        </div>

        {/* Responsive Drawer Toggle (visible below LG) */}
        <div className="lg:hidden pr-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-neutral-600 hover:text-neutral-950 focus:outline-none cursor-pointer rounded-full hover:bg-neutral-50"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Symmetrical Dropdown Overlay for Mobile & Tablet Screens */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden mt-3 w-full bg-white/80 backdrop-blur-md border border-white/20 rounded-3xl p-4 shadow-xl pointer-events-auto"
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
                  className="block px-4 py-3 font-figtree text-base font-medium text-neutral-600 hover:text-neutral-950 rounded-xl hover:bg-neutral-100/50 transition-colors"
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t border-neutral-200/60 px-2 mt-2">
                <Button variant="primary" className="w-full justify-between">
                  Get a quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
