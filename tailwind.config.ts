import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "warna-01": "#14438f",
        "warna-02": "#ffcb04",
      },
      fontFamily: {
        openSans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
