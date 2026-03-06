import { Link } from 'react-router-dom';

export function HomeTestimonialsSection() {
    const testimonials = [
        {
            quote: "Grâce à L'Investisseur Ivoirien, j'ai acheté ma première parcelle agricole à Yamoussoukro sans me faire arnaquer. Le suivi administratif était précieux.",
            name: "Kouamé A.",
            age: 38,
            location: "Paris 🇫🇷",
            sector: "Agriculture",
            image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=200&h=200"
        },
        {
            quote: "La formation BRVM est exceptionnelle. J'ai pu ouvrir mon compte titres depuis Montréal et commencer à bâtir mon portefeuille en toute confiance.",
            name: "Awa D.",
            age: 32,
            location: "Montréal 🇨🇦",
            sector: "Bourse",
            image: "https://images.unsplash.com/photo-1531123897727-8f129e1b4492?auto=format&fit=crop&q=80&w=200&h=200"
        },
        {
            quote: "Le coaching m'a permis de structurer mon projet de VTC à Abidjan. Les conseils sur le financement et l'amortissement valent de l'or.",
            name: "Cédric M.",
            age: 41,
            location: "Abidjan 🇨🇮",
            sector: "Mobilité",
            image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=200&h=200"
        }
    ];

    return (
        <section className="py-24 bg-[#141414] border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center justify-center gap-4 mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-white text-center">
                        Ils ont investi. Voici leur histoire.
                    </h2>
                    <p className="text-white/60 text-center max-w-2xl text-lg">
                        Des parcours inspirants d'ivoiriens qui ont franchi le pas grâce à notre accompagnement.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testi, i) => (
                        <div key={i} className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/10 relative">
                            <span className="absolute top-4 right-6 text-6xl text-brand/20 font-serif">"</span>
                            <div className="mb-6">
                                <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60 mb-4">
                                    {testi.sector}
                                </span>
                                <p className="text-white/80 italic leading-relaxed relative z-10">
                                    {testi.quote}
                                </p>
                            </div>
                            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                                <img src={testi.image} alt={testi.name} className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <p className="text-white font-medium">{testi.name}, {testi.age} ans</p>
                                    <p className="text-white/50 text-sm">{testi.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link to="/temoignages" className="inline-flex items-center gap-2 text-brand hover:text-white transition-colors uppercase tracking-wider text-sm font-semibold group cursor-pointer">
                        Voir plus de témoignages
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
