const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    //these was before in purge[]
    // './storage/framework/views/*.php', './resources/views/**/*.blade.php',
    purge: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                blue: {
                    dark: '#00295D',
                    gray: '#234775',
                    darkGray: '#233154',
                    hrBg: '#4F66A5'
                },
                red: {
                    dark: '#BC3652'
                }
            },
            backgroundImage: theme => ({
                'bgs-img': "url('https://wpfitness.eu/wp-content/uploads/2020/09/WPFitness-Wordpress-maintenance-security-logo.png')",
            })


        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('tailwind-scrollbar'),
        require('postcss-import'),
    ],

};
