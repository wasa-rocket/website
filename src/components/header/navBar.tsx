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
};

export default function NavBar({
  menuElements,
  navHidden,
  sideMenuHidden,
  setsideMenuHidden,
}: Props) {
  return (
    <nav className="bg-black bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70">
      <ul className="flex flex-row justify-between md:w-[80%] max-w-[400px] ml-12">
        <motion.li
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          animate={navHidden ? "hidden" : "visible"}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className="md:my-4 my-0"
          key="image"
        >
          <Link href="/">
            <Image
              src="/logo/logoBold_25.png"
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
                className="text-sm md:block hidden text-white font-semibold text-left tracking-wider my-4"
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
        <Link href="/" className="md:hidden block mb-[-25px] mt-[-17px] w-full">
          <Image
            src="/logo/logoBoldWide_25.png"
            alt="logo"
            width={180}
            height={100}
            className="mx-auto"
          />
        </Link>
      </motion.div>
      <motion.button
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        animate={navHidden ? "hidden" : "visible"}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        className="z-50 absolute right-8 top-[36%] md:top-1/2 transform -translate-y-1/2"
        onClick={() => {
          setsideMenuHidden((sideMenuHidden) => !sideMenuHidden);
        }}
      >
        <MenuButton isOpen={!sideMenuHidden} color="white" strokeWidth={2} />
      </motion.button>
    </nav>
  );
}
