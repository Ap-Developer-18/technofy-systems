"use client";

import React from "react";
import { motion } from "framer-motion";
import Badge from "./common/badge";
import Button from "./common/button";
import AnimatedCards from "./common/animated-cards";
import Link from "next/link";

export default function Hero() {
  const phoneNumber = "919990533555";
  const defaultMessage = encodeURIComponent(
    "Hello Technofy Systems! I would like to book a free consultation for my project.",
  );

  return (
    <section className="relative w-full overflow-hidden">
      <div className="container border-[#DFDFDF] text-center relative z-10">
        <div className="w-full h-fit pt-44">
          {/* Badge */}
          <Badge>Using Figma, React.js Next.js, WebFlow or Wordpress.</Badge>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-poppins mt-6 text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-950 max-w-5xl mx-auto leading-[1.12] mb-3"
          >
            We Craft Premium Websites & <br /> Apps For Businesses
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-figtree text-sm sm:text-base font-medium md:text-lg text-neutral-500 max-w-4xl mx-auto leading-relaxed mb-10 px-2"
          >
            Partner with professionals to get stunning websites and apps, even
            you don't have any tech knowledge. We handle everything from design
            to launch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 md:mb-28"
          >
            <Link
              href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">Book Free Consultation</Button>
            </Link>
          </motion.div>

          {/* Floating Cards */}
          <div className="relative w-full max-w-5xl mx-auto mt-16 md:mt-24 min-h-36">
            <AnimatedCards />
            {/* <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden bg-white border-2 p-6 border-mauve-50">
              <img
                className="object-contain w-full"
                src="/hero.png"
                alt="hero image"
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
