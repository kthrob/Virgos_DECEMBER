const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(var(--color-primary) / <alpha-value>)',
				secondary: 'var(--color-secondary)',
			},
			textColor: {
				default: 'rgb(var(--color-text))',
				offset: 'var(--color-text-offset)',
			},
			backgroundColor: {
				default: 'rgb(var(--color-background) / <alpha-value>)',
				offset: 'rgb(var(--color-background-offset) / <alpha-value>)',
			},
			borderColor: {
				default: 'var(--color-border)',
			},
			fontFamily: {
				sans: ["'InterVariable'", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('tailwindcss-fluid-type')],
	darkMode: 'media',
};
