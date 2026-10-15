import type { Config } from "tailwindcss";

// Design system Orgemont Connect — Piste 1 "Le Marché d'Orgemont" (validée).
// Les couleurs sont déclarées ici en dur (valeurs de marque, stables) ET
// exposées en variables CSS dans styles/globals.css pour un usage flexible
// (ex. dégradés, opacité) sans dupliquer la palette à deux endroits.
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Marque
        primary: {
          DEFAULT: "#B54834", // terracotta
          dark: "#96392A", // variante plus foncée, réservée aux fonds de bouton si besoin de contraste AA
          light: "#D97A63",
        },
        accent: {
          DEFAULT: "#E3A23B", // safran — usage rare, cf. règles du design system
          light: "#F0C077",
        },
        // Neutres chauds
        background: "#FBF8F2",
        surface: {
          DEFAULT: "#FFFFFF",
          secondary: "#F6EFE4",
        },
        ink: {
          DEFAULT: "#2A2118", // texte principal
          secondary: "#6B5D4F", // texte secondaire
          muted: "#A79885", // placeholder / désactivé
        },
        border: {
          DEFAULT: "#E4D9C8",
        },
        // États
        success: { DEFAULT: "#3F7D5C", bg: "#E7F1EB" },
        warning: { DEFAULT: "#C9821A", bg: "#FBF0DE" },
        danger: { DEFAULT: "#C0392B", bg: "#FBEAE8" },
        info: { DEFAULT: "#3B6E91", bg: "#E7F0F5" },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
      boxShadow: {
        // Ombre chaude unique, réservée aux éléments flottants (cf. règles design system)
        floating: "0 8px 24px rgba(43, 33, 24, 0.10)",
        header: "0 1px 0 rgba(43, 33, 24, 0.06)",
      },
      spacing: {
        4.5: "18px",
      },
      maxWidth: {
        app: "480px", // conteneur mobile-first ; s'élargit naturellement sur desktop via PageContainer
      },
    },
  },
  plugins: [],
};

export default config;
