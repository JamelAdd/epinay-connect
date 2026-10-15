import { getApps, initializeApp, type FirebaseOptions } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

/**
 * Initialisation Firebase (Phase 3).
 *
 * Volontairement minimal : uniquement Authentication + Firestore.
 * Storage n'est PAS initialisé ici — le bucket n'a pas été créé (décision
 * prise avec l'utilisatrice : Storage nécessite désormais le plan Blaze,
 * reporté aux Phases 7/11 où l'upload de fichiers devient réellement utile).
 * Quand Storage sera activé, ajouter ici :
 *   import { getStorage } from "firebase/storage";
 *   export const storage = getStorage(app);
 *
 * Toutes les valeurs proviennent des variables d'environnement
 * NEXT_PUBLIC_FIREBASE_* (voir .env.example). Aucune valeur n'est écrite en
 * dur : si une variable manque, l'app doit échouer clairement plutôt que de
 * démarrer avec une configuration silencieusement invalide.
 */

function readRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `Variable d'environnement manquante : ${name}. Vérifie ton fichier .env.local (voir .env.example).`
    );
  }
  return value;
}

const firebaseConfig: FirebaseOptions = {
  apiKey: readRequiredEnv("NEXT_PUBLIC_FIREBASE_API_KEY"),
  authDomain: readRequiredEnv("NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN"),
  projectId: readRequiredEnv("NEXT_PUBLIC_FIREBASE_PROJECT_ID"),
  messagingSenderId: readRequiredEnv("NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"),
  appId: readRequiredEnv("NEXT_PUBLIC_FIREBASE_APP_ID"),
};

// Next.js peut réexécuter ce module plusieurs fois côté client (HMR) ; on
// évite d'appeler initializeApp() deux fois sur la même app.
const app = getApps().length > 0 ? getApps()[0]! : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
