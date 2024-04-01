import SectionTitle from "../sectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function Faq() {
  return (
    <section>
      <SectionTitle>FAQ</SectionTitle>
      <Accordion type="single" collapsible>
        <AccordionItem value="item1">
          <AccordionTrigger>
            ​早稲田大学・日本女子大学以外の学生もWASAロケットプロジェクトに入ることができますか？
          </AccordionTrigger>
          <AccordionContent>
            早稲田大学・日本女子大学以外の学生の方でも大歓迎です！ただし、活動場所は主に早稲田大学戸山キャンパス・西早稲田キャンパス(新宿区)ですので、通える範囲かご確認ください。
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
