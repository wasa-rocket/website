import Image from "next/image";

export default function HeroPost() {
  return (
    <section>
      <div className="relative w-screen h-screen flex flex-col justify-center ">
        <h1 className="z-50 md:text-8xl text-5xl font-semibold text-center">
          WASA ROCKET
        </h1>
        <p className="z-50 text-center pt-4">
          We are wasa rocket. We create exciting things for the world.
        </p>
        <Image
          src="/Heroimage1.jpg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
}
