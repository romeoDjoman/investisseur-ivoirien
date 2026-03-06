import { motion } from 'framer-motion';

export function Conferences() {
    return (
        <div className="py-20 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white">Conférences</h1>
                <p className="text-white/70 max-w-2xl mx-auto text-lg">
                    Participez à nos événements en direct et rencontrez des experts de l'investissement.
                </p>
            </motion.div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h2 className="text-2xl font-serif text-white mb-6">Prochains Événements</h2>
                <div className="space-y-6">
                    <div className="border-l-4 border-brand pl-6 py-2">
                        <span className="text-brand text-sm font-medium">12 Avril 2026</span>
                        <h3 className="text-xl font-medium text-white mt-1">Sommet de l'Investissement Immobilier</h3>
                        <p className="text-white/60 mt-2">Rejoignez-nous à Abidjan pour une journée complète dédiée à l'immobilier.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
