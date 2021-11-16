module.exports = {
	mode: 'jit',
	purge: [ './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}' ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'brown-darker': '#482525',
				'brow-lighter': '#6D4747',
				'light-dark': 'rgba(0,0,0,0.3)',
				'lighter-dark': 'rgba(0,0,0,0.1)'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
