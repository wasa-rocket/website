import Image from "next/image";
import { BentoItemLg, BentoItemSm } from "./bentoItem";

export default function Bento() {
  return (
    <div className="w-[80%] max-w-6xl mx-auto grid md:grid-cols-4 grid-cols-2 gap-4 relative ">
      <BentoItemLg
        title="設計"
        description={
          <div>
            誰でも最初は初心者です
            <br /> WASAでの経験を通じて設計を学びましょう
          </div>
        }
        src="/career/TireStructure.jpg"
        alt="design image"
      />

      <BentoItemSm
        title="Project Management"
        src="/career/bento/project-management.png"
        alt="project management image"
      />
      <BentoItemSm
        title="CAD/Simulation"
        src="/career/bento/3d-cube.png"
        alt="cad image"
      />
      <BentoItemSm
        title="Circuits/Programming"
        src="/career/bento/circuit.png"
        alt="circuit image"
      />
      <BentoItemSm
        title="3D Printing"
        src="/career/bento/3d-printing.png"
        alt="3d-printing image"
      />
      <BentoItemLg
        title="制作"
        description={
          <div>
            チームで協力してアイデアを形にしよう！
            <br />
            ロケット制作には様々な工程があります。きっとあなたにあった作業が見つかるはず！
          </div>
        }
        src="/career/modelRocket.png"
        alt="model rocket image"
      />
      <BentoItemLg
        title="打ち上げ"
        description={
          <div>WASAでは毎年様々な大会に出場して制作物を発表しています！</div>
        }
        src="/career/Noto Summer.jpg"
        alt="launch image"
      />
      <BentoItemSm
        title="3D Printing"
        src="/career/bento/3d-printing.png"
        alt="3d-printing image"
      />
      <BentoItemSm
        title="3D Printing"
        src="/career/bento/3d-printing.png"
        alt="3d-printing image"
      />
    </div>
  );
}
