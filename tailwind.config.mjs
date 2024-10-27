/** @type {import('tailwindcss').Config} */

/*
	 Custom container
	 Create custom container: https://stackoverflow.com/questions/65903737/configure-container-max-width-at-specific-breakpoints-tailwindcss
*/

/*
	 Custom color
	 Auto color shades: https://www.tailwindshades.com/
	 You can find the default colors here: ./node_modules/tailwindcss/lib/public/colors.js
	 Here it's how to import them the default config: https://tailwindcss.com/docs/customizing-colors#using-the-default-colors
*/

const colors = require('tailwindcss/colors')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans:[ "Sora", "sans-serif"],
		},
		colors:{
			black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
      gray: {
				DEFAULT: '#ADB5C3',
				50: '#FDFDFD',
				100: '#F4F5F7',
				200: '#E2E5EA',
				300: '#D0D5DD',
				400: '#BFC5D0',
				500: '#ADB5C3',
				600: '#8490A5',
				700: '#5F6C82',
				800: '#414A59',
				900: '#232730',
				950: '#14161B'
			},
			primary: {
				DEFAULT: '#9473F6',
				50: '#F7F4FE',
				100: '#ECE6FD',
				200: '#D6C9FC',
				300: '#C0ADFA',
				400: '#AA90F8',
				500: '#9473F6',
				600: '#8D69F5',
				700: '#8560F5',
				800: '#7E56F4',
				900: '#774DF4',
				950: '#7348F3'
			},
		},
		screens: {
      xs:'390px',	// @media (min-width: 400px) { ... }
      sm:'640px',	// @media (min-width: 640px) { ... }
			md:'768px',	// @media (min-width: 768px) { ... }
			lg:'1024px',	// @media (min-width: 1024px) { ... }
			xl:'1280px',	// @media (min-width: 1280px) { ... }
			'2xl':'1536px',	// @media (min-width: 1536px) { ... }
    },
		extend: {
			spacing: {
				'btn': '3.25rem',				// Button Height;
				'col1': '4.5rem', 			// 72px/16 = 4.5rem 
				'col2': '10.4375rem', 	// 167px/16 = 10.4375rem
				'col3': '16.375rem', 		// 262px/16 = 16.375rem
				'col4': '22.3125rem', 	// 357px/16 = 22.3125rem
				'col5': '28.25rem', 		// 453px/16 = 28.25rem
				'col6': '34.0625rem', 	// 548px/16 = 34.0625rem
				'col7': '40.0625rem', 	// 643px/16 = 40.0625rem
				'col8': '46.1875rem', 	// 739/16 = 46.1875rem
				'col9': '52.125rem', 		// 834/16 = 52.125rem
				'col10': '64.0625rem', 	// 929/16 = 58.0625rem
				'col10': '64.0625rem', 	// 1025/16 = 64.0625rem
				'col11': '70rem', 			// 1120/16 = 70rem
			},	
			transitionProperty: {
        'btn': 'color, background-color, border-color, text-decoration-color, fill, stroke, box-shadow',
      },
		},
	},
	corePlugins: {
    container: false
  },
	plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '40rem', // 640px / 16 = 40rem
          },
          '@screen md': {
            maxWidth: '48rem', // 768px / 16 = 48rem
          },
          '@screen lg': {
            maxWidth: '64rem', // 1024px / 16 = 64rem
          },
          '@screen xl': {
            maxWidth: '70rem', // 1120px / 16 = 70rem
          },
        }
      })
    }
  ]
}
