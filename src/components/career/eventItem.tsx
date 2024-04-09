import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  src?: string;
  alt?: string;
  fit: boolean;
  title: string;
  description: React.ReactNode;
};

export default function EventItem({
  src,
  alt,
  title,
  fit,
  description,
}: Props) {
  return (
    <>
      {src && alt && (
        <Image
          src={src}
          alt={alt}
          width="500"
          height="500"
          className={`sm:h-[300px] h-[200px] w-full  ${
            fit ? "object-contain" : "object-cover"
          }`}
        />
      )}
      <h3 className="font-semibold text-3xl my-6">{title}</h3>
      <p>{description}</p>
    </>
  );
}
