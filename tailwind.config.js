module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        fontFamily: {
           
        },
        colors: {
            'transparent': 'transparent',
            'current': 'currentColor',
            'primary': {
                light: '#6165b8',
                DEFAULT: '#4f54b0',
                dark: '#393c84'
            },
            'secondary': '#47A6A1',
            'surface': {
                light: '#3b3d46',
                DEFAULT: '#252831',
                dark: '#1e2027'
            },
            'on-surface': {
                light: '#D3CFBF',
                DEFAULT: '#D3CFBF',
                dark: '#797770'
            },
            'button-secondary': {
                light: '#444748',
                DEFAULT: '#2F3234',
                dark: '#2a2d2f'
            },
            'label': {
                DEFAULT: 'rgba(79, 84, 176, 0.3)'
            },
            'label-secondary': {
                DEFAULT: 'rgba(71, 166, 161, 0.3)'
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
