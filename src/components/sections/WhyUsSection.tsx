export function WhyUsSection() {
    const reasons = [
        {
            title: "Expertise terrain",
            description: "Nos formateurs investissent activement en Côte d'Ivoire. Ils connaissent les réalités locales."
        },
        {
            title: "Approche 100% pratique",
            description: "Cas réels, démarches concrètes, zéro théorie inutile. Passez à l'action."
        },
        {
            title: "Suivi personnalisé",
            description: "Vous n'êtes jamais seul après votre formation. Nos coachs sont à votre écoute."
        },
        {
            title: "Communauté active",
            description: "Rejoignez des centaines d'investisseurs qui partagent leurs expériences et bonnes pratiques."
        },
        {
            title: "Accessible partout",
            description: "Depuis Abidjan, Paris, New York ou Toronto, suivez nos programmes à votre rythme."
        }
    ];

    return (
        <section className="py-24 bg-[#1a1a1a] border-y border-white/5 relative z-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">

                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                        <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                            Pourquoi<br />
                            <span className="text-brand">L'Investisseur Ivoirien ?</span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-lg mb-4">
                            Nous avons réuni les meilleurs experts et les ressources les plus concrètes pour vous permettre d'investir sereinement au pays, où que vous soyez.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-4">
                            <div className="w-20 h-2 bg-brand rounded-full"></div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col gap-6">
                            {reasons.map((reason, index) => (
                                <div key={index} className="flex gap-4 items-start bg-white/5 p-4 rounded-xl border border-white/5 hover:border-brand/30 transition-colors">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand/20 text-brand flex items-center justify-center mt-1">
                                        ✓
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold text-lg mb-1">{reason.title}</h3>
                                        <p className="text-white/60 text-sm leading-relaxed">{reason.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
