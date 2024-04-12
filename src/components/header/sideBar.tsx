"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Element } from "./header";
import SideBarItem from "./sideBarItem";

type Props = {
  sideMenuElements: Element[];
  sideMenuElementsHidden: Element[];
  sideMenuHidden: boolean;
  isDarkTheme: boolean;
};

export default function SideBar({
  sideMenuElements,
  sideMenuElementsHidden,
  sideMenuHidden,
  isDarkTheme,
}: Props) {
  return (
    <motion.nav
      variants={{
        visible: { x: 0 },
        hidden: { x: "100%" },
      }}
      animate={sideMenuHidden ? "hidden" : "visible"}
      initial="hidden"
      transition={{ duration: 0.25, delay: 0.1, ease: "easeInOut" }}
      className={
        `absolute h-screen right-0 bg-clip-padding backdrop-blur-md bg-opacity-70 backdrop-filter w-[250px] z-30 pt-12` +
        (isDarkTheme ? ` bg-black` : ` bg-gray-300`)
      }
    >
      <ul className="w-full">
        {sideMenuElementsHidden.map((element) => {
          return (
            <SideBarItem
              element={element}
              sideMenuHidden={sideMenuHidden}
              hiddenWhenMd={true}
              key={element.title}
              isDarkTheme={isDarkTheme}
            />
          );
        })}
        {sideMenuElements.map((element) => {
          return (
            <SideBarItem
              element={element}
              sideMenuHidden={sideMenuHidden}
              hiddenWhenMd={false}
              key={element.title}
              isDarkTheme={isDarkTheme}
            />
          );
        })}
      </ul>
    </motion.nav>
  );
}
