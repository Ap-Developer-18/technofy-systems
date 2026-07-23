"use client";

import React from "react";
import SectionHeader from "./common/section-header";
import Image from "next/image";

const SERVICES_DATA = [
  {
    id: 1,
    title: "Web Development",
    description:
      "From sleek websites to powerful web applications, we build fast, scalable, and modern digital experiences tailored to your business goals.",
    imagePath: "/full-stack-web-architectures.png",
  },
  {
    id: 2,
    title: "E-Commerce & Web Systems",
    description:
      "We build seamless online stores and custom web portals designed to streamline your operations and drive real revenue growth.",
    imagePath: "/premium-saas.png",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description:
      "Crafting high-performing iOS and Android apps with smooth user experience and native feel that users love.",
    imagePath: "/high-end-fluid.png",
  },
  {
    id: 4,
    title: "UI/UX & Interactive Design",
    description:
      "Creating intuitive interfaces and responsive designs that captivate users and elevate your brand identity.",
    imagePath: "/resilient-infrastructure.png",
  },
];

export default function Services() {
  return (
    <section id="our-services" className="relative w-full pt-24 md:pt-32">
      <div className="container relative z-10">
        <SectionHeader
          badgeText="Our Services"
          badgeVariant="primary"
          title={
            <>
              Services Built For{" "}
              <span className="text-brand-primary">Your Growth</span>
            </>
          }
          description="From custom web apps to high-converting UI/UX designs, we deliver digital solutions that scale your business."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-stretch items-start gap-6 w-full h-full p-6 bg-white border border-neutral-50 rounded-[20px] shadow-[0_2px_5px_#00000005,0_10px_10px_#00000005] text-left group overflow-hidden"
            >
              {/* Image Container */}
              <div className="w-full h-50 lg:h-80 p-4 bg-[#f9f9f9] rounded-xl flex items-center justify-center relative overflow-hidden shrink-0">
                <Image
                  src={service.imagePath}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 45vw"
                  className="object-contain transition-transform duration-300 group-hover:scale-[1.02] p-6"
                />
              </div>

              <div className="space-y-3 w-full">
                <h3 className="font-poppins text-xl font-semibold tracking-[-0.5px] leading-[130%] text-[#0a0a0a]">
                  {service.title}
                </h3>
                <p className="font-figtree text-base font-normal leading-[150%] text-[#525252]">
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
