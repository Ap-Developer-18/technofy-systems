"use client";

import React from "react";
import SectionHeader from "./common/section-header";

const SERVICES_DATA = [
  {
    id: 1,
    title: "High-Performance Web Development",
    description:
      "Engineering lightning-fast, production-ready frontend layers using Next.js 19, React, and TypeScript, backed by optimized code clean architectures built to scale beautifully.",
    imagePath: "/full-stack-web-architectures.png",
  },
  {
    id: 2,
    title: "Premium E-Commerce & Web Systems",
    description:
      "Building seamless storefront frameworks, custom internal portals, state containers, and secure client-side mutations tailored to drive conversions and operational traction.",
    imagePath: "/premium-saas.png",
  },
  {
    id: 3,
    title: "Native Android & iOS Applications",
    description:
      "Crafting high-end, responsive cross-platform mobile products deployed smoothly to production storefronts with fluid touch mechanics and light bundle weights.",
    imagePath: "/high-end-fluid.png",
  },
  {
    id: 4,
    title: "Luxury Interactive Interface Layers",
    description:
      "Enhancing standard interfaces with high-fidelity fluid micro-interactions, responsive grid canvas elements, and smooth animations without expanding final bundle footprints.",
    imagePath: "/resilient-infrastructure.png",
  },
];

export default function Services() {
  return (
    <section className="relative w-full pt-24 md:pt-32">
      <div className="container relative z-10">
        <SectionHeader
          badgeText="Our Services"
          badgeVariant="primary"
          title={
            <>
              Get Perfect Services To Elevate <br /> Your{" "}
              <span className="text-brand-primary">Online Presence</span>
            </>
          }
          description="We replace fragile codebases with high-performance digital engines shaped by modern design principles. No basic templates, no slow execution."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-stretch items-start gap-6 w-full h-full p-6 bg-white border border-neutral-50 rounded-[20px] shadow-[0_2px_5px_#00000005,0_10px_10px_#00000005] text-left group overflow-hidden"
            >
              {/* Image Container with Perfect Scaling and Center Alignment */}
              <div className="w-full h-80 p-4 bg-[#f9f9f9] rounded-xl flex items-center justify-center relative overflow-hidden shrink-0">
                <img
                  src={service.imagePath}
                  alt={service.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              <div className="space-y-6 w-full">
                <h3 className="font-poppins text-lg font-semibold tracking-[-1px] leading-[130%] text-[#0a0a0a]">
                  {service.title}
                </h3>
                <p className="font-figtree text-base font-medium tracking-normal leading-[130%] text-[#404040]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
