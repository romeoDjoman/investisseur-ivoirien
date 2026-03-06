import { motion } from 'framer-motion';

export function TrustBadgesSection() {
    const logos = [
        { name: "RTI (Radiodiffusion Télévision Ivoirienne)", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Rti_logo_2011.svg/1024px-Rti_logo_2011.svg.png" },
        { name: "Fraternité Matin", url: "https://upload.wikimedia.org/wikipedia/fr/5/5e/Frat_Mat_Logo.png" },
        { name: "Jeune Afrique", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Jeune_Afrique_logo.svg/1024px-Jeune_Afrique_logo.svg.png" },
        { name: "Sika Finance", url: "https://www.sikafinance.com/images/sika-logo.png" }
    ];

    return (
        <section className="py-10 border-b border-white/5 bg-[#141414] relative z-10">
            <div className="max-w-7xl mx-auto px-6 overflow-hidden">
                <p className="text-center text-white/40 text-sm tracking-widest uppercase mb-6">
                    Ils parlent de notre expertise
                </p>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="h-8 md:h-12 flex items-center justify-center filter brightness-0 invert opacity-50 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-500"
                        >
                            {/* Note: since SVG placeholders are hard, we use an image tag with a fallback.  */}
                            <img
                                src={logo.url}
                                alt={logo.name}
                                className="max-h-full max-w-[120px] md:max-w-[180px] object-contain"
                                loading="lazy"
                                onError={(e) => {
                                    // Fallback text if logo fails to load
                                    e.currentTarget.style.display = 'none';
                                    if (e.currentTarget.nextSibling) {
                                        (e.currentTarget.nextSibling as HTMLElement).style.display = 'block';
                                    }
                                }}
                            />
                            <span className="hidden text-white font-serif text-xl tracking-wider font-bold">
                                {logo.name.split(' ')[0]}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
