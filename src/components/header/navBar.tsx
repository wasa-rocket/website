import Link from "next/link";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { MenuButton } from "./menuButton";
import { motion } from "framer-motion";

type Props = {
  menuElements: { title: string; link: string }[];
  navHidden: boolean;
  sideMenuHidden: boolean;
  setsideMenuHidden: Dispatch<SetStateAction<boolean>>;
  isDarkTheme: boolean;
};

export default function NavBar({
  menuElements,
  navHidden,
  sideMenuHidden,
  setsideMenuHidden,
  isDarkTheme,
}: Props) {
  return (
    <nav
      className={
        ` bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 md:h-auto h-16` +
        (isDarkTheme ? ` bg-black` : ` bg-gray-300`)
      }
    >
      <ul className="flex flex-row justify-between md:w-[80%] max-w-[400px] ml-12">
        <motion.li
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          animate={navHidden ? "hidden" : "visible"}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className="md:my-4 my-0"
          key="image"
        >
          <Link href="/" aria-label="Go to home page">
            <Image
              src={
                isDarkTheme
                  ? `/logo/logoBold_25_white.png`
                  : `/logo/logoBold_25_black.png`
              }
              alt="logo"
              width={100}
              height={100}
              className="md:block hidden"
            />
          </Link>
        </motion.li>
        {menuElements.map((element) => {
          return (
            <motion.li
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              animate={navHidden ? "hidden" : "visible"}
              transition={{ duration: 0.1, ease: "easeInOut" }}
              className="z-50 my-auto"
              key={element.title}
            >
              <Link
                href={element.link}
                className={
                  `text-sm md:block hidden font-semibold text-left tracking-wider my-4` +
                  (isDarkTheme ? ` text-white` : ` text-black`)
                }
                aria-label={`go to ${element.title} page`}
              >
                {element.title}
              </Link>
            </motion.li>
          );
        })}
      </ul>
      <motion.div
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        animate={navHidden ? "hidden" : "visible"}
        transition={{ duration: 0.1, ease: "easeInOut" }}
      >
        <Link href="/" className="md:hidden block ">
          <Image
            src={
              isDarkTheme
                ? `/logo/logoBoldWide_25_White.png`
                : `/logo/logoBoldWide_25_Black.png`
            }
            alt="logo"
            width={180}
            height={100}
            className="mx-auto mt-[-18px]"
          />
        </Link>
      </motion.div>
      <motion.button
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        animate={navHidden ? "hidden" : "visible"}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        className="z-50 absolute right-8 top-1/2 md:top-1/2 transform -translate-y-1/2"
        onClick={() => {
          setsideMenuHidden((sideMenuHidden) => !sideMenuHidden);
        }}
        aria-label="Open hamburger menu"
      >
        <MenuButton
          isOpen={!sideMenuHidden}
          color={isDarkTheme ? `white` : `black`}
          strokeWidth={2}
        />
      </motion.button>
    </nav>
  );
}
