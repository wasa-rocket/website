import SectionTitle from "../sectionTitle";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import SlideShow from "./slideShow";

export default function Abstract() {
  const imageList = [
    { id: 1, src: "/career/2019tanekon01.JPG", alt: "picture of wasa" },
    { id: 2, src: "/career/2019tanekon02.JPG", alt: "picture of wasa" },
  ];
  return (
    <section className="my-36 mx-auto w-[80%] max-w-[1000px] tracking-wider ">
      <SectionTitle>ABOUT US</SectionTitle>
      {/* <Carousel className="mb-16">
        <CarouselContent>
          <CarouselItem>
            <Image
              src="/career/2019tanekon01.JPG"
              alt="picture of wasa"
              width="600"
              height="400"
              className="mx-auto"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/career/2019tanekon01.JPG"
              alt="picture of wasa"
              width="400"
              height="400"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}
      <SlideShow imageList={imageList} />
      <p className="my-6">
        WASAロケットProject(通称・ワサロケ)は、早稲田大学理工学術院・日本女子大学公認サークルであるWASAのプロジェクトの1つで、モデルロケットやCanSatを製作し、日本各地の大会に出場するという活動を行っています。
      </p>
      <p className="my-6">
        ワサロケは「モデルロケット班」「CanSat班」「ロックーン班」の3つの班に分かれています。
      </p>
      <p className="my-6">
        一見難しそうに感じるかも知れませんが、製作作業や勉強会などを通して知識を身に付けていくことが出来るので、未経験の方でも大丈夫です！
      </p>
      <p className="text-center">
        <span className="font-bold text-2xl">「ものづくり」「空」</span>
      </p>
      <p className="my-6 text-center">
        が好きという方はぜひワサロケで一緒に活動しましょう！
      </p>
    </section>
  );
}
