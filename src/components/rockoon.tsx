import Image from "next/image";
import { LearnMore } from "./button";
import { HeroTitleH2, HeroTitleImage } from "./heroTitle";
import HeroImage from "./heroImage";

export default function Rockoon() {
  return (
    <section>
      <div className="relative w-full h-screen z-0">
        <div className="absolute z-50 mt-[560px] ml-6 md:ml-24 w-[75%]">
          <HeroTitleImage src="/RockoonLogo.png" />
          <LearnMore />
        </div>
        <HeroImage src="/RockoonHeroImage3.jpg" />
      </div>
    </section>
  );
}
