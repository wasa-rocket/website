import Image from "next/image";

export default function PageTitle({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt="logo for cansat"
      width="400"
      height="300"
      className="z-20 mx-auto mt-60 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    />
  );
}
