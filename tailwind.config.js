/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#265397",
          hover: "#204780",
          dark: "#193662",
          light: "#EEF1F7",
        },
        secondary: { DEFAULT: "#0284C7", hover: "#0369A1" },
        accent: "#06B6D4",
        bg: { body: "#FBF7F3", card: "#F4F6FA" },
        navy: { 950: "#0C1E37", 900: "#0F172A", 800: "#1E293B" },
        gray: {
          600: "#475569",
          500: "#64748B",
          400: "#94A3B8",
          200: "#E5E1D8",
          100: "#F1EFE9",
        },
        success: { DEFAULT: "#10B981", bg: "#ECFDF5" },
        warning: { DEFAULT: "#F59E0B", bg: "#FFFBEB" },
        danger: { DEFAULT: "#EF4444", bg: "#FEF2F2" },
      },
      fontFamily: {
        sans: ["'Be Vietnam Pro'", "Inter", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        none: "0px",
        xs: "4px",
        sm: "6px",
        DEFAULT: "8px",
        md: "8px",
        lg: "10px",
        xl: "14px",
        "2xl": "16px",
        "3xl": "20px",
        full: "9999px",
      },
      boxShadow: {
        xs: "0 1px 2px rgba(15,23,42,0.04)",
        sm: "0 2px 8px -2px rgba(38,83,151,0.08)",
        md: "0 10px 25px -5px rgba(38,83,151,0.10)",
        lg: "0 20px 35px -8px rgba(38,83,151,0.14)",
        xl: "0 25px 50px -12px rgba(15,23,42,0.20)",
        glow: "0 0 25px rgba(38,83,151,0.25)",
        "card-hover": "0 20px 40px -10px rgba(38,83,151,0.16)",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(135deg, #265397 0%, #0284C7 100%)",
        "primary-gradient-subtle": "linear-gradient(180deg, #F4F6FA 0%, #FBF7F3 100%)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16,1,0.3,1)",
      },
      keyframes: {
        ecgDash: {
          "0%": { strokeDashoffset: "200" },
          "100%": { strokeDashoffset: "0" },
        },
        pulseGreen: {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "70%": { transform: "scale(2.2)", opacity: "0" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
      animation: {
        "ecg-dash": "ecgDash 2s linear infinite",
        "pulse-green": "pulseGreen 2s ease-out infinite",
      },
      maxWidth: {
        container: "1320px",
      },
    },
  },
  plugins: [],
};
