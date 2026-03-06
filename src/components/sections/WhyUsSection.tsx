import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function WhyUsSection() {
    const reasons = [
        {
            title: "Expertise terrain",
            description: "Nos formateurs investissent activement en Côte d'Ivoire. Ils connaissent les réalités locales."
        },
        {
            title: "Approche 100% pratique",
            description: "Cas réels, démarches concrètes, zéro théorie inutile. Passez à l'action."
        },
        {
            title: "Suivi personnalisé",
            description: "Vous n'êtes jamais seul après votre formation. Nos coachs sont à votre écoute."
        },
        {
            title: "Communauté active",
            description: "Rejoignez des centaines d'investisseurs qui partagent leurs expériences et bonnes pratiques."
        },
        {
            title: "Accessible partout",
            description: "Depuis Abidjan, Paris, New York ou Toronto, suivez nos programmes à votre rythme."
        }
    ];

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
            quote: "La formation BRVM est exceptionnelle. J'ai pu ouvrir mon compte titres depuis Montréal et commencer à bâtir en toute confiance.",
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
        <section className="py-24 bg-[#1a1a1a] border-y border-white/5 relative z-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="max-w-7xl mx-auto px-6"
            >
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    <div className="w-full lg:w-5/12 relative order-2 lg:order-1">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&q=80&w=800"
                                alt="Investir en Côte d'Ivoire"
                                loading="lazy"
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-[#1a1a1a]/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-4 hover:border-brand/40 transition-colors">
                                    <div className="w-12 h-12 bg-brand/20 rounded-full flex items-center justify-center text-brand text-xl shadow-[0_0_15px_rgba(46,125,50,0.3)]">
                                        🤝
                                    </div>
                                    <div>
                                        <p className="text-white font-bold">Un accompagnement</p>
                                        <p className="text-white/60 text-sm">sur-mesure et fiable</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-7/12 flex flex-col gap-8 order-1 lg:order-2">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-4">
                                Pourquoi<br />
                                <span className="text-brand">L'Investisseur Ivoirien ?</span>
                            </h2>
                            <p className="text-white/60 text-lg max-w-xl">
                                Nous avons réuni les meilleurs experts et les ressources les plus concrètes pour vous permettre d'investir sereinement au pays, où que vous soyez.
                            </p>
                            <div className="w-20 h-2 bg-brand rounded-full mt-6"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {reasons.map((reason, index) => (
                                <div key={index} className="flex gap-4 items-start bg-white/5 p-5 rounded-xl border border-white/5 hover:border-brand/30 transition-colors group">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand/10 text-brand flex items-center justify-center mt-1 group-hover:bg-brand group-hover:text-black transition-colors">
                                        ✓
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold text-base mb-1">{reason.title}</h3>
                                        <p className="text-white/50 text-sm leading-relaxed">{reason.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Scrolling Testimonials Marquee */}
                <div className="mt-32 pt-16 border-t border-white/5">
                    <div className="flex flex-col items-center justify-center gap-4 mb-10">
                        <h2 className="text-2xl md:text-4xl font-serif text-white text-center">
                            Ils ont investi. Voici leur histoire.
                        </h2>
                    </div>

                    <style>{`
                        @keyframes scroll {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                        .animate-marquee {
                            animation: scroll 30s linear infinite;
                        }
                        .animate-marquee:hover {
                            animation-play-state: paused;
                        }
                    `}</style>

                    <div className="relative overflow-hidden pb-4">
                        {/* Gradient masks */}
                        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#1a1a1a] to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none" />

                        <div className="flex gap-6 w-max animate-marquee">
                            {/* Duplicate array for seamless infinite scroll */}
                            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testi, i) => (
                                <Link to="/temoignages" key={i} className="bg-[#141414] rounded-2xl p-6 border border-white/10 w-80 md:w-96 flex-shrink-0 flex flex-col justify-between hover:border-brand/50 transition-colors cursor-pointer group block">
                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60 mb-3 group-hover:bg-brand/10 group-hover:text-brand group-hover:border-brand/20 transition-colors">
                                            {testi.sector}
                                        </span>
                                        <p className="text-white/80 italic text-sm md:text-base leading-relaxed">
                                            "{testi.quote}"
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 pt-4 border-t border-white/10 mt-auto">
                                        <img src={testi.image} alt={testi.name} loading="lazy" className="w-10 h-10 rounded-full object-cover" />
                                        <div>
                                            <p className="text-white font-medium text-sm">{testi.name}, {testi.age} ans</p>
                                            <p className="text-white/50 text-xs">{testi.location}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <Link to="/temoignages" className="inline-flex items-center gap-2 text-brand hover:text-white transition-colors uppercase tracking-wider text-sm font-semibold group cursor-pointer">
                            Voir plus de témoignages
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
