import Image from "next/image";
import React from "react";

function Fabrication() {
  return (
    <section className="relative w-full h-screen">
      <Image
        src="/career/Rockoon Structure.jpg"
        fill
        alt="Career Hero Image"
        className="absolute object-cover"
      />
      <div className="absolute inset-0 bg-zinc-950 bg-opacity-70" />
      <div className="absolute inset-0 flex flex-col items-start justify-end m-10">
        <h1 className="text-white md:text-8xl font-bold text-5xl my-5">製作</h1>
        <p className="text-white md:text-2xl text-xl">
          製作は主に構造部と電装部に分けられ、各メンバーの得意分野や興味のある分野に基づいて分担して作業を進めます。メンバーのレベルを問わず、チームで協力して作業を進めていきます。
        </p>
        <div className=" mt-10">
          <h2 className=" md:text-xl text-md m-3">What you can do ...</h2>
          <ul className="text-md list-disc list-outside">
            <li>
              構造部
              <ul className="list-disc list-inside">
                <li>3Dプリンターや各種ツールを用いた加工/工作</li>
                <li>早稲田大学ものづくり工房も活用</li>
              </ul>
            </li>

            <li>
              電装部
              <ul className="list-disc list-inside">
                <li>半田付け・プリント基板(PCB)</li>
                <li>機体の制御や無線通信、GUIの開発</li>
                <li>マイコン：Arduino, ESP32, RaspberryPi ...</li>
                <li>プログラミング：C++, Python, JavaScript(Vue, React) ...</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Fabrication;
