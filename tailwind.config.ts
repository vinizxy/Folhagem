import type { Config } from "tailwindcss";

// Design tokens da marca. Contrastes checados para WCAG AA:
// ink/folha-900 sobre creme > 12:1 · mostarda-700 sobre creme ≈ 6:1 · folha-900 sobre mostarda-400 ≈ 8:1
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./site.config.ts"],
  theme: {
    extend: {
      colors: {
        folha: { 100: "#DDEBD3", 300: "#8FB98A", 600: "#3F7A4A", 700: "#2F6A3E", 800: "#21502F", 900: "#173A23" },
        creme: { 50: "#F8FAF2", 100: "#EDF2E2", 200: "#DCE6CC", 300: "#C3D2AD" },
        mostarda: { 300: "#F0C766", 400: "#E0A526", 500: "#C98A12", 700: "#7A5200" },
        ink: "#1B2A21",
        muted: "#46564C",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
