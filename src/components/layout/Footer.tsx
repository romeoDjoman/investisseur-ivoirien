import { Twitter, Github, Linkedin } from 'lucide-react';

const footerLinks = {
    Product: [
        { label: 'Features', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Changelog', href: '#' },
        { label: 'Docs', href: '#' },
    ],
    Company: [
        { label: 'About', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#' },
    ],
    Legal: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
    ],
};

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#141414] pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <a href="/" className="flex items-center gap-2 mb-4 group inline-flex">
                            <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-black font-bold text-xl">
                                O
                            </div>
                            <span className="font-serif text-xl font-medium tracking-wide text-white group-hover:text-white/80 transition-colors">Orchids</span>
                        </a>
                        <p className="text-white/50 text-sm max-w-xs mb-6 leading-relaxed">
                            The AI app builder for the next generation of software. Build, deploy, and scale faster than ever.
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
                                        <a href={link.href} className="text-white/50 hover:text-white/90 text-sm transition-colors">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-sm">
                        © {new Date().getFullYear()} Orchids Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-white/40 text-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        All systems operational
                    </div>
                </div>
            </div>
        </footer>
    );
}
