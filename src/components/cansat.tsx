"use client";

import Image from "next/image";
import { LearnMore } from "./button";
import { HeroTitleH2, HeroTitleImage } from "./heroTitle";
import Link from "next/link";
import HeroImage from "./heroImage";
import { motion } from "framer-motion";

export default function Cansat() {
  return (
    <section>
      <div className="relative w-full h-screen z-0">
        <div className="absolute z-50 top-[50%] md:ml-24 ml-6 w-[50%]">
          {/* <HeroTitleH2 black={true} title="CANSAT" /> */}
          <HeroTitleImage src="/CansatLogo.png" />
          <LearnMore />
        </div>
        {/* <Image
          src="/CansatHeroImage2.jpg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          className="hover:scale-105 transition-transform duration-500 ease-in-out"
        /> */}

        <HeroImage src="/CansatHeroImage3.jpg" />
      </div>
    </section>
  );
}
