import type { NewsCategory } from "@/lib/types/common";

/** Étiquette lisible par catégorie, affichée dans les badges. */
export const CATEGORY_LABELS: Record<NewsCategory, string> = {
  travaux: "Travaux",
  evenement: "Événement",
  quartier: "Quartier",
  association: "Association",
  solidarite: "Solidarité",
  commerces: "Commerces",
  culture: "Culture",
  sport: "Sport",
  education: "Éducation",
  "info-pratique": "Info pratique",
  "carnet-du-quartier": "Carnet du quartier",
  autre: "Actualité",
};

/**
 * Ton de Badge associé à chaque catégorie — cohérent avec les couleurs déjà
 * utilisées pour la barre de catégorie des cartes (Card categoryColor).
 * Volontairement mesuré : la plupart restent "neutral", seules quelques
 * catégories à forte utilité (travaux, événement) ressortent en couleur.
 */
export const CATEGORY_BADGE_TONE: Record<
  NewsCategory,
  "success" | "warning" | "danger" | "info" | "neutral" | "accent"
> = {
  travaux: "warning",
  evenement: "accent",
  quartier: "neutral",
  association: "neutral",
  solidarite: "success",
  commerces: "neutral",
  culture: "info",
  sport: "neutral",
  education: "neutral",
  "info-pratique": "info",
  "carnet-du-quartier": "neutral",
  autre: "neutral",
};
