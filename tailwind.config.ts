import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#1E2A47",
          gold: "#C8A951",
          silver: "#C0C8D1",
        },
      },
    },
  },
  plugins: [],
}
export default config
