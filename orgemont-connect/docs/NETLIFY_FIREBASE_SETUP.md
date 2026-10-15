# Orgemont Connect — test Netlify + Firebase

## 1. Firebase

Projet Firebase attendu : `orgemont-connect`.

Dans Firebase Console :
1. Ouvrir le projet `orgemont-connect`.
2. **Project settings → Your apps → Web**.
3. Si aucune application Web n'existe encore, cliquer sur **Add app / Web** et l'enregistrer, par exemple `Orgemont Connect Web`.
4. Copier les valeurs de la configuration Web Firebase dans les variables Netlify ci-dessous.
5. Authentication : Email/Password peut rester activé.
6. Firestore : utiliser la base `(default)` déjà créée.
7. Ne pas activer Cloud Storage pour ce test : un nouveau bucket Storage nécessite désormais le forfait Blaze. Le projet peut rester sur Spark tant que Storage/Cloud Functions ne sont pas nécessaires.

La configuration Web Firebase n'est pas un secret : la sécurité réelle repose sur Authentication et les règles Firestore.

## 2. Variables Netlify

Dans **Netlify → Site configuration → Environment variables**, créer :

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_DISTRICT_ID` = `orgemont`

Ne pas ajouter `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` : Storage est volontairement hors périmètre de cette version.

## 3. Build Netlify

- Build command : `npm run build`
- Publish directory : `.next`
- Base directory : laisser vide
- Node : utiliser une version LTS récente compatible avec Next.js 14.

## 4. Firestore

Le fichier `firestore.rules` est déjà inclus dans le projet.

Pour le test public, les documents `news/{id}` doivent avoir :

```json
{
  "status": "published",
  "districtId": "orgemont"
}
```

Les règles actuelles permettent la lecture publique du contenu publié mais aucune écriture publique.

## 5. Important pour cette Phase 4

Les informations visibles sur l'accueil et Actualités sont actuellement des contenus de départ locaux vérifiés et sourcés. Elles ne sont pas encore synchronisées automatiquement avec le site de la Ville.

Le CMS Firestore permettra dans une phase suivante de les modifier depuis l'espace administrateur, sans modifier le code.

## 6. Ce qui reste volontairement désactivé

- Firebase Storage
- Cloud Functions
- synchronisation automatique du site de la Ville
- notifications push
- upload photo depuis l'application

Ces éléments pourront être ajoutés après validation visuelle du premier déploiement Netlify.
