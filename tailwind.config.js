// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        gray: {
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#8E8E93',
          '400': '#636366',
          '500': '#48484A',
          '600': '#757575',
          '700': '#3A3A3C',
          '800': '#2C2C2E',
          '900': '#1C1C1E',
        }
      }
    }
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
