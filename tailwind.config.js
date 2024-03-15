/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1312px",
      },
    },

    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "374px" },
    },
    extend: {
      fontSize: {
        h2: "2.5rem",
      },
      fontFamily: {
        satoshi_black: ["satoshiblack", "sans-serif"],
        satoshi_regular: ["satoshiregular", "sans-serif"],
        satoshi_medium: ["satoshimedium", "sans-serif"],
        satoshi_bold: ["satoshibold", "sans-serif"],
        satoshi_light: ["satoshilight", "sans-serif"],
      },

      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "(var(--background))",
        foreground: "var(--foreground)",
        borderPrimary: "var(----border-primary)",
        textgray: "var(--textgray)",
        borderGreen: "var(--bordergreen)",
        textGreen: "var(--textGreen)",
        colorEBFFEB: "var(--colorEBFFEB)",
        colorFFEAC2: "var(--colorFFEAC2)",
        colorFFF8EB: "var(--colorFFF8EB)",

        newborder: "#F4F4F5",
        card_yellow: "var(--card-yellow)",
        card_mint: "var(--card-mint)",
        card_blue: "var(--card-blue)",
        newborder: "#F4F4F5",
        btnBorderColor: "rgba(0, 0, 0, 0.30)",
        textLightColor: "#70707B",
        yellowColorBg: "var(--color-yellowBg",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },

      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
};
