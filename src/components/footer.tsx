import Image from "next/image";

export default function Footer() {
  const socialMedias = [
    {
      src: "/socialMediaIcons/x.svg",
      alt: "X",
    },
    {
      src: "/socialMediaIcons/instagram.svg",
      alt: "Instagram",
    },
    {
      src: "/socialMediaIcons/youtube.svg",
      alt: "YouTube",
    },
    {
      src: "/socialMediaIcons/line.svg",
      alt: "Line",
    },
  ];
  return (
    <footer>
      <Image src="/logo/logoWide_50.png" alt="logo" width="300" height="100" className="mx-auto mt-20"/>
      <ul className="flex flex-row justify-evenly sm:w-[50%] w-[80%] max-w-96 mx-auto my-6 mb-20">
        {socialMedias.map((socialMedia) => {
          return (
            <li className="my-auto">
              <Image
                src={socialMedia.src}
                alt={socialMedia.alt}
                width={30}
                height={30}
                className="invert"
              />
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
