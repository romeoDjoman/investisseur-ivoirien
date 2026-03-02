import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUp } from 'lucide-react';

const prompts = [
    "Je souhaite investir dans l'immobilier à Abidjan...",
    "Quelles sont les démarches pour acquérir un terrain agricole ?",
    "Je veux me former sur la bourse régionale (BRVM)...",
    "Comment lancer mon projet d'élevage de volailles...",
];

const tags = [
    { id: 'immobilier', label: 'Immobilier' },
    { id: 'agriculture', label: 'Agriculture' },
    { id: 'bourse', label: 'Bourse' },
    { id: 'entrepreneuriat', label: 'Entrepreneuriat' },
];

export function HeroInputCard() {
    const [promptIndex, setPromptIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [activeTag, setActiveTag] = useState('immobilier');

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        if (isTyping) {
            const currentPrompt = prompts[promptIndex];
            if (displayText.length < currentPrompt.length) {
                timeout = setTimeout(() => {
                    setDisplayText(currentPrompt.slice(0, displayText.length + 1));
                }, 50); // Typing speed
            } else {
                timeout = setTimeout(() => setIsTyping(false), 2000); // Pause at end
            }
        } else {
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, 30); // Deleting speed
            } else {
                setPromptIndex((prev) => (prev + 1) % prompts.length);
                setIsTyping(true);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, isTyping, promptIndex]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full max-w-3xl mx-auto rounded-2xl bg-[#1c1c1c]/80 backdrop-blur-xl border border-white/10 p-2 shadow-2xl relative overflow-hidden group"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Input Area */}
            <div className="relative p-4 pb-20">
                <Sparkles className="absolute left-4 top-5 w-5 h-5 text-brand" />
                <textarea
                    className="w-full bg-transparent text-white/90 text-lg md:text-xl font-medium placeholder:text-white/30 resize-none outline-none pl-8 h-24"
                    placeholder=""
                    value=""
                    readOnly
                />
                {/* Typewriter overlay since textarea placeholder can't animate easily */}
                <div className="absolute left-12 top-4 text-lg md:text-xl font-medium text-white/50 pointer-events-none flex items-center">
                    {displayText}
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block w-[2px] h-6 bg-brand ml-1"
                    />
                </div>

                {/* Action Button */}
                <div className="absolute right-4 bottom-4">
                    <button className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center hover:bg-brand transition-colors shadow-lg">
                        <ArrowUp className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Tags Footer */}
            <div className="flex items-center gap-2 p-3 bg-black/20 rounded-xl overflow-x-auto no-scrollbar border-t border-white/5">
                {tags.map((tag) => (
                    <button
                        key={tag.id}
                        onClick={() => setActiveTag(tag.id)}
                        className={`whitespace-nowrap px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${activeTag === tag.id
                            ? 'bg-[#2a2a2a] text-white border border-white/10 shadow-sm'
                            : 'text-white/50 hover:text-white/80 hover:bg-white/5 border border-transparent'
                            }`}
                    >
                        {tag.label}
                    </button>
                ))}
            </div>
        </motion.div>
    );
}
