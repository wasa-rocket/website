import Image from "next/image";
import React from "react";
import Links from "@/components/carrer/links";
import Calendar from "@/components/carrer/calendar";
import Design from "@/components/carrer/Design";
import Fabrication from "@/components/carrer/Fabrication";
import Launch from "@/components/carrer/Launch";
import Abstract from "@/components/carrer/abstract";
import Faq from "@/components/carrer/faq";

function CareerPage() {
  return (
    <main className="mt-24">
      <section className="relative w-full h-screen">
        <Image
          src="/career/CareerHeroImage.jpeg"
          fill
          alt="Career Hero Image"
          className="absolute object-cover"
        />
        <div className="absolute inset-0 bg-zinc-950 bg-opacity-70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white md:text-8xl font-bold text-5xl m-5">
            Find your future in WASA
          </h1>
          <h2 className="text-white md:text-4xl text-2xl m-3">新歓2024</h2>
          <p>WASAは、宇宙系のものづくりサークルです。</p>
        </div>
      </section>
      <Abstract />
      <Design />
      <Fabrication />
      <Launch />
      <Links />
      <Calendar />
      <Faq />
    </main>
  );
}

export default CareerPage;
