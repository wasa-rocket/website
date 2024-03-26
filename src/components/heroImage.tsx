import Image from "next/image";

export default function HeroImage({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt="Picture of the author"
      layout="fill"
      objectFit="cover"
      className="hover:scale-105 transition-transform duration-500 ease-in-out hover:drop-shadow-md"
    />
  );
}
