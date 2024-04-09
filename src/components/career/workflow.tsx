import SectionTitle from "../sectionTitle";
import Bento from "./bento";

export default function Workflow() {
  return (
    <section className="sm:my-44 my-28 container lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm min-w-[300px]">
      <div className="sm:my-16 my-10 tracking-wider ">
        <h2 className="font-semibold text-gray-700 mb-6">WORKFLOW</h2>
        <p className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl mb-4 font-bold text-gray-800 tracking-tight lg:leading-tight md:leading-tight sm:leading-tight leading-tight">
          WASAロケで
          <br className="my-2 block" />
          やりたいことを
          <br className="lg:hidden block" />
          みつけよう。
        </p>
        <p className="font-semibold text-gray-500">
          ロケットを作るのには沢山の工程があります。きっとあなたに合った工程が見つかるはずです。
          <br />
          また、ワサロケに入会する人の多くは未経験から始めています。一緒に楽しく活動しましょう！
        </p>
      </div>
      <Bento />
    </section>
  );
}
