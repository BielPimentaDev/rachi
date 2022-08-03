/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				contact: 'url(./src/assets/contact.png)',
			},
		},
		fontFamily: {
			inter: 'Inter',
			sora: 'Sora',
		},
		colors: {
			transparent: 'rgba(0,0,0,0)',
			blue: '#0F9AFE',
			white: {
				0: '#FFFFFF',
				400: '#EFF8FF',
				200: '#EFF8FF',
			},
			gray: {
				0: '#6E7275',
				light: '#DBDBDB',
				200: '#293145',
			},
		},
	},

	plugins: [],
};
