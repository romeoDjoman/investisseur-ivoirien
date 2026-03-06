import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { formationsData } from '../data/formations';
import { CheckCircle, Clock, BookOpen, ArrowLeft } from 'lucide-react';

export function FormationDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addItem } = useCart();

    const formation = formationsData.find(f => f.id === id);

    if (!formation) {
        return (
            <div className="min-h-screen pt-32 pb-24 bg-black flex flex-col items-center justify-center">
                <h1 className="text-3xl font-serif text-white mb-6">Formation non trouvée</h1>
                <Link to="/formations" className="text-brand hover:underline">Retour aux formations</Link>
            </div>
        );
    }

    const handleAddToCart = () => {
        addItem({
            id: formation.id,
            title: formation.title,
            price: formation.price,
            priceValue: formation.priceValue,
            image: formation.image
        });
        navigate('/panier');
    };

    return (
        <div className="pt-32 pb-24 min-h-screen bg-black relative">
            <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-brand/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <Link to="/formations" className="inline-flex items-center gap-2 text-white/60 hover:text-brand transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Retour aux formations
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/30 bg-brand/10 text-brand text-sm font-semibold mb-6">
                            {formation.icon} {formation.category}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
                            {formation.title}
                        </h1>
                        <p className="text-xl text-white/70 font-light leading-relaxed mb-10">
                            {formation.description}
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-12">
                            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                                <Clock className="w-8 h-8 text-brand" />
                                <div>
                                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Durée</p>
                                    <p className="text-white font-medium">{formation.duration}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                                <BookOpen className="w-8 h-8 text-brand" />
                                <div>
                                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Niveau</p>
                                    <p className="text-white font-medium">{formation.level}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-12">
                            <h3 className="text-2xl font-serif text-white mb-6">Programme de la formation</h3>
                            <ul className="space-y-4">
                                {formation.curriculum.map((module, idx) => (
                                    <li key={idx} className="flex items-start text-white/80">
                                        <CheckCircle className="w-6 h-6 text-brand mr-4 shrink-0" />
                                        <span className="font-light">{module}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-serif text-white mb-6">Votre Instructeur</h3>
                            <div className="flex items-center gap-6 bg-[#1a1a1a] p-6 rounded-2xl border border-white/10">
                                <img src={formation.instructor.img} alt={formation.instructor.name} className="w-20 h-20 rounded-full object-cover border-2 border-brand/50" />
                                <div>
                                    <p className="text-xl text-white font-bold mb-1">{formation.instructor.name}</p>
                                    <p className="text-brand">{formation.instructor.role}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:sticky lg:top-32 h-fit"
                    >
                        <div className="bg-[#1a1a1a] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                            <div className="aspect-video relative">
                                <img src={formation.image} alt={formation.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-end mb-8">
                                    <div>
                                        <p className="text-white/40 uppercase tracking-wider text-sm mb-2">Investissement</p>
                                        <p className="text-4xl font-bold text-white">{formation.price}</p>
                                    </div>
                                    {formation.urgency && (
                                        <div className="text-xs text-red-400 font-medium px-3 py-1 bg-red-500/10 rounded-md border border-red-500/20 animate-pulse">
                                            {formation.urgency}
                                        </div>
                                    )}
                                </div>

                                <button
                                    onClick={handleAddToCart}
                                    className="w-full py-5 bg-brand hover:bg-brand/90 text-black font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(249,168,37,0.3)] hover:scale-[1.02] mb-4"
                                >
                                    Ajouter au panier
                                </button>

                                <p className="text-center text-white/40 text-sm">Paiement 100% sécurisé (Wave, Orange Money, CB)</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
