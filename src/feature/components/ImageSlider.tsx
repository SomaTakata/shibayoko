import { Swiper, SwiperSlide } from "swiper/react"; // SwiperとSwiperSlideをインポート
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules"; // Swiper 11.x以降は/modulesからモジュールをインポート
import "swiper/css"; // Swiperのスタイル
import "swiper/css/pagination"; // ページネーションのスタイル
import "swiper/css/navigation"; // ナビゲーションのスタイル

// Next.jsのImageコンポーネント
import Image from "next/image";
import Link from "next/link";

const ImageSlider = () => {
  // スライドに表示する画像のリスト
  const slides = [
    {
      title: "フロントエンド",
      year: "2024",
      projectName: "NginLink",
      projectLink: "https://github.com/SomaTakata/ngin-link",
      imageSrc: "/nginlink.png",
    },
    {
      title: "フロントエンド",
      year: "2024",
      projectName: "DevQuest",
      projectLink: "https://github.com/SomaTakata/dev-quest",
      imageSrc: "/devquest.png",
    },
    {
      title: "フロントエンド",
      year: "2024",
      projectName: "都道府県人口推移",
      projectLink: "https://github.com/SomaTakata/yumemi-coding-test",
      imageSrc: "/population.png",
    },
    {
      title: "フロントエンド",
      year: "2024",
      projectName: "NginLink",
      projectLink: "https://github.com/SomaTakata/ngin-link",
      imageSrc: "/nginlink.png",
    },
    {
      title: "フロントエンド",
      year: "2024",
      projectName: "DevQuest",
      projectLink: "https://github.com/SomaTakata/dev-quest",
      imageSrc: "/devquest.png",
    },
    {
      title: "フロントエンド",
      year: "2024",
      projectName: "都道府県人口推移",
      projectLink: "https://github.com/SomaTakata/yumemi-coding-test",
      imageSrc: "/population.png",
    },
  ];

  return (
    <div className="relative h-full overflow-x-hidden">
      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]} // 使用するモジュールを指定
        effect={"coverflow"} // カバーフロー効果を適用
        loop={true} // 無限ループ
        centeredSlides={true} // 中央寄せにする
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        grabCursor={true} // カーソルを掴むような見た目にする
        coverflowEffect={{
          rotate: 0,
          stretch: 5,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        // slidesPerViewはデバイスに応じて変わる
        breakpoints={{
          // モバイル（640px以下）
          640: {
            slidesPerView: 1,
          },
          // タブレット（768px以上）
          768: {
            slidesPerView: 2,
          },
          // デスクトップ（1024px以上）
          1024: {
            slidesPerView: 3,
          },
        }}
        className="relative"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* カードの画像部分 */}
            <Link
              href={slide.projectLink}
              className="flex aspect-square items-center justify-center rounded-lg border-2 border-black bg-white p-10"
            >
              <div className="relative size-full">
                <Image
                  src={slide.imageSrc} // 画像ソース
                  alt={`${slide.title} - ${slide.projectName}`} // 代替テキスト
                  fill // `fill`を使って親要素いっぱいに広がる
                  className="rounded-lg object-contain" // 画像を親要素に収めてスタイルを適用
                />
              </div>
            </Link>
            <div className="w-full flex justify-center text-xl font-bold pb-12 pt-4">
              <p>{slide.projectName}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* カスタムナビゲーションボタン（左: Prev） */}
      <div className="absolute inset-y-0 left-0 z-10 hidden items-center lg:flex">
        <button className="swiper-button-prev transition-all duration-300 hover:scale-125">
          {/* ここにアイコンを追加 */}
        </button>
      </div>

      {/* カスタムナビゲーションボタン（右: Next） */}
      <div className="absolute inset-y-0 right-0 z-10 flex hidden items-center lg:flex">
        <button className="swiper-button-next transition-all duration-300 hover:scale-125">
          {/* ここにアイコンを追加 */}
        </button>
      </div>

      {/* ページネーション */}
      <div className="swiper-pagination absolute bottom-4 z-10 flex justify-center lg:flex"></div>
    </div>
  );
};

export default ImageSlider;
