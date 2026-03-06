import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react';

export function Cart() {
    const { items, removeItem, total } = useCart();
    const navigate = useNavigate();

    if (items.length === 0) {
        return (
            <div className="pt-32 pb-24 min-h-screen bg-black relative flex flex-col items-center justify-center px-6">
                <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-brand/10 to-transparent pointer-events-none" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[#1a1a1a] p-12 rounded-3xl border border-white/10 text-center max-w-lg w-full relative z-10"
                >
                    <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-white/40">
                        <ShoppingBag className="w-10 h-10" />
                    </div>
                    <h2 className="text-2xl font-serif text-white mb-4">Votre panier est vide</h2>
                    <p className="text-white/60 mb-8">Découvrez nos programmes pour commencer votre parcours d'investissement.</p>
                    <Link to="/formations" className="inline-block px-8 py-4 bg-brand text-black font-bold rounded-xl hover:scale-105 transition-transform uppercase tracking-wide text-sm">
                        Voir les formations
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 min-h-screen bg-black relative">
            <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-brand/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <h1 className="text-4xl md:text-5xl font-serif text-white mb-12">Votre Panier</h1>

                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="w-full lg:w-2/3 space-y-6">
                        {items.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center gap-6"
                            >
                                {item.image && (
                                    <img src={item.image} alt={item.title} className="w-full sm:w-32 h-24 object-cover rounded-xl" />
                                )}
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">{item.title}</h3>
                                    <p className="text-brand font-semibold">{item.price}</p>
                                </div>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="p-3 text-white/40 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-colors"
                                    title="Retirer l'article"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    <div className="w-full lg:w-1/3">
                        <div className="bg-[#1a1a1a] rounded-3xl border border-white/10 p-8 sticky top-32">
                            <h3 className="text-xl font-serif text-white mb-6 border-b border-white/10 pb-4">Résumé</h3>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-white/70">
                                    <span>Sous-total ({items.length} article{items.length > 1 ? 's' : ''})</span>
                                    <span>{total.toLocaleString('fr-FR')} FCFA</span>
                                </div>
                                <div className="flex justify-between text-white/70">
                                    <span>TVA (18%)</span>
                                    <span>Inclus</span>
                                </div>
                                <div className="border-t border-white/10 pt-4 flex justify-between items-end mt-4">
                                    <span className="text-white font-medium">Total à payer</span>
                                    <span className="text-3xl font-bold text-white">{total.toLocaleString('fr-FR')} FCFA</span>
                                </div>
                            </div>

                            <button
                                onClick={() => navigate('/caisse')}
                                className="w-full py-4 bg-brand hover:bg-brand/90 text-black font-bold uppercase tracking-wide rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(249,168,37,0.3)] hover:scale-[1.02] flex justify-center items-center gap-2"
                            >
                                Valider ma commande <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
