"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import Link from "next/link";

const ImageSlider = () => {
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
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        effect={"coverflow"}
        loop={true}
        centeredSlides={true}
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
        grabCursor={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 5,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="relative"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link
              href={slide.projectLink}
              target="_blank"
              className="flex aspect-square items-center justify-center rounded-lg border-2 border-black bg-white p-10"
            >
              <div className="relative w-full h-full">
                <Image
                  src={slide.imageSrc}
                  alt={`${slide.title} - ${slide.projectName}`}
                  fill
                  className="rounded-lg object-contain"
                />
              </div>
            </Link>
            <div className="w-full flex justify-center text-xl font-bold pb-12 pt-4">
              <p>{slide.projectName}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-y-0 left-0 z-10 hidden items-center lg:flex">
        <button
          className="swiper-button-prev transition-all duration-300 hover:scale-125"
          aria-label="Previous slide"
        ></button>
      </div>

      <div className="absolute inset-y-0 right-0 z-10 hidden items-center lg:flex">
        <button
          className="swiper-button-next transition-all duration-300 hover:scale-125"
          aria-label="Next slide"
        ></button>
      </div>

      <div className="swiper-pagination absolute bottom-4 z-10 flex justify-center lg:flex"></div>
    </div>
  );
};

export default ImageSlider;
