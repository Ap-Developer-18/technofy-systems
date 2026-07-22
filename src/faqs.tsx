"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeader from "./common/section-header";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQS_DATA: FAQItem[] = [
  {
    id: 1,
    question: "How do you approach high-performance development?",
    answer:
      "We build production-grade applications using Next.js 19, React, and TypeScript. By enforcing clean CSS :root variables, modular architecture, and zero cumulative layout shifts (CLS), we consistently achieve 99+ Core Web Vitals scores for blazing-fast load speeds.",
  },
  {
    id: 2,
    question:
      "Do you create high-converting landing pages for Hisar & Global startups?",
    answer:
      "Yes, we partner with both regional businesses in Hisar/North India and international clients globally. We engineer custom, conversion-driven UIs, strategic CTA layouts, and fluid micro-interactions tailored to maximize engagement and lead generation.",
  },
  {
    id: 3,
    question: "How secure is my custom Next.js application?",
    answer:
      "Security is embedded into our core architecture. We utilize type-safe server actions, secure client-side mutations, encrypted environment configurations, and resilient backend integrations (like PostgreSQL & Supabase) to ensure your platform remains bulletproof.",
  },
  {
    id: 4,
    question: "Why choose your custom builds over basic WordPress templates?",
    answer:
      "Monolithic WordPress templates often suffer from bloated plugins, slow rendering speeds, and rigid design constraints. Our custom React and Next.js builds deliver bespoke UI/UX, superior SEO performance, complete design freedom, and clean, maintainable code engineered to scale.",
  },
  {
    id: 5,
    question: "Do you offer post-launch support and maintenance?",
    answer:
      "Absolutely. We provide dedicated post-launch support, continuous feature iterations, performance monitoring, and clear technical documentation to ensure your platform runs smoothly without any post-launch friction.",
  },
  {
    id: 6,
    question: "What is the typical development timeline?",
    answer:
      "Timeline depends on the project scope. High-converting landing pages typically take 1 to 2 weeks, while complex full-stack web platforms or custom systems usually range between 3 to 6 weeks. We follow strict milestone blueprints to guarantee on-time delivery.",
  },
];

export default function Faqs() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="relative scroll-mt-8 w-full pt-24">
      <div className="container relative z-10 lg:max-w-4xl">
        {/* Section Header */}
        <SectionHeader
          badgeText="Got Questions?"
          badgeVariant="primary"
          title={
            <>
              Frequently asked questions <br className="hidden sm:block" />
              about our{" "}
              <span className="text-brand-primary">engineering process.</span>
            </>
          }
          description="Everything you need to know about our custom development workflow, architecture standards, timelines, and post-launch support."
        />

        {/* Accordion Wrapper */}
        <div className="w-full mt-10 space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: faq.id * 0.05 }}
                className={`w-full rounded-[20px] border transition-all duration-300 overflow-hidden bg-white ${
                  isOpen
                    ? "border-brand-primary/30 shadow-[0_8px_30px_rgba(33,61,255,0.06)]"
                    : "border-neutral-100 shadow-[0_2px_5px_rgba(0,0,0,0.02)] hover:border-neutral-200"
                }`}
              >
                {/* Question Trigger */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-poppins text-lg font-semibold tracking-[-0.5px] text-neutral-900 pr-4">
                    {faq.question}
                  </span>

                  {/* Expand/Collapse Toggle Icon */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-brand-primary text-white"
                        : "bg-neutral-50 border border-neutral-100 text-neutral-600"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {/* Animated Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-neutral-50 mt-1">
                        <p className="font-figtree text-base font-medium leading-[160%] text-neutral-600 pt-3">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
