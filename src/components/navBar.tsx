import Link from "next/link";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { MenuButton } from "./menuButton";

type Props = {
  menuElements: { title: string; link: string }[];
  sideMenuHidden: boolean;
  setsideMenuHidden: Dispatch<SetStateAction<boolean>>;
};

export default function NavBar({
  menuElements,
  sideMenuHidden,
  setsideMenuHidden,
}: Props) {
  return (
    <nav className="bg-black bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70">
      <ul className="flex flex-row justify-between md:w-[80%] max-w-[400px] ml-12">
        <li className="md:my-4 my-0" key="image">
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
        {menuElements.map((element) => {
          return (
            <li className="z-50 my-auto" key={element.title}>
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
      <Link href="/" className="md:hidden block mb-[-25px] mt-[-17px] w-full">
        <Image
          src="/logo/logoBoldWide_25.png"
          alt="logo"
          width={180}
          height={100}
          className="mx-auto"
        />
      </Link>
      <button
        className="z-50 absolute right-8 top-[36%] md:top-1/2 transform -translate-y-1/2"
        onClick={() => {
          setsideMenuHidden((sideMenuHidden) => !sideMenuHidden);
        }}
      >
        <MenuButton isOpen={!sideMenuHidden} color="white" strokeWidth={2} />
      </button>
    </nav>
  );
}
