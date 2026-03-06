import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { formationsData } from '../data/formations';

export function Formations() {
    const [activeFilter, setActiveFilter] = useState('Tous');

    const categories = ['Tous', 'Immobilier', 'Bourse', 'Agriculture', 'Entrepreneuriat'];

    const formations = formationsData;

    const filteredFormations = activeFilter === 'Tous'
        ? formations
        : formations.filter(f => f.category === activeFilter);

    return (
        <div className="pt-32 pb-24 min-h-screen bg-black relative">
            {/* Background elements */}
            <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-brand/10 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center gap-6 mb-16 text-center"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white uppercase">
                        Nos Formations
                    </h1>
                    <p className="text-xl text-white/80 max-w-3xl leading-relaxed font-light">
                        Des formations créées par des praticiens pour vous donner les outils concrets dont vous avez besoin afin d'investir avec confiance en Côte d'Ivoire.
                    </p>
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-16"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${activeFilter === category
                                ? 'bg-brand text-black border-brand scale-105 shadow-[0_0_20px_rgba(46,125,50,0.3)]'
                                : 'bg-white/5 text-white/70 border-white/10 hover:border-white/30 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredFormations.map((formation, index) => (
                            <motion.div
                                key={formation.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-[#1a1a1a] rounded-2xl border border-white/10 overflow-hidden flex flex-col group hover:border-brand/50 transition-colors shadow-xl"
                            >
                                <Link to={`/formations/${formation.id}`} className="p-8 flex flex-col flex-1 relative cursor-pointer block">
                                    {formation.badge && (
                                        <div className="absolute top-4 right-4 bg-brand/10 text-brand px-3 py-1 rounded-full text-xs font-semibold border border-brand/20">
                                            {formation.badge}
                                        </div>
                                    )}
                                    <div className="text-5xl mb-6">{formation.icon}</div>
                                    <div className="text-brand text-sm font-bold uppercase tracking-wider mb-3">{formation.category}</div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand transition-colors leading-tight">
                                        {formation.title}
                                    </h3>
                                    <p className="text-white/60 text-sm mb-8 flex-1 leading-relaxed font-light">
                                        {formation.description}
                                    </p>

                                    <div className="space-y-4 pt-6 border-t border-white/10 mb-8 bg-[#141414]/50 -mx-8 px-8 pb-4">
                                        <div className="flex items-center text-sm text-white/80">
                                            <span className="w-6 text-center mr-3 text-lg opacity-80">⏱️</span> {formation.duration}
                                        </div>
                                        <div className="flex items-center text-sm text-white/80">
                                            <span className="w-6 text-center mr-3 text-lg opacity-80">📊</span> Niveau : <span className="ml-1 font-medium">{formation.level}</span>
                                        </div>
                                        <div className="pt-2 flex items-center justify-between">
                                            <div className="text-2xl font-bold text-white uppercase tracking-wider">{formation.price}</div>
                                            {formation.urgency && (
                                                <div className="text-xs text-red-400 font-medium px-2 py-1 bg-red-500/10 rounded-md border border-red-500/20 animate-pulse">
                                                    {formation.urgency}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="w-full py-4 bg-brand group-hover:bg-brand/90 text-black font-semibold rounded-xl transition-all duration-300 mt-auto uppercase tracking-wide text-sm text-center">
                                        Voir le programme
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div >
        </div >
    );
}
