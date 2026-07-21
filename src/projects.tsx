"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SectionHeader from "./common/section-header";
import { ExternalLink } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const PROJECTS_DATA = [
  {
    id: "koncept-archidesign",
    title: "Koncept Archidesign Consultants",
    description:
      "Premium architecture portfolio engineered for medium to large-scale sustainable enterprise structures, institutional planning layouts, and commercial developments.",
    imagePath: "/koncept.png",
    liveUrl: "https://koncept-archidesign-consultants.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "Aesthetic UI"],
  },
  {
    id: "traveller-cabs",
    title: "Traveller Cabs - Premium Fleet Rental",
    description:
      "A high-conversion transport booking engine deployed for premium vehicle travel management across Faridabad and North India regions.",
    imagePath: "/traveller-cabs.png",
    liveUrl: "https://traveller-cabs.vercel.app/",
    tags: ["React", "Custom Bookings", "Tailwind"],
  },
  {
    id: "trustified-loan",
    title: "Trustified Loan - Capital Structuring Platform",
    description:
      "A secure commercial financial consulting portal featuring optimized cash flows, automated underwriting metrics, and transparent asset management panels.",
    imagePath: "/trustified-loan.png",
    liveUrl: "https://indian-loan-advisor.vercel.app/",
    tags: ["Next.js 19", "TanStack Query", "Prisma"],
  },
  {
    id: "js-enterprises",
    title: "J S Enterprises - Civil & MEP Contractor Hub",
    description:
      "Turnkey technology-driven infrastructure management portal built for corporate space engineering, electrical integration, and commercial fit-outs.",
    imagePath: "/js-infra.png",
    liveUrl: "https://www.jseinfra.com/",
    tags: ["Next.js", "Tailwind CSS", "Optimization"],
  },
  {
    id: "udyora",
    title: "Udyora - Regulatory Compliance Gateway",
    description:
      "A centralized single-window coordination system designed to track complex regulatory approvals, zoning clearances, and tools prototyping lifecycle metrics.",
    imagePath: "/udyora.png",
    liveUrl: "https://www.udyora.com/",
    tags: ["TypeScript", "Modern UX", "Tailwind"],
  },
  {
    id: "fintrack-app",
    title: "FinTrack - Mobile Expense Tracker Ecosystem",
    description:
      "A highly secure cross-platform mobile app engineered to process personal cash flow metrics, dynamic expense categorization, and multi-tenant ledger synchronization balances.",
    imagePath: "/expense-tracker.png",
    liveUrl: "https://github.com/",
    tags: ["React Native", "PostgreSQL", "Mobile UI"],
  },
];

export default function Projects() {
  return (
    <section className="relative w-full pt-12">
      <div className="container relative z-10">
        {/* Section Header */}
        <SectionHeader
          badgeText="Our Recent Work"
          badgeVariant="primary"
          title={
            <>
              Recent platforms that define <br className="hidden sm:block" />
              our{" "}
              <span className="text-brand-primary">engineering standards.</span>
            </>
          }
          description="Explore our portfolio of premium custom platforms, cross-platform mobile interfaces, and high-performance layouts launched to production."
        />

        <div className="w-full mt-6 relative projects-swiper-container">
          <Swiper
            modules={[Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            pagination={{
              clickable: true,
              dynamicBullets: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 24 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="w-full px-2! pb-20!"
          >
            {PROJECTS_DATA.map((project) => (
              <SwiperSlide key={project.id} className="h-full">
                <div className="group relative flex h-full w-full flex-col justify-between gap-6 overflow-hidden rounded-3xl border backdrop-blur-[11px] p-6 text-left shadow-[0_1.11px_0_rgba(0,0,0,0.05),0_4.44px_4.44px_rgba(0,0,0,0.05),0_11.099px_11.099px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1 bg-white/30 border-white/20">
                  {/* Top Light */}
                  <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent" />

                  {/* Glow */}
                  <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-brand-primary/10 blur-3xl transition-opacity duration-500 opacity-100" />

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="space-y-5">
                      {/* Image */}
                      <div className="flex h-56 items-center p-6 justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md">
                        <img
                          src={project.imagePath}
                          alt={project.title}
                          loading="lazy"
                          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Content */}
                      <div className="space-y-3">
                        <h3 className="font-poppins text-xl font-bold leading-tight text-neutral-900 line-clamp-2">
                          {project.title}
                        </h3>

                        <p className="font-figtree text-sm leading-7 text-neutral-600 line-clamp-3">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 font-poppins font-semibold text-neutral-900 transition-all duration-300 hover:text-brand-primary"
                    >
                      <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-brand-primary after:transition-all after:duration-300 group-hover:after:w-full">
                        Visit Now
                      </span>

                      <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Dynamic Pagination Styling */}
      <style jsx global>{`
        .projects-swiper-container .swiper-pagination-bullets {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 8px !important;
          bottom: 24px !important;
        }
        .projects-swiper-container .swiper-pagination-bullet {
          width: 20px !important;
          height: 20px !important;
          background: #d4d4d4 !important;
          opacity: 1 !important;
          border-radius: 9999px !important;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
          margin: 0 !important;
        }
        .projects-swiper-container .swiper-pagination-bullet-active {
          width: 60px !important;
          background: var(--color-brand-primary, #213dff) !important;
          border-radius: 100px !important;
        }
      `}</style>
    </section>
  );
}
