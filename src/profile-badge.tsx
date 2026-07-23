"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProfileCardProps {
  name?: string;
  statusText?: string;
  imageUrl?: string;
  isOnline?: boolean;
  phoneNumber?: string;
  onClick?: () => void;
}

export default function ProfileBadge({
  name = "Satish Rawat",
  statusText = "Online",
  imageUrl = "/owner.webp",
  isOnline = true,
  phoneNumber = "919990533555",
  onClick,
}: ProfileCardProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Continuous Cycle: 3s Visible + 5s Hidden = 8s Total Cycle
    const cycle = () => {
      // 3 second dikhne ke baad hide kar do
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      // 5 second chhupne ke baad (total 8s baad) wapas show kar do
      const showTimer = setTimeout(() => {
        setIsVisible(true);
      }, 8000);

      return { hideTimer, showTimer };
    };

    let timers = cycle();
    const interval = setInterval(() => {
      timers = cycle();
    }, 8000);

    return () => {
      clearTimeout(timers.hideTimer);
      clearTimeout(timers.showTimer);
      clearInterval(interval);
    };
  }, []);

  // Handle WhatsApp Click Action
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      const message = encodeURIComponent(
        `Hello ${name}, I saw your badge on Technofy Systems and want to discuss a project!`,
      );
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    }
  };

  return (
    // Fixed positioning in bottom-right corner
    <div className="fixed max-w-7xl px-6 left-1/2 -translate-x-1/2 mx-auto w-full bottom-6 flex justify-end right-6 z-50 pointer-events-auto">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            onClick={handleClick}
            className="inline-flex items-center gap-3.5 bg-white py-2.5 pl-3 pr-6 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-neutral-100/80 cursor-pointer hover:shadow-[0_12px_35px_rgba(0,0,0,0.18)] transition-shadow duration-300 select-none"
          >
            {/* Profile Image Container with Online Indicator */}
            <div className="relative shrink-0">
              <Image
                src={imageUrl}
                alt={name}
                width={44}
                height={44}
                className="w-12 h-12 rounded-full object-cover bg-blue-600"
              />
              {/* Green Online Dot */}
              {isOnline && (
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#00A843] border-2 border-white rounded-full" />
              )}
            </div>

            {/* Text Info */}
            <div className="flex flex-col justify-center leading-tight">
              <h4 className="text-[17px] font-bold text-[#0F172A] tracking-tight">
                {name}
              </h4>
              <p className="text-xs font-medium text-slate-500 mt-0.5">
                {statusText}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
