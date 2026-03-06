import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
                                    Toutes les clés pour investir en<br />Côte d'Ivoire
                                </h1>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-lg md:text-xl text-white/80 max-w-xl mb-8"
                            >
                                Formations, coaching et accompagnement sur mesure pour la diaspora et les résidents qui veulent investir intelligemment : immobilier, bourse, agriculture, entrepreneuriat et bien plus.
                            </motion.p>
                            <div className="flex items-center gap-3 bg-white/10 w-fit px-4 py-2 rounded-full border border-white/20 select-none">
                                <span className="text-brand">✦</span>
                                <span className="text-sm text-white/90 font-medium">+ de 500 investisseurs accompagnés</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (2 Cards) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:h-full">
                        {/* Card 1: Conférences */}
                        <Link to="/conferences" className="bg-white rounded-2xl overflow-hidden flex flex-col group h-full cursor-pointer">
                            <div className="h-40 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] bg-cover bg-center" />
                            <div className="p-6 flex flex-col flex-1 items-center text-center justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-2 uppercase">Formations</h3>
                                    <p className="text-gray-600 text-sm">Découvrir les formations</p>
                                </div>
                                <div className="mt-4 w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-brand transition-colors cursor-pointer">
                                    <span className="text-brand text-2xl font-light">→</span>
                                </div>
                            </div>
                        </Link>

                        {/* Card 2: Livret Gratuit */}
                        <Link to="/contact" className="bg-white rounded-2xl overflow-hidden flex flex-col group h-full relative cursor-pointer">
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
                                    <h3 className="text-lg font-bold text-black mb-2">Prochaines Conférences</h3>
                                    <p className="text-gray-600 text-[13px] leading-tight">Voir le calendrier et réserver sa place</p>
                                </div>
                                <div className="mt-4 w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-brand transition-colors cursor-pointer">
                                    <span className="text-brand text-2xl font-light">→</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Services Cards (Replacing Social Proof) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="mt-20 pt-10 border-t border-white/5"
                >
                    <div className="flex flex-col items-center justify-center gap-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif text-white text-center">
                            Où souhaitez-vous investir ?
                        </h2>
                        <p className="text-white/60 text-center max-w-2xl">
                            Choisissez votre secteur et accédez aux formations, guides et accompagnements dédiés.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        {/* Immobilier */}
                        <div className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden group hover:border-brand/50 transition-all flex flex-col">
                            <div className="p-6 flex flex-col flex-1 bg-[#141414] relative z-10 gap-4">
                                <div className="text-4xl">🏠</div>
                                <h3 className="text-xl font-bold text-white">Immobilier</h3>
                                <p className="text-white/60 text-sm mb-4 leading-relaxed">
                                    Achetez un terrain ou un bien en toute sécurité juridique
                                </p>
                                <Link to="/investissements/immobilier" className="w-fit py-2 px-4 bg-brand/10 hover:bg-brand text-brand hover:text-black font-semibold rounded-lg transition-colors duration-300">
                                    Explorer
                                </Link>
                            </div>
                        </div>

                        {/* Bourse */}
                        <div className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden group hover:border-brand/50 transition-all flex flex-col">
                            <div className="p-6 flex flex-col flex-1 bg-[#141414] relative z-10 gap-4">
                                <div className="text-4xl">📈</div>
                                <h3 className="text-xl font-bold text-white">Bourse & BRVM</h3>
                                <p className="text-white/60 text-sm mb-4 leading-relaxed">
                                    Investissez sur les marchés financiers africains et internationaux
                                </p>
                                <Link to="/investissements/bourse" className="w-fit py-2 px-4 bg-brand/10 hover:bg-brand text-brand hover:text-black font-semibold rounded-lg transition-colors duration-300">
                                    Explorer
                                </Link>
                            </div>
                        </div>

                        {/* Agriculture */}
                        <div className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden group hover:border-brand/50 transition-all flex flex-col">
                            <div className="p-6 flex flex-col flex-1 bg-[#141414] relative z-10 gap-4">
                                <div className="text-4xl">🌾</div>
                                <h3 className="text-xl font-bold text-white">Agriculture</h3>
                                <p className="text-white/60 text-sm mb-4 leading-relaxed">
                                    Acquérez et valorisez des parcelles agricoles en Côte d'Ivoire
                                </p>
                                <Link to="/investissements/agriculture" className="w-fit py-2 px-4 bg-brand/10 hover:bg-brand text-brand hover:text-black font-semibold rounded-lg transition-colors duration-300">
                                    Explorer
                                </Link>
                            </div>
                        </div>

                        {/* Élevage */}
                        <div className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden group hover:border-brand/50 transition-all flex flex-col">
                            <div className="p-6 flex flex-col flex-1 bg-[#141414] relative z-10 gap-4">
                                <div className="text-4xl">🐓</div>
                                <h3 className="text-xl font-bold text-white">Élevage</h3>
                                <p className="text-white/60 text-sm mb-4 leading-relaxed">
                                    Lancez une activité avicole, porcine ou bovine rentable
                                </p>
                                <Link to="/formations" className="w-fit py-2 px-4 bg-brand/10 hover:bg-brand text-brand hover:text-black font-semibold rounded-lg transition-colors duration-300">
                                    Explorer
                                </Link>
                            </div>
                        </div>

                        {/* Mobilité */}
                        <div className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden group hover:border-brand/50 transition-all flex flex-col">
                            <div className="p-6 flex flex-col flex-1 bg-[#141414] relative z-10 gap-4">
                                <div className="text-4xl">🚗</div>
                                <h3 className="text-xl font-bold text-white">Mobilité / VTC</h3>
                                <p className="text-white/60 text-sm mb-4 leading-relaxed">
                                    Créez ou développez une activité de transport
                                </p>
                                <Link to="/investissements/mobilite" className="w-fit py-2 px-4 bg-brand/10 hover:bg-brand text-brand hover:text-black font-semibold rounded-lg transition-colors duration-300">
                                    Explorer
                                </Link>
                            </div>
                        </div>

                        {/* Entrepreneuriat */}
                        <div className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden group hover:border-brand/50 transition-all flex flex-col">
                            <div className="p-6 flex flex-col flex-1 bg-[#141414] relative z-10 gap-4">
                                <div className="text-4xl">💼</div>
                                <h3 className="text-xl font-bold text-white">Entrepreneuriat</h3>
                                <p className="text-white/60 text-sm mb-4 leading-relaxed">
                                    Structurez et financez votre projet d'entreprise
                                </p>
                                <Link to="/formations" className="w-fit py-2 px-4 bg-brand/10 hover:bg-brand text-brand hover:text-black font-semibold rounded-lg transition-colors duration-300">
                                    Explorer
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
