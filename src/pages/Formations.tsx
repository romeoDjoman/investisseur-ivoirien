import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Formations() {
    const [activeFilter, setActiveFilter] = useState('Tous');

    const categories = ['Tous', 'Immobilier', 'Bourse', 'Agriculture', 'Élevage', 'Transport', 'Entrepreneuriat'];

    const formations = [
        {
            title: "Acheter un Terrain en Côte d'Ivoire",
            category: "Immobilier",
            description: "Apprenez toutes les démarches administratives officielles pour sécuriser l'achat d'un terrain en Côte d'Ivoire : vérification du titre foncier, rôle du notaire, bornage, enregistrement au cadastre, pièges des 'ventes entre particuliers' et recours en cas de litige.",
            duration: "4h de vidéo + 1 guide PDF",
            level: "Débutant",
            badge: "🔥 Populaire",
            icon: "🏠"
        },
        {
            title: "Investir dans les Parcelles Agricoles",
            category: "Agriculture",
            description: "Identification des zones agricoles à fort potentiel, processus d'acquisition sécurisé, mise en valeur de la parcelle, et suivi personnalisé post-acquisition. Focus sur les régions du Centre, de l'Ouest et du Nord ivoirien.",
            duration: "5h de vidéo + suivi mensuel inclus (3 mois)",
            level: "Débutant à Intermédiaire",
            badge: "⭐ Nouveau",
            icon: "🌾"
        },
        {
            title: "Investir à la BRVM",
            category: "Bourse",
            description: "Formation complète pour investir sur la BRVM (Bourse Régionale des Valeurs Mobilières d'Abidjan) : comprendre le marché, ouvrir un compte titres, sélectionner des valeurs, lire les états financiers des entreprises cotées et construire un portefeuille diversifié.",
            duration: "6h de vidéo + newsletter hebdomadaire (1 mois)",
            level: "Débutant",
            badge: "🔥 Populaire",
            icon: "📈"
        },
        {
            title: "Bourses Internationales & Marchés Émergents",
            category: "Bourse",
            description: "Comment accéder aux marchés financiers internationaux depuis la Côte d'Ivoire ou la diaspora. ETF, actions, marchés émergents africains et asiatiques. Gestion du change et fiscalité.",
            duration: "5h de vidéo",
            level: "Intermédiaire",
            badge: "⭐ Nouveau",
            icon: "🌍"
        },
        {
            title: "Se Lancer dans l'Élevage",
            category: "Élevage",
            description: "Tout ce qu'il faut savoir pour démarrer une activité d'élevage rentable en Côte d'Ivoire : volailles (poulets de chair, pondeuses), porcins. Business plan, approvisionnement, gestion sanitaire, circuits de distribution.",
            duration: "6h de vidéo + guide PDF business plan",
            level: "Débutant",
            badge: "🐓 Pratique",
            icon: "🐓"
        },
        {
            title: "Lancer une Activité VTC / Transport",
            category: "Transport",
            description: "De l'idée à la mise en route d'une activité de transport ou VTC en Côte d'Ivoire : réglementation, financement du véhicule, gestion d'une flotte, partenariats avec plateformes locales.",
            duration: "4h de vidéo",
            level: "Débutant",
            badge: "",
            icon: "🚗"
        },
        {
            title: "Entrepreneuriat en Côte d'Ivoire",
            category: "Entrepreneuriat",
            description: "De la validation de l'idée à l'immatriculation officielle, en passant par le business plan, le financement et les premières ventes. Focus sur les secteurs porteurs de l'économie ivoirienne.",
            duration: "7h de vidéo + modèle de business plan",
            level: "Débutant à Intermédiaire",
            badge: "",
            icon: "💼"
        },
        {
            title: "Transformation Agricole & Industrielle",
            category: "Agriculture",
            description: "Comment valoriser une production agricole en créant une unité de transformation artisanale ou semi-industrielle : noix de cajou, cacao, manioc, huile de palme, jus de fruits locaux.",
            duration: "6h de vidéo + étude de cas PDF",
            level: "Intermédiaire",
            badge: "",
            icon: "🏭"
        }
    ];

    const filteredFormations = activeFilter === 'Tous'
        ? formations
        : formations.filter(f => f.category === activeFilter);

    return (
        <div className="pt-32 pb-24 min-h-screen bg-black relative">
            {/* Background elements */}
            <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-brand/10 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center justify-center gap-6 mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white uppercase">
                        Nos Formations
                    </h1>
                    <p className="text-xl text-white/80 max-w-3xl leading-relaxed font-light">
                        Des formations créées par des praticiens pour vous donner les outils concrets dont vous avez besoin afin d'investir avec confiance en Côte d'Ivoire.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${activeFilter === category
                                ? 'bg-brand text-black border-brand scale-105 shadow-[0_0_20px_rgba(46,125,50,0.3)]'
                                : 'bg-white/5 text-white/70 border-white/10 hover:border-white/30 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredFormations.map((formation) => (
                            <motion.div
                                key={formation.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="bg-[#1a1a1a] rounded-2xl border border-white/10 overflow-hidden flex flex-col group hover:border-brand/50 transition-colors shadow-xl"
                            >
                                <div className="p-8 flex flex-col flex-1 relative">
                                    {formation.badge && (
                                        <div className="absolute top-4 right-4 bg-brand/10 text-brand px-3 py-1 rounded-full text-xs font-semibold border border-brand/20">
                                            {formation.badge}
                                        </div>
                                    )}
                                    <div className="text-5xl mb-6">{formation.icon}</div>
                                    <div className="text-brand text-sm font-bold uppercase tracking-wider mb-3">{formation.category}</div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand transition-colors leading-tight">
                                        {formation.title}
                                    </h3>
                                    <p className="text-white/60 text-sm mb-8 flex-1 leading-relaxed font-light">
                                        {formation.description}
                                    </p>

                                    <div className="space-y-4 pt-6 border-t border-white/10 mb-8 bg-[#141414]/50 -mx-8 px-8 pb-4">
                                        <div className="flex items-center text-sm text-white/80">
                                            <span className="w-6 text-center mr-3 text-lg opacity-80">⏱️</span> {formation.duration}
                                        </div>
                                        <div className="flex items-center text-sm text-white/80">
                                            <span className="w-6 text-center mr-3 text-lg opacity-80">📊</span> Niveau : <span className="ml-1 font-medium">{formation.level}</span>
                                        </div>
                                    </div>

                                    <button className="w-full py-4 bg-brand hover:bg-brand/90 text-black font-semibold rounded-xl transition-all duration-300 mt-auto uppercase tracking-wide text-sm">
                                        Voir le programme
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
