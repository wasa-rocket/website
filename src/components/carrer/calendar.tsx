import Image from "next/image";
import SectionTitle from "../sectionTitle";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import EventItem from "./eventItem";

export default function Calendar() {
  const events = [
    {
      src: "/career/calendar/events/session.jpg",
      alt: "session image",
      title: "説明会",
      fit: true,
      description: (
        <>
          WASAロケに興味が少しでもある方、説明会に参加しませんか？
          <br />
          説明会では普段のWASAロケの説明をします
          <br />
          入会を決めている人も、どうしようか悩んでいる人も、一度説明会に参加しませんか？
          <br />
          <Link
            aria-label="Link to the form to apply for the session event"
            href="https://forms.gle/E2oRvxwE1FbL3ipU8"
            className="underline text-blue-600"
          >
            説明会に応募する
          </Link>
        </>
      ),
    },
    {
      src: "/career/calendar/events/cansat.jpg",
      alt: "cansat image",
      title: "制作体験",
      fit: false,
      description: (
        <>
          モデルロケット・Cansatの製作体験を行います
          <br />
          WASAでの活動で私たちが開発しているモデルロケット・Cansatを実際に作って、動かしてみませんか？
          <br />
          モデルロケットは大迫力の打ち上げまで行います。ぜひ参加してください！
          <br />
          <Link
            aria-label="Link to the form to apply for the Cansat and model rocket event"
            href="https://forms.gle/mQqbRARmWMt3o3TV7"
            className="underline text-blue-600"
          >
            制作体験に応募する
          </Link>
        </>
      ),
    },
    {
      src: "/career/calendar/events/miraikan.jpg",
      alt: "miraikan image",
      title: "宇宙航空ツアー",
      fit: false,
      description: (
        <>
          WASAのロケット、鳥人間、天文の3プロジェクトで宇宙航空ツアーを行います！
          <br />
          羽田イノベーションシティ・日本科学未来館に見学に行きます！
          <br />
          ※先着30名
          <br />
          ※参加無料
          <br />
          ※片方のみの参加可
          <br />
          <Link
            aria-label="Link to the form to apply for the space tour event"
            href="https://forms.gle/cdiPqM2veX5Ny5rY6"
            className="underline text-blue-600"
          >
            宇宙航空ツアーに応募する
          </Link>
        </>
      ),
    },
    {
      src: "/career/calendar/events/LetsEat.jpg",
      alt: "dinner event image",
      title: "合同説明会＋食事会",
      fit: true,
      description: (
        <>
          WASAのロケット、鳥人間、天文プロジェクト合同企画で説明会、食事会を開催します！
          <br />
          説明会でWASAを知った後、みんなで食事をしましょう！ ※抽選30名
          <br />
          ※500円現金でご持参ください
          <br />
          <Link
            aria-label="Link to the form to apply for the dinner event"
            href="https://forms.gle/Ao5y2U1RYp83K2ts5"
            className="underline text-blue-600"
          >
            食事会に応募する
          </Link>
        </>
      ),
    },
    {
      src: "/career/calendar/events/joshikai.jpg",
      alt: "joshikai image",
      title: "女子会",
      fit: true,
      description: (
        <>
          WASAロケプロが気になる女子の皆さん、現役メンバーと交流しませんか？
          <br />
          みんなで楽しくおしゃべりしに来てください！
          <br />
          <Link
            aria-label="Link to the form to apply for the joshikai event"
            href="https://forms.gle/4gzqe2C3tApHwDma6"
            className="underline text-blue-600"
          >
            女子会に応募する
          </Link>
        </>
      ),
    },
    {
      src: "/career/calendar/events/bunkei.jpg",
      alt: "bunkei image",
      title: "文系会",
      fit: true,
      description: (
        <>
          WASAロケに興味のある文系の皆さん！
          <br />
          WASAロケは理系だけでなく文系もいるサークルです！
          <br />
          「文系だから、、」という不安を払拭します。ぜひ来てください！
          <br />
          みんなで楽しくおしゃべりしに来てください！
          <br />
          <Link
            aria-label="Link to the form to apply for the bunkei event"
            href="https://forms.gle/4gzqe2C3tApHwDma6"
            className="underline text-blue-600"
          >
            文系会に応募する
          </Link>
        </>
      ),
    },
  ];

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
      <Carousel className="max-w-xl mx-auto my-24 w-[80%]">
        <CarouselContent>
          {events.map((event, index) => (
            <CarouselItem key={index}>
              <EventItem
                src={event.src}
                alt={event.alt}
                title={event.title}
                fit={event.fit}
                description={event.description}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
