import flowbite from "flowbite-react/tailwind";

module.exports = {
    content: [
        "./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
        "./src/templates/**/*.{js,jsx,ts,tsx}",
        flowbite.content(),
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
            },
            colors: {
                dark: '#2D2D2D',
                light: '#C8C8C8',
            },
        },
    },

    plugins: [
        flowbite.plugin(),
    ],
    fontFamily: {}
}