"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ShowFromDown } from "./motionEffects";

export function LearnMore() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <ShowFromDown isInView={isInView}>
      <button
        ref={ref}
        className="cursor-pointer outline outline-1 hover:bg-gray-700 hover:bg-opacity-30 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm text-white font-bold py-3 px-8 z-50"
      >
        Learn more
      </button>
    </ShowFromDown>
  );
}
