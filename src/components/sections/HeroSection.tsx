import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
    {
        image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=1200",
        title: "Toutes les clés pour investir en\nCôte d'Ivoire",
        description: "Formations, coaching et accompagnement sur mesure pour la diaspora et les résidents qui veulent investir intelligemment : immobilier, bourse, agriculture et plus.",
        stats: "+ de 500 accompagnés"
    },
    {
        image: "https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&q=80&w=1200",
        title: "L'Immobilier au pays\nen toute sécurité",
        description: "Apprenez à vérifier les titres fonciers, éviter les arnaques et acquérir des terrains avec l'accompagnement d'experts terrain certifiés.",
        stats: "100+ transactions"
    },
    {
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
        title: "Agriculture & Élevage\nRentables",
        description: "Découvrez comment acquérir des terres arables et lancer une exploitation rentable même en vivant à des milliers de kilomètres.",
        stats: "8 secteurs clés"
    },
    {
        image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&q=80&w=1200",
        title: "Générer des revenus\navec la BRVM",
        description: "Initiez-vous à la Bourse Régionale des Valeurs Mobilières et construisez un portefeuille solide pour préparer votre avenir financier.",
        stats: "95% de réussite"
    }
];

const carouselVariants: any = {
    enter: (index: number) => {
        const type = index % 4;
        if (type === 0) return { opacity: 0, scale: 1.1 };
        if (type === 1) return { opacity: 0, x: 50 };
        if (type === 2) return { opacity: 0, y: 50 };
        return { opacity: 0, x: -50 };
    },
    center: {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        transition: { duration: 1.2 }
    },
    exit: (index: number) => {
        const type = index % 4;
        if (type === 0) return { opacity: 0, scale: 1.1, transition: { duration: 1.2 } };
        if (type === 1) return { opacity: 0, x: -50, transition: { duration: 1.2 } };
        if (type === 2) return { opacity: 0, y: -50, transition: { duration: 1.2 } };
        return { opacity: 0, x: 50, transition: { duration: 1.2 } };
    }
};

export function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroSlides.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [isHovered]);

    const nextSlide = () => setCurrentImageIndex((prev) => (prev + 1) % heroSlides.length);
    const prevSlide = () => setCurrentImageIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    return (
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden px-6">
            {/* Background glow effects */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

            <div className="max-w-7xl mx-auto text-center relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
                    {/* Main Left Section (Title + Slider equivalent) */}
                    <div
                        className="lg:col-span-2 relative bg-[#1a1a1a] rounded-2xl border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-2xl group min-h-[400px] lg:min-h-[480px]"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Left Side: Dynamic Text Content */}
                        <div className="w-full md:w-[55%] p-8 lg:p-12 flex flex-col justify-center relative z-10 bg-[#141414] overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex flex-col"
                                >
                                    <div className="bg-brand py-3 md:py-4 pl-6 pr-8 w-fit mb-6">
                                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold tracking-tight text-white leading-tight uppercase whitespace-pre-line">
                                            {heroSlides[currentImageIndex].title}
                                        </h1>
                                    </div>
                                    <p className="text-sm md:text-base text-white/80 mb-8 leading-relaxed max-w-lg">
                                        {heroSlides[currentImageIndex].description}
                                    </p>
                                    <div className="flex items-center gap-3 bg-white/10 w-fit px-4 py-2 rounded-full border border-white/20 select-none">
                                        <span className="text-brand">✦</span>
                                        <span className="text-xs font-medium text-white/90">{heroSlides[currentImageIndex].stats}</span>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Carousel Controls */}
                            <div className="flex gap-4 mt-8 lg:mt-12">
                                <button onClick={prevSlide} className="p-3 rounded-full bg-white/5 text-white hover:bg-brand hover:text-black transition-colors focus:outline-none border border-white/10 hover:border-brand">
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button onClick={nextSlide} className="p-3 rounded-full bg-white/5 text-white hover:bg-brand hover:text-black transition-colors focus:outline-none border border-white/10 hover:border-brand">
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Right Side: Image Carousel */}
                        <div className="w-full md:w-[45%] h-64 md:h-auto relative overflow-hidden order-first md:order-last border-l border-white/5">
                            <AnimatePresence mode="popLayout" custom={currentImageIndex}>
                                <motion.div
                                    key={currentImageIndex}
                                    custom={currentImageIndex}
                                    variants={carouselVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="absolute inset-0 bg-cover bg-center h-full w-full object-cover z-0"
                                    style={{ backgroundImage: `url(${heroSlides[currentImageIndex].image})` }}
                                />
                            </AnimatePresence>

                            {/* Gradient Overlay for subtle blending */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/80 via-transparent to-transparent pointer-events-none md:bg-gradient-to-l md:from-transparent md:via-[#141414]/20 md:to-[#141414] z-10" />

                            {/* Carousel Indicators on the image */}
                            <div className="absolute bottom-6 right-6 flex gap-2 z-20">
                                {heroSlides.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentImageIndex(idx)}
                                        className={`w-2 h-2 rounded-full transition-all focus:outline-none ${idx === currentImageIndex ? 'bg-brand scale-150 relative' : 'bg-white/50 hover:bg-white/90'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column (2 Cards) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:h-full">
                        {/* Card 1: Formations */}
                        <Link to="/formations" className="rounded-2xl border border-white/10 overflow-hidden group hover:border-brand/50 transition-all flex flex-col relative h-full min-h-[14rem] cursor-pointer">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                            <div className="p-6 flex flex-col flex-1 relative z-10 justify-end">
                                <h3 className="text-2xl font-bold text-white mb-2">Formations</h3>
                                <p className="text-white/70 text-sm mb-4 leading-snug line-clamp-2">
                                    Découvrez nos programmes
                                </p>
                                <div className="w-fit text-brand hover:text-white font-semibold transition-colors duration-300 text-sm flex items-center gap-1 group/link">
                                    Explorer <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </Link>

                        {/* Card 2: Conférences */}
                        <Link to="/conferences" className="rounded-2xl border border-white/10 overflow-hidden group hover:border-brand/50 transition-all flex flex-col relative h-full min-h-[14rem] cursor-pointer">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                            <div className="p-6 flex flex-col flex-1 relative z-10 justify-end">
                                <h3 className="text-2xl font-bold text-white mb-2">Conférences</h3>
                                <p className="text-white/70 text-sm mb-4 leading-snug line-clamp-2">
                                    Voir le calendrier et réserver sa place
                                </p>
                                <div className="w-fit text-brand hover:text-white font-semibold transition-colors duration-300 text-sm flex items-center gap-1 group/link">
                                    Explorer <span className="group-hover/link:translate-x-1 transition-transform">→</span>
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
                        <div className="rounded-2xl border border-white/10 overflow-hidden group hover:border-brand/50 transition-all flex flex-col relative h-56 cursor-pointer">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                            <div className="p-6 flex flex-col flex-1 relative z-10 justify-end">
                                <div className="text-2xl mb-2">🏠</div>
                                <h3 className="text-xl font-bold text-white mb-2">Immobilier</h3>
                                <p className="text-white/70 text-sm mb-4 leading-snug line-clamp-2">
                                    Achetez un terrain ou un bien en toute sécurité juridique
                                </p>
                                <Link to="/investissements/immobilier" className="w-fit text-brand hover:text-white font-semibold transition-colors duration-300 text-sm flex items-center gap-1 group/link">
                                    Explorer <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                </Link>
                            </div>
                        </div>

                        {/* Bourse */}
                        <div className="rounded-2xl border border-white/10 overflow-hidden group hover:border-brand/50 transition-all flex flex-col relative h-56 cursor-pointer">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                            <div className="p-6 flex flex-col flex-1 relative z-10 justify-end">
                                <div className="text-2xl mb-2">📈</div>
                                <h3 className="text-xl font-bold text-white mb-2">Bourse & BRVM</h3>
                                <p className="text-white/70 text-sm mb-4 leading-snug line-clamp-2">
                                    Investissez sur les marchés financiers africains et internationaux
                                </p>
                                <Link to="/investissements/bourse" className="w-fit text-brand hover:text-white font-semibold transition-colors duration-300 text-sm flex items-center gap-1 group/link">
                                    Explorer <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                </Link>
                            </div>
                        </div>

                        {/* Agriculture */}
                        <div className="rounded-2xl border border-white/10 overflow-hidden group hover:border-brand/50 transition-all flex flex-col relative h-56 cursor-pointer">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                            <div className="p-6 flex flex-col flex-1 relative z-10 justify-end">
                                <div className="text-2xl mb-2">🌾</div>
                                <h3 className="text-xl font-bold text-white mb-2">Agriculture</h3>
                                <p className="text-white/70 text-sm mb-4 leading-snug line-clamp-2">
                                    Acquérez et valorisez des parcelles agricoles
                                </p>
                                <Link to="/investissements/agriculture" className="w-fit text-brand hover:text-white font-semibold transition-colors duration-300 text-sm flex items-center gap-1 group/link">
                                    Explorer <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                </Link>
                            </div>
                        </div>

                        {/* Élevage */}
                        <div className="rounded-2xl border border-white/10 overflow-hidden group hover:border-brand/50 transition-all flex flex-col relative h-56 cursor-pointer">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                            <div className="p-6 flex flex-col flex-1 relative z-10 justify-end">
                                <div className="text-2xl mb-2">🐓</div>
                                <h3 className="text-xl font-bold text-white mb-2">Élevage</h3>
                                <p className="text-white/70 text-sm mb-4 leading-snug line-clamp-2">
                                    Lancez une activité avicole, porcine ou bovine rentable
                                </p>
                                <Link to="/formations" className="w-fit text-brand hover:text-white font-semibold transition-colors duration-300 text-sm flex items-center gap-1 group/link">
                                    Explorer <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                </Link>
                            </div>
                        </div>

                        {/* Mobilité */}
                        <div className="rounded-2xl border border-white/10 overflow-hidden group hover:border-brand/50 transition-all flex flex-col relative h-56 cursor-pointer">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                            <div className="p-6 flex flex-col flex-1 relative z-10 justify-end">
                                <div className="text-2xl mb-2">🚗</div>
                                <h3 className="text-xl font-bold text-white mb-2">Mobilité / VTC</h3>
                                <p className="text-white/70 text-sm mb-4 leading-snug line-clamp-2">
                                    Créez ou développez une activité de transport
                                </p>
                                <Link to="/investissements/mobilite" className="w-fit text-brand hover:text-white font-semibold transition-colors duration-300 text-sm flex items-center gap-1 group/link">
                                    Explorer <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                </Link>
                            </div>
                        </div>

                        {/* Entrepreneuriat */}
                        <div className="rounded-2xl border border-white/10 overflow-hidden group hover:border-brand/50 transition-all flex flex-col relative h-56 cursor-pointer">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                            <div className="p-6 flex flex-col flex-1 relative z-10 justify-end">
                                <div className="text-2xl mb-2">💼</div>
                                <h3 className="text-xl font-bold text-white mb-2">Entrepreneuriat</h3>
                                <p className="text-white/70 text-sm mb-4 leading-snug line-clamp-2">
                                    Structurez et financez votre projet d'entreprise
                                </p>
                                <Link to="/formations" className="w-fit text-brand hover:text-white font-semibold transition-colors duration-300 text-sm flex items-center gap-1 group/link">
                                    Explorer <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
