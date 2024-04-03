import Image from "next/image";
import Link from "next/link";
import BoxText from "./boxText";

type Props = {
  title: string;
  description?: React.ReactNode;
  src: string;
  alt: string;
  aspect?: string;
  link?: string;
};

export function BentoItemDesign({
  title,
  description,
  src,
  alt,
  link,
  aspect = "7/5",
}: Props) {
  return (
    <div className="md:col-span-2 col-span-3 relative w-full md:aspect-[7/5] sm:aspect-[9/5] aspect-[4/5] text-white">
      <BoxText title={title} description={description} />
      <div className="absolute inset-0 bg-neutral-900 bg-opacity-50 z-10" />
      <Image src={src} alt={alt} fill className="object-cover absolute" />
    </div>
  );
}

export function BentoItemFabrication({ title, description, src, alt }: Props) {
  return (
    <div className="col-span-3 relative w-full md:aspect-[5/4] sm:aspect-[7/4] aspect-[4/5] text-white">
      <BoxText title={title} description={description} />
      <div className="absolute inset-0 bg-neutral-900 bg-opacity-50 z-10" />
      <Image src={src} alt={alt} fill className="object-cover absolute" />
    </div>
  );
}

export function BentoItemLaunch({
  title,
  description,
  src,
  alt,
  link,
  aspect = "7/5",
}: Props) {
  return (
    <div className="col-span-3 relative w-full md:aspect-[3/1] sm:aspect-[2/1] aspect-[4/5] text-white">
      <BoxText title={title} description={description} />
      <div className="absolute inset-0 bg-neutral-900 bg-opacity-50 z-10" />
      <Image src={src} alt={alt} fill className="object-cover absolute" />
    </div>
  );
}

export function BentoItemSm({ title, src, alt }: Props) {
  return (
    <div className="col-span-1 relative w-full h-full md:aspect-auto sm:aspect-[5/3] aspect-[4/5] bg-neutral-100 px-2 pt-2 flex flex-col justify-center sm:text-base text-xs">
      <div className="h-1/2 relative my-auto flex items-center">
        <Image src={src} alt={alt} layout="fill" className="object-contain" />
      </div>
      <div className="text-center my-auto">{title}</div>
    </div>
  );
}
