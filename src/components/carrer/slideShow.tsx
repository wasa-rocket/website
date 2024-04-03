import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import Image from "next/image";

type Props = {
  imageList: {
    id: number;
    src: string;
    alt: string;
  }[];
};

export default function SlideShow({ imageList }: Props) {
  return (
    <Carousel className="mb-16">
      <CarouselContent>
        {imageList.map((image) => (
          <CarouselItem className="m-auto" key={image.id}>
            <Image
              src={image.src}
              alt={image.alt}
              width="600"
              height="400"
              className="mx-auto"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
