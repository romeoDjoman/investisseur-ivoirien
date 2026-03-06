import { motion } from 'framer-motion';

export function Coaching() {
    return (
        <div className="py-20 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white">Coaching Personnalisé</h1>
                <p className="text-white/70 max-w-2xl mx-auto text-lg">
                    Un accompagnement sur-mesure pour atteindre vos objectifs financiers rapidement.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-white/80">
                    <p>Notre coaching personnalisé vous permet de bénéficier de l'expertise de nos conseillers pour structurer votre patrimoine.</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Bilan patrimonial complet</li>
                        <li>Stratégie d'investissement sur-mesure</li>
                        <li>Suivi trimestriel</li>
                        <li>Accès direct à votre coach</li>
                    </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                    <h3 className="text-2xl font-serif text-white mb-6">Réserver une session</h3>
                    <button className="w-full py-4 bg-brand text-black rounded-xl font-medium hover:bg-brand/90 transition-colors">
                        Prendre rendez-vous
                    </button>
                </div>
            </div>
        </div>
    );
}
