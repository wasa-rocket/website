import Image from "next/image";
import React from "react";

function StructureFeature() {
  return (
    <section className="relative w-full h-screen">
      <Image
        src="/career/ElectronicsHeroImage.jpg"
        fill
        alt="Career Hero Image"
        className="absolute object-cover"
      />
      <div className="absolute inset-0 bg-zinc-950 bg-opacity-70" />
      <div className="absolute inset-0 flex flex-col items-start justify-end m-10">
        <h1 className="text-white md:text-8xl font-bold text-5xl my-5">電装</h1>
        <p className="text-white md:text-2xl text-md">
          電装は、ロケットのフライトコンピューターやCANSATの制御、ロックーンのOBCを設計・製作しています。
        </p>
      </div>
    </section>
  );
}

export default StructureFeature;
