import { motion } from 'framer-motion';

export function HeroSection() {
    return (
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden px-6">
            {/* Background glow effects */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

            <div className="max-w-7xl mx-auto text-center relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
                    {/* Main Left Section (Title + Slider equivalent) */}
                    <div className="lg:col-span-2 relative aspect-[4/3] sm:aspect-video lg:aspect-[16/10] bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-end p-8 md:p-12">
                        {/* City/Architecture Background */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-luminosity" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                        {/* Prominent Orange Title Block */}
                        <div className="relative z-10">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1, duration: 0.8 }}
                                className="bg-brand py-6 pl-8 pr-12 w-fit mb-6"
                            >
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-sans font-bold tracking-tight text-white leading-none uppercase">
                                    COTE-D'<br />IVOIRE
                                </h1>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-lg md:text-xl text-white/80 max-w-xl"
                            >
                                L'Indépendance Financière. La plateforme qui vous donnera toutes les clefs dont vous avez besoin afin d'investir au pays.
                            </motion.p>
                        </div>
                    </div>

                    {/* Right Column (2 Cards) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:h-full">
                        {/* Card 1: Conférences */}
                        <div className="bg-white rounded-2xl overflow-hidden flex flex-col group h-full">
                            <div className="h-40 bg-[url('https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80')] bg-cover bg-center" />
                            <div className="p-6 flex flex-col flex-1 items-center text-center justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-2 uppercase">Conférences</h3>
                                    <p className="text-gray-600 text-sm">Réservez votre place dès maintenant !</p>
                                </div>
                                <div className="mt-4 w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-brand transition-colors cursor-pointer">
                                    <span className="text-brand text-2xl font-light">→</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Livret Gratuit */}
                        <div className="bg-white rounded-2xl overflow-hidden flex flex-col group h-full relative">
                            {/* Livret Cover preview taking right half */}
                            <div className="absolute right-0 top-0 bottom-0 w-[45%] bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center">
                                <div className="absolute inset-0 bg-gradient-to-b from-brand/90 to-orange-600/90 mix-blend-multiply" />
                                <div className="absolute bottom-4 left-4 right-4 text-white p-2">
                                    <div className="text-[10px] uppercase font-bold tracking-wider mb-1 opacity-80">Construire l'Afrique de Demain</div>
                                    <div className="text-xs font-bold leading-tight">10 BONNES RAISONS DE DEVENIR ENTREPRENEUR</div>
                                </div>
                            </div>

                            <div className="w-[55%] p-6 flex flex-col flex-1 items-center justify-between text-center bg-white z-10 h-full">
                                <div>
                                    <h3 className="text-lg font-bold text-black mb-2">Livret Gratuit</h3>
                                    <p className="text-gray-600 text-[13px] leading-tight">10 bonnes raisons de devenir entrepreneur</p>
                                </div>
                                <div className="mt-4 w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-brand transition-colors cursor-pointer">
                                    <span className="text-brand text-2xl font-light">→</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
