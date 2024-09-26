const MarqueeText = () => {
  const textItems = ["芝浦工業大学 26卒", "プログラミングサークルTechNova代表"];

  // テキストを指定された回数だけ繰り返す
  const renderTextItems = (keyPrefix: string, repeat: number) =>
    Array(repeat)
      .fill(textItems)
      .flat()
      .map((text, index) => (
        <span
          key={`${keyPrefix}-${index}`}
          className="mx-4 text-[10px] font-black tracking-widest"
        >
          {text}
        </span>
      ));

  return (
    <div className="relative flex overflow-x-hidden border-b-2 border-black lg:border-b-[3px]">
      {/* 最初のマルケ */}
      <div className="flex animate-marquee whitespace-nowrap py-[3px]">
        {renderTextItems("marquee", 4)} {/* 4回繰り返す */}
      </div>

      {/* 2番目のマルケ */}
      <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap py-[3px]">
        {renderTextItems("marquee2", 4)} {/* 4回繰り返す */}
      </div>
    </div>
  );
};

export default MarqueeText;
