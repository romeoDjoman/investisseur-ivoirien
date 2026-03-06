import { Twitter, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    return (
        <footer className="border-t border-white/10 bg-[#141414] pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
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
                            <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors">
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
                                <a href="#" className="text-white/50 hover:text-white/90 text-sm transition-colors block">
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
            </div>
        </footer>
    );
}
