import { motion } from 'framer-motion';

export function Temoignages() {
    return (
        <div className="py-20 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white">Retours d'Expériences</h1>
                <p className="text-white/70 max-w-2xl mx-auto text-lg">
                    Découvrez les succès de ceux qui nous ont fait confiance.
                </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                        <p className="text-white/80 italic mb-4">"Grâce à l'accompagnement d'Investisseur Ivoirien, j'ai pu réaliser mon premier investissement immobilier sécurisé à Abidjan."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-brand/20 rounded-full flex items-center justify-center text-brand font-bold">
                                M
                            </div>
                            <div>
                                <h4 className="text-white font-medium">Marc T.</h4>
                                <span className="text-white/50 text-sm">Investisseur Immobilier</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
