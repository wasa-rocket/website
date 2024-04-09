"use client";

import React from "react";
import { motion } from "framer-motion";

function CareerHero() {
  return (
    <section className="relative w-full h-screen">
      <video
        src="/career/CareerHeroVideo.mp4"
        autoPlay
        loop
        muted
        className="md:object-cover object-contain z-0 absolute w-full h-full"
        playsInline
      />
      <div className="absolute inset-0 flex justify-end">
        <div className="mt-10 text-white md:text-9xl font-bold text-7xl m-5 [writing-mode:vertical-rl] flex md:flex-col flex-row md:gap-10">
          <div className="block md:mb-auto w-fit overflow-hidden">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: [50, 0] }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              「意思」を、
            </motion.p>
          </div>
          <div className="w-fit overflow-hidden block md:mt-auto">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: [50, 0] }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              打ち上げろ
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerHero;
