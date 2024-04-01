import Image from "next/image";
import React from "react";

function Design() {
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
        <h1 className="text-white md:text-8xl font-bold text-5xl my-5">設計</h1>
        <p className="text-white md:text-2xl text-xl">
          メンバーで集まり、プロジェクトを立ち上げて、ミッション(Success
          Criteria)を定めます。
          <br />
          そのあと設計に移り、ミッションをどのように達成するかを考えながら，材料や開発方法を選定していきます。
        </p>
        <div className=" mt-10">
          <h2 className=" md:text-xl text-md m-3">What you can do ...</h2>
          <ul className="text-md">
            <li>- プロジェクトマネジメント</li>
            <li>- 適切なリスク管理</li>
            <li>
              -
              コンピューターのCADアプリケーションを用いた機体や回路基板PCBの設計（Fusion360,
              KiCad ...）
            </li>
            <li>- シミュレーションや解析</li>
            <li>- プロトタイプの製作</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Design;
