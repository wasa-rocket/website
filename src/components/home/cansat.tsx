"use client";

import { LearnMore } from "../button";
import { HeroTitleImage } from "./heroTitle";
import Link from "next/link";
import HeroImage from "./heroImage";

export default function Cansat() {
  return (
    <section>
      <div className="relative w-full h-screen z-0">
        <div className="absolute z-50 top-[50%] md:ml-24 ml-6 w-[50%]">
          <HeroTitleImage src="/cansat/CansatLogo.png" link="/cansat" />
          <Link href="/cansat">
            <LearnMore />
          </Link>
        </div>
        <HeroImage src="/cansat/CansatHeroImage3.jpg" />
      </div>
    </section>
  );
}
