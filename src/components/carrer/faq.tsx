import SectionTitle from "../sectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function Faq() {
  const faqContent: { id: number; question: string; answer: string }[] = [
    {
      id: 1,
      question:
        "​早稲田大学・日本女子大学以外の学生もWASAロケットプロジェクトに入ることができますか？",
      answer:
        "早稲田大学・日本女子大学以外の学生の方でも大歓迎です！ただし、活動場所は主に早稲田大学戸山キャンパス・西早稲田キャンパス(新宿区)ですので、通える範囲かご確認ください。",
    },
    {
      id: 2,
      question: "​航空や機械系以外の学科のメンバーはいますか？",
      answer:
        "理学系や文系のメンバーも所属しています。ものづくりや空が好き、興味があるという方であれば学部・学科関係なく大歓迎ですので、ぜひ新歓にお越しください！",
    },
    {
      id: 3,
      question: "​会費はありますか？",
      answer:
        "​入会時に入会金として5000円、毎学期(春学期・秋学期)に活動費として5000円をいただいています。",
    },
    {
      id: 4,
      question:
        "​他のサークルや他のWASAのプロジェクトにも興味があるのですが、兼サーすることは可能でしょうか？",
      answer:
        "はい、他のサークルにも入ることや他のWASAのプロジェクトに入ることも大丈夫です！",
    },
    {
      id: 5,
      question:
        "​授業が忙しいと聞いたのですが、活動はどのくらいの頻度でやっているのでしょうか？",
      answer:
        "昨年度は週に2回ほど、18時~20時に活動を行なっていました。また、バイトとも両立することはできる​かと思います。",
    },
  ];

  return (
    <section>
      <SectionTitle>FAQ</SectionTitle>
      <Accordion
        type="single"
        collapsible
        className="w-[80%] max-w-[1000px] mx-auto"
      >
        {faqContent.map((faq) => {
          return (
            <AccordionItem value={faq.question} key={faq.id}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}
