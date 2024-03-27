"use client";

import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function HeroImage({ src }: { src: string }) {
  return (
      <Image
        src={src}
        alt="Picture of the author"
        fill
        object-fit="cover"
        // className="transition-transform duration-500 ease-in-out hover:drop-shadow-md brightness-90"
      />
  );
}
