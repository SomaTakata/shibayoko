const MarqueeText = () => {
    const textItems = [
      "芝浦工業大学 26卒",
      "プログラミングサークルTechNova代表"
    ];
  
    return (
      <div className="relative flex overflow-x-hidden border-b-[3px] border-black">
        <div className="py-[3px] animate-marquee whitespace-nowrap flex">
          {textItems.map((text, index) => (
            <span key={index} className="text-[10px] mx-4 tracking-widest font-black">
              {text}
            </span>
          ))}
          {textItems.map((text, index) => (
            <span key={`duplicate-${index}`} className="text-[10px] mx-4 tracking-widest font-black">
              {text}
            </span>
          ))}
          {textItems.map((text, index) => (
            <span key={index} className="text-[10px] mx-4 tracking-widest font-black">
              {text}
            </span>
          ))}
          {textItems.map((text, index) => (
            <span key={`duplicate-${index}`} className="text-[10px] mx-4 tracking-widest font-black">
              {text}
            </span>
          ))}
        </div>
  
        <div className="absolute top-0 py-[3px] animate-marquee2 whitespace-nowrap flex">
          {textItems.map((text, index) => (
            <span key={`scroll-${index}`} className="text-[10px] mx-4 tracking-widest font-black">
              {text}
            </span>
          ))}
          {textItems.map((text, index) => (
            <span key={`scroll-duplicate-${index}`} className="text-[10px] mx-4 tracking-widest font-black">
              {text}
            </span>
          ))}
          {textItems.map((text, index) => (
            <span key={`scroll-${index}`} className="text-[10px] mx-4 tracking-widest font-black">
              {text}
            </span>
          ))}
          {textItems.map((text, index) => (
            <span key={`scroll-duplicate-${index}`} className="text-[10px] mx-4 tracking-widest font-black">
              {text}
            </span>
          ))}
        </div>
      </div>
    );
  };
  
  export default MarqueeText;
  