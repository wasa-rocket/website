import Image from "next/image";
import React from "react";

function Fabrication() {
  return (
    <section
      className="w-[90%] flex lg:flex-row flex-col mx-auto justify-center my-24 items-center p-6"
      style={{ boxShadow: "rgba(155, 155, 155, 0.8) 0 0 7px 3px" }}
      id="fabrication"
    >
      <Image
        src="/career/Rockoon Structure.jpg"
        width="500"
        height="500"
        className="object-cover w-full h-full my-auto lg:max-w-[60%]"
        alt="Hand-drawn blueprints"
      />
      <div className="flex flex-col items-start justify-center m-10 lg:w-1/2 w-full">
        <h1 className="text-white lg:text-5xl font-bold text-3xl my-5">製作</h1>
        <p className="text-white md:text-xl text-xl">
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
