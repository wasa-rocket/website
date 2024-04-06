"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroPost() {
  return (
    <section>
      <div className="relative w-full h-screen flex flex-col justify-center z-0">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0,
            opacity: { duration: 0.5 },
            scale: { duration: 2 },
            ease: "easeInOut",
          }}
          className="z-50 md:text-8xl text-5xl font-semibold text-center"
        >
          WASA ROCKET
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
          className="z-50 text-center pt-4 text-lg"
        >
          We create exciting things for the world.
        </motion.p>
        {/*overlay*/}
        <div className="absolute bg-black opacity-40 w-full h-full z-10"></div>
        <video
          src="/heropage/HeroVideo.mp4"
          autoPlay
          loop
          muted
          className="object-cover z-0 absolute w-full h-full"
          playsInline
        />
      </div>
    </section>
  );
}
