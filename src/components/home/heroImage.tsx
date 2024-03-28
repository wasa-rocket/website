"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroImage({
  src,

}: {
  src: string;

}) {
  return (
      <Image
        src={src}
        alt="Picture of projects in WASA"
        fill
        className="object-cover"
        // className="transition-transform duration-500 ease-in-out hover:drop-shadow-md brightness-90"
      />

  );
}
