import Image from "next/image";
import React from "react";

function Launch() {
  return (
    <section className="relative w-full h-screen">
      <Image
        src="/career/StructureHeroImage.jpeg"
        fill
        alt="Career Hero Image"
        className="absolute object-cover"
      />
      <div className="absolute inset-0 bg-zinc-950 bg-opacity-70" />
      <div className="absolute inset-0 flex flex-col items-start justify-end m-10">
        <h1 className="text-white md:text-8xl font-bold text-5xl my-5">
          Launch
        </h1>
        <p className="text-white md:text-2xl text-xl">
          1年を通して様々なイベントや大会に出場しており、メンバーと共に各地に出向き、製作した機体を発表しています。OBOGや他大学、企業とも交流があり、人脈を広げることができます。
        </p>
        <div className=" mt-10">
          <h2 className=" md:text-xl text-md m-3">
            Where you can go ... (昨年度の例)
          </h2>
          <ul className="text-md list-disc">
            <li>能代宇宙イベント @秋田県</li>
            <li>二和ロケット交流会 @日本大学</li>
            <li>えひめ南予共同気球実験 @愛媛県</li>
            <li>ロケット交流会 @日本科学未来館</li>
            <li>種子島ロケットコンテスト @鹿児島県</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Launch;
