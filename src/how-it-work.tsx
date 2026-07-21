"use client";

import React from "react";
import { Eye, ClipboardList, Layers, Code2, Rocket } from "lucide-react";
import SectionHeader from "./common/section-header";

const STEPS_DATA = [
  {
    id: 1,
    title: "Understand",
    description:
      "We first understand exactly what you want to build — your requirements, target audience, core features, and the right technology stack for it.",
    icon: (
      <Eye
        className="w-6 h-6 text-[#1E5BFF] group-hover:scale-110 transition-transform duration-300"
        strokeWidth={2}
      />
    ),
  },
  {
    id: 2,
    title: "Blueprint",
    description:
      "We prepare a clear blueprint showing how the project will be executed, and get your approval on the full scope before moving forward.",
    icon: (
      <ClipboardList
        className="w-6 h-6 text-[#1E5BFF] group-hover:scale-110 transition-transform duration-300"
        strokeWidth={2}
      />
    ),
  },
  {
    id: 3,
    title: "Design",
    description:
      "Once you're on board with the plan, we craft the complete design — layouts, UI elements, and visual identity — the proper way.",
    icon: (
      <Layers
        className="w-6 h-6 text-[#1E5BFF] group-hover:scale-110 transition-transform duration-300"
        strokeWidth={2}
      />
    ),
  },
  {
    id: 4,
    title: "Development",
    description:
      "We move into development, engineering a robust, scalable, and high-performing product from the approved design.",
    icon: (
      <Code2
        className="w-6 h-6 text-[#1E5BFF] group-hover:scale-110 transition-transform duration-300"
        strokeWidth={2}
      />
    ),
  },
  {
    id: 5,
    title: "Deploy & Test",
    description:
      "Finally, we handle hosting and deployment, followed by thorough final testing to make sure everything runs flawlessly.",
    icon: (
      <Rocket
        className="w-6 h-6 text-[#1E5BFF] group-hover:scale-110 transition-transform duration-300"
        strokeWidth={2}
      />
    ),
  },
];

export default function HowWeWork() {
  return (
    <section className="relative w-full pt-24 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="container">
        {/* Upper Split Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 w-full lg:mb-16">
          <div className="lg:col-span-6 flex flex-col items-start text-left gap-6">
            <SectionHeader
              badgeText="How We Work"
              title="Simple, Transparent Development Process"
              description="We understand your goals, design the solution, build with clean code, and test everything before launch—keeping you involved at every step."
              align="left"
            />
          </div>
          <div className="lg:col-span-6 w-full flex justify-center items-center bg-white rounded-3xl overflow-hidden sm:p-4">
            <img
              src="/how-we-work.png"
              alt="how we work"
              className="w-full aspect-4/3 object-contain"
            />
          </div>
        </div>

        <div className="relative w-full lg:mt-12">
          <div className="absolute top-12 left-[8%] right-[8%] hidden lg:flex items-center pointer-events-none z-0">
            <div className="w-full h-0.5 border-t border-dashed border-neutral-950/50" />
            <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-[#1E5BFF]/50 -ml-1" />
          </div>
          <div className="flex flex-col max-lg:mt-22 lg:grid lg:grid-cols-5 gap-12 lg:gap-4 relative z-10 w-full items-center">
            {STEPS_DATA.map((step) => (
              <div
                key={step.id}
                className="w-full lg:max-w-none flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="relative size-25 rounded-3xl bg-linear-to-br from-white to-[#F6F9FF] border border-[#E2E8F0] shadow-[0_8px_20px_-4px_rgba(30,91,255,0.06)] flex items-center justify-center transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_16px_32px_-6px_rgba(30,91,255,0.15)] mb-6">
                  <div className="absolute -inset-2 rounded-[28px] border-[1.5px] border-dashed border-neutral-950/20 pointer-events-none transition-all duration-500 group-hover:border-[#1E5BFF]/70" />
                  <div className="relative z-10 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="absolute -top-4 -right-4 w-7 h-7 bg-linear-to-tr from-brand-primary to-brand-success text-white text-[12px] font-bold rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(30,91,255,0.35)] font-poppins border-2 border-white z-20 transition-transform duration-300 group-hover:scale-110">
                    {step.id}
                  </span>
                </div>
                {/* Typography Block */}
                <h4 className="font-poppins text-lg font-semibold text-neutral-900 mb-2 tracking-tight group-hover:text-[#1E5BFF] transition-colors duration-300">
                  {step.title}
                </h4>
                <p className="font-figtree lg:text-xs font-medium leading-relaxed text-neutral-500 lg:max-w-[210px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
