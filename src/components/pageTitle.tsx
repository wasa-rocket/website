import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function PageTitle({ src, alt }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      width="400"
      height="300"
      className="z-20 mt-6 md:mb-16 mb-8 max-w-[70%]"
    />
  );
}
