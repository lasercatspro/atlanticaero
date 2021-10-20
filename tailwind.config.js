module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    theme: {
      extend: {
        typography: {
          DEFAULT: {
            css: {
              product: {
                color: '#fff',
                textDecoration: 'none'
              },
            },
          },
        }
      },
    },  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
