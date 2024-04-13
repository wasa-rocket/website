import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "WASA Rocket",
  description:
    "WASA Rocket Offical Website. WASA Rocket is a student organization at Waseda University that develops and launches rockets. WASAロケット（通称ワサロケ）の公式サイトです。このサイトではワサロケに関する情報を日々発信しています！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="darkMode">
      <body className={notoSansJP.className}>{children}</body>
    </html>
  );
}
