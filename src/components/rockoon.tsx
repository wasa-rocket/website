import Image from "next/image";
import { LearnMore } from "./button";
import { HeroTitleH2 } from "./heroTitle";

export default function Rockoon() {
  return (
    <section>
      <div className="relative w-screen h-screen flex flex-col">
        <div className="z-50 mt-[560px] ml-6 md:ml-24">
          <HeroTitleH2 title="ROCKOON" />
          <LearnMore />
        </div>
        <Image
          src="/RockoonHeroImage3.jpg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
}
