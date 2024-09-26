const timelineData = [
  {
    date: "2020 4月",
    title: "芝浦工業大学 入学",
    description: null,
  },
  {
    date: "2023 5月",
    title: "株式会社リクルート",
    description: "フロントエンド開発 (10か月)",
  },
  {
    date: "2023 11月",
    title: "株式会社MichibikuGroup",
    description: "フロントエンド開発 (2か月)",
  },
  {
    date: "2024 3月",
    title: "TechNova創設",
    description: null,
  },
  {
    date: "2024 4月",
    title: "株式会社ハウテレビジョン",
    description: "フロントエンド開発 (3か月)",
  },
  {
    date: "2024 9月",
    title: "株式会社LayerX",
    description: "フルスタック開発 (2週間)",
  },
];

const TimelineSection = () => (
  <div className="w-full flex flex-col justify-center items-center py-8">
    <h2 className="text-2xl font-bold text-center mb-10 sm:mb-12 w-fit">
      これまでの経歴
    </h2>
    <div className="relative w-fit max-w-xl">
      <div className="absolute w-0.5 h-full bg-gray-300 left-4"></div>

      {timelineData.map((item) => (
        <div key={item.date} className="mb-10 flex items-center">
          <div className="relative">
            <div
              className="w-3.5 h-3.5 bg-black rounded-full absolute left-2.5 -top-1"
              aria-label={`${item.date}のタイムラインポイント`}
            ></div>
          </div>
          <div className="ml-10">
            <p className="text-sm text-gray-500">{item.date}</p>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            {item.description && (
              <p className="text-gray-700">{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TimelineSection;
