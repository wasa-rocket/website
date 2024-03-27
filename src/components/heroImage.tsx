"use client";

import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function HeroImage({ src }: { src: string }) {
  return (
    <motion.div style={{ width: "200px", height: "200px" }}>
      <Image
        src={src}
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        // className="transition-transform duration-500 ease-in-out hover:drop-shadow-md brightness-90"
      />
    </motion.div>
  );
}
