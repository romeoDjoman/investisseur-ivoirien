import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
    {
        question: "Je vis en France/Diaspora, le contenu est-il adapté pour moi ?",
        answer: "Absolument. 80% de nos membres vivent en Europe ou en Amérique du Nord. Nos formations sont conçues pour vous montrer comment investir, gérer et sécuriser vos biens à distance sans vous faire arnaquer."
    },
    {
        question: "Les formations sont-elles accessibles à vie ?",
        answer: "Oui, une fois inscrit, vous avez accès à vie à la plateforme, y compris à toutes les futures mises à jour gratuites de la formation choisie."
    },
    {
        question: "Quels sont les moyens de paiement acceptés ?",
        answer: "Nous acceptons les cartes bancaires (Visa, Mastercard, via Stripe) sécurisées, Paypal, ainsi que les paiements Mobile Money (Wave, Orange Money) si vous payez depuis la Côte d'Ivoire. Nous proposons également un paiement en 2 ou 3 fois pour les accompagnements Premium."
    },
    {
        question: "Y a-t-il un suivi personnalisé après les formations vidéo ?",
        answer: "Oui ! Vous avez accès à un groupe privé avec les formateurs et les autres investisseurs pour poser toutes vos questions. Pour un suivi sur-mesure, vous pouvez choisir notre formule Coaching."
    }
];

export function HomeFAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-[#141414] border-t border-white/5 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto px-6"
            >
                <div className="flex flex-col items-center justify-center gap-4 mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-serif text-white">
                        Vous avez des questions ?
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl">
                        Voici les réponses aux questions les plus fréquentes de la communauté.
                    </p>
                </div>

                <div className="space-y-4 mb-12">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className={`border ${isOpen ? 'border-brand/50 bg-[#1a1a1a]' : 'border-white/10 bg-white/5'} rounded-2xl overflow-hidden transition-all duration-300`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                                >
                                    <span className="text-white font-medium pr-8">{faq.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-white/50 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-brand' : ''}`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 pt-2 text-white/60 leading-relaxed border-t border-white/5 mx-6">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="bg-[#1a1a1a] rounded-2xl border border-white/10 p-8 text-center flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-white font-bold mb-1">Encore une question ?</h3>
                        <p className="text-white/60 text-sm">Notre équipe vous répond sur WhatsApp.</p>
                    </div>
                    <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl transition-colors whitespace-nowrap">
                        <MessageCircle className="w-5 h-5" />
                        Nous contacter
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
