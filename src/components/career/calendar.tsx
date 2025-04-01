"use client";

import Image from "next/image";
import SectionTitle from "../sectionTitle";
import Link from "next/link";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import EventItem from "./eventItem";
import SlideShowDot from "./slideShowDot";
import { useState, useEffect } from "react";

export default function Calendar() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

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
          モデルロケット・Cansatの制作体験を行います
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
    {
      src: "/career/calendar/events/recreation.png",
      alt: "recreation image",
      title: "レク会",
      fit: true,
      description: (
        <>
          宇宙飛行士もやったゲームに挑戦！一緒に遊んで現役メンバーと盛り上がろう！
          <br />
          場所：学生会館 <br />
          日時
          <br />
          4/22(月) 19:00~
          <br />
          4/26(金) 19:00~
          <br />
          <Link
            aria-label="Link to the form to apply for the recreation event"
            href="https://forms.gle/4gzqe2C3tApHwDma6"
            className="underline text-blue-600"
          >
            レク会に応募する
          </Link>
        </>
      ),
    },
    {
      src: "/career/calendar/events/pizzaparty.jpg",
      alt: "pizza party image",
      title: "歓迎会",
      fit: true,
      description: (
        <>
          WASAロケに入りたい仲間と出会いましょう！
          <br />
          ロケに入るかわからないけど人と話したいという人も大歓迎！
          <br />
          先輩たちの活動も、新入生同士のつながりも作れます！ 来週末（20日）です
          <br />
          <Link
            aria-label="Link to the form to apply for the pizza party event"
            href="https://t.co/B4vM2wuITG"
            className="underline text-blue-600"
          >
            歓迎会に応募する
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
      {/* uncomment the section below to visualize the Events*/}
      {/* <Carousel className="max-w-xl mx-auto my-24 w-[80%]" setApi={setApi}>
        <CarouselContent>
          {events.map((event, index) => (
            <CarouselItem key={event.title}>
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
        <div className="flex flex-row mx-auto justify-evenly w-[150px] mt-6">
          {events.map((event, index) => {
            return <SlideShowDot black={index === current} key={event.title} />;
          })}
        </div>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}
    </section>
  );
}
