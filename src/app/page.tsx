"use client"
import LinkSection from "@/feature/components/LinkSection";
import MarqueeText from "@/feature/components/MarqueeText";
import NewsSection from "@/feature/components/NewsSection";
import ProfileCard from "@/feature/components/ProfileCard";
import WorkSection from "@/feature/components/WorkSection";
import Footer from "@/feature/layout/Footer";
import Header from "@/feature/layout/Header";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Image from "next/image";
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
       <section>
        <div className="flex h-[750px] items-center justify-center bg-gray-100 -z-10">
        <ProfileCard />
        </div>
      </section>
        <NewsSection />
        <LinkSection />

      <section>
        <div className="flex lg:gap-8 h-[280px] sm:h-[380] lg:h-[300px] relative  items-center justify-center bg-white ">
        <Image
        height={360}
        width={450}
        src="/programing.png"
        alt="News"
        className="hidden lg:flex"
      />
      
       <Image
        height={100}
        width={180}
        src="/programing.png"
        alt="News"
        className="lg:hidden absolute  "
      />
      <h2 className="font-roboto font-bold text-6xl z-0 text-white text-stroke">SOMA TAKATA</h2>
      

        </div>
      </section>
      <div className="w-full h-16  flex lg:hidden border-t-[2px] border-black ">
        <div className="w-full justify-between border-r-[2px] border-black"></div>
        <div className="w-24 flex justify-center items-center">
        <KeyboardArrowUpIcon className="w-10 h-10 hover:scale-125 transition-all duration-300 transform cursor-pointer" onClick={scrollToTop} />
      </div></div>
        <Footer />
    </div>
  );
};

export default Home;
