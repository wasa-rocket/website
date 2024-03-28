"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Element } from "./header";
import SideBarItem from "./sideBarItem";

type Props = {
  sideMenuElements: Element[];
  sideMenuElementsHidden: Element[];
  sideMenuHidden: boolean;
};

export default function SideBar({
  sideMenuElements,
  sideMenuElementsHidden,
  sideMenuHidden,
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
      className="absolute h-screen right-0 bg-black bg-clip-padding backdrop-blur-md bg-opacity-70 backdrop-filter w-[250px] z-30 pt-12"
    >
      <ul>
        {sideMenuElementsHidden.map((element) => {
          return (
            <SideBarItem
              element={element}
              sideMenuHidden={sideMenuHidden}
              hiddenWhenMd={true}
            />
          );
        })}
        {sideMenuElements.map((element) => {
          return (
            <SideBarItem
              element={element}
              sideMenuHidden={sideMenuHidden}
              hiddenWhenMd={false}
            />
          );
        })}
      </ul>
    </motion.nav>
  );
}
