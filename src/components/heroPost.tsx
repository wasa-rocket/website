import Image from "next/image";

export default function HeroPost() {
  return (
    <section>
      <div className="relative w-full h-screen flex flex-col justify-center z-0">
        <h1 className="z-50 md:text-8xl text-5xl font-semibold text-center">
          WASA ROCKET
        </h1>
        <p className="z-50 text-center pt-4 text-lg">
          We create exciting things for the world.
        </p>
        <Image
          src="/Heroimage1.jpg"
          alt="Hero Image"
          fill
         className="object-cover"
        />
      </div>
    </section>
  );
}
