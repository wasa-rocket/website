"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ShowFromDown } from "./motionEffects";
import Link from "next/link";

type Props = {
  className?: string;
  link: string;
};

export function LearnMore({ className, link }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <ShowFromDown isInView={isInView}>
      <Link
        href={link}
        ref={ref}
        className={`cursor-pointer outline outline-1 hover:bg-gray-700 hover:bg-opacity-30 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm text-white font-bold py-3 px-8 z-50 tracking-widest ${className}`}
        aria-label="Learn more about the project in WASA"
      >
        WATCH
      </Link>
    </ShowFromDown>
  );
}
