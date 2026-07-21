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
      </div>
    </section>
  );
}
