import HeroPost from "@/components/heroPost";
import Rockoon from "@/components/rockoon";
import Rocket from "@/components/rocket";
import Image from "next/image";
import Cansat from "@/components/cansat";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroPost />
      <Rockoon />
      <Rocket />
      <Cansat />
      <Footer />
    </>
  );
}
