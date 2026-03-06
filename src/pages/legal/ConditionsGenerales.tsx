import { motion } from 'framer-motion';

export function ConditionsGenerales() {
    return (
        <div className="py-20 px-6 max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <h1 className="text-4xl font-serif mb-6 text-white">Conditions Générales d'Utilisation</h1>
            </motion.div>
            <div className="text-white/80 space-y-6">
                <h2 className="text-2xl text-white font-serif mt-8">1. Objet</h2>
                <p>Les présentes conditions générales ont pour objet de définir les modalités de mise à disposition des services du site Investisseur Ivoirien.</p>
                <h2 className="text-2xl text-white font-serif mt-8">2. Accès au site</h2>
                <p>Le site est accessible à tout utilisateur disposant d'un accès à internet. Tous les coûts afférents à l'accès au service sont exclusivement à la charge de l'utilisateur.</p>
            </div>
        </div>
    );
}
