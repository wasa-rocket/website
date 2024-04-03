import Image from "next/image";
import Link from "next/link";

type Props = {
  link: string;
  imgSrc: string;
  imgAlt: string;
  children: React.ReactNode;
};

export default function LinkItem({ link, imgSrc, imgAlt, children }: Props) {
  return (
    <Link
      href={link}
      className="flex sm:flex-row flex-col  w-full my-12 p-8"
      style={{ boxShadow: "rgba(155, 155, 155, 0.8) 0 0 7px 3px" }}
    >
      <Image
        src={imgSrc}
        alt={imgAlt}
        width="30"
        height="30"
        className="sm:mr-8 sm:my-0 mb-4"
      />
      {children}
    </Link>
  );
}
