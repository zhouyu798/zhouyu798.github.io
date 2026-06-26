/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        muted: "#666666",
        quiet: "#8A8A8A",
        line: "#E6E8EC",
        harmony: "#0F63FF",
        motion: "#FF6A00",
        soft: "#F7F8FA",
      },
      fontFamily: {
        sans: [
          "HarmonyOS Sans",
          "Inter",
          "PingFang SC",
          "Noto Sans SC",
          "Microsoft YaHei",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(15, 99, 255, 0.08)",
        card: "0 18px 60px rgba(16, 24, 40, 0.08)",
        lift: "0 26px 90px rgba(15, 99, 255, 0.14)",
      },
      maxWidth: {
        canvas: "1680px",
      },
      borderRadius: {
        system: "36px",
      },
    },
  },
  plugins: [],
};
