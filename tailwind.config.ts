import type { Config } from "tailwindcss";

// Design tokens da marca. Contrastes checados para WCAG AA:
// ink/folha-900 sobre creme > 12:1 · mostarda-700 sobre creme ≈ 6:1 · folha-900 sobre mostarda-400 ≈ 8:1
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./site.config.ts"],
  theme: {
    extend: {
      colors: {
        folha: { 100: "#E3EBDD", 300: "#8FB09B", 700: "#2C5A3F", 800: "#1F3D2B", 900: "#13291D" },
        creme: { 50: "#FBF7EC", 100: "#F6F0E2", 200: "#EBE2CC", 300: "#D9CDAE" },
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
