import EastIcon from '@mui/icons-material/East';

interface ViewAllProps {
  text: string;
  position?: 'start' | 'center' | 'end'; // justify-start, justify-center, justify-end のいずれかを選択
  width?: string; // 幅を調整するための新しいプロップ
}

const ViewAll = ({ text, position = 'center', width = 'w-full' }: ViewAllProps) => {
  // Tailwindのクラスを動的に生成
  const alignmentClass = position === 'start' 
    ? 'items-start' 
    : position === 'end'
    ? 'items-end'
    : 'items-center'; // デフォルトでcenter

  return (
    <div className={`mt-8 2-full flex flex-col ${alignmentClass} justify-center`}>
      <div className={`flex  ${width} flex-col`}>
        <div className={`flex ${width} items-center justify-between `}>
          <p className="font-roboto text-xl sm:text-2xl font-bold">{text}</p>
          <EastIcon className="w-8 h-8" />
        </div>

        {/* アニメーション付きのボーダー */}
        <div className="relative mt-2 h-[3px] w-full overflow-hidden bg-gray-300">
          <div className="absolute left-0 top-0 h-[3px] w-full animate-slide bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
