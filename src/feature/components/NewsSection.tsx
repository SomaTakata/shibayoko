import ViewAll from "./ViewAll";
import NewsCard from "./NewsCard";

const newsItems = [
  {
    date: "2024.7.26",
    description:
      "ハウテレビジョンでの3ヶ月のエンジニアインターン体験記投稿しました！",
    imageSrc: "/news1.png",
    href: "https://zenn.dev/soma_takata/articles/3a5ad127b57e04",
  },
  {
    date: "2024.9.17",
    description: "LayerXサマーインターン体験記を投稿しました！",
    imageSrc: "/news2.png",
    href: "https://zenn.dev/soma_takata/articles/3a5ad127b57e04",
  },
];

const NewsSection = () => {
  return (
    <section className="flex z-10 bg-white flex-col gap-6 border-b-2  border-black px-5 py-14 pb-20   sm:gap-12 sm:px-10 sm:py-14 md:px-14 md:py-32 lg:gap-16 lg:border-b-[3px]">
      <h2 className="font-roboto text-4xl font-black tracking-widest text-white text-stroke sm:text-5xl">
        NEWS
      </h2>
      <div className="flex w-full flex-col border-t-2  border-black lg:border-t-[3px]">
        {newsItems.map((news, index) => (
          <NewsCard
            key={index}
            date={news.date}
            description={news.description}
            imageSrc={news.imageSrc}
            href={news.href}
          />
        ))}
      </div>

      <ViewAll text="VIEW ALL NEWS" position="end" width="w-64" href="/news" />
    </section>
  );
};

export default NewsSection;
