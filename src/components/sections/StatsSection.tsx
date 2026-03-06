import { motion } from 'framer-motion';

export function StatsSection() {
    const stats = [
        { value: '500+', label: 'Investisseurs accompagnés' },
        { value: '8', label: 'Modules de formation' },
        { value: '6', label: 'Secteurs d\'investissement' },
        { value: '95%', label: 'Taux de satisfaction' },
    ];

    return (
        <section className="py-12 border-y border-white/5 bg-[#141414]/50 backdrop-blur-sm -mt-8 relative z-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex flex-col items-center justify-center text-center px-4"
                        >
                            <span className="text-3xl md:text-5xl font-serif text-brand font-bold mb-2">{stat.value}</span>
                            <span className="text-sm md:text-base text-white/60 uppercase tracking-wider">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
