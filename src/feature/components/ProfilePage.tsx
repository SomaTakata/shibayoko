import Image from "next/image";
import TimelineSection from "./TimelineSection";
import SkillsSection from "./SkillsSection";

const ProfilePage = () => (
  <section className="flex z-10 w-full bg-white flex-col gap-6 px-5 py-14 pb-20 sm:gap-12 sm:px-10 md:px-14 md:py-32 lg:gap-16">
    <h2 className="font-roboto text-4xl font-black tracking-widest text-white text-stroke sm:text-5xl">
      PROFILE
    </h2>

    <div className="rounded-xl border-2 border-black bg-white p-10">
      <div className="mb-4 flex justify-center">
        <div className="relative w-48 h-48 overflow-hidden rounded-full border-2 border-black">
          <Image
            src="/avatar.png"
            alt="Soma Takata's profile image"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="text-center">
        <p className="mt-3 font-roboto text-sm font-bold text-black">
          Web Engineer
        </p>
        <h1 className="mt-1 font-roboto text-3xl font-extrabold">
          SOMA TAKATA
        </h1>

        <p className="mt-3 text-center font-roboto text-sm text-black">
          モノづくりが大好きです。
        </p>
        <p className="text-center font-roboto text-sm text-black">
          自分のあたまの中にあるアイデアを形にすることが出来る。
          プログラミングは最高の趣味だ。
        </p>
      </div>

      <div className="w-full h-2 border-b-2 border-black my-8"></div>

      <TimelineSection />

      <div className="w-full h-2 border-b-2 border-black my-8"></div>
      <SkillsSection />
    </div>
  </section>
);

export default ProfilePage;
