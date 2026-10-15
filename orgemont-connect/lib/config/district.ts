/**
 * Configuration du "quartier actif".
 *
 * Orgemont Connect est pensé pour pouvoir, plus tard, être décliné sur
 * d'autres quartiers d'Épinay-sur-Seine sans réécrire l'application :
 * aucun texte ni logique métier ne doit dépendre du nom "Orgemont" en dur
 * ailleurs que dans ce fichier de configuration.
 *
 * Pour l'instant, un seul quartier est actif : Orgemont. L'identité visuelle
 * (Piste 1 "Le Marché d'Orgemont") reste 100% dédiée à Orgemont — seule la
 * partie CONTENU/COPY est centralisée ici pour rester réutilisable.
 */

export type DistrictId = "orgemont";

export interface DistrictConfig {
  id: DistrictId;
  name: string;
  appName: string;
  city: string;
  tagline: string;
  /** Rappel obligatoire du positionnement indépendant, affiché dans l'app (ex. page "À propos", pied de page). */
  independencePositioning: string;
}

const DISTRICTS: Record<DistrictId, DistrictConfig> = {
  orgemont: {
    id: "orgemont",
    name: "Orgemont",
    appName: "Orgemont Connect",
    city: "Épinay-sur-Seine",
    tagline: "La vie du quartier, par et pour ses habitants.",
    independencePositioning:
      "Orgemont Connect est une initiative personnelle et indépendante. Ce n'est pas une application officielle de la mairie d'Épinay-sur-Seine.",
  },
};

/**
 * Quartier actuellement actif. Lu depuis une variable d'environnement pour
 * permettre, plus tard, de déployer une instance différente sans changer le
 * code — aujourd'hui, seul "orgemont" existe et reste la valeur par défaut.
 */
const activeId = (process.env.NEXT_PUBLIC_DISTRICT_ID as DistrictId) || "orgemont";

export const currentDistrict: DistrictConfig = DISTRICTS[activeId] ?? DISTRICTS.orgemont;
