# Données Firestore de départ — actualités

Pour un futur test Firestore, chaque document de la collection `news` doit au minimum contenir :

- `districtId`: `orgemont`
- `status`: `published`
- `title`
- `summary`
- `category`
- `publishedAt`
- `sourceUrl`

Pour les événements intégrés aux actualités, ajouter `eventAt` et `location`.

Les données présentes dans `lib/mock/news.ts` constituent le contenu de départ de l'interface. Elles sont déjà sourcées dans `docs/SOURCES_PHASE4.md`.
