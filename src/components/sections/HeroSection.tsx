import { motion } from 'framer-motion';
import { HeroCarousel } from '../ui/HeroCarousel';

export function HeroSection() {
    return (
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden px-6">
            {/* Background glow effects */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

            <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight mb-6 text-white leading-tight uppercase"
                >
                    L'Indépendance Financière <br />
                    <span className="text-white/40 normal-case">En Côte d'Ivoire.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-16"
                >
                    La plateforme qui vous donnera toutes les clefs dont vous avez besoin afin d'investir au pays, de sécuriser votre patrimoine et de réussir de façon pérenne.
                </motion.p>



                <HeroCarousel />

                {/* Services Cards (Replacing Social Proof) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="mt-20 pt-10 border-t border-white/5"
                >
                    <div className="flex items-center justify-center gap-6 mb-12">
                        <div className="h-[1px] bg-brand/50 flex-1 max-w-[200px]" />
                        <h2 className="text-xl md:text-2xl font-medium text-brand uppercase tracking-wider text-center">
                            L'Afrique Consciente
                        </h2>
                        <div className="h-[1px] bg-brand/50 flex-1 max-w-[200px]" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                        {/* Formations Card */}
                        <div className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden group hover:border-brand/50 transition-all flex flex-col">
                            <div className="h-40 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center brightness-75 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700" />
                            <div className="p-6 flex flex-col flex-1 text-center bg-[#141414] relative z-10">
                                <h3 className="text-xl font-bold text-white mb-4">Formations</h3>
                                <p className="text-white/60 text-sm mb-8 flex-1 leading-relaxed">
                                    Vous souhaitez <span className="font-semibold text-white">démarrer votre entreprise</span> ? Découvrez <span className="font-semibold text-white">les formations</span> que nous proposons.
                                </p>
                                <button className="w-full py-3 bg-brand/10 hover:bg-brand text-brand hover:text-black font-semibold rounded-xl transition-colors duration-300">
                                    Accéder
                                </button>
                            </div>
                        </div>

                        {/* Coaching Card */}
                        <div className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden group hover:border-brand/50 transition-all flex flex-col">
                            <div className="h-40 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] bg-cover bg-center brightness-75 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700" />
                            <div className="p-6 flex flex-col flex-1 text-center bg-[#141414] relative z-10">
                                <h3 className="text-xl font-bold text-white mb-4">Coaching</h3>
                                <p className="text-white/60 text-sm mb-8 flex-1 leading-relaxed">
                                    Profitez d'un <span className="font-semibold text-white">accompagnement personnalisé</span> pour approfondir vos connaissances.
                                </p>
                                <button className="w-full py-3 bg-brand/10 hover:bg-brand text-brand hover:text-black font-semibold rounded-xl transition-colors duration-300">
                                    Découvrir
                                </button>
                            </div>
                        </div>

                        {/* Conférences Card */}
                        <div className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden group hover:border-brand/50 transition-all flex flex-col">
                            <div className="h-40 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80')] bg-cover bg-center brightness-75 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700" />
                            <div className="p-6 flex flex-col flex-1 text-center bg-[#141414] relative z-10">
                                <h3 className="text-xl font-bold text-white mb-4">Conférences</h3>
                                <p className="text-white/60 text-sm mb-8 flex-1 leading-relaxed">
                                    Investir au pays arrive chez vous. Consultez le calendrier des évènements et <span className="font-semibold text-white">réservez votre place</span>.
                                </p>
                                <button className="w-full py-3 bg-brand/10 hover:bg-brand text-brand hover:text-black font-semibold rounded-xl transition-colors duration-300">
                                    Réserver
                                </button>
                            </div>
                        </div>

                        {/* Digitalisation Card */}
                        <div className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden group hover:border-brand/50 transition-all flex flex-col">
                            <div className="h-40 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80')] bg-cover bg-center brightness-75 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700" />
                            <div className="p-6 flex flex-col flex-1 text-center bg-[#141414] relative z-10">
                                <h3 className="text-xl font-bold text-white mb-4">Digitalisation</h3>
                                <p className="text-white/60 text-sm mb-8 flex-1 leading-relaxed">
                                    Vous souhaitez <span className="font-semibold text-white">gagner en visibilité</span> ou <span className="font-semibold text-white">sponsoriser notre contenu</span> ? Contactez-nous !
                                </p>
                                <button className="w-full py-3 bg-brand/10 hover:bg-brand text-brand hover:text-black font-semibold rounded-xl transition-colors duration-300">
                                    Nous contacter
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
