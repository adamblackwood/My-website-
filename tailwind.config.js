/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* ─── Design Token: Colors ─── */
      colors: {
        main: "#0A0A0A", // Background Main
        sidebar: "#121212", // Sidebar Card BG
        accent: "#00D289", // Primary Accent (Green)
        "accent-dark": "#00A86B", // Darker Accent for hover states
        muted: "#A0A0A0", // Secondary / Muted Text
        subtle: "#222222", // Subtle Borders
      },

      /* ─── Design Token: Typography ─── */
      fontFamily: {
        cairo: ["var(--font-cairo)", "Cairo", "sans-serif"],
      },

      /* ─── Custom Blur for glassmorphism ─── */
      backdropBlur: {
        "2xl": "40px",
      },
    },
  },
  plugins: [],
};
