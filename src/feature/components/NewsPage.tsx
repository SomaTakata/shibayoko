import NewsPageCard from "./NewsPageCard";

const newsItems = [
  {
    date: "2024.9.17",
    description: "LayerXサマーインターン体験記を投稿しました！",
    imageSrc: "/news2.png",
    href: "https://zenn.dev/soma_takata/articles/3a5ad127b57e04",
  },
  {
    date: "2024.7.26",
    description:
      "ハウテレビジョンでの3ヶ月のエンジニアインターン体験記投稿しました！",
    imageSrc: "/news1.png",
    href: "https://blog.howtelevision.co.jp/entry/2024/07/26/174358",
  },
];

const NewsPage = () => (
  <section className="flex min-h-screen  bg-white flex-col gap-6  px-5 py-14 pb-20  sm:gap-12 sm:px-10 md:px-14 md:py-32 lg:gap-16 lg:border-t-[3px]">
    <h2 className="font-roboto text-4xl font-black tracking-widest text-white text-stroke sm:text-5xl">
      NEWS
    </h2>

    <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
      {newsItems.map((news, index) => (
        <NewsPageCard
          key={index}
          date={news.date}
          description={news.description}
          imageSrc={news.imageSrc}
          href={news.href}
        />
      ))}
    </div>
  </section>
);

export default NewsPage;
