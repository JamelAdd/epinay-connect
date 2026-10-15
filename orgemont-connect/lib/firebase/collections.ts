/**
 * Noms des collections Firestore, centralisés pour éviter les fautes de
 * frappe dispersées dans le code. Seules "districts" et "users" seront
 * réellement utilisées en Phase 3 (test d'inscription/connexion) ; les
 * autres sont documentées ici en préparation des phases suivantes.
 */
export const COLLECTIONS = {
  districts: "districts",
  users: "users",
  organizations: "organizations",
  organizationMembers: "organization_members",
  news: "news",
  events: "events",
  polls: "polls",
  mutualAid: "mutual_aid",
  notifications: "notifications",
  memberships: "memberships",
  reports: "reports",
} as const;
