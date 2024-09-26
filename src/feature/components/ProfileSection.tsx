"use client";
import { useEffect, useRef } from "react";
import ProfileCard from "./ProfileCard";

const ProfileSection = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const cardElement = cardRef.current;
    if (!cardElement) return;

    const section = cardElement.parentElement;
    if (!section) return;

    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // スクロール量が画面中央にかかる時にカードが中央に来るように設定
    if (sectionTop < windowHeight && sectionTop > -windowHeight) {
      const scrollAmount = windowHeight - sectionTop; // スクロール量
      const translateY = (scrollAmount - windowHeight / 2 - 400) * 0.5; // 中央に基づいて調整

      // 左に傾き → 右に傾くアニメーション
      const rotate =
        scrollAmount < windowHeight / 2
          ? -15 + (scrollAmount / (windowHeight / 2)) * 30 // 左(-15度)から右(15度)に回転
          : 15 - ((scrollAmount - windowHeight / 2) / (windowHeight / 2)) * 30; // 右(15度)から中央に戻る

      cardElement.style.transform = `translateY(${translateY}px) rotate(${rotate}deg)`;
      cardElement.style.opacity = "1"; // 徐々に表示される
    } else {
      cardElement.style.transform = "translateY(-400px) rotate(-15deg)"; // 初期は左に傾いて非表示
      cardElement.style.opacity = "0";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="w-full overflow-x-hidden">
      <div className="flex h-[750px] items-center justify-center bg-gray-100">
        <div
          ref={cardRef}
          className="transform transition-all duration-500 ease-in-out opacity-0"
        >
          <ProfileCard />
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
