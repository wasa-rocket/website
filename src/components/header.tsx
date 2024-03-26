import Image from "next/image";
import Link from "next/link";

export default function Header({ elements }: { elements: string[] }) {
  return (
    <nav className="fixed bg-black w-full z-50  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70">
      <ul className="flex flex-row justify-evenly w-[60%]">
        <li className="my-4">
          <Link href="/">
            <Image
              src="/logo/logoBold_25.png"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
        </li>
        {elements &&
          elements.map((element) => {
            return (
              <li className="z-50 my-auto">
                <Link
                  href={`/${element}`}
                  className="text-sm sm:block hidden text-white font-semibold text-left tracking-wider my-4"
                >
                  {element}
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
