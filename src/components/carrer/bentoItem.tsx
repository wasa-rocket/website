import Image from "next/image";
import Link from "next/link";

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
    <div className="col-span-2 relative w-full md:aspect-[7/5] text-white">
      <div className="absolute mx-4 z-50 inset-0 flex flex-col justify-center text-center">
        <div className="lg:text-5xl md:text-3xl sm:text-5xl text-2xl font-semibold lg:mb-6 mb-0">
          {title}
        </div>
        <div className="sm:text-md text-sm">{description}</div>
      </div>
      <div className="absolute inset-0 bg-neutral-900 bg-opacity-50 z-10" />
      <Image src={src} alt={alt} fill className="object-cover absolute" />
    </div>
  );
}

export function BentoItemFabrication({
  title,
  description,
  src,
  alt,
  link,
  aspect = "7/5",
}: Props) {
  return (
    <div className="col-span-2 relative w-full md:aspect-[6/5] text-white">
      <div className="absolute mx-4 z-50 inset-0 flex flex-col justify-center text-center">
        <div className="lg:text-5xl md:text-3xl sm:text-5xl text-2xl font-semibold lg:mb-6 mb-0">
          {title}
        </div>
        <div className="sm:text-md text-sm">{description}</div>
      </div>
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
    <div className="col-span-2 relative w-full md:aspect-[7/5] text-white">
      <div className="absolute mx-4 z-50 inset-0 flex flex-col justify-center text-center">
        <div className="lg:text-5xl md:text-3xl sm:text-5xl text-2xl font-semibold lg:mb-6 mb-0">
          {title}
        </div>
        <div className="sm:text-md text-sm">{description}</div>
      </div>
      <div className="absolute inset-0 bg-neutral-900 bg-opacity-50 z-10" />
      <Image src={src} alt={alt} fill className="object-cover absolute" />
    </div>
  );
}

export function BentoItemSm({ title, src, alt }: Props) {
  return (
    <div className="col-span-1 relative w-full h-full bg-neutral-100 px-2 pt-2 flex flex-col justify-center sm:text-base text-xs">
      <div className="h-1/2 relative my-auto flex items-center">
        <Image src={src} alt={alt} layout="fill" className="object-contain" />
      </div>
      <div className="text-center my-auto">{title}</div>
    </div>
  );
}
