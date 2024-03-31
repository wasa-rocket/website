import { LearnMore } from "../button";
import { HeroTitleImage } from "./heroTitle";
import HeroImage from "./heroImage";

export default function Rockoon() {
  return (
    <section>
      <div className="relative w-full h-screen z-0">
        <div className="absolute z-50 top-[50%] ml-6 md:ml-24 w-[70%]">
          <HeroTitleImage
            src="/rockoon/RockoonTitleLogo2.png"
            link="/rockoon"
          />
          <LearnMore className="ml-12"/>
        </div>
        <HeroImage src="/rockoon/RockoonHeroImage3.jpg" />
      </div>
    </section>
  );
}
