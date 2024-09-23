import MarqueeText from "@/feature/components/MarqueeText";
import Header from "@/feature/layout/Header";


const Home = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Header />
      <MarqueeText />
      <section>
        <h2 className="font-roboto text-5xl font-black tracking-widest text-white border-y-2 mt-4 border-black text-stroke">WORK</h2>
      </section>
    </div>
  );
};

export default Home;
