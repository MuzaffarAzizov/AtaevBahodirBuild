/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React component files
  ],
  theme: {
    extend: {
      colors: {
        customBg: "#fce8bd",
        blackColor: "#000",
      },
      fontFamily: {
        sfPro: ['"SF Pro"', "sans-serif"],
      },
      fontSize: {
        22: "22px", // Add 22px font size shortcut
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".custom-style": {
          display: "block",
          fontWeight: "274", // Custom font weight
          opacity: ".6",
          paddingBottom: "5px",
          position: "relative",
        },
        ".card": {
          backgroundColor: "#2c3442",
          border: "1px solid #000",
          borderRadius: "15px",
          cursor: "pointer",
          display: "flex",
          margin: "15px",
          transition: "all .5s ease-in-out",
        },
        ".card-size": {
          height: "179px",
          width: "570px",
        },
        ".image-full": {
          width: "100%",
          height: "350px",
          "object-fit": "cover",
        },
      });
    },
  ],
};
