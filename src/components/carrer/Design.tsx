"use client";

import Image from "next/image";
import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";

function Design() {
  //   const images = [
  //     ["/career/Design-1.jpg", "Hand-drawn blueprints"],
  //     ["/career/Design-2.PNG", "Dimensional Drawing"],
  //   ];
  return (
    <section
      className="w-[90%] flex lg:flex-row flex-col mx-auto justify-center my-24 items-center p-6"
      style={{ boxShadow: "rgba(155, 155, 155, 0.8) 0 0 7px 3px" }}
    >
      <Image
        src="/career/TireStructure.jpg"
        width="500"
        height="500"
        className="object-cover w-full h-full my-auto lg:max-w-[60%]"
        alt="Hand-drawn blueprints"
      />
      <div className="flex flex-col items-start justify-center m-10 lg:w-1/2 w-full">
        <h1 className="text-white lg:text-5xl font-bold text-3xl mb-5">設計</h1>
        <p className="text-white md:text-xl text-xl">
          メンバーで集まり、プロジェクトを立ち上げて、ミッション(Success
          Criteria)を定めます。
          <br />
          そのあと設計に移り、ミッションをどのように達成するかを考えながら，材料や開発方法を選定していきます。
        </p>
        <div className=" mt-10">
          <h2 className=" md:text-xl text-md m-3">What you can do ...</h2>
          <ul className="text-md list-disc">
            <li>プロジェクトマネジメント</li>
            <li>適切なリスク管理</li>
            <li>
              コンピューターのCADアプリケーションを用いた機体や回路基板PCBの設計（Fusion360,
              KiCad ...）
            </li>
            <li>シミュレーションや解析</li>
            <li>プロトタイプの製作</li>
          </ul>
        </div>
      </div>
      {/* <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image[0]}>
                <div className="w-1/2 h-screen">
                  <Image
                    src={image[0]}
                    fill
                    className="object-cover"
                    alt={image[1]}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel> */}
    </section>
    // <section className="w-full h-screen flex md:flex-row flex-col">
    //   <div className="flex flex-col items-start justify-center m-10 md:w-1/2 md:h-screen h-1/2 w-full">
    // <h1 className="text-white md:text-8xl font-bold text-5xl my-5">設計</h1>
    // <p className="text-white md:text-2xl text-xl">
    //   メンバーで集まり、プロジェクトを立ち上げて、ミッション(Success
    //   Criteria)を定めます。
    //   <br />
    //   そのあと設計に移り、ミッションをどのように達成するかを考えながら，材料や開発方法を選定していきます。
    // </p>
    // <div className=" mt-10">
    //   <h2 className=" md:text-xl text-md m-3">What you can do ...</h2>
    //   <ul className="text-md">
    //     <li>- プロジェクトマネジメント</li>
    //     <li>- 適切なリスク管理</li>
    //     <li>
    //       -
    //       コンピューターのCADアプリケーションを用いた機体や回路基板PCBの設計（Fusion360,
    //       KiCad ...）
    //     </li>
    //     <li>- シミュレーションや解析</li>
    //     <li>- プロトタイプの製作</li>
    //   </ul>
    // </div>
    //   </div>
    //   <div className="md:w-1/2 w-full md:h-screen h-1/2 relative">
    //     <Carousel
    //       plugins={[
    //         Autoplay({
    //           delay: 2000,
    //         }),
    //       ]}
    //     >
    //       <CarouselContent>
    //         {images.map((image) => (
    //           <CarouselItem key={image[0]}>
    //             <div className="w-1/2 h-screen">
    //               <Image
    //                 src={image[0]}
    //                 fill
    //                 className="object-cover"
    //                 alt={image[1]}
    //               />
    //             </div>
    //           </CarouselItem>
    //         ))}
    //       </CarouselContent>
    //     </Carousel>
    //   </div>
    // </section>
  );
}

export default Design;
