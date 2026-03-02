import { motion } from 'framer-motion';
import { HeroInputCard } from '../ui/HeroInputCard';

export function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
            {/* Background glow effects */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

            <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand text-sm font-medium mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                    </span>
                    Orchids 2.0 is now live
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight mb-6 text-white leading-tight"
                >
                    Build any app. <br />
                    <span className="text-white/40">In minutes, not months.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12"
                >
                    The fastest way to go from idea to production-ready software. Give Orchids a prompt, and watch your application come to life.
                </motion.p>

                <HeroInputCard />

                {/* Trusted By or secondary info could go here */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="mt-20 pt-10 border-t border-white/5 text-center"
                >
                    <p className="text-sm font-medium text-white/30 tracking-widest uppercase mb-8">Trusted by innovative teams</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder Logos */}
                        {['Acme Corp', 'GlobalNet', 'PiedPiper', 'Hooli', 'Initech'].map((company) => (
                            <div key={company} className="text-xl font-bold font-serif text-white/60">
                                {company}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
