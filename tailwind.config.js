/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0E14",
        surface: "#12161F",
        surface2: "#171C27",
        border: "#232838",
        text: "#E8EAF0",
        muted: "#8B93A7",
        mint: "#5EEAD4",
        amber: "#F59E0B",
        danger: "#F87171",
      },
      fontFamily: {
        display: ["var(--font-tajawal)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        pegboard:
          "radial-gradient(circle, #232838 1px, transparent 1.2px)",
      },
      backgroundSize: {
        peg: "16px 16px",
      },
    },
  },
  plugins: [],
};
