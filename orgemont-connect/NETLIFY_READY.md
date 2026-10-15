# Orgemont Connect — version prête pour test Netlify

Cette archive est une version de test avant branchement complet du CMS Firebase.

## Corrections incluses

- Suppression de la dépendance à `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` : Firebase Storage n'est pas activé.
- Navigation basse sans rubrique Agenda.
- Les événements sont présentés dans Actualités.
- Horaires de prière / CMEO absents.
- Logo Orgemont Connect intégré dans le header et les éléments PWA.
- Contenus locaux réels de départ, avec sources officielles de la Ville.
- Positionnement indépendant clairement affiché.
- Configuration Firebase conservée pour Authentication + Firestore.

## Déploiement

1. Envoyer ce projet à GitHub.
2. Connecter le dépôt à Netlify.
3. Définir les variables d'environnement indiquées dans `docs/NETLIFY_FIREBASE_SETUP.md`.
4. Build : `npm run build`.
5. Tester sur ordinateur puis sur téléphone.

Ne pas activer Firebase Storage ou passer à Blaze uniquement pour ce test.
