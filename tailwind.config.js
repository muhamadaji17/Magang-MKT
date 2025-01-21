/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                authBg: "url('/src/assets/backgrounds/bg-auth.jpg')",
            },
        },
    },
    plugins: [],
};
