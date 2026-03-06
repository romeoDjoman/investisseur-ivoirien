import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, TrendingUp, Building2, MapPin } from 'lucide-react';

export function Immobilier() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-black relative">
            <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-brand/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <div className="inline-block p-4 rounded-2xl bg-brand/10 text-brand mb-6 border border-brand/20">
                        <Building2 className="w-12 h-12" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-6 text-white uppercase leading-tight">
                        Investir dans <br /><span className="text-brand">L'Immobilier</span>
                    </h1>
                    <p className="text-white/70 max-w-3xl mx-auto text-xl font-light">
                        Le foncier reste la valeur refuge n°1 en Côte d'Ivoire. Sécurisez votre patrimoine et générez des revenus locatifs durables.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center hover:border-brand/30 transition-colors"
                    >
                        <ShieldCheck className="w-10 h-10 text-brand mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-3">Sécurité Juridique</h3>
                        <p className="text-white/60">Maîtrisez les procédures (ACD, Titre Foncier) pour acheter sans risque.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center hover:border-brand/30 transition-colors"
                    >
                        <TrendingUp className="w-10 h-10 text-brand mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-3">Haut Rendement</h3>
                        <p className="text-white/60">Profitez de la forte demande locative à Abidjan et dans les villes de l'intérieur.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center hover:border-brand/30 transition-colors"
                    >
                        <MapPin className="w-10 h-10 text-brand mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-3">Zones Stratégiques</h3>
                        <p className="text-white/60">Découvrez les nouveaux quartiers en plein développement avant tout le monde.</p>
                    </motion.div>
                </div>

                <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-8 md:p-12 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
                    <div className="absolute -right-20 -top-20 text-[200px] opacity-5 pointer-events-none">🏠</div>
                    <div className="w-full md:w-1/2 relative z-10">
                        <h2 className="text-3xl font-serif text-white mb-6">Formation Complète : Acheter un Terrain en Côte d'Ivoire</h2>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-white/80"><span className="text-brand">✓</span> Démarches administratives officielles</li>
                            <li className="flex items-center gap-3 text-white/80"><span className="text-brand">✓</span> Éviter les pièges des ventes villageoises</li>
                            <li className="flex items-center gap-3 text-white/80"><span className="text-brand">✓</span> Contacts de notaires et géomètres fiables</li>
                        </ul>
                        <Link to="/formations" className="inline-block px-8 py-4 bg-brand text-black font-bold uppercase tracking-wide rounded-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(249,168,37,0.3)]">
                            Voir le programme
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2 relative z-10">
                        <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" alt="Immobilier" className="rounded-2xl shadow-2xl border border-white/10 object-cover aspect-video w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}
