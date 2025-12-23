import { CheckCircle2 } from 'lucide-react';

const WhyMe = () => {
    const reasons = [
        {
            title: "Public Sector Focus",
            description: "I understand the unique challenges of public sector AI: transparency requirements, diverse stakeholder needs, and the imperative to serve all public stakeholders fairly."
        },
        {
            title: "Speed Meets Rigor",
            description: "My prototype-first approach delivers rapid results without cutting corners on testing, documentation, or compliance."
        },
        {
            title: "From Audit to Automation",
            description: "Unlike consultants who only identify problems or only build solutions, I do both—ensuring your AI systems are built on solid, unbiased foundations."
        },
        {
            title: "Technical Excellence",
            description: "Deep expertise in data science, ML engineering, and agentic AI systems, combined with practical understanding of government operations."
        }
    ];

    return (
        <section className="py-24 bg-charcoal text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Work With Me</h2>
                        <div className="w-16 h-1 bg-ruby mb-8 rounded-full"></div>
                        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                            I bring a specialised focus to government AI challenges, combining ethical rigour with technical agility to deliver systems that are safe, fair, and effective.
                        </p>
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                            <p className="text-slate-300 italic">
                                "Every project begins with the question: 'Is this the right thing to build?' and ends with systems that you can explain, defend, and trust."
                            </p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {reasons.map((reason, index) => (
                            <div key={index} className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors duration-300 border border-white/5">
                                <CheckCircle2 className="text-ruby mb-4" size={28} />
                                <h3 className="text-xl font-bold mb-3 text-white">{reason.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyMe;
