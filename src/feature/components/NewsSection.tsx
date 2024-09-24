import ViewAll from './ViewAll'; 
import NewsCard from './NewsCard'; 

const newsItems = [
  {
    date: '2024.7.10',
    description: 'WEBサイトをリニューアル致しました！',
    imageSrc: '/news.png',
  },
  {
    date: '2024.7.11',
    description: '新機能を追加しました！',
    imageSrc: '/news.png',
  },
];

const NewsSection = () => {
  return (
    <section className="flex flex-col gap-6 border-b-2  border-black px-5 py-14 pb-20   sm:gap-12 sm:px-10 sm:py-14 md:px-14 md:py-32 lg:gap-16 lg:border-b-[3px]">
        <h2 className="font-roboto text-4xl font-black tracking-widest text-white text-stroke sm:text-5xl">NEWS</h2>
      <div className="flex w-full flex-col border-t-2  border-black lg:border-t-[3px]">
        {newsItems.map((news, index) => (
          <NewsCard
            key={index}
            date={news.date}
            description={news.description}
            imageSrc={news.imageSrc}
          />
        ))}
      </div>

      <ViewAll text="VIEW ALL NEWS" position="end" width='w-64'/>
    </section>
  );
};

export default NewsSection;
