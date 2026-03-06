import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

const navLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'Formations', href: '/formations' },
    { label: 'Coaching', href: '/coaching' },
    { label: 'Conférences', href: '/conferences' },
    { label: 'Interviews', href: '/temoignages' },
    { label: 'Contact', href: '/contact' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { items } = useCart();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
                isScrolled
                    ? 'bg-[#141414]/80 backdrop-blur-md border-white/10 py-3'
                    : 'bg-transparent border-transparent py-5'
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <img src="/logo.png" alt="Logo L'Investisseur Ivoirien" className="w-10 h-10 object-contain group-hover:scale-105 transition-transform bg-white/10 rounded-lg p-1" />
                    <span className="font-serif text-xl font-medium tracking-wide">L'Investisseur Ivoirien</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            to={link.href}
                            className="text-sm text-white/70 hover:text-white transition-colors relative group"
                        >
                            {link.label}
                            {/* Subtle underline animation */}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand transition-all duration-300 group-hover:w-full rounded-full"></span>
                        </Link>
                    ))}
                </nav>

                {/* Auth Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <Link to="/panier" className="relative p-2 text-white/70 hover:text-white transition-colors mr-2">
                        <ShoppingCart className="w-5 h-5" />
                        {items.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-brand text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                {items.length}
                            </span>
                        )}
                    </Link>
                    <Link to="/coaching" className="bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 rounded-full font-medium transition-all flex items-center gap-2 group">
                        Réserver un coaching
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white/70 hover:text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#141414] border-b border-white/10"
                    >
                        <nav className="flex flex-col gap-4 p-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    to={link.href}
                                    className="text-white/70 hover:text-white transition-colors font-medium text-lg"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
                                <Link to="/panier" className="text-white/70 hover:text-white transition-colors text-center py-2 flex items-center justify-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                                    <ShoppingCart className="w-5 h-5" /> Panier ({items.length})
                                </Link>
                                <Link to="/coaching" className="bg-white text-black text-sm px-4 py-3 rounded-xl font-medium transition-all w-full text-center" onClick={() => setMobileMenuOpen(false)}>
                                    Réserver un coaching
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
