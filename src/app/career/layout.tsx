"use client";

import CareerLoader from "@/components/career/CareerLoader";
import Footer from "@/components/footer";
import Header from "@/components/header/header";
import { Noto_Sans_JP } from "next/font/google";
import { useState } from "react";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const [loadingAnimation, setLoadingAnimation] = useState(false);

  return (
    <>
      {loadingAnimation ? (
        <CareerLoader setLoadingAnimation={setLoadingAnimation} />
      ) : (
        <>
          {children}
          <Header />
          <Footer />
        </>
      )}
    </>
  );
}
