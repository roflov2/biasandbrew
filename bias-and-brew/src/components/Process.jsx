import { motion } from 'framer-motion';
import { ClipboardList, Cog, Rocket } from 'lucide-react';

const Process = () => {
    const steps = [
        {
            icon: <ClipboardList size={40} className="text-sapphire" />,
            title: "Assess",
            items: [
                "Deep-dive workshops with stakeholders",
                "Data and system audits",
                "Risk and bias assessment",
                "Clear scope and success metrics"
            ]
        },
        {
            icon: <Cog size={40} className="text-sapphire" />,
            title: "Prototype",
            items: [
                "2-week sprint cycles",
                "Working demonstrations, not just documents",
                "Iterative feedback loops",
                "Security and compliance from day one"
            ]
        },
        {
            icon: <Rocket size={40} className="text-sapphire" />,
            title: "Deploy",
            items: [
                "Phased rollout strategies",
                "Comprehensive documentation",
                "Staff training and knowledge transfer",
                "Ongoing monitoring and refinement"
            ]
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Our Approach</h2>
                    <p className="text-xl text-charcoal/70">
                        Rapid iteration. Evidence-based. Government-ready.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="w-24 h-24 bg-white rounded-full border border-slate-200 flex items-center justify-center mb-6 shadow-sm z-10">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-charcoal mb-6">{step.title}</h3>
                            <ul className="space-y-3 text-left w-full max-w-xs mx-auto">
                                {step.items.map((item, i) => (
                                    <li key={i} className="flex items-start text-charcoal/70 text-sm">
                                        <span className="mr-2 text-sapphire mt-1">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
