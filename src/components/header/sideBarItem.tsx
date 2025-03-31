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
        onClick={(e) => {
          if (element.socialLinks && element.link === "#") {
            e.preventDefault();
          }
        }}
      >
        {element.title}
      </Link>
      
      {element.socialLinks && (
        <div className={`w-[80%] ml-auto mr-4 ${hiddenWhenMd ? "md:hidden" : ""}`}>
          {element.socialLinks.map((social) => (
            <Link
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${element.title} ${social.platform} link`}
              className={
                `p-1.5 text-xs text-right tracking-wider hover:text-gray-300 block` +
                (isDarkTheme ? ` text-white` : ` text-black`)
              }
            >
              {social.platform}
            </Link>
          ))}
        </div>
      )}
    </motion.li>
  );
}
