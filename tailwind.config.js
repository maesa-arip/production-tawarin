const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
                inter: ['Inter', 'sans-serif'],
            },
            gridTemplateRows: {
                '[auto,auto,1fr]': 'auto auto 1fr',
              },
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
        // require('@tailwindcss/line-clamp'),
        require('@tailwindcss/typography'),
    ],
};
