import React from "react";

function CareerHero() {
  return (
    <section className="relative w-full h-screen">
      <video
        src="/career/CareerHeroVideo.mp4"
        autoPlay
        loop
        muted
        className="md:object-cover object-contain z-0 absolute w-full h-full"
        playsInline
      />
      <div className="absolute inset-0 flex justify-end">
        <p className="mt-10 text-white md:text-9xl font-bold text-7xl m-5 [writing-mode:vertical-rl] flex md:flex-col flex-row md:gap-10">
          <span className="block md:mb-auto">「意思」を、</span>
          <span className="block md:mt-auto">打ち上げろ</span>
        </p>
      </div>
    </section>
  );
}

export default CareerHero;
