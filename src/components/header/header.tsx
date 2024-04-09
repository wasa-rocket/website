"use client";

import Link from "next/link";
import Alert from "./alert";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import NavBar from "./navBar";
import SideBar from "./sideBar";

export type Element = {
  title: string;
  link: string;
};

export default function Header() {
  const menuElements: Element[] = [
    { title: "ROCKOON", link: "/rockoon" },
    { title: "ROCKET", link: "/rocket" },
    { title: "CANSAT", link: "/cansat" },
  ];
  const sideMenuElements: Element[] = [
    { title: "About us", link: "/about" },
    { title: "Posts", link: "/posts" },
    { title: "Career", link: "/career" },
  ];

  const sideMenuElementsHidden: Element[] = [
    { title: "ROCKOON", link: "/rockoon" },
    { title: "ROCKET", link: "/rocket" },
    { title: "CANSAT", link: "/cansat" },
  ];

  const [sideMenuHidden, setsideMenuHidden] = useState(true);
  const [navHidden, setNavHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (!previous) return;
    setsideMenuHidden(true);
    if (latest > previous && latest > 100) {
      setNavHidden(true);
    } else {
      setNavHidden(false);
    }
  });

  //Set sidemenu hidden when loading new page
  const pathname = usePathname();
  useEffect(() => {
    setsideMenuHidden(true);
  }, [pathname]);

  return (
    <motion.section
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={navHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 m-0 z-50 w-full"
    >
      <NavBar
        menuElements={menuElements}
        navHidden={navHidden}
        sideMenuHidden={sideMenuHidden}
        setsideMenuHidden={setsideMenuHidden}
      />
      <SideBar
        sideMenuElements={sideMenuElements}
        sideMenuElementsHidden={sideMenuElementsHidden}
        sideMenuHidden={sideMenuHidden}
      />
      {pathname !== "/career" && (
        <Alert navHidden={navHidden}>
          <span>
            WASAでは新入生を歓迎しています。
            <Link
              href="/career"
              className="underline  hover:text-gray-300"
              aria-label="Read more about career"
            >
              新歓情報を見る{`>`}
            </Link>
          </span>
        </Alert>
      )}
    </motion.section>
  );
}
