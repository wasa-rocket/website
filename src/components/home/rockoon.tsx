import Image from "next/image";
import { LearnMore } from "../button";
import { HeroTitleImage } from "./heroTitle";
import HeroImage from "./heroImage";

export default function Rockoon() {
  return (
    <section>
      <div className="relative w-full h-screen z-0">
        <div className="absolute z-50 top-[50%] ml-6 md:ml-24 w-[50%]">
          <HeroTitleImage src="/RockoonLogo.png" link="/rockoon" />
          <LearnMore />
        </div>
        <HeroImage src="/RockoonHeroImage3.jpg" />
      </div>
    </section>
  );
}
