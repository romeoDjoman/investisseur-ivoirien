import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function HomeFormationsSection() {
    const topFormations = [
        {
            id: "terrain-ci",
            title: "Acheter un Terrain en Côte d'Ivoire",
            category: "Immobilier",
            description: "Apprenez toutes les démarches administratives officielles pour sécuriser l'achat d'un terrain en Côte d'Ivoire.",
            duration: "4h de vidéo + 1 guide PDF",
            level: "Débutant",
            badge: "🔥 Populaire",
            price: "49.000 FCFA",
            urgency: "Cadeau Bonus expire ce soir",
            icon: "🏠",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600"
        },
        {
            id: "maitriser-brvm",
            title: "Investir à la BRVM",
            category: "Bourse",
            description: "Formation complète pour investir sur la Bourse Régionale des Valeurs Mobilières d'Abidjan.",
            duration: "6h de vidéo + newsletter hebdo",
            level: "Débutant",
            badge: "🔥 Populaire",
            price: "75.000 FCFA",
            urgency: "Plus que 5 places (Coach dispo)",
            icon: "📈",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600"
        },
        {
            id: "ferme-avicole",
            title: "Investir dans les Parcelles Agricoles",
            category: "Agriculture",
            description: "Identification des zones à fort potentiel, processus d'acquisition sécurisé, et mise en valeur.",
            duration: "5h de vidéo + suivi 3 mois",
            level: "Débutant à Intermédiaire",
            badge: "⭐ Nouveau",
            price: "55.000 FCFA",
            urgency: "Offre Lancement - J-2",
            icon: "🌾",
            image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=600"
        }
    ];

    return (
        <section className="py-24 bg-[#141414] border-t border-white/5 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="max-w-7xl mx-auto px-6"
            >
                <div className="flex flex-col items-center justify-center gap-4 mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-white text-center">
                        Nos formations les plus demandées
                    </h2>
                    <p className="text-white/60 text-center max-w-2xl text-lg">
                        Conçues par des investisseurs actifs sur le terrain ivoirien
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {topFormations.map((formation, index) => (
                        <Link to={`/formations/${formation.id}`} key={index} className="bg-[#1a1a1a] rounded-2xl border border-white/10 overflow-hidden flex flex-col group hover:border-brand/50 transition-colors shadow-xl cursor-pointer">
                            <div className="h-48 relative overflow-hidden">
                                <img src={formation.image} alt={formation.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />
                                {formation.badge && (
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-brand px-3 py-1 rounded-full text-xs font-semibold border border-brand/20">
                                        {formation.badge}
                                    </div>
                                )}
                            </div>
                            <div className="p-6 flex flex-col flex-1 relative -mt-8 z-10">
                                <div className="w-14 h-14 bg-[#141414] border border-white/10 rounded-xl shadow-lg flex items-center justify-center text-3xl mb-4">
                                    {formation.icon}
                                </div>
                                <div className="text-brand text-sm font-semibold mb-2">{formation.category}</div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand transition-colors">
                                    {formation.title}
                                </h3>
                                <p className="text-white/60 text-sm mb-6 flex-1">
                                    {formation.description}
                                </p>

                                <div className="space-y-3 pt-4 border-t border-white/10 mb-6 mt-auto">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-sm text-white/70">
                                            <span className="w-5 text-center mr-2">⏱️</span> {formation.duration}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-sm text-white/70">
                                            <span className="w-5 text-center mr-2">📊</span> Niveau: {formation.level}
                                        </div>
                                    </div>
                                    <div className="pt-2 flex items-center justify-between">
                                        <div className="text-xl font-bold text-white">{formation.price}</div>
                                        <div className="text-xs text-red-400 font-medium px-2 py-1 bg-red-500/10 rounded-md border border-red-500/20 animate-pulse">
                                            {formation.urgency}
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full py-3 bg-brand/10 group-hover:bg-brand text-brand group-hover:text-black font-semibold rounded-xl transition-colors duration-300 flex items-center justify-center">
                                    Voir le programme
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link to="/formations" className="inline-flex items-center justify-center px-8 py-3 w-fit bg-[#f9a825] hover:bg-[#f57f17] text-[#212121] font-semibold rounded-lg transition-colors duration-300">
                        Découvrir toutes les formations →
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
