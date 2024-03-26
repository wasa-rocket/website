import Link from "next/link";

export function LearnMore({ black }: { black?: boolean }) {
  if (black) {
    return (
      <button className="cursor-pointer outline outline-1 hover:bg-gray-300 hover:bg-opacity-30 text-black font-bold py-3 px-8">
        Learn more
      </button>
    );
  } else {
    return (
      <button className="cursor-pointer outline outline-1 hover:bg-gray-700 hover:bg-opacity-30 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm text-white font-bold py-3 px-8 z-50">
        Learn more
      </button>
    );
  }
}
