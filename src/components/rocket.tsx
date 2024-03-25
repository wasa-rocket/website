import Image from "next/image";
import { LearnMore } from "./button";
import { HeroTitleH2 } from "./heroTitle";

export default function Rocket() {
  return (
    <section>
      <div className="relative w-screen h-screen flex flex-col justify-center ">
        <div className="z-50 mt-[480px] md:ml-24 ml-6" >
          <HeroTitleH2 title="ROCKET" />
          <LearnMore />
        </div>
        <Image
          src="/RocketHeroImage2.jpg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
}
