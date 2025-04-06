"use client";

import Link from "next/link";
import Alert from "./alert";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import NavBar from "./navBar";
import SideBar from "./sideBar";

export type SocialLink = {
  platform: string;
  url: string;
};

export type Element = {
  title: string;
  link: string;
  socialLinks?: SocialLink[];
};

type Props = { isDarkTheme: boolean };

export default function Header({ isDarkTheme }: Props) {
  const menuElements: Element[] = [
    { title: "ROCKOON", link: "/rockoon" },
    { title: "ROCKET", link: "/rocket" },
    { title: "CANSAT", link: "/cansat" },
  ];
  const sideMenuElements: Element[] = [
    { title: "About us", link: "/about" },
    { title: "Posts", link: "/posts" },
    { title: "Career", link: "/career" },
    { 
      title: "WASAロケット", 
      link: "#",
      socialLinks: [
        { platform: "X", url: "https://x.com/wasa_rocket" },
        { platform: "Instagram", url: "https://www.instagram.com/wasa_rocket_pro/" },
        { platform: "Youtube", url: "https://www.youtube.com/user/wasarocketpro" },
        { platform: "LINE", url: "https://line.me/ti/g2/er8zyh7JR6tKFvlILP2XqbyGV0wL-AbxkyzlUw?utm_source=invitation&utm_medium=link_copy&utm_campaign=default" }
      ]
    },
    { 
      title: "WASA鳥人間", 
      link: "#",
      socialLinks: [
        { platform: "HP", url: "https://wasa-birdman.com/" },
        { platform: "X", url: "https://x.com/wasa_birdman" },
        { platform: "Instagram", url: "https://www.instagram.com/wasa.bird_info/" },
        { platform: "Youtube", url: "https://www.youtube.com/@WASABirdman" }
      ]
    },
    {
      title: "WASA天文",
      link: "#",
      socialLinks: [
        { platform: "X", url: "https://x.com/wasa_tenmon_pro" },
        { platform: "Instagram", url: "https://www.instagram.com/wasa_tenmon_pro/" }
      ]
    }
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
        isDarkTheme={isDarkTheme}
      />
      <SideBar
        sideMenuElements={sideMenuElements}
        sideMenuElementsHidden={sideMenuElementsHidden}
        sideMenuHidden={sideMenuHidden}
        isDarkTheme={isDarkTheme}
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
