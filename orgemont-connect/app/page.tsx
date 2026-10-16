'use client';

import React, { useState } from 'react';

// --- Types des données ---
interface FlashAlert {
id: string;
type: 'transport' | 'travaux' | 'proprete';
ligne?: string;
statut: 'normal' | 'perturbe' | 'info';
message: string;
heure: string;
}

interface Article {
id: string;
titre: string;
categorie: string;
date: string;
image: string;
resume: string;
lieu: string;
badge?: string;
}

interface Signalement {
id: string;
categorie: 'dechet' | 'ascenseur' | 'stationnement' | 'voirie' | 'eclairage';
adresse: string;
description: string;
date: string;
statut: 'Signale' | 'Pris en charge' | 'Resolu';
photoUrl?: string;
auteur: string;
}

interface ForumPost {
id: string;
type: 'entraide' | 'objet_perdu' | 'bon_plan';
titre: string;
auteur: string;
date: string;
contenu: string;
reponsesCount: number;
}

interface Commerce {
id: string;
nom: string;
type: string;
adresse: string;
tel: string;
horaires: string;
description: string;
}

export default function HomePage() {
const [activeTab, setActiveTab] = useState<'journal' | 'signalements' | 'forum' | 'commerces'>('journal');

// --- Flash Info & Transports ---
const alertesTransports: FlashAlert[] = [
{
id: '1',
type: 'transport',
ligne: 'Tramway T8',
statut: 'normal',
message: 'Trafic fluide entre Rose Bertin et Épinay-Orgemont.',
heure: '14h30',
},
{
id: '2',
type: 'transport',
ligne: 'RER D',
statut: 'perturbe',
message: 'Ralentissements légers en gare de Saint-Denis / Épinay-Villetaneuse.',
heure: '14h15',
},
{
id: '3',
type: 'transport',
ligne: 'Bus 238 / 361',
statut: 'normal',
message: 'Itinéraire normal sur l'avenue de la République et secteur Félix Merlin.',
heure: '13h50',
},
{
id: '4',
type: 'travaux',
statut: 'info',
message: 'Travaux de rénovation urbaine : circulation alternée rue de l'Avenir jusqu'à vendredi.',
heure: '09h00',
},
{
id: '5',
type: 'proprete',
statut: 'info',
message: 'Collecte des encombrants secteur Orgemont : mercredi prochain dès 6h00.',
heure: 'Hier',
},
];

// --- Actualités de la ville & Journal ---
const articles: Article[] = [
{
id: '1',
titre: 'Saison Culturelle : Concert Futur 2000 au Pôle Musical d’Orgemont',
categorie: 'Culture & Musique',
date: '16 Octobre 2026',
lieu: 'Pôle Musical d'Orgemont (PMO), 1 rue de la Fraternité',
resume: 'Venez découvrir les talents de la scène musicale locale au PMO. Une soirée festive ouverte à toutes les familles du quartier dès 20h30.',
image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
badge: 'À la Une',
},
{
id: '2',
titre: 'Distribution d'arbres fruitiers par la Ville',
categorie: 'Environnement & Cadre de vie',
date: 'Octobre 2026',
lieu: 'Hôtel de Ville & Maisons de quartier',
resume: 'Dans le cadre de la transition écologique, la mairie d'Épinay-sur-Seine offre un arbre fruitier par foyer avec jardin ou terrasse. Inscrivez-vous avant fin octobre.',
image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
badge: 'Initiative Ville',
},
{
id: '3',
titre: 'Réunions de quartier : Orgemont & Gros Buisson',
categorie: 'Démocratie locale',
date: 'Ce jeudi à 19h00',
lieu: 'École Anatole France',
resume: 'Venez échanger avec vos élus sur la rénovation urbaine, les aménagements de voirie et la tranquillité publique dans le quartier d'Orgemont.',
image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
badge: 'Citoyenneté',
},
{
id: '4',
titre: 'Maison du Théâtre et de la Danse : Stages des vacances de la Toussaint',
categorie: 'Jeunesse',
date: 'Du 19 au 23 Octobre 2026',
lieu: 'Maison du Théâtre et de la Danse (MTD)',
resume: 'Inscriptions ouvertes pour les ateliers marionnettes et théâtre d'ombres pour les 6-12 ans à la MTD. Places limitées via l'Espace Famille.',
image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80',
},
{
id: '5',
titre: 'Journée Clean Challenge : Ramassage citoyen',
categorie: 'Solidarité',
date: 'Samedi 17 Octobre',
lieu: 'Rendez-vous local Cité La Source / Orgemont',
resume: 'Grande opération collective de ramassage de déchets. Matériel fourni sur place, goûter offert aux participants par les associations locales.',
image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=800&q=80',
},
];

// --- Signalements citoyens (State) ---
const [signalements, setSignalements] = useState<Signalement[]>([
{
id: 'sig-1',
categorie: 'ascenseur',
adresse: 'Bâtiment B, Rue de Strasbourg',
description: 'Ascenseur en panne depuis ce matin, signalé au bailleur Seine-Saint-Denis Habitat.',
date: 'Aujourd'hui 11h20',
statut: 'Pris en charge',
photoUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=400&q=80',
auteur: 'Fatima M.',
},
{
id: 'sig-2',
categorie: 'dechet',
adresse: 'Angle Rue de Paris / Rue d'Orgemont',
description: 'Dépôt sauvage de matelas et cartons sur le trottoir près du conteneur.',
date: 'Hier 16h45',
statut: 'Signale',
photoUrl: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=400&q=80',
auteur: 'Karim B.',
},
{
id: 'sig-3',
categorie: 'stationnement',
adresse: 'Devant l'école Anatole France',
description: 'Fourgonnette garée sur le passage piéton gênant la traversée des enfants.',
date: 'Il y a 2 jours',
statut: 'Resolu',
auteur: 'Laurent T.',
},
]);

// Formulaire de signalement
const [formCat, setFormCat] = useState<'dechet' | 'ascenseur' | 'stationnement' | 'voirie' | 'eclairage'>('dechet');
const [formAdresse, setFormAdresse] = useState('');
const [formDescription, setFormDescription] = useState('');
const [formNom, setFormNom] = useState('');
const [formImage, setFormImage] = useState<string | null>(null);

const handleImageUpload = (e: React.ChangeEvent) => {
if (e.target.files && e.target.files[0]) {
const file = e.target.files[0];
const preview = URL.createObjectURL(file);
setFormImage(preview);
}
};

const handleNouveauSignalement = (e: React.FormEvent) => {
e.preventDefault();
if (!formAdresse || !formDescription) return;

const nouveau: Signalement = {
  id: `sig-${Date.now()}`,
  categorie: formCat,
  adresse: formAdresse,
  description: formDescription,
  date: 'À l\'instant',
  statut: 'Signale',
  photoUrl: formImage || undefined,
  auteur: formNom || 'Habitant d\'Orgemont',
};

setSignalements([nouveau, ...signalements]);
setFormAdresse('');
setFormDescription('');
setFormNom('');
setFormImage(null);
alert('Signalement publié avec succès. Il a été transmis aux équipes du quartier.');


};

// --- Forum d'entraide ---
const [forumPosts, setForumPosts] = useState<ForumPost[]>([
{
id: 'post-1',
type: 'objet_perdu',
titre: 'Trousseau de clés trouvé vers l'arrêt Tramway T8 Orgemont',
auteur: 'Samia D.',
date: 'Il y a 3 heures',
contenu: 'Trouvé sur un banc près de la station T8 ce midi : 3 clés avec un porte-clés Tour Eiffel bleu. Déposé à l'accueil du centre social.',
reponsesCount: 4,
},
{
id: 'post-2',
type: 'entraide',
titre: 'Besoin d'un escabeau / perceuse pour ce samedi',
auteur: 'Mamadou S.',
date: 'Hier',
contenu: 'Bonjour les voisins, je viens d'emménager rue d'Alsace, j'aurais besoin d'une perceuse pour 30 minutes samedi après-midi contre un paquet de gâteaux !',
reponsesCount: 6,
},
{
id: 'post-3',
type: 'bon_plan',
titre: 'Atelier réparation de vélos gratuit samedi en gare d'Épinay',
auteur: 'Collectif Mobilités Spinassiennes',
date: 'Il y a 2 jours',
contenu: 'Stand Fix & Go de 14h à 17h : révision gratuite des freins et pneus, venez avec votre vélo.',
reponsesCount: 2,
},
]);

const [forumTitre, setForumTitre] = useState('');
const [forumContenu, setForumContenu] = useState('');
const [forumAuteur, setForumAuteur] = useState('');
const [forumType, setForumType] = useState<'entraide' | 'objet_perdu' | 'bon_plan'>('entraide');

const handleNouveauPost = (e: React.FormEvent) => {
e.preventDefault();
if (!forumTitre || !forumContenu) return;

const nouveauPost: ForumPost = {
  id: `post-${Date.now()}`,
  type: forumType,
  titre: forumTitre,
  auteur: forumAuteur || 'Voisin d\'Épinay',
  date: 'À l\'instant',
  contenu: forumContenu,
  reponsesCount: 0,
};

setForumPosts([nouveauPost, ...forumPosts]);
setForumTitre('');
setForumContenu('');
setForumAuteur('');


};

// --- Commerces & Services ---
const commerces: Commerce[] = [
{
id: 'com-1',
nom: 'Boulangerie Le Moulin d’Orgemont',
type: 'Boulangerie / Pâtisserie',
adresse: '42 Avenue de la République, 93800 Épinay-sur-Seine',
tel: '01 48 26 12 34',
horaires: '06h30 - 20h00 (Fermé mercredi)',
description: 'Pain tradition chaud toute la journée, viennoiseries artisanales et pâtisseries orientales.',
},
{
id: 'com-2',
nom: 'Pharmacie d’Orgemont',
type: 'Santé & Pharmacie',
adresse: '18 Rue de Strasbourg, 93800 Épinay-sur-Seine',
tel: '01 48 21 05 67',
horaires: '08h30 - 19h30 (Du lundi au samedi)',
description: 'Délivrance ordonnances, tests rapides, conseils santé et matériel médical.',
},
{
id: 'com-3',
nom: 'Épicerie Solidaire & Bio Primeur',
type: 'Alimentation & Primeur',
adresse: '5 Place d’Orgemont, 93800 Épinay-sur-Seine',
tel: '01 48 22 89 10',
horaires: '08h00 - 20h30 tous les jours',
description: 'Fruits et légumes de saison, arrivage quotidien, produits frais et épicerie fine.',
},
{
id: 'com-4',
nom: 'Fix & Go Vélo Épinay',
type: 'Réparation & Mobilité douce',
adresse: 'Gare d’Épinay-Villetaneuse, Parvis Sud',
tel: '01 71 29 00 00',
horaires: 'Mercredi & Samedi (10h-18h)',
description: 'Atelier de révision, gonflage, réparation de crevaisons et entretien trottinettes.',
},
];

return (

{/* Header Principal */}




OC



Orgemont Connect


Le journal quotidien & l’entraide citoyenne • Épinay-sur-Seine (93800)




      {/* Navigation Onglets */}
      <nav className="flex flex-wrap gap-1 bg-blue-950/60 p-1 rounded-xl text-sm border border-blue-800">
        <button
          onClick={() => setActiveTab('journal')}
          className={`px-3 py-1.5 rounded-lg font-medium transition ${
            activeTab === 'journal'
              ? 'bg-cyan-500 text-blue-950 shadow font-semibold'
              : 'text-slate-200 hover:text-white hover:bg-blue-800/50'
          }`}
        >
          📰 Le Journal & Actus
        </button>
        <button
          onClick={() => setActiveTab('signalements')}
          className={`px-3 py-1.5 rounded-lg font-medium transition ${
            activeTab === 'signalements'
              ? 'bg-cyan-500 text-blue-950 shadow font-semibold'
              : 'text-slate-200 hover:text-white hover:bg-blue-800/50'
          }`}
        >
          🚨 Signalements Citoyens
        </button>
        <button
          onClick={() => setActiveTab('forum')}
          className={`px-3 py-1.5 rounded-lg font-medium transition ${
            activeTab === 'forum'
              ? 'bg-cyan-500 text-blue-950 shadow font-semibold'
              : 'text-slate-200 hover:text-white hover:bg-blue-800/50'
          }`}
        >
          🤝 Forum Voisins
        </button>
        <button
          onClick={() => setActiveTab('commerces')}
          className={`px-3 py-1.5 rounded-lg font-medium transition ${
            activeTab === 'commerces'
              ? 'bg-cyan-500 text-blue-950 shadow font-semibold'
              : 'text-slate-200 hover:text-white hover:bg-blue-800/50'
          }`}
        >
          🏪 Commerces & Services
        </button>
      </nav>
    </div>

    {/* Bandeau d'Urgence / Flash Info Transports */}
    <div className="bg-blue-950 border-t border-blue-800/60 px-4 py-2 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2 overflow-x-auto">
        <div className="flex items-center space-x-2 shrink-0">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="font-bold uppercase tracking-wider text-cyan-400">
            Flash Direct Épinay :
          </span>
        </div>
        <div className="flex items-center space-x-6 overflow-x-auto py-1 scrollbar-none text-slate-300">
          {alertesTransports.map((alerte) => (
            <div key={alerte.id} className="flex items-center space-x-2 shrink-0">
              {alerte.ligne && (
                <span className="font-semibold text-white bg-blue-800 px-1.5 py-0.5 rounded">
                  {alerte.ligne}
                </span>
              )}
              <span
                className={
                  alerte.statut === 'perturbe'
                    ? 'text-amber-300 font-medium'
                    : 'text-slate-300'
                }
              >
                {alerte.message}
              </span>
              <span className="text-slate-400 text-[10px]">({alerte.heure})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </header>

  {/* Contenu Principal */}
  <main className="max-w-6xl mx-auto px-4 py-8">
    {/* ================= ONGLET 1 : LE JOURNAL & ACTUALITÉS ================= */}
    {activeTab === 'journal' && (
      <div className="space-y-10">
        {/* Grand bandeau d'introduction */}
        <div className="bg-gradient-to-br from-blue-900 to-indigo-800 text-white rounded-2xl p-6 md:p-8 shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="bg-cyan-400 text-blue-950 text-xs font-black uppercase px-2.5 py-1 rounded-full">
              Édition du jour • Épinay-sur-Seine
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-3 leading-tight">
              Toute la vie de votre quartier en temps réel
            </h2>
            <p className="mt-2 text-slate-200 text-sm md:text-base leading-relaxed">
              Retrouvez chaque jour les événements de la Maison du Théâtre et de la Danse,
              les actualités du Pôle Musical d’Orgemont, les grands travaux de rénovation et
              les alertes de transport du secteur.
            </p>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-radial from-white to-transparent pointer-events-none hidden md:block"></div>
        </div>

        {/* Article à la Une */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <span>⭐</span> La Grande Actualité du Jour
            </h3>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition grid grid-cols-1 md:grid-cols-2">
            <div className="h-64 md:h-full relative overflow-hidden">
              <img
                src={articles[0].image}
                alt={articles[0].titre}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-blue-900 text-cyan-300 text-xs font-bold px-3 py-1 rounded-full shadow">
                {articles[0].badge}
              </span>
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700 uppercase mb-2">
                  <span>{articles[0].categorie}</span>
                  <span>•</span>
                  <span>{articles[0].date}</span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  {articles[0].titre}
                </h4>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  {articles[0].resume}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1 font-medium text-slate-700">
                  📍 {articles[0].lieu}
                </span>
                <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-lg transition">
                  Lire la suite
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Grille des autres actualités */}
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span>🗞️</span> Le Fil des Informations Municipales & Quartier
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((art) => (
              <article
                key={art.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
              >
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={art.image}
                    alt={art.titre}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                  {art.badge && (
                    <span className="absolute top-3 left-3 bg-blue-900/90 text-cyan-300 text-[11px] font-bold px-2 py-0.5 rounded">
                      {art.badge}
                    </span>
                  )}
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] font-bold text-indigo-700 uppercase mb-2">
                      <span>{art.categorie}</span>
                      <span>•</span>
                      <span className="text-slate-400">{art.date}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-base leading-snug line-clamp-2">
                      {art.titre}
                    </h4>
                    <p className="mt-2 text-slate-600 text-xs leading-relaxed line-clamp-3">
                      {art.resume}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="truncate pr-2">📍 {art.lieu}</span>
                    <span className="text-blue-600 font-semibold cursor-pointer hover:underline shrink-0">
                      Détails →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    )}

    {/* ================= ONGLET 2 : SIGNALEMENTS CITOYENS ================= */}
    {activeTab === 'signalements' && (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Formulaire de signalement */}
        <div className="lg:col-span-1 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm h-fit sticky top-28">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-1">
            <span>📸</span> Signaler une anomalie
          </h3>
          <p className="text-xs text-slate-500 mb-6">
            Déchets sauvages, panne d'ascenseur, éclairage défectueux ou stationnement gênant dans le quartier.
          </p>

          <form onSubmit={handleNouveauSignalement} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Type de problème
              </label>
              <select
                value={formCat}
                onChange={(e) => setFormCat(e.target.value as any)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="dechet">🗑️ Déchets / Propreté / Dépôt sauvage</option>
                <option value="ascenseur">🛗 Ascenseur en panne (Bailleur)</option>
                <option value="stationnement">🚗 Stationnement gênant / trottoir</option>
                <option value="voirie">🚧 Voirie / Nid de poule / Travaux</option>
                <option value="eclairage">💡 Éclairage public éteint</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Adresse ou Résidence précise *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: 14 Rue de Strasbourg, Bât C"
                value={formAdresse}
                onChange={(e) => setFormAdresse(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Description du problème *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Précisez la situation pour faciliter l'intervention..."
                value={formDescription}
                onChange={(e) => setFormDescription(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              ></textarea>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Photo constat (recommandé)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full text-xs text-slate-500 file:mr-2 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              {formImage && (
                <div className="mt-2 h-28 rounded-lg overflow-hidden border border-slate-200">
                  <img src={formImage} alt="Aperçu" className="w-full h-full object-cover" />
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Votre prénom / Nom
              </label>
              <input
                type="text"
                placeholder="Ex: Jamel A."
                value={formNom}
                onChange={(e) => setFormNom(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-2.5 rounded-lg text-sm transition shadow-sm"
            >
              Envoyer le signalement
            </button>
          </form>
        </div>

        {/* Liste des signalements */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-slate-900">
              Derniers signalements dans le quartier ({signalements.length})
            </h3>
          </div>

          {signalements.map((sig) => (
            <div
              key={sig.id}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col md:flex-row gap-5"
            >
              {sig.photoUrl && (
                <div className="w-full md:w-36 h-36 rounded-lg overflow-hidden shrink-0 border border-slate-100">
                  <img
                    src={sig.photoUrl}
                    alt="Photo signalement"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                        sig.statut === 'Resolu'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : sig.statut === 'Pris en charge'
                          ? 'bg-amber-100 text-amber-800 border border-amber-300'
                          : 'bg-rose-100 text-rose-800 border border-rose-300'
                      }`}
                    >
                      ● {sig.statut}
                    </span>
                    <span className="text-xs text-slate-400">{sig.date}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-base flex items-center gap-1.5">
                    <span>📍</span> {sig.adresse}
                  </h4>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                    {sig.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Posté par : <strong className="text-slate-700">{sig.auteur}</strong></span>
                  <span className="capitalize font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                    {sig.categorie}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}

    {/* ================= ONGLET 3 : FORUM DE QUARTIER & ENTRAIDE ================= */}
    {activeTab === 'forum' && (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Formulaire de publication */}
        <div className="lg:col-span-1 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm h-fit sticky top-28">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-1">
            <span>💬</span> Publier sur le Forum
          </h3>
          <p className="text-xs text-slate-500 mb-6">
            Échangez entre voisins, proposez un coup de main ou signalez un objet égaré.
          </p>

          <form onSubmit={handleNouveauPost} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Rubrique
              </label>
              <select
                value={forumType}
                onChange={(e) => setForumType(e.target.value as any)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="entraide">🤝 Coup de main / Prêt de matériel</option>
                <option value="objet_perdu">🔑 Objet perdu / trouvé</option>
                <option value="bon_plan">💡 Bon plan local / Événement</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Titre du message *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Recherche cours de soutien CP"
                value={forumTitre}
                onChange={(e) => setForumTitre(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Votre message *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Écrivez votre texte ici..."
                value={forumContenu}
                onChange={(e) => setForumContenu(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              ></textarea>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Votre prénom / pseudo
              </label>
              <input
                type="text"
                placeholder="Ex: Sarah"
                value={forumAuteur}
                onChange={(e) => setForumAuteur(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-2.5 rounded-lg text-sm transition shadow-sm"
            >
              Publier dans le forum
            </button>
          </form>
        </div>

        {/* Liste des discussions */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Discussions en cours à Orgemont & Épinay
          </h3>

          {forumPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded uppercase ${
                    post.type === 'objet_perdu'
                      ? 'bg-amber-100 text-amber-900'
                      : post.type === 'entraide'
                      ? 'bg-blue-100 text-blue-900'
                      : 'bg-emerald-100 text-emerald-900'
                  }`}
                >
                  {post.type === 'objet_perdu'
                    ? '🔑 Objet Perdu / Trouvé'
                    : post.type === 'entraide'
                    ? '🤝 Entraide Voisins'
                    : '💡 Bon Plan'}
                </span>
                <span className="text-xs text-slate-400">{post.date}</span>
              </div>

              <h4 className="text-lg font-bold text-slate-900 mb-2">
                {post.titre}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {post.contenu}
              </p>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Par <strong className="text-slate-800">{post.auteur}</strong></span>
                <button className="text-blue-700 hover:text-blue-900 font-semibold flex items-center gap-1">
                  💬 {post.reponsesCount} réponses • Répondre
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}

    {/* ================= ONGLET 4 : ANNUAIRE DES COMMERCES ================= */}
    {activeTab === 'commerces' && (
      <div className="space-y-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900 mb-1">
            Annuaire des Commerces & Services d’Orgemont
          </h3>
          <p className="text-sm text-slate-500">
            Soutenez la vie locale ! Retrouvez les horaires et coordonnées des commerçants de votre quartier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {commerces.map((com) => (
            <div
              key={com.id}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                    {com.type}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{com.nom}</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {com.description}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-600">
                <p className="flex items-center gap-2">
                  <span>📍</span> <strong>Adresse :</strong> {com.adresse}
                </p>
                <p className="flex items-center gap-2">
                  <span>🕒</span> <strong>Horaires :</strong> {com.horaires}
                </p>
                <p className="flex items-center gap-2">
                  <span>📞</span> <strong>Téléphone :</strong> <a href={`tel:${com.tel}`} className="text-blue-700 font-semibold hover:underline">{com.tel}</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </main>

  {/* Footer */}
  <footer className="mt-16 bg-slate-900 text-slate-400 py-8 border-t border-slate-800 text-center text-xs">
    <div className="max-w-6xl mx-auto px-4 space-y-2">
      <p className="font-semibold text-slate-200">
        Orgemont Connect • La plateforme citoyenne et d’actualités d’Épinay-sur-Seine
      </p>
      <p>
        Non affilié directement aux services municipaux. Plateforme d’initiative citoyenne pour la valorisation du quartier d'Orgemont.
      </p>
    </div>
  </footer>
</div>


);
}
