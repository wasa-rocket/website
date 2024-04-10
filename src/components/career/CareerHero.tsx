"use client";

import React from "react";
import { motion } from "framer-motion";

function CareerHero() {
  return (
    <section className="relative w-full min-h-[640px] h-screen">
      <video
        src="/career/CareerHeroVideo.mp4"
        autoPlay
        loop
        muted
        className="object-cover z-0 absolute w-full h-full"
        playsInline
      />
      <div className="absolute inset-0 flex justify-end">
        <div className="mt-10 text-white md:text-8xl font-bold text-7xl m-5 [writing-mode:vertical-rl] flex flex-col md:gap-10">
          <div className="relative block mb-auto overflow-hidden">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: [80, 0] }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              「意思」を、
            </motion.p>
            {/* <motion.div
              initial={{ left: 0 }}
              animate={{ left: "100%" }}
              exit={{ left: "100%" }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              className="absolute bg-white z-20 inset-0 w-full h-full"
            /> */}
          </div>
          <div className="block mt-auto overflow-hidden">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: [80, 0] }}
              transition={{ duration: 0.6, delay: 0.4 }}
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
