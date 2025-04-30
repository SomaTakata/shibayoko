import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/feature/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/client/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			roboto: [
  				'var(--font-roboto)'
  			],
  			notoJP: [
  				'var(--font-notojp)'
  			]
  		},
  		animation: {
  			marquee: 'marquee 30s linear infinite',
  			marquee2: 'marquee2 30s linear infinite',
  			slide: 'slide 3s infinite ease-in-out',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		textStrokeWidth: {
  			'1': '1px',
  			'2': '2px'
  		},
  		textStrokeColor: {
  			black: '#000',
  			white: '#fff'
  		},
  		keyframes: {
  			marquee: {
  				'0%': {
  					transform: 'translateX(0%)'
  				},
  				'100%': {
  					transform: 'translateX(-100%)'
  				}
  			},
  			marquee2: {
  				'0%': {
  					transform: 'translateX(100%)'
  				},
  				'100%': {
  					transform: 'translateX(0%)'
  				}
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
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  variants: {},
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        ".text-stroke": {
          "-webkit-text-stroke": "2px black",
          "text-stroke": "2px black",
        },
        ".text-stroke-1": {
          "-webkit-text-stroke": "1px black",
          "text-stroke": "1px black",
        },
        ".text-stroke-white": {
          "-webkit-text-stroke": "1px white",
          "text-stroke": "1px white",
        },
      };
      addUtilities(newUtilities);
    },
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        ".hs": {
          display: "grid",
          gap: "10px",
          "grid-template-columns": "repeat(6, calc(50% - 40px))",
          "grid-template-rows": "minmax(150px, 1fr)",
          padding: "0 20px",
        },
      };
      addUtilities(newUtilities);
    },
      require("tailwindcss-animate")
],
};

export default config;
