import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Blog', href: '#blog' },
    { label: 'Docs', href: '#docs' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                <a href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-black font-bold text-xl group-hover:scale-105 transition-transform">
                        O
                    </div>
                    <span className="font-serif text-xl font-medium tracking-wide">Orchids</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm text-white/70 hover:text-white transition-colors relative group"
                        >
                            {link.label}
                            {/* Subtle underline animation */}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand transition-all duration-300 group-hover:w-full rounded-full"></span>
                        </a>
                    ))}
                </nav>

                {/* Auth Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <a href="#login" className="text-sm text-white/70 hover:text-white transition-colors">
                        Log in
                    </a>
                    <button className="bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 rounded-full font-medium transition-all flex items-center gap-2 group">
                        Get Started
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
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
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-white/70 hover:text-white transition-colors font-medium text-lg"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
                                <a href="#login" className="text-white/70 hover:text-white transition-colors text-center py-2">
                                    Log in
                                </a>
                                <button className="bg-white text-black text-sm px-4 py-3 rounded-xl font-medium transition-all w-full">
                                    Get Started
                                </button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
