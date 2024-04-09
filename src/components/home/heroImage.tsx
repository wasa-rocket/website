"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export default function HeroImage({ src, alt, className }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={"object-cover " + className}
      // className="transition-transform duration-500 ease-in-out hover:drop-shadow-md brightness-90"
    />
  );
}
