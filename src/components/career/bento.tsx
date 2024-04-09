"use client";

import { BentoItemLg, BentoItemSm } from "./bentoItem";
import BoxText from "./boxText";
import { Box } from "lucide-react";
import Modal from "../modal";
import { useState } from "react";
import Design from "./Design";
import Fabrication from "./Fabrication";
import Launch from "./Launch";

export default function Bento() {
  const [designVisible, setDesignVisible] = useState(false);
  const [fabricationVisible, setFabricationVisible] = useState(false);
  const [launchVisible, setLaunchVisible] = useState(false);
  console.log(designVisible, fabricationVisible, launchVisible);

  const close = () => {
    setDesignVisible(false);
    setFabricationVisible(false);
    setLaunchVisible(false);
  };

  return (
    <>
      <Modal visible={designVisible} setVisible={setDesignVisible}>
        <Design />
      </Modal>
      <Modal visible={fabricationVisible} setVisible={setFabricationVisible}>
        <Fabrication />
      </Modal>
      <Modal visible={launchVisible} setVisible={setLaunchVisible}>
        <Launch />
      </Modal>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-4 relative my-12">
        <BentoItemLg
          className="md:aspect-[7/5] sm:aspect-[9/5] aspect-[4/5] md:col-span-2 col-span-3 "
          src="/career/TireStructure.jpg"
          alt="design image"
        >
          <BoxText
            title="設計"
            description={
              <>
                誰でも最初は初心者です。
                <br />
                WASAでの経験を通じて設計を学びましょう
              </>
            }
            setVisible={setDesignVisible}
          />
        </BentoItemLg>
        <div className="flex md:flex-col flex-row w-full gap-4 md:col-span-1 col-span-3">
          <BentoItemSm
            src="/career/bento/project-management.png"
            alt="project management image"
          >
            Project Management
          </BentoItemSm>
          <BentoItemSm src="/career/bento/3d-cube.png" alt="cad image">
            CAD/Simulation
          </BentoItemSm>
        </div>
      </div>
      {/* <div className="container lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm grid md:grid-cols-3 grid-cols-2 gap-4 relative my-12"></div> */}

      <div className="grid md:grid-cols-5 grid-cols-2 gap-4 relative my-12">
        <BentoItemLg
          src="/career/modelRocket.png"
          alt="model rocket image"
          className="md:aspect-[5/4] sm:aspect-[7/4] aspect-[4/5] col-span-3"
        >
          <BoxText
            title="制作"
            description={
              <>
                チームで協力してアイデアを形にしよう！
                <br />
                ロケット制作には様々な工程があります。きっとあなたにあった作業が見つかるはず！
              </>
            }
            setVisible={setFabricationVisible}
          />
        </BentoItemLg>
        <div className="flex md:flex-col flex-row w-full gap-4 md:col-span-2 col-span-3">
          <BentoItemSm src="/career/bento/circuit.png" alt="circuit image">
            Circuits/Programming
          </BentoItemSm>
          <BentoItemSm
            src="/career/bento/3d-printing.png"
            alt="3d-printing image"
          >
            3D Printing
          </BentoItemSm>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-4 relative ">
        <BentoItemLg
          src="/career/Noto Summer.jpg"
          alt="launch image"
          className="col-span-3  md:aspect-[3/1] sm:aspect-[2/1] aspect-[4/5]"
        >
          <BoxText
            title="打ち上げ"
            description={
              <>WASAでは毎年様々な大会に出場して制作物を発表しています！</>
            }
            setVisible={setLaunchVisible}
          />
        </BentoItemLg>
      </div>
    </>
  );
}
