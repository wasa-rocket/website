"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroImage({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt="Picture of projects in WASA"
      fill
      className={"object-cover " + className}
      // className="transition-transform duration-500 ease-in-out hover:drop-shadow-md brightness-90"
    />
  );
}
