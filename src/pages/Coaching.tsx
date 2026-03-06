import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Coaching() {
    const formulas = [
        {
            title: "Coaching Individuel",
            target: "Projet précis, besoin d'un suivi sur-mesure",
            format: "Visioconférence 1-to-1",
            frequency: "À la demande",
            included: ["Bilan initial", "Plan d'action", "Suivi email 30j"],
            price: "150.000 FCFA",
            urgency: "3 créneaux restants",
            cta: "Réserver une session"
        },
        {
            title: "Coaching Collectif",
            target: "Débutants souhaitant apprendre en groupe",
            format: "Sessions en groupe (6–12 pers.)",
            frequency: "2x / mois",
            included: ["Accès aux sessions", "Replay", "Groupe WhatsApp"],
            price: "50.000 FCFA / mois",
            urgency: "Prochaine cohorte J-5",
            cta: "Rejoindre un groupe"
        },
        {
            title: "Suivi Premium",
            target: "Investisseurs BRVM ou parcelle agricole actifs",
            format: "Suivi continu mensuel",
            frequency: "Hebdomadaire",
            included: ["Alertes marché", "Rapport mensuel", "Accès direct au coach"],
            price: "Sur devis",
            urgency: "Liste d'attente (2 sem.)",
            cta: "S'abonner au suivi"
        }
    ];

    const faqs = [
        {
            q: "Quelle est la différence entre une formation et un coaching ?",
            a: "La formation vous donne les connaissances. Le coaching vous aide à les appliquer à votre situation personnelle, avec un expert qui connaît votre projet."
        },
        {
            q: "Je suis dans la diaspora, puis-je bénéficier du coaching ?",
            a: "Absolument. Toutes nos sessions se font en visioconférence. Nous adaptons les horaires aux fuseaux de Paris, Montréal et Abidjan."
        },
        {
            q: "Combien de temps avant de voir des résultats ?",
            a: "Cela dépend du secteur et de votre situation. La plupart de nos accompagnés font leur premier investissement concret dans les 3 à 6 mois suivant le début du coaching."
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
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white uppercase leading-tight">
                        Coaching &<br />Accompagnement<br />Personnalisé
                    </h1>
                    <p className="text-xl text-white/80 max-w-3xl leading-relaxed font-light mt-4">
                        Vous n'êtes pas seul. Nos coachs vous accompagnent de votre première question jusqu'à votre premier investissement — et au-delà.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {formulas.map((formula, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="bg-[#1a1a1a] rounded-3xl border border-white/10 relative flex flex-col group hover:border-brand/50 transition-all hover:-translate-y-2 duration-300 overflow-hidden"
                        >
                            <Link to="/contact" className="w-full h-full p-8 flex flex-col cursor-pointer block">
                                {index === 2 && (
                                    <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand text-black px-4 py-1 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(46,125,50,0.4)]">
                                        Recommandé
                                    </div>
                                )}
                                <h3 className="text-2xl font-serif text-white mb-2">{formula.title}</h3>
                                <p className="text-brand text-sm font-semibold mb-8 h-10">{formula.target}</p>

                                <div className="flex-1 space-y-6 mb-8">
                                    <div>
                                        <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Format</p>
                                        <p className="text-white/90">{formula.format}</p>
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Fréquence</p>
                                        <p className="text-white/90 font-medium">{formula.frequency}</p>
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Inclus</p>
                                        <ul className="space-y-3">
                                            {formula.included.map((item, i) => (
                                                <li key={i} className="flex items-start text-white/70">
                                                    <span className="text-brand mr-3 mt-1 text-xs">◆</span>
                                                    <span className="font-light">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mb-6 pt-6 border-t border-white/10 flex flex-col justify-end">
                                    <div className="text-2xl font-bold text-white mb-2">{formula.price}</div>
                                    {formula.urgency && (
                                        <div className="text-xs text-red-400 font-medium px-3 py-1 bg-red-500/10 rounded-md border border-red-500/20 animate-pulse w-fit">
                                            {formula.urgency}
                                        </div>
                                    )}
                                </div>

                                <div className={`w-full py-4 text-center font-bold rounded-xl transition-all duration-300 uppercase text-sm tracking-wide ${index === 2 ? 'bg-brand text-black shadow-[0_0_30px_rgba(46,125,50,0.3)] group-hover:bg-brand/90' : 'bg-white/5 text-white group-hover:bg-white/10 border border-white/10 group-hover:border-white/30'}`}>
                                    {formula.cta}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto bg-[#1a1a1a]/50 p-8 md:p-12 rounded-3xl border border-white/5"
                >
                    <h2 className="text-3xl font-serif text-white mb-10 text-center">Questions Fréquentes</h2>
                    <div className="space-y-8">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="border-b border-white/10 pb-8 last:border-0 last:pb-0"
                            >
                                <h4 className="text-xl font-medium text-white mb-3">{faq.q}</h4>
                                <p className="text-white/60 leading-relaxed font-light">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
