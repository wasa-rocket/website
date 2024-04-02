import Image from "next/image";
import SectionTitle from "../sectionTitle";

export default function Calendar() {
  return (
    <section>
      <SectionTitle>CALENDAR</SectionTitle>
      <Image
        src="/career/calendar/calendar.png"
        alt="calendar"
        width="1000"
        height="1000"
        className="max-w-xl mx-auto w-[80%]"
      />
    </section>
  );
}
