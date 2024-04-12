"use client";

import CareerLoader from "@/components/career/CareerLoader";
import Footer from "@/components/footer";
import { Noto_Sans_JP } from "next/font/google";
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/header/header";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const [loadingAnimation, setLoadingAnimation] = useState(true);

  return (
    <>
      {loadingAnimation ? (
        <motion.div key="loader">
          <CareerLoader setLoadingAnimation={setLoadingAnimation} />
        </motion.div>
      ) : (
        <>
           <Header isDarkTheme={false} />
          {children}
          <Footer />
        </>
      )}
    </>
  );
}
