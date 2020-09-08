// See https://tailwindcss.com/docs/configuration for details
module.exports = {
    purge: ["./src/**/*.js"],
    theme: {
        extend: {
            colors: {
                'kontax-white': '#f4f4f4',
                'kontax-secondary-text': '#515151',
                gray: {
                    '100': '#f5f5f5',
                    '200': '#eeeeee',
                    '300': '#e3e3e3',
                    '400': '#636366',
                    '500': '#48484A',
                    '600': '#757575',
                    '700': '#3A3A3C',
                    '800': '#2C2C2E',
                    '900': '#1C1C1E',
                },
            }
        }
    },
    variants: {},
    // https://github.com/tailwindcss/custom-forms
    plugins: [require("@tailwindcss/custom-forms")],
};
