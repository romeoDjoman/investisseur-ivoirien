import { Link } from 'react-router-dom';

export function Temoignages() {
    const testimonials = [
        {
            quote: "Grâce à L'Investisseur Ivoirien, j'ai acheté ma première parcelle agricole à Yamoussoukro sans me faire arnaquer. Le suivi administratif était précieux.",
            name: "Kouamé A.",
            age: 38,
            location: "Paris 🇫🇷",
            sector: "Agriculture",
            videoDuration: "3:45",
            image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=800"
        },
        {
            quote: "La formation BRVM est exceptionnelle. J'ai pu ouvrir mon compte titres depuis Montréal et commencer à bâtir mon portefeuille en toute confiance.",
            name: "Awa D.",
            age: 32,
            location: "Montréal 🇨🇦",
            sector: "Bourse",
            videoDuration: "5:12",
            image: "https://images.unsplash.com/photo-1531123897727-8f129e1b4492?auto=format&fit=crop&q=80&w=800"
        },
        {
            quote: "Le coaching m'a permis de structurer mon projet de VTC à Abidjan. Les conseils sur le financement et l'amortissement valent de l'or.",
            name: "Cédric M.",
            age: 41,
            location: "Abidjan 🇨🇮",
            sector: "Mobilité",
            videoDuration: "4:20",
            image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=800"
        },
        {
            quote: "Je pensais que construire à distance était impossible. L'équipe m'a prouvé le contraire en m'accompagnant sur les vérifications de titrage et le choix du notaire.",
            name: "Fatou T.",
            age: 45,
            location: "Londres 🇬🇧",
            sector: "Immobilier",
            videoDuration: "6:05",
            image: "https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen bg-black relative">
            <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-brand/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center justify-center gap-6 mb-20 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white uppercase leading-tight">
                        Ils ont investi.<br />Écoutez-les.
                    </h1>
                    <p className="text-xl text-white/80 max-w-3xl leading-relaxed font-light mt-4">
                        Des témoignages authentiques d'ivoiriens de la diaspora et du pays qui partagent leur parcours, leurs succès et leurs leçons apprises.
                    </p>
                </div>

                {/* Filters Mock */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {['Tous', 'Immobilier', 'Agriculture', 'Bourse', 'Mobilité'].map((filter, i) => (
                        <button key={i} className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-white/20 text-white' : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'}`}>
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
                    {testimonials.map((testi, index) => (
                        <div key={index} className="bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/10 group cursor-pointer hover:border-brand/40 transition-colors">
                            {/* Video Thumbnail Mock */}
                            <div className="h-64 relative overflow-hidden">
                                <img
                                    src={testi.image}
                                    alt={testi.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-brand/90 flex items-center justify-center text-black pl-1 shadow-[0_0_30px_rgba(46,125,50,0.5)] transform group-hover:scale-110 transition-transform">
                                        ▶︎
                                    </div>
                                </div>
                                <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-xs font-mono">
                                    {testi.videoDuration}
                                </div>
                                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider shadow-lg">
                                    {testi.sector}
                                </div>
                            </div>

                            <div className="p-8">
                                <p className="text-xl text-white/90 italic font-serif leading-relaxed mb-6">
                                    "{testi.quote}"
                                </p>

                                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                                    <div>
                                        <p className="text-white font-bold">{testi.name}, {testi.age} ans</p>
                                        <p className="text-white/50 text-sm flex items-center gap-2 mt-1">
                                            <span>📍</span> {testi.location}
                                        </p>
                                    </div>
                                    <span className="text-brand text-sm hover:underline">Voir l'interview complet →</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Appel à témoignage */}
                <div className="max-w-4xl mx-auto bg-brand/10 px-8 py-12 md:p-16 rounded-3xl border border-brand/20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 blur-[100px] rounded-full"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-serif text-white mb-6">Partagez votre succès !</h2>
                        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                            Vous avez investi grâce à L'Investisseur Ivoirien ? Partagez votre histoire et inspirez des milliers d'autres personnes de la diaspora à sauter le pas.
                        </p>
                        <Link to="/contact" className="inline-flex px-10 py-4 bg-white text-black font-bold uppercase tracking-wide text-sm rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
                            Je partage mon témoignage
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
