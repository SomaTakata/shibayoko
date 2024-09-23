import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';

const Footer = () => {
  const [mode, setMode] = useState<'light' | 'dark' | 'system'>('light');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMode = (newMode: 'light' | 'dark' | 'system') => {
    setMode(newMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <footer className={`h-16 fixed lg:relative border-t-[2px] lg:border-t-[3px] border-black bottom-0 right-0 left-0 lg:h-[100px] flex items-center justify-between bg-white`}>
      {/* 小画面用のモード切り替えとメニュー */}
      <div className="w-full h-16 flex lg:hidden relative">
        {/* モード切り替えトグルスイッチ */}
        <div className="w-1/2 border-r-[2px] gap-4 border-black flex items-center justify-center">
          <div className="flex gap-4">
            <div
              className={`cursor-pointer p-2 rounded-full transition-all duration-300 transform ${
                mode === 'light' ? 'bg-yellow-500 text-white scale-90' : 'scale-75 hover:scale-100'
              }`}
              onClick={() => toggleMode('light')}
            >
              <WbSunnyIcon className="w-8 h-8" />
            </div>
            <div
              className={`cursor-pointer p-2 rounded-full transition-all duration-300 transform ${
                mode === 'dark' ? 'bg-gray-800 text-white scale-90' : 'scale-75 hover:scale-100'
              }`}
              onClick={() => toggleMode('dark')}
            >
              <DarkModeIcon className="w-8 h-8" />
            </div>
            <div
              className={`cursor-pointer p-2 rounded-full transition-all duration-300 transform ${
                mode === 'system' ? 'bg-blue-500 text-white scale-90' : 'scale-75 hover:scale-100'
              }`}
              onClick={() => toggleMode('system')}
            >
              <LaptopChromebookIcon className="w-8 h-8" />
            </div>
          </div>
        </div>

        {/* メニュー開閉ボタン */}
        <div
          className={`w-1/2 flex items-center justify-center gap-3 cursor-pointer duration-300 bg-transparent relative z-10`}
          onClick={toggleMenu}
        >
          <span className="relative z-20 flex items-center gap-3">
            {menuOpen ? (
              <>
                <CloseIcon className="w-7 h-7 text-white" />
                <p className="font-roboto text-lg font-bold text-white">CLOSE</p>
              </>
            ) : (
              <>
                <MenuIcon className="w-7 h-7 text-black" />
                <p className="font-roboto text-lg font-bold text-black">MENU</p>
              </>
            )}
          </span>

          {/* 背景アニメーションのための before 疑似要素 */}
          <div
            className={`absolute inset-0 -z-1 overflow-hidden before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-black before:transition-transform before:duration-300 before:transform ${
              menuOpen ? 'before:translate-y-0' : 'before:-translate-y-full'
            }`}
          ></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
