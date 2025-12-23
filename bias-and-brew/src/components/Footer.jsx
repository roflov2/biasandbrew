import { Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-charcoal text-white py-12 border-t border-slate-700">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="mb-6 md:mb-0">
                        <a href="#home" className="font-bold text-2xl tracking-tight text-white">
                            Bias<span className="text-sapphire">&</span>Brew
                        </a>
                        <p className="text-slate-400 text-sm mt-2">Data Distilled. Intelligence Deployed.</p>
                    </div>

                    <div className="flex gap-8">
                        <a href="#home" className="text-slate-300 hover:text-white transition-colors text-sm">Home</a>
                        <a href="#services" className="text-slate-300 hover:text-white transition-colors text-sm">Services</a>
                        <a href="#about" className="text-slate-300 hover:text-white transition-colors text-sm">About</a>
                        <a href="#contact" className="text-slate-300 hover:text-white transition-colors text-sm">Contact</a>
                    </div>
                </div>

                <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Bias and Brew. All rights reserved.</p>

                    <div className="flex items-center gap-6 mt-4 md:mt-0">
                        <a href="https://www.linkedin.com/in/konstantin-pokaluhin/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
