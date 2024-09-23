import LinkSection from "@/feature/components/LinkSection";
import MarqueeText from "@/feature/components/MarqueeText";
import NewsSection from "@/feature/components/NewsSection";
import WorkSection from "@/feature/components/WorkSection";
import Header from "@/feature/layout/Header";

const Home = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Header />
      <MarqueeText />
      
      {/* スペーサーセクション */}
      <section>
        <div className="flex items-center justify-center px-14 py-32"></div>
      </section>

      <WorkSection />
        <NewsSection />
        <LinkSection />
    
    </div>
  );
};

export default Home;
