"use client";

import Image from "next/image";
import Link from "next/link";
import Alert from "./alert";
import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { MenuButton } from "./menuButton";

type Element = {
    title: string;
    link: string;
};

export default function Header() {
    
  const menuElements: Element[] = [
    { title: "ROCKOON", link: "/rockoon" },
    { title: "ROCKET", link: "/rocket" },
    { title: "CANSAT", link: "/cansat" },
  ];
  const hamburgerMenuElement: Element[] = [
    { title: "About us", link: "/about" },

    { title: "Career", link: "/career" },
  ];

  const hamburgerMenuElementHidden: Element[] = [
    { title: "ROCKOON", link: "/ROCKOON" },
    { title: "ROCKET", link: "/ROCKET" },
    { title: "CANSAT", link: "/CANSAT" },
  ];

  const [hamburgerMenuHidden, setHamburgerMenuHidden] = useState(true);
  const { scrollY } = useScroll();
  const [navHidden, setNavHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (!previous) return;
    setHamburgerMenuHidden(true);
    if (latest > previous && latest > 100) {
      setNavHidden(true);
    } else {
      setNavHidden(false);
    }
  });

  return (
    <motion.section
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={navHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed z-50 w-full"
    >
      <nav className="bg-black bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70">
        <Link href="/" className="md:hidden block mb-[-25px] mt-[-17px] w-full">
          <Image
            src="/logo/logoBoldWide_25.png"
            alt="logo"
            width={180}
            height={100}
            className="mx-auto"
          />
        </Link>
        <ul className="flex flex-row justify-between md:w-[80%] max-w-[400px] ml-12">
          <li className="md:my-4 my-0">
            <Link href="/">
              <Image
                src="/logo/logoBold_25.png"
                alt="logo"
                width={100}
                height={100}
                className="md:block hidden"
              />
            </Link>
          </li>
          {menuElements &&
            menuElements.map((element) => {
              return (
                <li className="z-50 my-auto">
                  <Link
                    href={`/${element.link}`}
                    className="text-sm md:block hidden text-white font-semibold text-left tracking-wider my-4"
                  >
                    {element.title}
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
      <button
        className="z-50 absolute right-8 top-8 text-white font-semibold text-right tracking-wider md:my-auto mt-[-12px]"
        onClick={() => {
          setHamburgerMenuHidden((hamburgerMenuHidden) => !hamburgerMenuHidden);
        }}
      >
        <MenuButton
          isOpen={!hamburgerMenuHidden}
          color="white"
          strokeWidth={2}
        />
      </button>
      <motion.nav
        variants={{
          visible: { x: 0 },
          hidden: { x: "100%" },
        }}
        animate={hamburgerMenuHidden ? "hidden" : "visible"}
        initial="hidden"
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="absolute h-screen right-0 bg-black bg-clip-padding backdrop-blur-md bg-opacity-70 backdrop-filter w-[250px] z-30 pt-12"
      >
        <ul>
          {hamburgerMenuElementHidden.map((element) => {
            return (
              <li className="p-2 mx-4 text-white font-semibold text-right tracking-wider border-b-[1px] border-gray-400 md:hidden block">
                <Link href={element.link} className=" ">
                  {element.title}
                </Link>
              </li>
            );
          })}
          {hamburgerMenuElement.map((element) => {
            return (
              <li className="p-2 mx-4 text-white font-semibold text-right tracking-wider border-b-[1px] border-gray-400">
                <Link href={element.link} className=" ">
                  {element.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.nav>
      <Alert>
        <span>
          WASAでは新入生を歓迎しています。
          <Link href="/career" className="text-emerald-400  hover:underline">
            新歓情報を見る{`>`}
          </Link>
        </span>
      </Alert>
    </motion.section>
  );
}
