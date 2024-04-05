"use client";

import Image from "next/image";
import React from "react";
import WorkflowContainer from "./workflowContainer";

function Design() {
  return (
    // <section
    //   className="relative lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm w-[90vw] flex sm:flex-row flex-col min-w-[300px] lg:h-[500px] md:h-[500px] sm:h-[500px] h-[80vh]"
    //   id="design"
    // >
    //   <div className="relative sm:w-[40%] h-full min-h-[200px]">
    //     <Image
    //       src="/career/TireStructure.jpg"
    //       fill
    //       className="absolute object-cover  my-auto w-[40%] "
    //       alt="Hand-drawn blueprints"
    //     />
    //   </div>
    //   <div className="flex flex-col items-start justify-center sm:w-[60%] p-10">
    //     <h3 className="lg:text-6xl md:text-5xl font-bold text-3xl mb-5">設計</h3>
    //     <p className="lg:text-base md:text-base text-gray-500 font-semibold ">
    //       メンバーで集まり、プロジェクトを立ち上げて、ミッション(Success
    //       Criteria)を定めます。
    //       <br />
    //       そのあと設計に移り、ミッションをどのように達成するかを考えながら，材料や開発方法を選定していきます。
    //     </p>
    //     <div className=" mt-4">
    //       <ul className="text-md list-disc ml-5 font-semibold text-gray-600">
    //         <li>プロジェクトマネジメント</li>
    //         <li>適切なリスク管理</li>
    //         <li>
    //           コンピューターのCADアプリケーションを用いた機体や回路基板PCBの設計（Fusion360,
    //           KiCad ...）
    //         </li>
    //         <li>シミュレーションや解析</li>
    //         <li>プロトタイプの製作</li>
    //       </ul>
    //     </div>
    //   </div>

    // </section>
    <WorkflowContainer
      title="設計"
      description={
        <>
          メンバーで集まり、プロジェクトを立ち上げて、ミッション(Success
          Criteria)を定めます。
          <br />
          そのあと設計に移り、ミッションをどのように達成するかを考えながら，材料や開発方法を選定していきます。
        </>
      }
      listItems={[
        "プロジェクトマネジメント",
        "適切なリスク管理",
        "コンピューターのCADアプリケーションを用いた機体や回路基板PCBの設計（Fusion360, KiCad ...）",
        "シミュレーションや解析",
        "プロトタイプの製作",
      ]}
      imageSrc="/career/TireStructure.jpg"
      imageAlt="Hand-drawn blueprints"
    />
  );
}

export default Design;
