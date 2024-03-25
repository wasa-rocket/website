import Image from "next/image";
import { LearnMore } from "./button";
import { HeroTitleH2 } from "./heroTitle";

export default function Cansat() {
  return (
    <section>
      <div className="relative w-screen h-screen flex flex-col justify-center ">
        <div className="z-50 mt-[400px] md:ml-24 ml-6" >
          <HeroTitleH2 black={true} title="CANSAT" />
          <LearnMore black={true}/>
        </div>
        <Image
          src="/CansatHeroImage2.jpg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
}