# Structure Firestore — Orgemont Connect (Phase 3)

Document de référence, à consulter quand tu veux te rappeler comment les
données sont organisées. Ce n'est pas du code : c'est une documentation.

## Principe général

Chaque document porte un champ `districtId` (`"orgemont"` pour l'instant),
pour permettre d'isoler les données par quartier si l'app est étendue à
d'autres quartiers d'Épinay-sur-Seine plus tard.

## Collections prévues

Seules **`districts`** et **`users`** sont réellement utilisées en Phase 3
(pour tester l'inscription/connexion). Les autres sont documentées ici mais
resteront vides et fermées en écriture/lecture jusqu'à leur phase respective.

| Collection | Utilisée depuis | Contenu |
|---|---|---|
| `districts/{districtId}` | Phase 3 | Infos publiques du quartier (nom, tagline, positionnement indépendant) |
| `users/{uid}` | Phase 3 | Profil utilisateur (districtId, email, displayName, role, createdAt, isDemo) |
| `organizations/{orgId}` | Phase 5 | Associations et commerces |
| `organization_members/{orgId}_{uid}` | Phase 5 | Rôle d'un utilisateur dans une organisation |
| `memberships/{membershipId}` | Phase 9 | Adhésions (statut, validité) |
| `news/{newsId}` | Phase 7 | Actualités du quartier |
| `events/{eventId}` | Phase 8 | Événements et agenda |
| `polls/{pollId}` | Phase 10 | Sondages |
| `mutual_aid/{requestId}` | Phase 13 | Entraide entre habitants |
| `notifications/{uid}/items/{notifId}` | Phase 14 | Notifications par utilisateur |
| `reports/{reportId}` | Phase 11 | Signalements (photo, catégorie, localisation) |

## Rôles (champ `role` sur `users/{uid}`)

Valeur par défaut à l'inscription : `"habitant"`. Les autres valeurs prévues
(`"admin"`, `"editeur"`, `"moderateur"`, `"super_admin"`) ne sont pas encore
attribuables automatiquement : en Phase 3, ton propre compte devra être
promu **manuellement** dans la console Firestore (voir guide de la Phase 3).
Une attribution propre et sécurisée (via Cloud Function) arrivera en Phase 4,
quand le plan Blaze sera activé pour cette fonctionnalité précise.

## Ce qui n'est PAS encore fait

- Aucune Cloud Function.
- Aucune interface pour créer du contenu (CMS = Phase 7).
- Aucun index composite Firestore particulier (à créer au fur et à mesure
  des besoins réels des requêtes, pas par anticipation).
- Firebase Storage n'est pas activé (décision volontaire, cf. Phase 3 —
  Storage nécessite désormais le plan Blaze ; reporté aux Phases 7/11).
