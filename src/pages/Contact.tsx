import { motion } from 'framer-motion';

export function Contact() {
    return (
        <div className="py-20 px-6 max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white">Contactez-nous</h1>
                <p className="text-white/70 text-lg">
                    Nous sommes à votre disposition pour répondre à toutes vos questions.
                </p>
            </motion.div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">Nom Complet</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors" placeholder="Votre nom" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
                            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors" placeholder="votre@email.com" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">Message</label>
                        <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors whitespace-pre-wrap" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                    </div>
                    <button type="button" className="w-full py-4 bg-brand text-black rounded-xl font-medium hover:bg-brand/90 transition-colors">
                        Envoyer le message
                    </button>
                </form>
            </div>
        </div>
    );
}
