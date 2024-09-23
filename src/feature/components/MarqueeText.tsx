const MarqueeText = () => {
    const textItems = [
      "芝浦工業大学 26卒",
      "プログラミングサークルTechNova代表"
    ];
  
    return (
      <div className="relative flex overflow-x-hidden border-b-[3px] border-black">
        <div className="flex animate-marquee whitespace-nowrap py-[3px]">
          {textItems.map((text, index) => (
            <span key={index} className="mx-4 text-[10px] font-black tracking-widest">
              {text}
            </span>
          ))}
          {textItems.map((text, index) => (
            <span key={`duplicate-${index}`} className="mx-4 text-[10px] font-black tracking-widest">
              {text}
            </span>
          ))}
          {textItems.map((text, index) => (
            <span key={index} className="mx-4 text-[10px] font-black tracking-widest">
              {text}
            </span>
          ))}
          {textItems.map((text, index) => (
            <span key={`duplicate-${index}`} className="mx-4 text-[10px] font-black tracking-widest">
              {text}
            </span>
          ))}
        </div>
  
        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap py-[3px]">
          {textItems.map((text, index) => (
            <span key={`scroll-${index}`} className="mx-4 text-[10px] font-black tracking-widest">
              {text}
            </span>
          ))}
          {textItems.map((text, index) => (
            <span key={`scroll-duplicate-${index}`} className="mx-4 text-[10px] font-black tracking-widest">
              {text}
            </span>
          ))}
          {textItems.map((text, index) => (
            <span key={`scroll-${index}`} className="mx-4 text-[10px] font-black tracking-widest">
              {text}
            </span>
          ))}
          {textItems.map((text, index) => (
            <span key={`scroll-duplicate-${index}`} className="mx-4 text-[10px] font-black tracking-widest">
              {text}
            </span>
          ))}
        </div>
      </div>
    );
  };
  
  export default MarqueeText;
  