import Link from "next/link";
import { Element } from "./header";
import { motion } from "framer-motion";

type Props = {
  element: Element;
  sideMenuHidden: boolean;
  hiddenWhenMd: boolean;
};

export default function SideBarItem({
  element,
  sideMenuHidden,
  hiddenWhenMd,
}: Props) {
  return (
    <Link href={element.link}>
      <motion.li
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        animate={sideMenuHidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`p-2 mx-4 text-sm text-white font-semibold text-right tracking-wider border-b-[1px] border-gray-400 hover:text-gray-300 ${
          hiddenWhenMd ? "md:hidden block" : ""
        }`}
      >
        {element.title}
      </motion.li>
    </Link>
  );
}
