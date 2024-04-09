import SectionTitle from "@/components/sectionTitle";
import Link from "next/link";

export default function Page() {
  const careerLinks = [
    {
      href: "https://www.flaticon.com/free-icons/project-management",
      title: "project management icons",
      text: "Project management icons created by Flat Icons - Flaticon",
    },
    {
      href: "https://www.flaticon.com/free-icons/circuit",
      title: "circuit icons",
      text: "Circuit icons created by Payungkead - Flaticon",
    },
    {
      href: "https://www.flaticon.com/free-icons/3d-printer",
      title: "3d printer icons",
      text: "3d printer icons created by Freepik - Flaticon",
    },
    {
      href: "https://www.flaticon.com/free-icons/auto-cad",
      title: "auto cad icons",
      text: "Auto cad icons created by Smashicons - Flaticon",
    },
  ];
  return (
    <section className="mx-auto lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm max-w-[300px] my-36">
      <SectionTitle>Career Page</SectionTitle>
      <ul className="w-fit mx-auto">
        {careerLinks.map((careerLink) => {
          return (
            <li key={careerLink.title} className="w-fit my-3">
              <Link href={careerLink.href} title={careerLink.title}>
                {careerLink.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
