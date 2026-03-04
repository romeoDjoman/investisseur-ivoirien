import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const guides = [
    {
        title: "Investir au Pays",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600",
        color: "from-blue-500/20"
    },
    {
        title: "Agriculteur Moderne",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600",
        color: "from-green-500/20"
    },
    {
        title: "L'Art de la BRVM",
        image: "https://images.unsplash.com/photo-1554415707-6e8cfc938c23?auto=format&fit=crop&q=80&w=600",
        color: "from-brand/20"
    }
];

export function LeadMagnetSection() {
    return (
        <section className="py-20 relative overflow-hidden border-t border-white/5 bg-[#141414]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Left: Books visualization (like Trusted By logos) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full"
                    >
                        <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
                            <BookOpen className="w-5 h-5 text-brand" />
                            <h2 className="text-xl md:text-2xl font-serif text-white font-medium">Nos Guides Offerts</h2>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6">
                            {guides.map((guide, index) => (
                                <motion.div
                                    key={guide.title}
                                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`relative w-28 h-40 md:w-32 md:h-48 rounded-r-lg rounded-l-sm bg-gradient-to-tr ${guide.color} to-white/5 border border-white/20 shadow-[-10px_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden group hover:-translate-y-2 hover:rotate-3 transition-all duration-300 cursor-pointer`}
                                    style={{ perspective: "1000px" }}
                                >
                                    {/* Book Binding/Spine */}
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/30 z-20" />
                                    <div className="absolute left-1 top-0 bottom-0 w-px bg-white/10 z-20" />

                                    <img
                                        src={guide.image}
                                        alt={guide.title}
                                        className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                                    <div className="relative z-10 p-4 text-center">
                                        <p className="font-serif text-[10px] md:text-xs font-bold text-white uppercase tracking-wider leading-tight">{guide.title}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Lead Capture Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full max-w-md lg:max-w-lg"
                    >
                        <div className="bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                            <div className="absolute -top-1/2 -right-1/2 w-64 h-64 bg-brand/20 blur-[50px] rounded-full pointer-events-none" />

                            <h3 className="text-2xl font-serif text-white mb-2 relative z-10">Laissez-nous votre e-mail</h3>
                            <p className="text-white/50 text-sm mb-6 relative z-10">
                                Pour recevoir immédiatement vos 3 guides d'investissement et notre newsletter confidentielle.
                            </p>

                            <form className="relative z-10 flex flex-col gap-4">
                                <div className="space-y-1">
                                    <input
                                        type="text"
                                        placeholder="Votre prénom"
                                        className="w-full bg-white/5 border border-white/10 focus:border-brand/50 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <input
                                        type="email"
                                        placeholder="prenom@exemple.com"
                                        className="w-full bg-white/5 border border-white/10 focus:border-brand/50 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors"
                                    />
                                </div>
                                <button type="button" className="w-full bg-white text-black hover:bg-brand font-medium rounded-xl px-4 py-3 mt-2 transition-colors">
                                    Télécharger les guides
                                </button>
                            </form>
                            <p className="text-white/30 text-xs mt-4 text-center relative z-10">
                                Pas de spam. Désabonnement à tout moment en un clic.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
