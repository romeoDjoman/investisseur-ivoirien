import { useState } from 'react';
import { Twitter, Github, Linkedin, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const footerLinks = {
    Navigation: [
        { label: 'Accueil', href: '/' },
        { label: 'Formations', href: '/formations' },
        { label: 'Coaching', href: '/coaching' },
        { label: 'Conférences', href: '/conferences' },
        { label: 'Interviews', href: '/temoignages' },
        { label: 'Contact', href: '/contact' },
    ],
    'Formations populaires': [
        { label: 'Acheter un terrain en CI', href: '/formations' },
        { label: 'Investir à la BRVM', href: '/formations' },
        { label: 'Se lancer dans l\'élevage', href: '/formations' },
        { label: 'Entrepreneuriat en CI', href: '/formations' },
    ],
};

export function Footer() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setEmail('');
        }
    };

    return (
        <footer className="border-t border-white/10 bg-[#141414] pt-16 pb-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto px-6"
            >
                {/* Newsletter Section */}
                <div className="bg-[#1a1a1a] rounded-3xl p-8 md:p-12 border border-white/5 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 shrink-0">
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-serif text-white mb-2">Rejoignez notre Newsletter</h3>
                        <p className="text-white/60 text-sm">
                            Recevez chaque mois des analyses de marché uniques, des opportunités d'investissement en avant-première et des conseils d'experts directement dans votre boîte mail.
                        </p>
                    </div>
                    <div className="md:w-1/2 w-full">
                        {isSubscribed ? (
                            <div className="flex items-center gap-3 text-green-500 bg-green-500/10 px-6 py-4 rounded-xl border border-green-500/20">
                                <CheckCircle className="w-6 h-6 shrink-0" />
                                <span className="font-medium">Merci pour votre inscription !</span>
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Votre adresse email"
                                    required
                                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand/50"
                                />
                                <button type="submit" className="bg-brand hover:bg-brand/90 text-black font-semibold rounded-xl px-6 py-3 transition-colors whitespace-nowrap">
                                    S'abonner
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-4 group inline-flex">
                            <img src="/logo.png" alt="Logo Investisseur Ivoirien" className="w-10 h-10 object-contain group-hover:scale-105 transition-transform bg-white/10 rounded-lg p-1" />
                            <span className="font-serif text-xl font-medium tracking-wide text-white group-hover:text-white/80 transition-colors">Investisseur Ivoirien</span>
                        </Link>
                        <p className="text-white/50 text-sm max-w-xs mb-6 leading-relaxed">
                            La plateforme de référence pour investir en Côte d'Ivoire.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="text-white font-medium mb-4">{category}</h3>
                            <ul className="flex flex-col gap-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link to={link.href} className="text-white/50 hover:text-white/90 text-sm transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div key="Contact" className="lg:col-span-1">
                        <h3 className="text-white font-medium mb-4">Contact</h3>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <a href="https://wa.me/22500000000" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white/90 text-sm transition-colors block">
                                    WhatsApp Business
                                </a>
                            </li>
                            <li>
                                <a href="mailto:contact@linvestisseur-ivoirien.com" className="text-white/50 hover:text-white/90 text-sm transition-colors block">
                                    contact@linvestisseur-ivoirien.com
                                </a>
                            </li>
                            <li className="text-white/50 text-sm mt-2">
                                <span className="block mb-1 text-white/30 text-xs uppercase tracking-wider">Fuseaux couverts</span>
                                Abidjan · Paris · Montréal
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-4 text-white/40 text-sm">
                        <p>© {new Date().getFullYear()} L'Investisseur Ivoirien. Tous droits réservés.</p>
                        <div className="hidden md:block w-1 h-1 rounded-full bg-white/20"></div>
                        <div className="flex items-center gap-4">
                            <Link to="/legal/conditions" className="hover:text-white transition-colors">CGU</Link>
                            <Link to="/legal/confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-white/40 text-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Système opérationnel
                    </div>
                </div>
            </motion.div>
        </footer>
    );
}
