import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { CreditCard, ShieldCheck, CheckCircle } from 'lucide-react';

export function Checkout() {
    const { items, total, clearCart } = useCart();
    const navigate = useNavigate();
    const [isSuccess, setIsSuccess] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        paymentMethod: 'orange'
    });

    if (items.length === 0 && !isSuccess) {
        navigate('/panier');
        return null;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setIsSuccess(true);
            clearCart();
        }, 1500);
    };

    if (isSuccess) {
        return (
            <div className="pt-32 pb-24 min-h-screen bg-black relative flex flex-col items-center justify-center px-6">
                <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-brand/10 to-transparent pointer-events-none" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[#1a1a1a] p-12 rounded-3xl border border-white/10 text-center max-w-lg w-full relative z-10 shadow-2xl"
                >
                    <div className="w-24 h-24 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand">
                        <CheckCircle className="w-12 h-12" />
                    </div>
                    <h2 className="text-3xl font-serif text-white mb-4">Commande Validée !</h2>
                    <p className="text-white/70 mb-8 leading-relaxed">
                        Félicitations {formData.firstName} ! Votre inscription a bien été prise en compte.<br />Vous recevrez vos accès par email d'ici quelques minutes.
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        className="w-full py-4 bg-brand text-black font-bold rounded-xl hover:scale-105 transition-transform uppercase tracking-wide text-sm"
                    >
                        Retour à l'accueil
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 min-h-screen bg-black relative">
            <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-brand/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <h1 className="text-4xl md:text-5xl font-serif text-white mb-12">Finaliser la commande</h1>

                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="w-full lg:w-2/3">
                        <form onSubmit={handleSubmit} className="bg-[#1a1a1a] p-8 md:p-10 rounded-3xl border border-white/10">
                            <h3 className="text-xl font-serif text-white mb-6">Vos informations</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <label className="block text-white/60 text-sm mb-2">Prénom</label>
                                    <input required type="text"
                                        value={formData.firstName}
                                        onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-white/60 text-sm mb-2">Nom</label>
                                    <input required type="text"
                                        value={formData.lastName}
                                        onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-white/60 text-sm mb-2">Email</label>
                                    <input required type="email"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-white/60 text-sm mb-2">Téléphone (WhatsApp)</label>
                                    <input required type="tel"
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors" />
                                </div>
                            </div>

                            <h3 className="text-xl font-serif text-white mb-6">Moyen de paiement</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                                <label className={`cursor-pointer border rounded-xl p-4 flex flex-col items-center justify-center transition-colors ${formData.paymentMethod === 'orange' ? 'border-[#ff6600] bg-[#ff6600]/10' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}>
                                    <input type="radio" name="payment" value="orange" className="sr-only" onChange={e => setFormData({ ...formData, paymentMethod: e.target.value })} checked={formData.paymentMethod === 'orange'} />
                                    <div className="font-bold text-[#ff6600]">Orange Money</div>
                                </label>
                                <label className={`cursor-pointer border rounded-xl p-4 flex flex-col items-center justify-center transition-colors ${formData.paymentMethod === 'wave' ? 'border-[#00a2ff] bg-[#00a2ff]/10' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}>
                                    <input type="radio" name="payment" value="wave" className="sr-only" onChange={e => setFormData({ ...formData, paymentMethod: e.target.value })} checked={formData.paymentMethod === 'wave'} />
                                    <div className="font-bold text-[#00a2ff]">Wave</div>
                                </label>
                                <label className={`cursor-pointer border rounded-xl p-4 flex flex-col items-center justify-center transition-colors ${formData.paymentMethod === 'card' ? 'border-brand bg-brand/10' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}>
                                    <input type="radio" name="payment" value="card" className="sr-only" onChange={e => setFormData({ ...formData, paymentMethod: e.target.value })} checked={formData.paymentMethod === 'card'} />
                                    <div className="flex items-center gap-2 font-bold text-white"><CreditCard className="w-5 h-5" /> Carte Bancaire</div>
                                </label>
                            </div>

                            <button type="submit" className="w-full py-5 bg-brand hover:bg-brand/90 text-black font-bold uppercase tracking-wide rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(249,168,37,0.3)] hover:scale-[1.02] flex justify-center items-center gap-2">
                                <ShieldCheck className="w-5 h-5" /> Payer {total.toLocaleString('fr-FR')} FCFA
                            </button>
                            <p className="text-center text-white/40 text-xs mt-4">Paiement 100% sécurisé via Paystack/CinetPay</p>
                        </form>
                    </div>

                    <div className="w-full lg:w-1/3">
                        <div className="bg-[#1a1a1a] rounded-3xl border border-white/10 p-8 sticky top-32">
                            <h3 className="text-xl font-serif text-white mb-6 border-b border-white/10 pb-4">Résumé de la commande</h3>

                            <div className="space-y-4 mb-6">
                                {items.map(item => (
                                    <div key={item.id} className="flex justify-between items-start text-sm">
                                        <span className="text-white/80 pr-4">{item.title}</span>
                                        <span className="text-brand font-medium whitespace-nowrap">{item.price}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-white/10 pt-4 space-y-4">
                                <div className="flex justify-between text-white/70">
                                    <span>TVA (18%)</span>
                                    <span>Inclus</span>
                                </div>
                                <div className="flex justify-between items-end mt-4">
                                    <span className="text-white font-medium">Total</span>
                                    <span className="text-2xl font-bold text-white">{total.toLocaleString('fr-FR')} FCFA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
