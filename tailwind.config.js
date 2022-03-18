module.exports = {
  daisyui: {
    themes: ["cyberpunk", "lofi", "dracula", "synthwave", "autumn", "night", "business", "luxury"],
  },
  content: [
      './pages/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
