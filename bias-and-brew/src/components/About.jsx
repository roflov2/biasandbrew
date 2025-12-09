const About = () => {
    return (
        <section id="about" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">About Bias and Brew</h2>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 mb-12">
                        <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
                            Bias and Brew was founded on a simple principle: <span className="font-semibold text-sapphire">AI in government must be both powerful and trustworthy.</span> We specialize in rapid prototyping of AI-powered analytics products, with a particular focus on ensuring fairness, transparency, and accountability.
                        </p>
                        <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
                            Our expertise spans the full lifecycle—from auditing existing systems for bias to building cutting-edge agentic workflows that automate complex processes. We work exclusively with government agencies, bringing deep understanding of public sector requirements, security standards, and the unique responsibility of serving all citizens.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 md:gap-8 justify-center flex-col md:flex-row">
                        <div className="w-24 h-24 bg-gradient-to-br from-sapphire to-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                            KP
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-bold text-charcoal">Konstantin Pokaluhin</h3>
                            <p className="text-sapphire font-medium mb-2">Founder & Lead Consultant</p>
                            <div className="flex gap-4 justify-center md:justify-start">
                                <a href="https://www.linkedin.com/in/konstantin-pokaluhin/" target="_blank" rel="noopener noreferrer" className="text-charcoal/60 hover:text-sapphire transition-colors text-sm underline">
                                    LinkedIn Profile
                                </a>
                                <a href="mailto:kosta@biasandbrew.dev" className="text-charcoal/60 hover:text-sapphire transition-colors text-sm underline">
                                    kosta@biasandbrew.dev
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
