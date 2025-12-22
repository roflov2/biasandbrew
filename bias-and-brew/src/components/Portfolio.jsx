import { motion } from 'framer-motion';
import { Network, ExternalLink } from 'lucide-react';

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">My Work</h2>
                    <p className="text-xl text-charcoal/70">
                        Interactive demonstrations of data intelligence in action
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
                        {/* Preview Header */}
                        <div className="bg-slate-800/50 px-6 py-4 border-b border-slate-700/50 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-sapphire/20 rounded-lg flex items-center justify-center">
                                    <Network className="text-sapphire" size={22} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">Network Graph Explorer</h3>
                                    <p className="text-sm text-slate-400">Interactive Intelligence Visualization</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            </div>
                        </div>

                        {/* Preview Content */}
                        <div className="p-8 space-y-6">
                            <p className="text-slate-300 leading-relaxed">
                                A high-performance network intelligence tool designed to visualise and analyse complex relationships in large-scale datasets. Built with WebGL for smooth rendering of thousands of nodes.
                            </p>

                            <ul className="grid md:grid-cols-2 gap-4 text-sm">
                                {[
                                    "High-performance WebGL Rendering",
                                    "Louvain Community Detection",
                                    "Shortest Path Analysis",
                                    "Temporal Data Timeline",
                                    "Entity & Community Filtering",
                                    "Interactive Focus Mode"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-slate-400">
                                        <span className="w-1.5 h-1.5 bg-tangerine rounded-full"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Tech badges */}
                            <div className="flex flex-wrap gap-2 pt-2">
                                {["React", "Sigma.js", "Graphology", "FastAPI", "NetworkX"].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs font-medium rounded-full border border-slate-600/50"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div className="pt-4">
                                <a
                                    href="https://roflov2.github.io/network_app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-sapphire text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-sapphire/20 hover:shadow-xl hover:scale-105 group"
                                >
                                    Launch Demo
                                    <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
