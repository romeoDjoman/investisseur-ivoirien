import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Car, Route, Cog, CreditCard } from 'lucide-react';

export function Mobilite() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-black relative">
            <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-yellow-500/20 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <div className="inline-block p-4 rounded-2xl bg-yellow-500/10 text-yellow-500 mb-6 border border-yellow-500/20">
                        <Car className="w-12 h-12" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-6 text-white uppercase leading-tight">
                        Investir dans la <br /><span className="text-yellow-500">Mobilité & VTC</span>
                    </h1>
                    <p className="text-white/70 max-w-3xl mx-auto text-xl font-light">
                        Abidjan bouge. Répondez à une demande explosive avec les applications VTC (Yango, Uber) ou en créant votre propre flotte de transport urbain ou interurbain.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center hover:border-yellow-500/30 transition-colors"
                    >
                        <Route className="w-10 h-10 text-yellow-500 mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-3">Demande Forte</h3>
                        <p className="text-white/60">Une population croissante et des embouteillages qui favorisent les solutions de mobilité rapides et confortables.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center hover:border-yellow-500/30 transition-colors"
                    >
                        <CreditCard className="w-10 h-10 text-yellow-500 mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-3">Cash-flow Quotidien</h3>
                        <p className="text-white/60">Générez des revenus journaliers (recette) intéressants en gérant bien vos chauffeurs et vos charges.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center hover:border-yellow-500/30 transition-colors"
                    >
                        <Cog className="w-10 h-10 text-yellow-500 mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-3">Gestion de Flotte</h3>
                        <p className="text-white/60">Mise en place de traceurs GPS et de contrats solides pour sécuriser votre investissement à distance.</p>
                    </motion.div>
                </div>

                <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-8 md:p-12 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
                    <div className="absolute -left-20 -top-20 text-[200px] opacity-5 pointer-events-none">🚗</div>
                    <div className="w-full md:w-1/2 relative z-10">
                        <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800" alt="Mobilité" className="rounded-2xl shadow-2xl border border-white/10 object-cover aspect-video w-full" />
                    </div>
                    <div className="w-full md:w-1/2 relative z-10">
                        <h2 className="text-3xl font-serif text-white mb-6">Formation : Lancer une activité VTC / Transport</h2>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-white/80"><span className="text-yellow-500">✓</span> Financement et choix du véhicule idéal</li>
                            <li className="flex items-center gap-3 text-white/80"><span className="text-yellow-500">✓</span> Recrutement et contrat avec le chauffeur</li>
                            <li className="flex items-center gap-3 text-white/80"><span className="text-yellow-500">✓</span> Entretien, assurance et rentabilité</li>
                        </ul>
                        <Link to="/formations" className="inline-block px-8 py-4 bg-yellow-500 text-black font-bold uppercase tracking-wide rounded-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                            Voir la formation
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
