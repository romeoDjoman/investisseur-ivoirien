import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const carouselItems = [
    {
        id: 1,
        title: "Immobilier & Foncier",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000",
        description: "Construisez votre patrimoine foncier en toute sécurité."
    },
    {
        id: 2,
        title: "Agriculture & Élevage",
        image: "https://images.unsplash.com/photo-1595841696677-647bfbd047d4?auto=format&fit=crop&q=80&w=2000",
        description: "Des exploitations rentables et modernes."
    },
    {
        id: 3,
        title: "Bourse & Finance",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2000",
        description: "Faites fructifier votre épargne grâce à nos experts."
    },
    {
        id: 4,
        title: "Entrepreneuriat",
        image: "https://images.unsplash.com/photo-1519389950481-94c660472d45?auto=format&fit=crop&q=80&w=2000",
        description: "Concrétisez vos projets entrepreneuriaux dès aujourd'hui."
    }
];

export function HeroCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full max-w-5xl mx-auto rounded-3xl bg-[#1c1c1c]/80 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden group aspect-[21/9] md:aspect-[3/1]"
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                    <img
                        src={carouselItems[currentIndex].image}
                        alt={carouselItems[currentIndex].title}
                        className="w-full h-full object-cover"
                    />

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20 text-left">
                        <motion.h3
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="text-2xl md:text-4xl font-serif text-white mb-2 font-medium drop-shadow-lg"
                        >
                            {carouselItems[currentIndex].title}
                        </motion.h3>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="text-white/80 text-sm md:text-lg max-w-2xl drop-shadow-md"
                        >
                            {carouselItems[currentIndex].description}
                        </motion.p>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Carousel Indicators */}
            <div className="absolute bottom-6 right-6 z-30 flex gap-2">
                {carouselItems.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`transition-all duration-300 rounded-full ${index === currentIndex
                                ? 'w-8 h-2 bg-brand'
                                : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </motion.div>
    );
}
