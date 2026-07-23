"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Social Links Array with Vector SVGs
const SOCIAL_LINKS = [
  {
    id: "linkedin",
    name: "LinkedIn",
    href: "https://linkedin.com",
    svg: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    id: "x-twitter",
    name: "Twitter X",
    href: "https://x.com",
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    id: "youtube",
    name: "YouTube",
    href: "https://youtube.com",
    svg: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

// Quick Links Array Data
const QUICK_LINKS = [
  {
    name: "Our Projects",
    href: "#projects",
  },
  {
    name: "How We Work",
    href: "#how-we-work",
  },
  {
    name: "Our Services",
    href: "#our-services",
  },
  {
    name: "Blogs",
    href: "#blogs",
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full pb-6 pt-24 md:pt-24">
      <div className="container">
        <div
          className="group relative w-full h-min flex-none bg-white border-2 border-white rounded-[32px] sm:rounded-[40px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.02)] overflow-hidden z-0"
          style={{
            willChange: "var(--framer-will-change-override, transform)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-12 pb-12 border-b border-neutral-100">
            <div className="lg:col-span-5 flex flex-col items-start text-left gap-4">
              <div className="flex items-center gap-2.5">
                <Link href="#" className="font-figtree flex items-center gap-2">
                  <Image src="/logo.svg" alt="logo" width={44} height={44} />
                  <p className="text-lg font-extrabold leading-[100%] text-neutral-950">
                    Technofy <br /> Systems
                  </p>
                </Link>
              </div>

              <p className="font-figtree text-sm sm:text-base text-neutral-500 font-medium leading-relaxed max-w-sm">
                We design and develop high-performance custom websites, web
                applications, and mobile apps engineered to scale beautifully
                and grow your business.
              </p>
            </div>
            <div className="hidden lg:block lg:col-span-1" />
            <div className="lg:col-span-3 flex flex-col items-start text-left gap-4">
              <h4 className="font-poppins text-base font-bold text-brand-primary">
                Quick Links
              </h4>
              <ul className="space-y-3 font-figtree text-sm sm:text-base font-medium text-neutral-600">
                {QUICK_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-brand-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3 flex flex-col items-start text-left gap-5">
              <h4 className="font-poppins text-base font-bold text-brand-primary">
                Get in touch
              </h4>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-neutral-200 shrink-0 relative">
                  <Image
                    src="/owner.webp"
                    alt="Satish Rawat"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-poppins text-base font-bold text-neutral-900">
                      Satish Rawat
                    </span>
                    <Image
                      src="/tick-icon.webp"
                      alt="Satish Rawat"
                      width={16}
                      height={16}
                      className="object-cover"
                    />
                  </div>
                  <span className="font-figtree text-xs text-neutral-500 font-medium">
                    Founder & Lead Developer
                  </span>
                </div>
              </div>

              {/* Contact Email */}
              <a
                href="mailto:satish@technofysystems.com"
                className="font-figtree text-sm sm:text-base font-semibold text-neutral-900 hover:text-brand-primary transition-colors"
              >
                satish@technofysystems.com
              </a>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4 text-neutral-800">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-neutral-100 hover:text-brand-primary transition-all flex items-center justify-center"
                    aria-label={social.name}
                  >
                    {social.svg}
                  </a>
                ))}
              </div>

              {/* Location Tagline */}
              <p className="font-figtree text-xs sm:text-sm text-neutral-500 leading-relaxed font-medium">
                Based in India — servicing startups & enterprises globally.
              </p>
            </div>
          </div>

          {/* 📄 Bottom Copyright Sub-Footer */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-figtree font-medium text-neutral-500">
            <p>
              © 2026{" "}
              <span className="font-bold text-neutral-900">
                Technofy Systems
              </span>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
