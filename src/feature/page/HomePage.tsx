import ClientLayout from "@/client/ClientLayout";
import ImageSection from "@/feature/components/ImageSection";
import ImageSlider from "@/feature/components/ImageSlider";
import LinkSection from "@/feature/components/LinkSection";
import MarqueeText from "@/feature/components/MarqueeText";
import NewsSection from "@/feature/components/NewsSection";
import ProfileSection from "@/feature/components/ProfileSection";
import WorkSection from "@/feature/components/WorkSection";

const HomePage = () => {
  return (
    <ClientLayout>
      <MarqueeText />
      <section>
        <div className="flex items-center justify-center px-14 py-20">
          <ImageSlider />
        </div>
      </section>

      <WorkSection />
      <ProfileSection />
      <NewsSection />
      <LinkSection />
      <ImageSection />
    </ClientLayout>
  );
};

export default HomePage;
