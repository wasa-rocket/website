import postStyles from "@/components/posts.module.css";
import HeroImage from "@/components/home/heroImage";
import PageTitle from "@/components/pageTitle";
import { ProjectContent } from "@/libs/types";

type Props = {
  heroImageSrc: string;
  heroImageAlt: string;
  pageTitleSrc: string;
  pageTitleAlt: string;
  content: ProjectContent;
};

export default function ProjectPage({
  heroImageSrc,
  heroImageAlt,
  pageTitleSrc,
  pageTitleAlt,
  content,
}: Props) {
  return (
    <main className="md:mt-28 mt-20">
      <section className="relative w-full h-[66vh] z-0">
        <div className="absolute w-full h-2/3 bg-gradient-to-b from-black z-10 opacity-50"></div>
        <HeroImage src={heroImageSrc} alt={heroImageAlt} />
      </section>
      <div className="lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm max-w-[90%] mx-auto">
        <PageTitle src={pageTitleSrc} alt={pageTitleAlt} />
        <div
          className={postStyles["post"]}
          dangerouslySetInnerHTML={{
            __html: content.body,
          }}
        />
      </div>
    </main>
  );
}
