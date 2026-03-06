import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Conferences() {
    const events = [
        {
            title: "Journée de l'Investisseur Ivoirien : Les opportunités de 2026",
            date: "14 Juin 2026",
            timeAbidjan: "14h00",
            timeParis: "16h00",
            format: "Hybride (Abidjan & En ligne)",
            speakers: [
                { name: "Marc T.", role: "Expert Immobilier", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100&q=80" },
                { name: "Sarah K.", role: "Analyste BRVM", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80" }
            ],
            program: "Panorama économique · Les secteurs qui explosent · Comment contourner l'inflation en investissant localement · Session Q&A",
            price: "Gratuit / 25.000 FCFA (VIP)",
            placesLeft: 45,
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Masterclass : Bâtir une ferme avicole rentable en 6 mois",
            date: "28 Juillet 2026",
            timeAbidjan: "18h00",
            timeParis: "20h00",
            format: "100% En Ligne",
            speakers: [
                { name: "Alex P.", role: "Agripreneur", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=100&h=100&q=80" }
            ],
            program: "Analyse du marché local · Structure des coûts · Modélisation du Business Plan · Erreurs fatales à éviter",
            price: "Accès Membres",
            placesLeft: "Illimité",
            image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen bg-black relative">
            <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-brand/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center gap-6 mb-20 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm mb-4">
                        <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
                        <span className="text-white/80">Prochains évènements ouverts</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white uppercase leading-tight">
                        Conférences &<br />Événements
                    </h1>
                    <p className="text-xl text-white/80 max-w-3xl leading-relaxed font-light mt-4">
                        Apprenez des meilleurs. Chaque conférence est une opportunité d'élargir votre réseau, de découvrir de nouvelles opportunités et de vous inspirer des parcours d'investisseurs qui ont réussi.
                    </p>
                </motion.div>

                <div className="space-y-12 max-w-5xl mx-auto mb-24">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-[#1a1a1a] rounded-3xl border border-white/10 overflow-hidden flex flex-col md:flex-row group hover:border-brand/50 transition-colors"
                        >
                            <div className="w-full flex flex-col md:flex-row block">
                                <div
                                    className="w-full md:w-2/5 h-64 md:h-auto bg-cover bg-center border-r border-white/5 relative"
                                    style={{ backgroundImage: `url(${event.image})` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                                        <div className="flex items-center gap-2 text-white/90 text-sm font-medium mb-1 drop-shadow-md">
                                            <span className="text-brand">📅</span> {event.date}
                                        </div>
                                        <div className="flex items-center gap-2 text-white/80 text-xs font-light drop-shadow-md">
                                            ⏱ {event.timeAbidjan} (Abidjan) / {event.timeParis} (Paris)
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 md:w-3/5 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-brand transition-colors pr-4">{event.title}</h3>
                                            <span className="shrink-0 px-3 py-1 bg-white/10 border border-white/10 rounded-full text-xs text-white/80 whitespace-nowrap">
                                                {event.format}
                                            </span>
                                        </div>

                                        <div className="mb-6">
                                            <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Intervenants</p>
                                            <div className="flex items-center gap-6">
                                                {event.speakers.map((s, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <img src={s.img} alt={s.name} className="w-10 h-10 rounded-full object-cover border border-white/20" />
                                                        <div>
                                                            <p className="text-sm text-white font-medium">{s.name}</p>
                                                            <p className="text-xs text-white/50">{s.role}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mb-8">
                                            <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Programme</p>
                                            <p className="text-white/70 text-sm leading-relaxed">{event.program}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
                                        <div>
                                            <p className="text-white font-bold">{event.price}</p>
                                            <p className="text-brand/80 text-xs">{event.placesLeft} {typeof event.placesLeft === 'number' ? 'places restantes' : ''}</p>
                                        </div>
                                        <Link to="/contact" className="w-full sm:w-auto px-8 py-3 bg-brand hover:bg-brand/90 text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 uppercase tracking-wide text-sm text-center">
                                            S'inscrire
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Replays Section (Mock) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto bg-gradient-to-r from-[#1a1a1a] to-[#222] p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden"
                >
                    <div className="absolute -top-24 -right-24 text-[300px] opacity-5">📼</div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-2xl font-serif text-white mb-3">Replays & Archives</h2>
                            <p className="text-white/60 max-w-lg mb-6 leading-relaxed">
                                Vous avez manqué une conférence ? Accédez instantanément à des dizaines d'heures de masterclass et d'analyses sectorielles en devenant membre premium.
                            </p>
                            <Link to="/formations" className="inline-flex items-center gap-2 text-brand hover:text-white transition-colors uppercase tracking-wider text-sm font-semibold group cursor-pointer border-b border-brand pb-1">
                                Devenir membre pour accéder
                                <span className="text-xl leading-none group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div >
    );
}
