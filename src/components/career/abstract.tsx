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
    <section className="sm:mb-44 mb-28 mx-auto w-[80%] max-w-[1000px] tracking-wider ">
      {/* <SectionTitle>ABOUT US</SectionTitle>
      <p className="text-center mt-[-36px] mb-12 font-semibold text-gray-600">
        ワサロケとは？
      </p> */}
      <div className="sm:my-16 my-10">
        <h2 className="font-semibold text-gray-700 mb-6">ABOUT US</h2>
        <p className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl mb-4 font-bold text-gray-800 tracking-tight lg:leading-tight md:leading-tight sm:leading-tight leading-tight">
          はじめまして。
          <br />
          楽しすぎるサークル、
          <br />
          WASAロケです。
        </p>
      </div>
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
