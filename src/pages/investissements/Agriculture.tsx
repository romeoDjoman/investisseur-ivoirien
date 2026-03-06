import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, Sprout, Tractor, SunDim } from 'lucide-react';

export function Agriculture() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-black relative">
            <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[#2e7d32]/20 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <div className="inline-block p-4 rounded-2xl bg-[#2e7d32]/20 text-[#4caf50] mb-6 border border-[#2e7d32]/30">
                        <Leaf className="w-12 h-12" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-6 text-white uppercase leading-tight">
                        Investir dans <br /><span className="text-[#4caf50]">L'Agriculture</span>
                    </h1>
                    <p className="text-white/70 max-w-3xl mx-auto text-xl font-light">
                        La terre ne ment pas. L'agro-business est l'un des secteurs les plus porteurs pour l'autosuffisance et l'exportation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center hover:border-[#4caf50]/30 transition-colors"
                    >
                        <Sprout className="w-10 h-10 text-[#4caf50] mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-3">Cultures de Rente</h3>
                        <p className="text-white/60">Cacao, hévéa, anacarde : des investissements sur le long terme très lucratifs.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center hover:border-[#4caf50]/30 transition-colors"
                    >
                        <SunDim className="w-10 h-10 text-[#4caf50] mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-3">Vivrier</h3>
                        <p className="text-white/60">Banane, manioc, maraîcher : un cycle court parfait pour un retour sur investissement rapide.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center hover:border-[#4caf50]/30 transition-colors"
                    >
                        <Tractor className="w-10 h-10 text-[#4caf50] mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-3">Agro-industrie</h3>
                        <p className="text-white/60">Multipliez votre marge en transformant directement vos récoltes sur place.</p>
                    </motion.div>
                </div>

                <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-8 md:p-12 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
                    <div className="absolute -left-20 -top-20 text-[200px] opacity-5 pointer-events-none">🌾</div>
                    <div className="w-full md:w-1/2 relative z-10">
                        <img src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800" alt="Agriculture" className="rounded-2xl shadow-2xl border border-white/10 object-cover aspect-video w-full" />
                    </div>
                    <div className="w-full md:w-1/2 relative z-10">
                        <h2 className="text-3xl font-serif text-white mb-6">Formation : Investir dans les Parcelles Agricoles</h2>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-white/80"><span className="text-[#4caf50]">✓</span> Identifier les bonnes terres agricoles</li>
                            <li className="flex items-center gap-3 text-white/80"><span className="text-[#4caf50]">✓</span> Budgetisation et matériel agricole</li>
                            <li className="flex items-center gap-3 text-white/80"><span className="text-[#4caf50]">✓</span> Trouver du personnel fiable et gérer à distance</li>
                        </ul>
                        <Link to="/formations" className="inline-block px-8 py-4 bg-[#4caf50] text-black font-bold uppercase tracking-wide rounded-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(76,175,80,0.3)]">
                            Découvrir le module
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
