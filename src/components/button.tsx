export function LearnMore({ black }: { black?: boolean }) {
  if (black) {
    return (
      <button className="outline outline-1 hover:bg-gray-300 hover:bg-opacity-30 text-black font-bold py-2 px-5">
        Learn more
      </button>
    );
  } else {
    return (
      <button className="outline outline-1 hover:bg-gray-700 hover:bg-opacity-30 text-white font-bold py-2 px-5">
        Learn more
      </button>
    );
  }
}
