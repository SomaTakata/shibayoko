import type { Config } from "tailwindcss";
import { PluginAPI } from 'tailwindcss/types/config';


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/feature/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        notoJP: ["var(--font-notojp)"],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        marquee2: 'marquee2 30s linear infinite',
        slide: 'slide 3s infinite ease-in-out',  
      },
      textStrokeWidth: {  
        '1': '1px',
        '2': '2px',
      },
      textStrokeColor: {  
        black: '#000',
        white: '#fff',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slide: { 
          '0%': {
            transform: 'translateX(-100%)'
          },
          '50%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(100%)'
          }
        },
      },
    },
  },
  variants: {},
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '2px black',
          'text-stroke': '2px black',
        },
        '.text-stroke-1': {
          '-webkit-text-stroke': '1px black',
          'text-stroke': '1px black',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke': '1px white',
          'text-stroke': '1px white',
        },
      };
      addUtilities(newUtilities);
    },
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        '.hs': {
          display: 'grid',
          gap: '10px',
          'grid-template-columns': 'repeat(6, calc(50% - 40px))',
          'grid-template-rows': 'minmax(150px, 1fr)',
          padding: '0 20px',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

export default config;
