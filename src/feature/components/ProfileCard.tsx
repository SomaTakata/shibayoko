import Image from 'next/image';
import EastIcon from '@mui/icons-material/East';
import ViewAll from './ViewAll'; // ViewAllコンポーネントをインポート

const ProfileCard = () => {
  return (
    <div className="border-2 border-black rounded-xl p-10 max-w-sm mx-auto bg-white">
      {/* イラストの部分 */}
      <div className="flex justify-center mb-4">
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-black">
          <Image
            src="/avatar.png" 
            alt="Profile Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* プロフィール情報 */}
      <div className="text-center">
        <h2 className="text-4xl font-roboto font-bold text-white text-stroke-1 tracking-widest mt-3">PROFILE</h2>
        <p className="text-sm font-roboto font-bold text-black mt-3">Web Engineer</p>
        <h1 className="text-3xl font-roboto font-extrabold mt-1">SOMA TAKATA</h1>
        <p className="text-sm text-start text-black font-roboto font-semibold mt-3">
          HELLO WORLD, This is the portfolio site of Soma Takata, a Japanese man web engineer based in Tokyo.
          I am a student of SIT. 
        </p>
      </div>

      <ViewAll text="View More" position="center" width="w-full" />
    </div>
  );
};

export default ProfileCard;
