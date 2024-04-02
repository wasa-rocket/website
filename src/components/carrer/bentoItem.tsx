import Image from "next/image";

type Props = {
  title: string;
  description?: React.ReactNode;
  src: string;
  alt: string;
};

export function BentoItemLg({ title, description, src, alt }: Props) {
  return (
    <div className="col-span-2 relative w-full md:aspect-auto aspect-[2/1] ">
      <div className="absolute mx-4 z-50 inset-0 flex flex-col items-center justify-center text-center">
        <div className="lg:text-5xl md:text-3xl sm:text-5xl text-2xl font-semibold mb-6">
          {title}
        </div>
        <div className="sm:text-md text-sm">{description}</div>
      </div>
      <div className="absolute inset-0 bg-zinc-950 bg-opacity-50 z-10" />
      <Image src={src} alt={alt} fill className="object-cover absolute" />
    </div>
  );
}

export function BentoItemSm({ title, src, alt }: Props) {
  return (
    <div className="col-span-1 relative w-full aspect-square bg-neutral-900 p-2 flex flex-col justify-center ">
      <div className="h-3/4 relative">
        <Image src={src} alt={alt} fill className="object-contain" />
      </div>
      <div className="text-center">{title}</div>
    </div>
  );
}
