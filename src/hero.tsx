"use client";

import React from "react";
import { motion } from "framer-motion";
import Badge from "./common/badge";
import Button from "./common/button";
import AnimatedCards from "./common/animated-cards";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="container border-[#DFDFDF] text-center relative z-10">
        <div className="w-full h-fit pt-44">
          {/* Badge */}
          <Badge>
            Custom Websites • Mobile Apps • SEO Optimized • Fast Delivery
          </Badge>

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
            Custom Websites & Mobile Apps Built to <br /> Grow Your Business.
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
            We design and develop high-performance websites, web applications,
            and mobile apps that help businesses attract more customers, improve
            search rankings, and deliver exceptional user experiences. From
            strategy and design to development, deployment, and ongoing
            support—we handle everything under one roof.
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
            <Button variant="primary">Book Free Consultation</Button>
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
