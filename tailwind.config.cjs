/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'tesla-car': "url('/src/assets/tesla.png')",
      },
      keyframes: {
        slideInEllipticBottomFwd: {
          '0%': {
            transform: 'translateY(600px) rotateX(30deg) scale(0)',
            transformOrigin: '50% 100%',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0) rotateX(0) scale(1)',
            transformOrigin: '50% -1400px',
            opacity: '1',
          },
        },
        bounceInBottom: {
          '0%': {
            transform: 'translateY(500px)',
            animationTimingFunction: 'ease-in',
            opacity: '0',
          },
          '38%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'ease-out',
            opacity: '1',
          },
          '55%': {
            transform: 'translateY(65px)',
            animationTimingFunction: 'ease-in',
          },
          '72%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'ease-in',
          },
          '81%': {
            transform: 'translateY(28px)',
            animationTimingFunction: 'ease-in',
          },
          '90%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'ease-out',
          },
          '95%': {
            transform: 'translateY(8px)',
            animationTimingFunction: 'ease-in',
          },
          '100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'ease-out',
          },
        },
        bounceInTop: {
          '0%': {
            transform: 'translateY(-500px)',
            animationTimingFunction: 'ease-in',
            opacity: '0',
          },
          '38%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'ease-out',
            opacity: '1',
          },
          '55%': {
            transform: 'translateY(-65px)',
            animationTimingFunction: 'ease-in',
          },
          '72%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'ease-out',
          },
          '81%': {
            transform: 'translateY(-28px)',
          },
          '90%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'ease-out',
          },
          '95%': {
            transform: 'translateY(-8px)',
            animationTimingFunction: 'ease-in',
          },
          '100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'ease-in',
          },
        },

        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: 1,
          },
        },
        focusInContractBck: {
          '0%': {
            letterSpacing: '1em',
            transform: 'translateZ(300px)',
            filter: 'blur(12px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateZ(12px)',
            filter: 'blur(0)',
            opacity: '1',
          },
        },
        slitInHorizontal: {
          '0%': {
            transform: 'translateZ(-800px) rotateX(90deg)',
            opacity: '0',
          },
          '54%': {
            transform: 'translateZ(-160px) rotateX(87deg)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateZ(0) rotateX(0)',
          },
        },
      },
      animation: {
        bounceInTop: 'bounceInTop 2.3s both',
        bounceInBottom: 'bounceInBottom 2.3s both',
        car: 'slideInEllipticBottomFwd 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        title:
          'focusInContractBck 2.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        header: 'fadeIn 2.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        teslaStats: 'slitInHorizontal 1.5s 2s ease-out both',
        tireRotation: 'spin 1s linear reverse infinite',
      },
    },
  },
  plugins: [],
};
