import { Element } from "./header";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  element: Element;
  sideMenuHidden: boolean;
  hiddenWhenMd: boolean;
  isDarkTheme: boolean;
};

export default function SideBarItem({
  element,
  sideMenuHidden,
  hiddenWhenMd,
  isDarkTheme,
}: Props) {
  const router = useRouter();
  return (
    <motion.li
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      animate={sideMenuHidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, delay: 0.3 }}
      onClick={() => router.push(element.link)}
      className="w-full"
    >
      <Link
        href={element.link}
        aria-label={"link to " + element.title + "page"}
        className={
          `w-[90%] mx-auto p-2 text-sm font-semibold text-right tracking-wider border-b-[1px] border-gray-400 hover:text-gray-300 block ${
            hiddenWhenMd ? "md:hidden" : ""
          }` + (isDarkTheme ? ` text-white` : ` text-black`)
        }
      >
        {element.title}
      </Link>
    </motion.li>
  );
}
