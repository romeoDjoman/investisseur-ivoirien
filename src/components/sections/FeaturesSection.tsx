import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Home, Tractor, TrendingUp, Briefcase } from 'lucide-react';

const features = [
    {
        id: 'entrepreneuriat',
        title: 'Entrepreneuriat & Vente',
        description: 'Passez de l\'idée au business rentable. Apprenez à vendre comme un pro et développez vos sources de revenus au pays.',
        icon: Briefcase,
        imageColor: 'from-blue-500/20 to-purple-500/20',
    },
    {
        id: 'agriculture',
        title: 'Agriculture & Élevage',
        description: 'Focus Agrobusiness : Découvrez pourquoi le poulet de chair est l\'or vert de l\'Afrique et comment rentabiliser vos exploitations.',
        icon: Tractor,
        imageColor: 'from-brand/20 to-orange-500/20',
    },
    {
        id: 'finance',
        title: 'Éducation Financière',
        description: 'Bourse, épargne, et intelligence financière. Comprenez les règles de l\'argent pour bâtir un patrimoine solide.',
        icon: TrendingUp,
        imageColor: 'from-green-500/20 to-emerald-500/20',
    },
    {
        id: 'immobilier',
        title: 'Immobilier & Foncier',
        description: 'Sécurisation juridique, démarches administratives et achat de terrains avec un suivi complet et personnalisé.',
        icon: Home,
        imageColor: 'from-pink-500/20 to-rose-500/20',
    }
];

export function FeaturesSection() {
    const [activeFeature, setActiveFeature] = useState(features[0].id);

    return (
        <section className="py-24 px-6 relative max-w-7xl mx-auto border-t border-white/5" id="features">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Side: Accordion Menu */}
                <div className="flex flex-col gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 text-white leading-tight">
                            Découvrez nos offres <br />
                            <span className="text-white/40">Tout pour réussir votre investissement.</span>
                        </h2>
                    </motion.div>

                    <div className="flex flex-col gap-2 relative">
                        {/* Active indicator line */}
                        <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-white/5 rounded-full" />

                        {features.map((feature) => {
                            const isActive = activeFeature === feature.id;
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.id}
                                    onClick={() => setActiveFeature(feature.id)}
                                    className={cn(
                                        "relative pl-14 py-4 pr-6 rounded-2xl cursor-pointer transition-all duration-300",
                                        isActive ? "bg-white/5" : "hover:bg-white/[0.02]"
                                    )}
                                >
                                    <motion.div
                                        layoutId="activeIndicator"
                                        className="absolute left-[19px] top-6 w-[2px] bg-brand rounded-full z-10"
                                        initial={false}
                                        animate={{
                                            height: isActive ? 'calc(100% - 32px)' : '0%',
                                            opacity: isActive ? 1 : 0
                                        }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />

                                    <div className={cn(
                                        "absolute left-3.5 top-5 w-7 h-7 rounded-full flex items-center justify-center border z-20 transition-colors duration-300",
                                        isActive ? "bg-[#141414] border-brand text-brand" : "bg-[#141414] border-white/10 text-white/40"
                                    )}>
                                        <Icon className="w-3.5 h-3.5" />
                                    </div>

                                    <h3 className={cn(
                                        "text-xl font-medium mb-2 transition-colors duration-300",
                                        isActive ? "text-white" : "text-white/50"
                                    )}>
                                        {feature.title}
                                    </h3>

                                    <AnimatePresence initial={false}>
                                        {isActive && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-white/60 leading-relaxed pt-2">
                                                    {feature.description}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Side: Dynamic Display */}
                <div className="relative aspect-square lg:aspect-[4/3] rounded-3xl bg-[#1a1a1a] border border-white/10 overflow-hidden flex items-center justify-center shadow-2xl">
                    <AnimatePresence mode="wait">
                        {features.map((feature) => (
                            feature.id === activeFeature && (
                                <motion.div
                                    key={feature.id}
                                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className={cn(
                                        "absolute inset-4 rounded-2xl bg-gradient-to-br border border-white/5 flex flex-col overflow-hidden",
                                        feature.imageColor
                                    )}
                                >
                                    {/* Mock Window Header */}
                                    <div className="h-10 border-b border-white/10 bg-black/20 flex items-center px-4 gap-2 backdrop-blur-md">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-white/20" />
                                            <div className="w-3 h-3 rounded-full bg-white/20" />
                                            <div className="w-3 h-3 rounded-full bg-white/20" />
                                        </div>
                                        <div className="ml-4 px-3 py-1 bg-black/40 rounded-md text-[10px] text-white/50 font-mono">
                                            {feature.title}
                                        </div>
                                    </div>
                                    {/* Mock Window Content */}
                                    <div className="flex-1 p-6 flex flex-col gap-4 relative overflow-hidden">

                                        {feature.id === 'immobilier' && (
                                            <>
                                                <div className="grid grid-cols-2 gap-4 h-full">
                                                    <div className="col-span-2 h-1/2 rounded-xl bg-blue-500/10 border border-blue-500/20 p-4 flex flex-col">
                                                        <div className="text-xs text-blue-500/70 mb-2 uppercase tracking-wider font-semibold">Parcelles Sécurisées</div>
                                                        <div className="flex items-end gap-2 mb-4">
                                                            <div className="text-4xl font-serif text-white">45</div>
                                                            <div className="text-sm text-green-500 mb-1">Dossiers validés</div>
                                                        </div>
                                                        <div className="mt-auto flex gap-2">
                                                            <div className="flex-1 h-2 bg-blue-500/50 rounded-full" />
                                                            <div className="flex-1 h-2 bg-blue-500/50 rounded-full" />
                                                            <div className="flex-1 h-2 bg-white/10 rounded-full" />
                                                        </div>
                                                    </div>
                                                    <div className="rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-col gap-2">
                                                        <Home className="w-6 h-6 text-white/40" />
                                                        <div className="w-1/2 h-2 rounded bg-white/20" />
                                                    </div>
                                                    <div className="rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-col gap-2">
                                                        <div className="w-10 h-10 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center text-white/40">+</div>
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {feature.id === 'finance' && (
                                            <>
                                                <div className="flex justify-between items-center mb-4">
                                                    <div className="flex gap-3 items-center">
                                                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                                                            <TrendingUp className="w-4 h-4 text-green-500" />
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-medium text-white/90">Portefeuille Actif</div>
                                                            <div className="text-xs text-green-500">+12.5% YoY</div>
                                                        </div>
                                                    </div>
                                                    <div className="w-24 h-8 rounded-full bg-white/10" />
                                                </div>
                                                <div className="flex-1 rounded-xl border border-white/10 bg-black/40 relative overflow-hidden">
                                                    {/* Fake Line Chart SVG */}
                                                    <svg className="absolute inset-0 w-full h-full preserve-3d" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                        <defs>
                                                            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                                                                <stop offset="0%" stopColor="rgba(34, 197, 94, 0.4)" />
                                                                <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
                                                            </linearGradient>
                                                        </defs>
                                                        <motion.path
                                                            initial={{ pathLength: 0, opacity: 0 }}
                                                            animate={{ pathLength: 1, opacity: 1 }}
                                                            transition={{ duration: 1.5, ease: "easeInOut" }}
                                                            d="M0,80 Q10,70 20,75 T40,60 T60,40 T80,30 T100,10"
                                                            fill="none"
                                                            stroke="#22c55e"
                                                            strokeWidth="2"
                                                        />
                                                        <motion.path
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ delay: 1, duration: 1 }}
                                                            d="M0,80 Q10,70 20,75 T40,60 T60,40 T80,30 T100,10 L100,100 L0,100 Z"
                                                            fill="url(#grad)"
                                                        />
                                                    </svg>
                                                </div>
                                            </>
                                        )}

                                        {feature.id === 'entrepreneuriat' && (
                                            <>
                                                <div className="flex justify-between items-center mb-2">
                                                    <div className="w-1/3 h-6 rounded-md bg-white/10" />
                                                    <div className="w-1/4 h-6 rounded-md border border-white/20 bg-pink-500/20" />
                                                </div>
                                                <div className="w-full aspect-video rounded-xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden">
                                                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center mix-blend-luminosity" />
                                                    <div className="w-12 h-12 rounded-full border-2 border-brand bg-brand/20 flex items-center justify-center backdrop-blur-sm z-10">
                                                        <Briefcase className="w-5 h-5 text-brand" />
                                                    </div>
                                                </div>
                                                <div className="flex gap-4 mt-auto pt-2">
                                                    <div className="flex-1 h-12 rounded-lg bg-white/5 border border-white/5 flex flex-col justify-center px-4">
                                                        <div className="w-1/2 h-2 rounded bg-white/20 mb-2" />
                                                        <div className="w-3/4 h-2 rounded bg-white/10" />
                                                    </div>
                                                    <div className="flex-1 h-12 rounded-lg bg-white/5 border border-white/5 flex flex-col justify-center px-4">
                                                        <div className="w-1/2 h-2 rounded bg-white/20 mb-2" />
                                                        <div className="w-3/4 h-2 rounded bg-white/10" />
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {/* Fallback if no specific feature matches visually */}
                                        {!['immobilier', 'agriculture', 'bourse', 'entrepreneuriat'].includes(feature.id) && (
                                            <>
                                                <div className="w-3/4 h-8 rounded-lg bg-white/5 animate-pulse" />
                                                <div className="w-full h-24 rounded-lg bg-white/5 animate-pulse" />
                                                <div className="flex gap-4 mt-auto">
                                                    <div className="w-1/2 h-8 rounded-lg bg-brand/20 border border-brand/30" />
                                                    <div className="w-1/4 h-8 rounded-lg bg-white/5" />
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
