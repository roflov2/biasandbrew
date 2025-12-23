import { motion } from 'framer-motion';
import { Search, Database, Scale, BarChart3, Bot, LayoutTemplate, Network, FileCheck, Zap } from 'lucide-react';

const Services = () => {
    return (
        <section id="services" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">My Expertise</h2>
                    <p className="text-xl text-charcoal/70">
                        Two pillars of focus: Foundational integrity and intelligent automation
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Pillar 1: The Bias Pillar */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full"
                    >
                        <div className="bg-sapphire/5 p-8 border-b border-sapphire/10">
                            <div className="flex items-center gap-3 mb-2">
                                <Search className="text-sapphire" size={28} />
                                <h3 className="text-2xl font-bold text-charcoal">I Ensure Integrity</h3>
                            </div>
                            <p className="text-sapphire font-medium mb-2">Auditing & Foundational Data Services</p>
                            <p className="text-charcoal/70">Ensuring quality, fairness, and reliability of your data and models.</p>
                        </div>

                        <div className="p-8 space-y-8 flex-grow">

                            <div className="flex gap-4">
                                <div className="shrink-0 mt-1">
                                    <Database size={20} className="text-sapphire/70" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-charcoal mb-1">The Data Filter</h4>
                                    <p className="text-sm text-charcoal/70">Deep-dive analysis of data integrity, cleansing, and preparation. I identify data quality issues before they become model problems.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="shrink-0 mt-1">
                                    <Scale size={20} className="text-sapphire/70" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-charcoal mb-1">Bias Mitigation Audit</h4>
                                    <p className="text-sm text-charcoal/70">I identify, measure, and correct algorithmic bias in existing ML/AI models. Comprehensive reporting aligned with government fairness standards.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="shrink-0 mt-1">
                                    <FileCheck size={20} className="text-sapphire/70" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-charcoal mb-1">Ethical AI Frameworking</h4>
                                    <p className="text-sm text-charcoal/70">Creating policy and governance structures to ensure AI models comply with regulations, ethical standards, and public accountability.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="shrink-0 mt-1">
                                    <BarChart3 size={20} className="text-sapphire/70" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-charcoal mb-1">Core Metric Alignment</h4>
                                    <p className="text-sm text-charcoal/70">Establishing the correct KPIs and metrics to measure model success against department goals and public service outcomes.</p>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                    {/* Pillar 2: The Brew Pillar */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full"
                    >
                        <div className="bg-tangerine/5 p-8 border-b border-tangerine/10">
                            <div className="flex items-center gap-3 mb-2">
                                <Bot className="text-tangerine" size={28} />
                                <h3 className="text-2xl font-bold text-charcoal">I Build Automation</h3>
                            </div>
                            <p className="text-tangerine font-medium mb-2">Agentic AI & Systems Development</p>
                            <p className="text-charcoal/70">Building and deploying automated, action-oriented AI agents.</p>
                        </div>

                        <div className="p-8 space-y-8 flex-grow">

                            <div className="flex gap-4">
                                <div className="shrink-0 mt-1">
                                    <LayoutTemplate size={20} className="text-tangerine/80" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-charcoal mb-1">The Automation Recipe</h4>
                                    <p className="text-sm text-charcoal/70">Strategy and design for specific, goal-oriented AI agents tailored to your department's needs (e.g., public stakeholder inquiry triage, document processing).</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="shrink-0 mt-1">
                                    <Bot size={20} className="text-tangerine/80" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-charcoal mb-1">Agent Pilot Program</h4>
                                    <p className="text-sm text-charcoal/70">Rapid development and testing of a small-scale, high-impact agent to demonstrate ROI and build stakeholder confidence.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="shrink-0 mt-1">
                                    <Network size={20} className="text-tangerine/80" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-charcoal mb-1">Agent Deployment & Scaling</h4>
                                    <p className="text-sm text-charcoal/70">Engineering the secure and scalable integration of autonomous agents into core department systems, with full security and audit compliance.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="shrink-0 mt-1">
                                    <Zap size={20} className="text-tangerine/80" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-charcoal mb-1">The Workflow Distillation</h4>
                                    <p className="text-sm text-charcoal/70">Using AI and analytics to map, optimise, and automate complex internal business processes, reducing manual overhead.</p>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Services;
