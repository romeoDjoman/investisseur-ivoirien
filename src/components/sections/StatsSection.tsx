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
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto px-6"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center text-center px-4"
                        >
                            <span className="text-3xl md:text-5xl font-serif text-brand font-bold mb-2">{stat.value}</span>
                            <span className="text-sm md:text-base text-white/60 uppercase tracking-wider">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
