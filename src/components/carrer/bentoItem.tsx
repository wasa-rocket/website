"use client";

import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import BoxText from "./boxText";
import { ShowFromDown } from "../motionEffects";

type Props = {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
};

export function BentoItemLg({ src, alt, className = "", children }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <ShowFromDown
      isInView={isInView}
      className={"relative w-full  text-white drop-shadow-lg " + className}
    >
      {children}
      <div className="absolute inset-0 bg-neutral-900 bg-opacity-50 z-10" />
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 635px, (max-width: 768px) 465px, (max-width: 640px) 576px, 100vw"
        className="object-cover absolute"
        ref={ref}
      />
    </ShowFromDown>
  );
}

export function BentoItemSm({ src, alt, children }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <ShowFromDown
      isInView={isInView}
      className="col-span-1 relative w-full h-full md:aspect-auto sm:aspect-[5/3] aspect-[4/5] px-2 pt-2 flex flex-col justify-center sm:text-base text-xs drop-shadow-lg
    bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100"
    >
      <div className="h-1/2 relative my-auto flex items-center">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100px, (max-width: 768px) 70px, (max-width: 640px) 100px, 100px"
          className="object-contain"
          ref={ref}
        />
      </div>
      <div className="text-center my-auto">{children}</div>
    </ShowFromDown>
  );
}
