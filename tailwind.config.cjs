const defaultTheme = require('tailwindcss/defaultTheme');

function convertToRGB(hexWithHash) {
	var hexNoHash = hexWithHash.replace(/#(\S)/g, '$1');
	var rbgArray = hexNoHash.match(/.{1,2}/g);
	var rgbNoCommas = [parseInt(rbgArray[0], 16), parseInt(rbgArray[1], 16), parseInt(rbgArray[2], 16)];
	return `${rgbNoCommas[0]},${rgbNoCommas[1]},${rgbNoCommas[2]}`;
}

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				accent: 'var(--accent)',
			},
			textColor: {
				default: 'var(--text)',
				offset: 'var(--text-offset)',
			},
			backgroundColor: {
				default: 'var(--background)',
				primary: 'var(--background-primary)',
				'default-glass': 'var(--background-transparent)',
				offset: 'var(--background-offset)',
				'offset-glass': 'var(--background-offset-transparent)',
			},
			borderColor: {
				default: 'var(--border)',
			},
			fontFamily: {
				sans: ["'InterVariable'", ...defaultTheme.fontFamily.sans],
			},
		},
		pallet: {
			light: {
				accent: '#0900A8',
				primary: '#FFFFFF',
				secondary: '#000000',
				text: '#1D1D1F',
				textOffset: '#86868b',
				background: '#F5F5F7',
				backgroundOffset: '#FAFAFA',
				backgroundInvert: '#111111',
				border: '#111827',
			},
			dark: {
				accent: '#1A10B1',
				primary: '#000000',
				secondary: '#FFFFFF',
				text: '#FFFFFF',
				textOffset: '#86868B',
				background: '#161617',
				backgroundOffset: '#111111',
				backgroundInvert: '#FAFAFA',
				border: '#f1f5f9',
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('tailwindcss-fluid-type')],
	darkMode: 'media',
};
