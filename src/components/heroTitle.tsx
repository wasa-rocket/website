export function HeroTitleH2({
  title,
  black,
}: {
  title: string;
  black?: boolean;
}) {
  if (black) {
    return (
      <h2 className="md:text-6xl text-4xl font-semibold text-left text-black mb-6 tracking-wider">
        {title}
      </h2>
    );
  } else {
    return (
      <h2 className="md:text-6xl text-4xl font-semibold text-left mb-6 tracking-wider">
        {title}
      </h2>
    );
  }
}
