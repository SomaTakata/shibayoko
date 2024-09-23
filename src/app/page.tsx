"use client"
import LinkSection from "@/feature/components/LinkSection";
import MarqueeText from "@/feature/components/MarqueeText";
import NewsSection from "@/feature/components/NewsSection";
import WorkSection from "@/feature/components/WorkSection";
import Footer from "@/feature/layout/Footer";
import Header from "@/feature/layout/Header";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const Home = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <MarqueeText />
      
      {/* スペーサーセクション */}
      <section>
        <div className="flex items-center justify-center px-14 py-32"></div>
      </section>

      <WorkSection />
        <NewsSection />
        <LinkSection />

      <div className="w-full h-16  flex lg:hidden border-t-[2px] border-black ">
        <div className="w-full justify-between border-r-[2px] border-black"></div>
        <div className="w-24 flex justify-center items-center">
        <KeyboardArrowUpIcon className="w-10 h-10"/>
      </div></div>
        <Footer />
    </div>
  );
};

export default Home;
