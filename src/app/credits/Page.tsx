import Link from "next/link";

export default function Page() {
  return (
    <section className="mx-auto lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm max-w-[300px] my-32">
      <h2>Career Page</h2>
      <ul>
        <li>
          <Link
            href="https://www.flaticon.com/free-icons/circuit"
            title="circuit icons"
          >
            Circuit icons created by Payungkead - Flaticon
          </Link>
        </li>
        <li>
          <a
            href="https://www.flaticon.com/free-icons/3d-printer"
            title="3d printer icons"
          >
            3d printer icons created by Freepik - Flaticon
          </a>
        </li>
        <li>
          <a
            href="https://www.flaticon.com/free-icons/auto-cad"
            title="auto cad icons"
          >
            Auto cad icons created by Smashicons - Flaticon
          </a>
        </li>
        <li />
      </ul>
    </section>
  );
}
