import MarqueeText from "@/feature/components/MarqueeText";
import Header from "@/feature/layout/Header";


const Home = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Header />
      <MarqueeText />
    </div>
  );
};

export default Home;
