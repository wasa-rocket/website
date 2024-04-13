import { getRocket } from "@/libs/api";
import ProjectPage from "@/components/projectPage";

export default async function Page() {
  const content = await getRocket();
  return (
    <ProjectPage
      heroImageSrc="/rocket/RocketHeroImage2.jpg"
      heroImageAlt="Rocket hero image"
      pageTitleSrc="/rocket/RocketLogoFull.png"
      pageTitleAlt="Rocket Title"
      content={content}
    />
  );
}
