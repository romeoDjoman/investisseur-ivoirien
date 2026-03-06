import { motion } from 'framer-motion';

export function Confidentialite() {
    return (
        <div className="py-20 px-6 max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <h1 className="text-4xl font-serif mb-6 text-white">Politique de Confidentialité</h1>
            </motion.div>
            <div className="text-white/80 space-y-6">
                <p>Date de dernière mise à jour : 1 Janvier 2026</p>
                <h2 className="text-2xl text-white font-serif mt-8">1. Collecte des données</h2>
                <p>Nous collectons les données que vous nous fournissez volontairement lors de la création de votre compte ou de votre inscription à notre newsletter.</p>
                <h2 className="text-2xl text-white font-serif mt-8">2. Utilisation des données</h2>
                <p>Vos données sont utilisées pour vous fournir nos services d'accompagnement et vous envoyer des informations pertinentes sur l'investissement.</p>
            </div>
        </div>
    );
}
