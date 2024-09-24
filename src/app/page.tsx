"use client"
import ImageSection from "@/feature/components/ImageSection";
import LinkSection from "@/feature/components/LinkSection";
import MarqueeText from "@/feature/components/MarqueeText";
import NewsSection from "@/feature/components/NewsSection";
import ProfileSection from "@/feature/components/ProfileSection";
import WorkSection from "@/feature/components/WorkSection";
import Footer from "@/feature/layout/Footer";
import Header from "@/feature/layout/Header";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const Home = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };
  return (
    <div className="flex flex-col">
      <Header />
      <MarqueeText />
      
      {/* スペーサーセクション */}
      <section>
        <div className="flex items-center justify-center px-14 py-32"></div>
      </section>

      <WorkSection />
       {/* スペーサーセクション */}
       <ProfileSection/>
        <NewsSection />
        <LinkSection />

    <ImageSection />
      <div className="flex h-16  w-full border-t-2 border-black lg:hidden ">
        <div className="w-full justify-between border-r-2 border-black"></div>
        <div className="flex w-24 items-center justify-center">
        <KeyboardArrowUpIcon className="size-10 cursor-pointer transition-all duration-300 hover:scale-125" onClick={scrollToTop} />
      </div></div>
        <Footer />
    </div>
  );
};

export default Home;
