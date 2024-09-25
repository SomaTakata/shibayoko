import Image from "next/image";

const ProfilePage = () => (
  <section className="flex z-10   bg-white flex-col gap-6  px-5 py-14 pb-20  sm:gap-12 sm:px-10 md:px-14 md:py-32 lg:gap-16 lg:border-t-[3px]">
    <h2 className="font-roboto text-4xl font-black tracking-widest text-white text-stroke sm:text-5xl">
      PROFILE
    </h2>

    <div className="rounded-xl border-2 border-black bg-white p-10">
      {/* イラストの部分 */}
      <div className="mb-4 flex justify-center">
        <div className="relative size-48 overflow-hidden rounded-full border-2 border-black">
          <Image
            src="/avatar.png"
            alt="Profile Image"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* プロフィール情報 */}
      <div className="text-center">
        <p className="mt-3 font-roboto text-sm font-bold text-black">
          Web Engineer
        </p>
        <h1 className="mt-1 font-roboto text-3xl font-extrabold">
          SOMA TAKATA
        </h1>
        <p className="mt-3 text-center font-roboto text-sm  text-black">
          HELLO WORLD, This is the portfolio site of Soma Takata, a Japanese man
          web engineer based in Tokyo. I am a student of SIT.
        </p>
      </div>
      <div className="w-full h-2 border-black border-b-2 my-8"></div>
      <div className="w-full flex flex-col justify-center items-center my-10">
        <h2 className="text-3xl font-roboto font-bold text-center mb-8 sm:mb-10 w-full">
          Timeline
        </h2>
        <div className="relative">
          {/* Timeline線 */}
          <div className="absolute w-0.5 h-full bg-gray-300 left-4"></div>

          {/* Timeline item 1 */}
          <div className="mb-10 flex items-center">
            <div className="relative">
              {/* 丸のアイコン */}
              <div className="w-3.5 h-3.5 bg-black rounded-full absolute left-2.5 -top-1"></div>
            </div>
            <div className="ml-10">
              <p className="text-sm text-gray-500">2020 4月</p>
              <h3 className="text-lg font-semibold">芝浦工業大学 入学</h3>
            </div>
          </div>

          {/* Timeline item 2 */}
          <div className="mb-10 flex items-center">
            <div className="relative">
              {/* 丸のアイコン */}
              <div className="w-3.5 h-3.5 bg-black rounded-full absolute left-2.5 -top-1"></div>
            </div>
            <div className="ml-10">
              <p className="text-sm text-gray-500">2023 5月</p>
              <h3 className="text-lg font-semibold">株式会社リクルート</h3>
              <p className="text-gray-700">フロントエンド開発 (10か月)</p>
            </div>
          </div>

          {/* Timeline item 3 */}
          <div className="mb-10 flex items-center">
            <div className="relative">
              {/* 丸のアイコン */}
              <div className="w-3.5 h-3.5 bg-black rounded-full absolute left-2.5 -top-1"></div>
            </div>
            <div className="ml-10">
              <p className="text-sm text-gray-500">2023 11月</p>
              <h3 className="text-lg font-semibold">株式会社MichibikuGroup</h3>
              <p className="text-gray-700">フロントエンド開発 (2か月)</p>
            </div>
          </div>

          {/* Timeline item 4 */}
          <div className="mb-10 flex items-center">
            <div className="relative">
              {/* 丸のアイコン */}
              <div className="w-3.5 h-3.5 bg-black rounded-full absolute left-2.5 -top-1"></div>
            </div>
            <div className="ml-10">
              <p className="text-sm text-gray-500">2024 4月</p>
              <h3 className="text-lg font-semibold">
                株式会社ハウテレビジョン
              </h3>
              <p className="text-gray-700">フロントエンド開発 (3か月)</p>
            </div>
          </div>

          {/* Timeline item 5 */}
          <div className="mb-10 flex items-center">
            <div className="relative">
              {/* 丸のアイコン */}
              <div className="w-3.5 h-3.5 bg-black rounded-full absolute left-2.5 -top-1"></div>
            </div>
            <div className="ml-10">
              <p className="text-sm text-gray-500">2024 9月</p>
              <h3 className="text-lg font-semibold">株式会社LayerX</h3>
              <p className="text-gray-700">フルスタック開発 (2週間)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-2 border-black border-b-2 my-8"></div>
    </div>
  </section>
);

export default ProfilePage;
