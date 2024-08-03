/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: 
  {
    screens: {
    xsm: "320px",
    
    xs: "375px",

    xss: "414px",

    iphone12: "390px",

    iphone14: "430px",

    pixel7: "412px",
    
    gals8: "360px",

    surfaceduo: "540px",

    galaxyz: "344px",

    mxs: "425px",

    sm: "640px",
    // => @media (min-width: 640px) { ... }

    md: "768px",
    // => @media (min-width: 768px) { ... }

    lg: "1024px",
    // => @media (min-width: 1024px) { ... }

    xl: "1440px",
    // => @media (min-width: 1280px) { ... }

    "2xl": "2560px",
    // => @media (min-width: 2560px) { ... }
  },
    extend: {},
  },
  plugins: [],
}
