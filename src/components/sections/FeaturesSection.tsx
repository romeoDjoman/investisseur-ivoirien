import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Home, Tractor, TrendingUp, Briefcase } from 'lucide-react';

const features = [
    {
        id: 'immobilier',
        title: 'Immobilier & Foncier',
        description: 'Démarches administratives, achat de terrains et parcelles avec un suivi complet et personnalisé.',
        icon: Home,
        imageColor: 'from-blue-500/20 to-purple-500/20',
    },
    {
        id: 'agriculture',
        title: 'Agriculture & Élevage',
        description: 'Formation et accompagnement dans l\'élevage (volaille, porc) et la transformation agricole/industrielle.',
        icon: Tractor,
        imageColor: 'from-brand/20 to-orange-500/20',
    },
    {
        id: 'bourse',
        title: 'Bourse & Finance',
        description: 'Formations sur mesure pour l\'investissement sur la BRVM, les marchés émergents et internationaux.',
        icon: TrendingUp,
        imageColor: 'from-green-500/20 to-emerald-500/20',
    },
    {
        id: 'entrepreneuriat',
        title: 'Entrepreneuriat & Mobilité',
        description: 'Accompagnement pour vos projets entrepreneuriaux et opportunités dans la mobilité et le transport (VTC).',
        icon: Briefcase,
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
                                    <div className="flex-1 p-6 flex flex-col gap-4">
                                        <div className="w-3/4 h-8 rounded-lg bg-white/5 animate-pulse" />
                                        <div className="w-full h-24 rounded-lg bg-white/5 animate-pulse" />
                                        <div className="flex gap-4 mt-auto">
                                            <div className="w-1/2 h-8 rounded-lg bg-brand/20 border border-brand/30" />
                                            <div className="w-1/4 h-8 rounded-lg bg-white/5" />
                                        </div>
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
