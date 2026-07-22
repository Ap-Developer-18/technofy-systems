"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SectionHeader from "./common/section-header";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const BLOGS_DATA = [
  {
    id: "nextjs-19-architecture",
    title: "Why Next.js 19 & Server Actions Outperform Traditional Monoliths",
    description:
      "A deep dive into how Next.js 19 Server Components, App Router, and React Compiler eliminate client-side JavaScript bloat, boost Core Web Vitals, and maximize conversion rates for modern enterprises.",
    imagePath: "/why-nextjs-blog.png",
    slug: "nextjs-19-enterprise-architecture",
    category: "Next.js & React",
    readTime: "6 min read",
    date: "Jul 18, 2026",
    tags: ["Next.js 19", "Core Web Vitals", "Performance"],
  },
  {
    id: "custom-react-vs-wordpress",
    title: "Custom React Builds vs. WordPress: Why High-Growth Brands Switch",
    description:
      "Comparing bespoke Next.js web applications with bloated WordPress setups. Learn why modern startups choose custom CSS variable themes, zero plugin vulnerabilities, and sub-second rendering speeds.",
    imagePath: "/react-vs-wordpress.png",
    slug: "custom-react-vs-wordpress-templates",
    category: "Web Engineering",
    readTime: "5 min read",
    date: "Jul 12, 2026",
    tags: ["Custom Code", "SEO Optimization", "Security"],
  },
  {
    id: "landing-page-conversion-tokens",
    title: "How We Engineered a 42% Conversion Lift Using Modern UI Tokens",
    description:
      "A breakdown of high-converting landing page layouts, strategic CTA placements, micro-interactions, and glassmorphic design tokens that convert cold organic traffic into high-value leads.",
    imagePath: "/conversion-lift.png",
    slug: "landing-page-conversion-design-tokens",
    category: "UI/UX Strategy",
    readTime: "4 min read",
    date: "Jul 05, 2026",
    tags: ["Conversion Rate", "Tailwind CSS", "Figma"],
  },
  {
    id: "react-native-mobile-apps",
    title: "Building High-Performance React Native Mobile Apps in 2026",
    description:
      "How to craft fluid, cross-platform Android and iOS mobile applications using React Native. Strategies for light bundle sizes, native thread communication, and 60fps gesture mechanics.",
    imagePath: "/high-performance.png",
    slug: "react-native-high-performance-mobile-apps",
    category: "Mobile Apps",
    readTime: "7 min read",
    date: "Jun 28, 2026",
    tags: ["React Native", "Android & iOS", "Mobile UX"],
  },
  {
    id: "core-web-vitals-seo-mastery",
    title: "Mastering Core Web Vitals 99+ for Top Google Rankings",
    description:
      "Step-by-step technical guide to eliminating Cumulative Layout Shift (CLS), optimizing Largest Contentful Paint (LCP), and structuring Tailwind variables for instant page hydration.",
    imagePath: "/core-web-vitals.png",
    slug: "mastering-core-web-vitals-99-seo",
    category: "SEO & Growth",
    readTime: "5 min read",
    date: "Jun 20, 2026",
    tags: ["SEO Strategy", "Speed Optimization", "TypeScript"],
  },
  {
    id: "scalable-fullstack-architecture",
    title:
      "Architecting Scalable SaaS Engines with Next.js, Prisma & PostgreSQL",
    description:
      "Designing resilient full-stack systems with TanStack Query, automated database connection pooling, type-safe server actions, and seamless deployment on Vercel infrastructure.",
    imagePath: "/scalable-sass.png",
    slug: "scalable-saas-architecture-nextjs-prisma",
    category: "Backend & Systems",
    readTime: "8 min read",
    date: "Jun 14, 2026",
    tags: ["PostgreSQL", "Prisma", "TanStack Query"],
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="scroll-mt-6 relative w-full pt-16 md:pt-24">
      <div className="container relative z-10">
        {/* Section Header */}
        <SectionHeader
          badgeText="Engineering Insights"
          badgeVariant="primary"
          title={
            <>
              Actionable insights on <br className="hidden sm:block" />
              <span className="text-brand-primary">
                modern web engineering & design.
              </span>
            </>
          }
          description="In-depth technical breakdowns, Next.js architectural guides, Core Web Vitals optimization, and UX strategies engineered to scale digital platforms."
        />

        <div className="w-full mt-6 relative blogs-swiper-container">
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
            {BLOGS_DATA.map((post) => (
              <SwiperSlide key={post.id} className="h-full">
                <div className="group relative flex h-full w-full flex-col justify-between gap-6 overflow-hidden rounded-3xl border backdrop-blur-[11px] p-6 text-left shadow-[0_1.11px_0_rgba(0,0,0,0.05),0_4.44px_4.44px_rgba(0,0,0,0.05),0_11.099px_11.099px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1 bg-white/30 border-white/20">
                  {/* Top Light */}
                  <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent" />

                  {/* Glow */}
                  <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-brand-primary/10 blur-3xl transition-opacity duration-500 opacity-100" />

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="space-y-5">
                      {/* Thumbnail Image Box */}
                      <div className="flex h-56 items-center p-6 justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md relative">
                        <img
                          src={post.imagePath}
                          alt={post.title}
                          loading="lazy"
                          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Content */}
                      <div className="space-y-3">
                        {/* Meta Info */}
                        <div className="flex items-center justify-between text-xs font-figtree font-medium text-neutral-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-neutral-400" />
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="font-poppins text-xl font-bold leading-tight text-neutral-900 line-clamp-2 group-hover:text-brand-primary transition-colors">
                          {post.title}
                        </h3>

                        <p className="font-figtree text-sm leading-7 text-neutral-600 line-clamp-3">
                          {post.description}
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <a
                      href={`/blog/${post.slug}`}
                      className="mt-6 inline-flex items-center gap-2 font-poppins font-semibold text-neutral-900 transition-all duration-300 hover:text-brand-primary"
                    >
                      <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-brand-primary after:transition-all after:duration-300 group-hover:after:w-full">
                        Read Article
                      </span>

                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
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
        .blogs-swiper-container .swiper-pagination-bullets {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 8px !important;
          bottom: 24px !important;
        }
        .blogs-swiper-container .swiper-pagination-bullet {
          width: 20px !important;
          height: 20px !important;
          background: #d4d4d4 !important;
          opacity: 1 !important;
          border-radius: 9999px !important;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
          margin: 0 !important;
        }
        .blogs-swiper-container .swiper-pagination-bullet-active {
          width: 60px !important;
          background: var(--color-brand-primary, #213dff) !important;
          border-radius: 100px !important;
        }
      `}</style>
    </section>
  );
}
