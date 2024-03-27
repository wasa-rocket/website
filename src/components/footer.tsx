import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const socialMedias = [
    {
      src: "/socialMediaIcons/x.svg",
      alt: "X",
      link: "https://twitter.com/wasa_rocket",
    },
    {
      src: "/socialMediaIcons/instagram.svg",
      alt: "Instagram",
      link: "https://www.instagram.com/wasa_rocket_pro/",
    },
    {
      src: "/socialMediaIcons/youtube.svg",
      alt: "YouTube",
      link: "https://www.youtube.com/user/wasarocketpro",
    },
    {
      src: "/socialMediaIcons/line.svg",
      alt: "Line Openchat",
      link: "https://line.me/ti/g2/sw9CttRGTQTNn0r3sgTp29QxwdN_ugZL15j9bw?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    },
  ];
  return (
    <footer>
      <Image
        src="/logo/logoWide_50.png"
        alt="logo"
        width="300"
        height="100"
        className="mx-auto mt-20"
      />
      <ul className="flex flex-row justify-evenly sm:w-[50%] w-[80%] max-w-96 mx-auto my-6 mb-20">
        {socialMedias.map((socialMedia) => {
          return (
            <li className="my-auto" key={socialMedia.alt}>
              <Link href={socialMedia.link}>
                <Image
                  src={socialMedia.src}
                  alt={socialMedia.alt}
                  width={30}
                  height={30}
                  className="invert"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
