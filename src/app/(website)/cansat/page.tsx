import { getCansat } from "@/libs/api";
import ProjectPage from "@/components/projectPage";

export default async function Page() {
  const content = await getCansat();
  return (
    <ProjectPage
      heroImageSrc="/cansat/CansatHeroImage3.jpg"
      heroImageAlt="Cansat hero image"
      pageTitleSrc="/cansat/CansatTitleLogo2.png"
      pageTitleAlt="Cansat Title"
      content={content}
    />
  );
}
