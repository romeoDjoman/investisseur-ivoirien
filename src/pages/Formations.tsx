import { motion } from 'framer-motion';

export function Formations() {
    return (
        <div className="py-20 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white">Nos Formations</h1>
                <p className="text-white/70 max-w-2xl mx-auto text-lg">
                    Découvrez nos programmes de formation complets pour maîtriser vos investissements en Côte d'Ivoire.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Placeholder cards */}
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                        <div className="h-48 bg-white/10 rounded-xl mb-6"></div>
                        <h3 className="text-xl font-medium text-white mb-2">Formation Bourse CI</h3>
                        <p className="text-white/60 mb-6">Apprenez à investir sur la BRVM en toute sécurité.</p>
                        <button className="w-full py-3 bg-brand text-black rounded-xl font-medium hover:bg-brand/90 transition-colors">
                            En savoir plus
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
