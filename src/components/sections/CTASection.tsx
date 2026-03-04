import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

export function CTASection() {
    return (
        <section className="py-24 px-6 relative max-w-7xl mx-auto border-t border-white/5" id="coaching">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-[2.5rem] overflow-hidden p-10 md:p-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12"
            >
                {/* Background Styling */}
                <div className="absolute inset-0 bg-[#1a1a1a] border border-white/10" />
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-brand/20 via-brand/5 to-transparent blur-[100px] rounded-full translate-x-1/3 -translate-y-1/4 pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 text-white leading-tight">
                        Passez à l'action. <br />
                        <span className="text-white/50">Rejoignez le mouvement.</span>
                    </h2>
                    <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto md:mx-0">
                        Que vous souhaitiez vous former en ligne, bénéficier d'un coaching privé, ou participer à nos prochaines conférences (Abidjan, Paris, Dakar), nous avons un programme pour vous.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                        <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-medium flex items-center justify-center gap-2 hover:bg-brand transition-colors group">
                            <Calendar className="w-5 h-5" />
                            Réserver un Coaching
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors group">
                            Voir les Formations
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Decorative Stats/Badge directly inside CTA */}
                <div className="relative z-10 hidden lg:flex flex-col gap-4">
                    <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="text-sm text-white/50 mb-1">Étudiants accompagnés</div>
                        <div className="text-3xl font-serif text-white">10,000+</div>
                    </div>
                    <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl transform -translate-x-6 -rotate-3 hover:-rotate-0 transition-transform duration-500">
                        <div className="text-sm text-white/50 mb-1">Impact direct</div>
                        <div className="text-3xl font-serif text-brand">Rentabilité assurée</div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
