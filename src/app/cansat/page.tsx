import HeroImage from "@/components/home/heroImage";
import PageTitle from "@/components/pageTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Page() {
  return (
    <main className="">
      <section className="relative w-full h-screen z-0">
        <div className="absolute w-full h-2/3 bg-gradient-to-b from-black z-10 opacity-50"></div>
        <PageTitle src="/cansat/CansatLogo.png" />
        <HeroImage src="/cansat/CansatHeroImage3.jpg" className="saturate-50" />
      </section>
      <section>
        <p className="text-center my-12 mx-6 tracking-wider leading-loose">
          "Cansat"は様々なセンサーを使い、目的地まで自力で到達する自動運転型の人工衛星です。
          <br />
          WASAでは昨年9月に能代宇宙イベントに出場しました。
        </p>
      </section>
      <section>
        <h2 className="ml-12 sm:text-5xl text-4xl tracking-wider font-semibold mt-24">
          SENSORS
        </h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div
                className="flex sm:flex-row flex-col justify-center w-[90%] mx-auto my-8 p-8 bg-black rounded-xl "
                style={{ boxShadow: "rgba(155, 155, 155, 0.8) 0 0 7px 3px" }}
              >
                <Image
                  src="/cansat/page/gps.jpg"
                  alt="image of gps"
                  width="400"
                  height="400"
                  className="object-cover sm:max-w-[50%]"
                />
                <div className="sm:w-1/2 sm:ml-6  sm:my-auto mt-6">
                  <h3 className="text-3xl tracking-wider font-semibold mb-8">
                    GPS Module
                  </h3>
                  <p className="tracking-wider leading-loose">
                    GPSモジュールはCansatに必要不可欠なセンサーです。自己位置と目的地の座標から目的地までの方角と距離を割り出します。
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div
                className="flex sm:flex-row flex-col justify-center w-[90%] mx-auto my-8 p-8 bg-neutral-900 rounded-xl "
                style={{ boxShadow: "rgba(155, 155, 155, 0.8) 0 0 10px 3px" }}
              >
                <Image
                  src="/cansat/page/gps.jpg"
                  alt="image of gps"
                  width="400"
                  height="400"
                  className="object-cover sm:max-w-[50%]"
                />
                <div className="sm:w-1/2 sm:ml-6  sm:my-auto mt-6">
                  <h3 className="text-3xl tracking-wider font-semibold mb-8">
                    GPS Module
                  </h3>
                  <p className="tracking-wider leading-loose">
                    GPSモジュールはCansatに必要不可欠なセンサーです。自己位置と目的地の座標から目的地までの方角と距離を割り出します。
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </main>
  );
}
