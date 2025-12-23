const About = () => {
    return (
        <section id="about" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">About Me</h2>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 mb-12">
                        <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
                            I started Bias and Brew on a simple principle: <span className="font-semibold text-sapphire">AI in government must be both powerful and trustworthy.</span> As a specialist in rapid prototyping of AI-powered analytics, I focus on ensuring fairness, transparency, and accountability in every system I build.
                        </p>
                        <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
                            My expertise spans the full lifecycle—from auditing existing systems for bias to building cutting-edge agentic workflows that automate complex processes. I work exclusively with government agencies, bringing deep understanding of public sector requirements, security standards, and the unique responsibility of serving all public stakeholders.
                        </p>
                        <p className="text-lg text-charcoal/80 leading-relaxed font-medium italic text-sapphire">
                            "Every project begins with the question: 'Is this the right thing to build?' and ends with systems that you can explain, defend, and trust."
                        </p>
                    </div>

                    <div className="flex items-center justify-center">
                        <a href="https://www.linkedin.com/in/konstantin-pokaluhin/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white border border-slate-200 text-charcoal rounded-lg font-medium hover:bg-slate-50 hover:border-sapphire/30 transition-all flex items-center gap-2 shadow-sm text-sapphire">
                            Connect on LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
