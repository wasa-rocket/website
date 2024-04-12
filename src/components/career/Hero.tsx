"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Banner() {
  return (
    <section className="relative xl:h-[70vh] md:h-[50vh] h-[40vh] w-screen text-white">
      <video
        src="/career/CareerHeroVideo.mp4"
        autoPlay
        loop
        muted
        className="object-cover z-0 absolute w-full h-full"
        playsInline
      />
      <div className="absolute z-10 inset-0 opacity-40 bg-gray-500"></div>
      <div className="absolute h-full w-full overflow-hidden flex flex-col z-20">
        <div className="h-1/2 overflow-hidden flex items-center">
          <motion.p
            className="xl:text-[15rem] md:text-[9rem] text-[4.5rem] font-medium leading-none whitespace-nowrap"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1, x: [-2048, 0] }}
            transition={{ duration: 1, delay: 1.0 }}
          >
            [意思]を、
          </motion.p>
        </div>
        <div className="h-1/2 overflow-hidden flex items-start">
          <motion.p
            className="xl:text-[15rem] md:text-[9rem] text-[4.5rem] font-medium leading-none whitespace-nowrap"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1, x: [2048, 0] }}
            transition={{ duration: 1, delay: 1.0 }}
          >
            打ち上げろ。
          </motion.p>
        </div>
      </div>
      <div className="absolute inset-0 z-20">
        <div className="flex flex-row justify-end md:mt-3 mt-[-50px] h-26 mr-5">
          <div className="flex flex-col items-center text-black md:text-white">
            <motion.p
              className="xl:text-[2rem] md:text-[1.5rem] whitespace-nowrap md:block hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [32, 0] }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* <p className="xl:text-[2rem] md:text-[1.5rem] whitespace-nowrap md:block hidden"> */}
              WASA Rocket
              {/* </p> */}
            </motion.p>
            <div className=" bg-blue-500 xl:h-1 h-[0.1rem] w-full" />
            <motion.p
              className="xl:text-[2rem] text-[1.5rem] whitespace-nowrap"
              initial={{ opacity: 0}}
              animate={{ opacity: 1, y: [32, 0] }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* <p className="xl:text-[2rem] text-[1.5rem] whitespace-nowrap"> */}
              新歓2024
              {/* </p> */}
            </motion.p>
          </div>
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: [256, 0] }}
            transition={{ duration: 1.0, delay: 1.6 }}
            className=" relative my-auto md:mx-3 mx-1 xl:w-16 md:w-14 w-8 xl:h-16 md:h-14 h-8"
          >
            <Image
              src="/logo/WASARocketLogoSquare.png"
              alt="WASA Rocket Logo Square"
              fill={true}
              className="object-cover"
            />
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}

export default Banner;
