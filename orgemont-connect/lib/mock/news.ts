import type { NewsItem } from "@/lib/types/news";

// ℹ️ Contenu RÉEL (pas factice) — sourcé sur le site officiel de la Ville
// d'Épinay-sur-Seine, vérifié le 17 septembre 2026 (voir docs/SOURCES_PHASE4.md).
// Le nom "mockNews" / le dossier "lib/mock/" sont un résidu de la Phase 2 :
// à renommer proprement en "lib/content/" quand le CMS Firestore (Phase 7)
// remplacera ce fichier — pas fait maintenant pour éviter de casser tous les
// imports existants pour un simple changement de nom.
export const mockNews: NewsItem[] = [
  {
    id: "lewis-la-crise-2026",
    title: "Lewis revient à Orgemont avec « La Crise »",
    summary: "Vendredi 25 septembre à 21h, Lewis revient au Pôle Musical d’Orgemont pour présenter son nouveau spectacle « La Crise ». Ouverture des portes à 20h. Tarif unique : 11 €.",
    imageUrl: null,
    category: "evenement",
    source: { type: "ville", organizationName: "Ville d’Épinay-sur-Seine", sourceUrl: "https://www.epinay-sur-seine.fr/agenda/lewis-la-crise/" },
    status: "published",
    publishedAt: "2026-09-17T08:00:00.000Z",
    sourceUrl: "https://www.epinay-sur-seine.fr/agenda/lewis-la-crise/",
    location: "Pôle Musical d’Orgemont, 1 rue de la Tête Saint-Médard",
    eventAt: "2026-09-25T21:00:00+02:00",
  },
  {
    id: "travaux-rue-marseille-2026",
    title: "Travaux d’assainissement : la dernière phase démarre à Orgemont",
    summary: "Les travaux d’assainissement rue de Marseille se poursuivent jusqu’aux vacances de la Toussaint. La troisième phase, prévue en septembre, concerne une partie de la rue des Carrières.",
    imageUrl: null,
    category: "travaux",
    source: { type: "ville", organizationName: "Ville d’Épinay-sur-Seine", sourceUrl: "https://www.epinay-sur-seine.fr/actualites/travaux-dassainissement-rue-dorgemont/" },
    status: "published",
    publishedAt: "2026-09-17T08:30:00.000Z",
    sourceUrl: "https://www.epinay-sur-seine.fr/actualites/travaux-dassainissement-rue-dorgemont/",
    location: "Rue de Marseille / rue des Carrières",
  },
  {
    id: "atelier-menuiserie-orgemont-2026",
    title: "Atelier menuiserie au parc d’Orgemont",
    summary: "Jeudi 24 septembre à 14h30, Les Compagnons Bâtisseurs proposent une initiation à la menuiserie au parc d’Orgemont.",
    imageUrl: null,
    category: "evenement",
    source: { type: "ville", organizationName: "Ville d’Épinay-sur-Seine", sourceUrl: "https://www.epinay-sur-seine.fr/" },
    status: "published",
    publishedAt: "2026-09-17T09:00:00.000Z",
    sourceUrl: "https://www.epinay-sur-seine.fr/",
    location: "Parc d’Orgemont",
    eventAt: "2026-09-24T14:30:00+02:00",
  },
  {
    id: "live-club-orgemont-2026-09",
    title: "Soirée Live Club / Jam Session au PMO",
    summary: "Jeudi 24 septembre à 19h30, rendez-vous au Pôle Musical d’Orgemont pour une nouvelle soirée Live Club / Jam Session.",
    imageUrl: null,
    category: "culture",
    source: { type: "ville", organizationName: "Ville d’Épinay-sur-Seine", sourceUrl: "https://www.epinay-sur-seine.fr/le-pole-musical-dorgemont/" },
    status: "published",
    publishedAt: "2026-09-17T09:15:00.000Z",
    sourceUrl: "https://www.epinay-sur-seine.fr/le-pole-musical-dorgemont/",
    location: "Pôle Musical d’Orgemont",
    eventAt: "2026-09-24T19:30:00+02:00",
  },
  {
    id: "parc-central-orgemont-2027",
    title: "Le parc central d’Orgemont va s’agrandir",
    summary: "La Ville annonce une extension de 28 000 m² du parc central d’Orgemont, avec un démarrage des travaux prévu en 2027.",
    imageUrl: null,
    category: "travaux",
    source: { type: "ville", organizationName: "Ville d’Épinay-sur-Seine", sourceUrl: "https://www.epinay-sur-seine.fr/grand-projets/les-grands-projets-en-cours-et-a-venir-de-la-ville-depinay-sur-seine/" },
    status: "published",
    publishedAt: "2026-09-17T09:30:00.000Z",
    sourceUrl: "https://www.epinay-sur-seine.fr/grand-projets/les-grands-projets-en-cours-et-a-venir-de-la-ville-depinay-sur-seine/",
    location: "Orgemont",
  },
];

export const mockFeaturedNews: NewsItem = mockNews[0]!;
