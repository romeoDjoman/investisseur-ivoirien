import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const recentPhotos = [
    {
        url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
        caption: "Conférence Abidjan 2023"
    },
    {
        url: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80&w=800",
        caption: "Masterclass Entrepreneuriat"
    },
    {
        url: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&q=80&w=800",
        caption: "Formation BRVM"
    },
    {
        url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
        caption: "Networking Paris"
    },
    {
        url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
        caption: "Visite Terrain Agricole"
    },
    {
        url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800",
        caption: "Projet Immobilier Assinie"
    }
];

export function RecentlyGallerySection() {
    return (
        <section className="py-24 px-6 bg-[#141414] border-t border-white/5">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="max-w-7xl mx-auto"
            >
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-serif text-white mb-4"
                    >
                        Récemment
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-white/60 text-lg max-w-2xl mx-auto"
                    >
                        Revivez en images nos derniers événements, conférences et masterclass avec la communauté des investisseurs.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recentPhotos.map((photo, index) => (
                        <Link to="/conferences"
                            key={index}
                            className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-[#1a1a1a] block"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${photo.url})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <p className="text-white font-medium text-lg">{photo.caption}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
