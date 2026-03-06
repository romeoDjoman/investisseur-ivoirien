import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };
    return (
        <div className="pt-32 pb-24 min-h-screen bg-black relative">
            <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-brand/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center gap-6 mb-20 text-center"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white uppercase leading-tight">
                        Parlons de votre<br />projet
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl leading-relaxed font-light mt-4">
                        Une question sur une formation ? Un projet d'investissement à partager ? Notre équipe vous répond dans les 24h.
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
                    {/* Infos Contact Direct */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-[#1a1a1a] rounded-3xl p-8 border border-white/5"
                        >
                            <h3 className="text-xl font-serif text-white mb-6">Contact direct</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center text-xl shrink-0">
                                        📱
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-xs uppercase tracking-wider mb-1">WhatsApp Business</p>
                                        <a href="https://wa.me/22500000000" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-brand transition-colors block">
                                            Discuter sur WhatsApp →
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center text-xl shrink-0">
                                        📧
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Email</p>
                                        <a href="mailto:contact@linvestisseur-ivoirien.com" className="text-white font-medium hover:text-brand transition-colors block break-all">
                                            contact@linvestisseur-ivoirien.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center text-xl shrink-0">
                                        🕐
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Disponibilité</p>
                                        <p className="text-white font-medium">Lun–Ven, 8h–18h</p>
                                        <p className="text-white/50 text-sm mt-1">Heure de GMT+0 (Abidjan)</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Social Proof Mini */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-brand/5 rounded-3xl p-8 border border-brand/10 text-center"
                        >
                            <p className="text-white/80 italic font-light mb-4">
                                "Une équipe réactive qui a su m'orienter vers la bonne formation pour mon projet de ferme pédagogique."
                            </p>
                            <p className="text-brand text-sm font-semibold">— Marc A., Abidjan</p>
                        </motion.div>
                    </div>

                    {/* Formulaire */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="w-full lg:w-2/3 bg-[#1a1a1a] rounded-3xl p-8 md:p-12 border border-white/5"
                    >
                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center p-12 text-center h-full min-h-[400px]">
                                <CheckCircle className="w-16 h-16 text-brand mb-6" />
                                <h3 className="text-2xl font-serif text-white mb-4">Message envoyé avec succès !</h3>
                                <p className="text-white/70">
                                    Notre équipe a bien reçu votre demande et vous répondra très rapidement à l'adresse email indiquée.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
                                <div className="flex flex-col md:flex-row gap-6 w-full">
                                    <div className="flex flex-col gap-2 flex-1">
                                        <label htmlFor="firstname" className="text-sm font-medium text-white/70">Prénom & Nom *</label>
                                        <input
                                            type="text"
                                            id="firstname"
                                            placeholder="Ex: Jean Kouadio"
                                            className="w-full px-5 py-3.5 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 flex-1">
                                        <label htmlFor="email" className="text-sm font-medium text-white/70">Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="jean@example.com"
                                            className="w-full px-5 py-3.5 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row gap-6 w-full">
                                    <div className="flex flex-col gap-2 flex-1">
                                        <label htmlFor="phone" className="text-sm font-medium text-white/70">Téléphone <span className="text-white/30">(Optionnel)</span></label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            placeholder="+225 00 00 00 00 00"
                                            className="w-full px-5 py-3.5 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 flex-1 relative">
                                        <label htmlFor="country" className="text-sm font-medium text-white/70">Pays de résidence *</label>
                                        <select
                                            id="country"
                                            className="w-full px-5 py-3.5 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all appearance-none cursor-pointer"
                                            required
                                            defaultValue=""
                                        >
                                            <option value="" disabled className="bg-black/90">Sélectionnez votre pays</option>
                                            <option value="ci" className="bg-black/90 text-white">Côte d'Ivoire</option>
                                            <option value="fr" className="bg-black/90 text-white">France</option>
                                            <option value="ca" className="bg-black/90 text-white">Canada</option>
                                            <option value="us" className="bg-black/90 text-white">États-Unis</option>
                                            <option value="uk" className="bg-black/90 text-white">Royaume-Uni</option>
                                            <option value="autre" className="bg-black/90 text-white">Autre (Diaspora)</option>
                                        </select>
                                        <div className="absolute top-[42px] right-5 pointer-events-none text-white/50 text-xs">▼</div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 w-full relative">
                                    <label htmlFor="subject" className="text-sm font-medium text-white/70">Sujet de votre message *</label>
                                    <select
                                        id="subject"
                                        className="w-full px-5 py-3.5 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all appearance-none cursor-pointer"
                                        required
                                        defaultValue=""
                                    >
                                        <option value="" disabled className="bg-black/90">De quoi souhaitez-vous parler ?</option>
                                        <option value="formations" className="bg-black/90 text-white">Information sur les Formations</option>
                                        <option value="coaching" className="bg-black/90 text-white">Réserver un Coaching</option>
                                        <option value="conferences" className="bg-black/90 text-white">Participer aux Conférences</option>
                                        <option value="partenariat" className="bg-black/90 text-white">Proposition de Partenariat</option>
                                        <option value="autre" className="bg-black/90 text-white">Autre demande</option>
                                    </select>
                                    <div className="absolute top-[42px] right-5 pointer-events-none text-white/50 text-xs">▼</div>
                                </div>

                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="message" className="text-sm font-medium text-white/70">Message *</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        placeholder="Détaillez votre projet ou votre question..."
                                        className="w-full px-5 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all resize-none"
                                        required
                                    />
                                </div>

                                <div className="pt-4">
                                    <button type="submit" className="w-full md:w-auto px-10 py-4 bg-brand hover:bg-brand/90 text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 uppercase tracking-wide text-sm shadow-[0_0_20px_rgba(249,168,37,0.3)]">
                                        Envoyer mon message
                                    </button>
                                    <p className="text-white/30 text-xs mt-4">
                                        * Champs obligatoires. En envoyant ce message, vous acceptez d'être recontacté(e) par l'équipe L'Investisseur Ivoirien.
                                    </p>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </div>

            </div>
        </div>
    );
}
