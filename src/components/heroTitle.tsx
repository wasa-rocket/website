import Image from "next/image";

export function HeroTitleH2({
  title,
  black,
}: {
  title: string;
  black?: boolean;
}) {
  if (black) {
    return (
      <h2 className="md:text-8xl text-4xl font-semibold text-left text-black mb-6 tracking-wider">
        {title}
      </h2>
    );
  } else {
    return (
      <h2 className="md:text-8xl text-4xl font-semibold text-left mb-6 tracking-wider">
        {title}
      </h2>
    );
  }
}

export function HeroTitleImage({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt="Picture of the author"
      width="700"
      height="300"
      style={{
        maxWidth: "100%",
        height: "auto",
      }}
      className="mb-6"
    />
  );
}
