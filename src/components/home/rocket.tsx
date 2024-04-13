import { LearnMore } from "../button";
import { HeroTitleImage } from "./heroTitle";
import Link from "next/link";
import HeroImage from "./heroImage";

export default function Rocket() {
  return (
    <section>
      <div className="relative w-full h-screen z-0">
        <div className="absolute z-50 md:top-[50%] top-[60%] md:ml-24 ml-6 w-[50%]">
          {/* <HeroTitleH2 title="ROCKET" /> */}
          <HeroTitleImage src="/rocket/RocketLogo.png" alt="Rocket" link="/rocket" />
          <LearnMore className="md:ml-12" link="/rocket" />
        </div>
        <HeroImage src="/rocket/RocketHeroImage2.jpg" alt="Rocket Hero Image" />
      </div>
    </section>
  );
}
