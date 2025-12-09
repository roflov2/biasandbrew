import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Lock } from 'lucide-react';

const ValueProposition = () => {
    const features = [
        {
            icon: <ShieldCheck size={32} className="text-sapphire" />,
            title: "Bias-Free Intelligence",
            description: "Rigorous auditing ensures your AI systems serve all citizens fairly and ethically, meeting strict standards for equity."
        },
        {
            icon: <Zap size={32} className="text-tangerine" />,
            title: "Rapid Deployment",
            description: "My prototype-first methodology delivers working solutions in weeks, not years, allowing for iterative feedback and faster value realization."
        },
        {
            icon: <Lock size={32} className="text-ruby" />,
            title: "Compliant by Design",
            description: "I build with government regulations, security standards, and transparency requirements in mind from the very first line of code."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Trusted AI for Government Operations</h2>
                    <div className="w-16 h-1 bg-sapphire mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="mb-6 p-4 bg-white rounded-xl inline-block shadow-sm border border-slate-100">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-charcoal mb-3">{feature.title}</h3>
                            <p className="text-charcoal/70 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;
