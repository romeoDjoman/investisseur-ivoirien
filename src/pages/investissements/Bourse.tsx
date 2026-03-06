import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LineChart, BarChart3, PieChart, Globe } from 'lucide-react';

export function Bourse() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-black relative">
            <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-600/20 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <div className="inline-block p-4 rounded-2xl bg-blue-500/10 text-blue-400 mb-6 border border-blue-500/20">
                        <LineChart className="w-12 h-12" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-6 text-white uppercase leading-tight">
                        Investir en <br /><span className="text-blue-400">Bourse & BRVM</span>
                    </h1>
                    <p className="text-white/70 max-w-3xl mx-auto text-xl font-light">
                        Faites travailler votre argent pour vous. Prenez des parts dans les plus grandes entreprises de l'UEMOA et touchez des dividendes.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center hover:border-blue-500/30 transition-colors"
                    >
                        <BarChart3 className="w-10 h-10 text-blue-400 mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-3">Croissance BRVM</h3>
                        <p className="text-white/60">Des rendements annuels souvent supérieurs à 8% sur de nombreuses valeurs solides de la région.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center hover:border-blue-500/30 transition-colors"
                    >
                        <PieChart className="w-10 h-10 text-blue-400 mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-3">Dividendes</h3>
                        <p className="text-white/60">Générez un revenu passif régulier chaque année sans avoir à gérer du personnel ou des locataires.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center hover:border-blue-500/30 transition-colors"
                    >
                        <Globe className="w-10 h-10 text-blue-400 mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-3">100% à distance</h3>
                        <p className="text-white/60">Ouvrez votre compte et passez vos ordres depuis votre téléphone ou ordinateur, où que vous soyez.</p>
                    </motion.div>
                </div>

                <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-8 md:p-12 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
                    <div className="w-full md:w-1/2 relative z-10">
                        <h2 className="text-3xl font-serif text-white mb-6">Formation : Maîtriser la BRVM</h2>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-white/80"><span className="text-blue-400">✓</span> Choix de la SGI (Société de Gestion)</li>
                            <li className="flex items-center gap-3 text-white/80"><span className="text-blue-400">✓</span> Analyser les états financiers des entreprises</li>
                            <li className="flex items-center gap-3 text-white/80"><span className="text-blue-400">✓</span> Stratégies: Day trading vs Buy & Hold</li>
                        </ul>
                        <Link to="/formations" className="inline-block px-8 py-4 bg-blue-500 text-white font-bold uppercase tracking-wide rounded-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                            Commencer à investir
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2 relative z-10">
                        <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800" alt="Bourse" className="rounded-2xl shadow-2xl border border-white/10 object-cover aspect-video w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}
