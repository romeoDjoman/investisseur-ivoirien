import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface BenchmarkBarProps {
    label: string;
    value: number; // Percentage width
    isBrand?: boolean;
}

function BenchmarkBar({ label, value, isBrand }: BenchmarkBarProps) {
    return (
        <div className="flex flex-col gap-2 relative z-10">
            <div className="flex justify-between items-center text-sm font-medium">
                <span className={cn(isBrand ? "text-brand" : "text-white/60")}>{label}</span>
            </div>
            <div className="h-6 w-full bg-white/5 rounded-md overflow-hidden flex">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className={cn(
                        "h-full rounded-md shadow-sm",
                        isBrand ? "bg-brand/90" : "bg-white/20"
                    )}
                />
            </div>
        </div>
    );
}

export function BenchmarksSection() {
    return (
        <section className="py-24 px-6 relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4 text-white">Faster than the rest</h2>
                <p className="text-white/50 text-lg">Build and deploy applications at unprecedented speeds.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Time to Production Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#1a1a1a] rounded-3xl p-8 border border-white/10 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[80px] rounded-full group-hover:bg-brand/20 transition-colors duration-500" />

                    <h3 className="text-xl font-medium text-white mb-8 relative z-10">Time to Production (Weeks)</h3>

                    <div className="flex flex-col gap-6 relative z-10 border-l-2 border-white/10 pl-4 py-2">
                        <BenchmarkBar label="Traditional Agency" value={95} />
                        <BenchmarkBar label="Low-Code Builders" value={60} />
                        <BenchmarkBar label="Orchids" value={15} isBrand />
                    </div>
                </motion.div>

                {/* Development Cost Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-[#1a1a1a] rounded-3xl p-8 border border-white/10 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[80px] rounded-full group-hover:bg-brand/20 transition-colors duration-500" />

                    <h3 className="text-xl font-medium text-white mb-8 relative z-10">Development Cost ($)</h3>

                    <div className="flex flex-col gap-6 relative z-10 border-l-2 border-white/10 pl-4 py-2">
                        <BenchmarkBar label="Traditional Agency" value={100} />
                        <BenchmarkBar label="Low-Code Builders" value={45} />
                        <BenchmarkBar label="Orchids" value={10} isBrand />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
