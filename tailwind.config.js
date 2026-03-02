/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: '#eab308',
                'bg-deep': '#141414',
                'text-primary': '#f8f8f8',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
            },
        },
    },
    plugins: [],
}
