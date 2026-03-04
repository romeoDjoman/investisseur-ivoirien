import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const contentItems = {
    featured: {
        title: "Et si le poulet de chair était le meilleur business à lancer en Afrique?",
        date: "29/03/2020",
        author: "Philippe Simo",
        description: "Et si le poulet de chair était le meilleur business à lancer en Afrique? Quand il s'agit d'Afrique, tout le monde est d'accord pour dire qu'il faut y investir.\n\nL'Afrique n'est non seulement le présent, mais aussi l'avenir du monde. En revanche la question que tout le monde se pose est la suivante : Dans quel secteur?",
        imageUrl: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80",
    },
    regular: [
        {
            title: "7 MENSONGES sur l'argent auxquels les pauvres croient",
            imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80",
        },
        {
            title: "Comment devenir riche dans un pays \"pauvre\" (Afrique)?",
            imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80",
        },
        {
            title: "7 Erreurs graves que commettent les jeunes entrepreneurs",
            imageUrl: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80",
        },
        {
            title: "Faire du business en Famille, Pour ou Contre ?",
            imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        }
    ]
};

export function LatestContentSection() {
    return (
        <section className="py-24 px-6 relative max-w-7xl mx-auto border-t border-white/5" id="contenus">
            {/* Header */}
            <div className="flex items-center justify-center gap-6 mb-16">
                <div className="h-[1px] bg-brand/50 flex-1 max-w-[200px]" />
                <h2 className="text-2xl md:text-3xl font-medium text-brand uppercase tracking-wider text-center">
                    Les derniers contenus
                </h2>
                <div className="h-[1px] bg-brand/50 flex-1 max-w-[200px]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
                {/* Featured Video (Left) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden group hover:border-brand/50 transition-colors flex flex-col h-full"
                >
                    {/* Video Thumbnail Area */}
                    <div className="relative aspect-video bg-black overflow-hidden flex-shrink-0">
                        <img
                            src={contentItems.featured.imageUrl}
                            alt="Video Thumbnail"
                            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg group-hover:bg-brand/80 transition-colors">
                                <Play className="w-8 h-8 text-white ml-2" fill="currentColor" />
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-8 flex flex-col flex-1 bg-[#141414]">
                        <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                            {contentItems.featured.title}
                        </h3>
                        <div className="text-white/40 text-sm mb-6 pb-6 border-b border-white/10">
                            {contentItems.featured.author} - {contentItems.featured.date}
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line mb-8 flex-1">
                            {contentItems.featured.description}
                        </p>

                        <div className="mt-auto flex justify-end">
                            <button className="px-8 py-3 bg-brand/10 hover:bg-brand hover:text-black text-brand font-semibold rounded-lg transition-colors">
                                Lire la suite
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Grid of 4 Smaller Videos (Right) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
                    {contentItems.regular.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden group hover:border-brand/30 transition-colors flex flex-col"
                        >
                            <div className="relative aspect-video bg-black overflow-hidden flex-shrink-0">
                                <img
                                    src={item.imageUrl}
                                    alt="Video Thumbnail"
                                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg group-hover:bg-brand/80 transition-colors">
                                        <Play className="w-5 h-5 text-white ml-1" fill="currentColor" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 flex items-center flex-1 bg-[#141414]">
                                <h4 className="text-white/80 font-medium text-sm text-center leading-relaxed w-full">
                                    {item.title}
                                </h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
