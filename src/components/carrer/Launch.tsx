import Image from "next/image";
import React from "react";

function Launch() {
  return (
    <section
      className="w-[90%] flex lg:flex-row flex-col mx-auto justify-center my-24 items-center p-6"
      style={{ boxShadow: "rgba(155, 155, 155, 0.8) 0 0 7px 3px" }}
      id="launch"
    >
      <Image
        src="/career/Noto Summer.jpg"
        width="500"
        height="500"
        className="object-cover w-full h-full my-auto lg:max-w-[60%]"
        alt="Hand-drawn blueprints"
      />
      <div className="flex flex-col items-start justify-center m-10 lg:w-1/2 w-full">
        <h1 className="text-white lg:text-5xl font-bold text-3xl my-5">
          Launch
        </h1>
        <p className="text-white md:text-xl text-xl">
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
