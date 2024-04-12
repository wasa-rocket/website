import Footer from "@/components/footer";
import Header from "@/components/header/header";

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Header isDarkTheme={true} />
      <Footer />
    </>
  );
}
