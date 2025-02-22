module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'matrix-0': 'matrix-0 20s linear infinite',
        'matrix-1': 'matrix-1 25s linear infinite',
        'matrix-2': 'matrix-2 22s linear infinite',
        'matrix-3': 'matrix-3 28s linear infinite',
        'matrix-4': 'matrix-4 24s linear infinite',
      },
      keyframes: {
        'matrix-0': {
          'from': { transform: 'translateY(-100%)' },
          'to': { transform: 'translateY(100%)' }
        },
        'matrix-1': {
          'from': { transform: 'translateY(-150%)' },
          'to': { transform: 'translateY(150%)' }
        },
        'matrix-2': {
          'from': { transform: 'translateY(-120%)' },
          'to': { transform: 'translateY(120%)' }
        },
        'matrix-3': {
          'from': { transform: 'translateY(-180%)' },
          'to': { transform: 'translateY(180%)' }
        },
        'matrix-4': {
          'from': { transform: 'translateY(-140%)' },
          'to': { transform: 'translateY(140%)' }
        },
      },
    },
  },
  plugins: [],
}