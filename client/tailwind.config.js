module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#224778",
          
          "secondary": "#91d1e8",
                   
          "accent": "#93c5fd",
                   
          "neutral": "#d1d5db",
                   
          "base-100": "#FFFFFF",
                   
          "info": "#bae6fd",
                   
          "success": "#86efac",
                   
          "warning": "#fde68a",
                   
          "error": "#Fecaca",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
}