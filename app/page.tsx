import Image from "next/image";
import Banner from "./_components/banner";
import Navbar from "./_components/navbar";
import WorkWithUs from "./_components/landing-page/work-with-us";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <WorkWithUs />
      <Footer />
    </>
  );
}
