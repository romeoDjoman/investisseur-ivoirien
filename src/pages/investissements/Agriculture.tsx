import { motion } from 'framer-motion';

export function Agriculture() {
    return (
        <div className="py-20 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white">Investissement Agricole</h1>
                <p className="text-white/70 max-w-2xl mx-auto text-lg">
                    Saisissez les opportunités dans le secteur agricole ivoirien.
                </p>
            </motion.div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <p className="text-white/80">L'agriculture est le moteur de l'économie. Investissez dans des cultures rentables et durables avec notre expertise technique.</p>
            </div>
        </div>
    );
}
