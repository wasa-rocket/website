import { getRockoon } from "@/libs/api";
import ProjectPage from "@/components/projectPage";

export default async function Page() {
  const content = await getRockoon();
  return (
    <ProjectPage
      heroImageSrc="/rockoon/RockoonHeroImage3.jpg"
      heroImageAlt="Rockoon hero image"
      pageTitleSrc="/rockoon/RockoonTitleLogo2.png"
      pageTitleAlt="Rockoon Title"
      content={content}
    />
  );
}
