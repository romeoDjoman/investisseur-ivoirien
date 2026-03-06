import { Link } from 'react-router-dom';

export function HomeFormationsSection() {
    const topFormations = [
        {
            title: "Acheter un Terrain en Côte d'Ivoire",
            category: "Immobilier",
            description: "Apprenez toutes les démarches administratives officielles pour sécuriser l'achat d'un terrain en Côte d'Ivoire.",
            duration: "4h de vidéo + 1 guide PDF",
            level: "Débutant",
            badge: "🔥 Populaire",
            icon: "🏠"
        },
        {
            title: "Investir à la BRVM",
            category: "Bourse",
            description: "Formation complète pour investir sur la Bourse Régionale des Valeurs Mobilières d'Abidjan.",
            duration: "6h de vidéo + newsletter hebdo",
            level: "Débutant",
            badge: "🔥 Populaire",
            icon: "📈"
        },
        {
            title: "Investir dans les Parcelles Agricoles",
            category: "Agriculture",
            description: "Identification des zones à fort potentiel, processus d'acquisition sécurisé, et mise en valeur.",
            duration: "5h de vidéo + suivi 3 mois",
            level: "Débutant à Intermédiaire",
            badge: "⭐ Nouveau",
            icon: "🌾"
        }
    ];

    return (
        <section className="py-24 bg-[#141414] border-t border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
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
                        <div key={index} className="bg-[#1a1a1a] rounded-2xl border border-white/10 overflow-hidden flex flex-col group hover:border-brand/50 transition-colors">
                            <div className="p-6 flex flex-col flex-1 relative">
                                <div className="absolute top-4 right-4 bg-brand/10 text-brand px-3 py-1 rounded-full text-xs font-semibold">
                                    {formation.badge}
                                </div>
                                <div className="text-4xl mb-4">{formation.icon}</div>
                                <div className="text-brand text-sm font-semibold mb-2">{formation.category}</div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand transition-colors">
                                    {formation.title}
                                </h3>
                                <p className="text-white/60 text-sm mb-6 flex-1">
                                    {formation.description}
                                </p>

                                <div className="space-y-3 pt-4 border-t border-white/10 mb-6">
                                    <div className="flex items-center text-sm text-white/70">
                                        <span className="w-5 text-center mr-2">⏱️</span> {formation.duration}
                                    </div>
                                    <div className="flex items-center text-sm text-white/70">
                                        <span className="w-5 text-center mr-2">📊</span> Niveau: {formation.level}
                                    </div>
                                </div>

                                <Link to="/formations" className="w-full py-3 bg-brand/10 hover:bg-brand text-brand hover:text-black font-semibold rounded-xl transition-colors duration-300 flex items-center justify-center">
                                    Voir le programme
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link to="/formations" className="inline-flex items-center justify-center px-8 py-3 w-fit bg-[#f9a825] hover:bg-[#f57f17] text-[#212121] font-semibold rounded-lg transition-colors duration-300">
                        Découvrir toutes les formations →
                    </Link>
                </div>
            </div>
        </section>
    );
}
