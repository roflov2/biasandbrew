import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const scrollToContact = (e) => {
        e.preventDefault();
        const element = document.querySelector('#contact');
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    const scrollToServices = (e) => {
        e.preventDefault();
        const element = document.querySelector('#services');
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50/30">

            {/* Abstract Background Element */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-sapphire/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-tangerine/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 inline-block px-4 py-1.5 rounded-full bg-sapphire/10 text-sapphire font-medium text-sm border border-sapphire/20"
                    >
                        Ethical AI Consultancy by Konstantin Pokaluhin
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal tracking-tight leading-tight mb-6"
                    >
                        Data Distilled. <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sapphire to-blue-600">Intelligence Deployed.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-charcoal/80 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        I help government departments build trustworthy AI systems through rigorous bias auditing and intelligent automation. From data integrity to autonomous agents, I deliver solutions that serve the public interest.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button
                            onClick={scrollToContact}
                            className="w-full sm:w-auto px-8 py-4 bg-sapphire text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-sapphire/20 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 group"
                        >
                            Work with Me
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={scrollToServices}
                            className="w-full sm:w-auto px-8 py-4 bg-white text-charcoal border border-slate-200 rounded-lg font-semibold hover:bg-slate-50 hover:border-sapphire/30 transition-all duration-300 flex items-center justify-center"
                        >
                            Explore My Expertise
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
