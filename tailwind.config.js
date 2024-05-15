/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				start: '#ff0000',
				mid: '#5c0505',
				end: '#000000',
			},
			backgroundColor: {
				'radial-gradiente':
					'radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(92,5,5,1) 50%, rgba(0,0,0,1) 100%);',
				'red-bg': 'rgb(255,0,0)',
			},
		},
	},
	plugins: [],
};
