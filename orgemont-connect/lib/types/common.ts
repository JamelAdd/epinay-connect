/**
 * Types communs réutilisés par plusieurs entités métier.
 * Ces types décrivent la FORME des données telle qu'elle sera manipulée par
 * l'UI. Le mapping exact avec les collections Firestore sera fait en Phase 3.
 */

export type ContentStatus = "draft" | "scheduled" | "published" | "archived";

export type NewsCategory =
  | "travaux"
  | "evenement"
  | "quartier"
  | "association"
  | "solidarite"
  | "commerces"
  | "culture"
  | "sport"
  | "education"
  | "info-pratique"
  | "carnet-du-quartier"
  | "autre";

/** Indique la provenance d'un contenu, affichée clairement dans l'UI (cf. cahier des charges). */
export type ContentSource =
  | { type: "plateforme" }
  | { type: "association"; organizationId: string; organizationName: string }
  | { type: "commerce"; organizationId: string; organizationName: string }
  | { type: "ville"; organizationName: string; sourceUrl?: string };
