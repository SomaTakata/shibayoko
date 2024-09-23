import EastIcon from '@mui/icons-material/East';

const ViewAll = () => (
  <div className="mt-8 flex flex-col items-center justify-center">
    <div className="flex w-fit flex-col">
      <div className="flex items-center gap-20">
        <p className="font-roboto text-2xl font-bold">VIEW ALL</p>
        <EastIcon className="size-8" />
      </div>

      {/* アニメーション付きのボーダー */}
      <div className="relative mt-2 h-[3px] w-full overflow-hidden bg-gray-300">
        <div className="absolute left-0 top-0 h-[3px] w-full animate-slide bg-black"></div>
      </div>
    </div>
  </div>
);

export default ViewAll;
