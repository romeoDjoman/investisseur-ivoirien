import { motion } from 'framer-motion';

export function Bourse() {
    return (
        <div className="py-20 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white">Investissement en Bourse</h1>
                <p className="text-white/70 max-w-2xl mx-auto text-lg">
                    Optimisez votre portefeuille sur la BRVM.
                </p>
            </motion.div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <p className="text-white/80">Apprenez à analyser les marchés financiers et à investir judicieusement dans les entreprises cotées de la région UEMOA.</p>
            </div>
        </div>
    );
}
