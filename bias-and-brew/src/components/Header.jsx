import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsOpen(false);
    };

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="font-bold text-2xl text-sapphire tracking-tight">
                    Bias<span className="text-charcoal">&</span>Brew
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-charcoal hover:text-sapphire font-medium transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-sapphire transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-charcoal hover:text-sapphire transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col p-4 animate-in slide-in-from-top-2 duration-200">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="py-3 px-4 text-charcoal hover:bg-slate-50 hover:text-sapphire rounded-md transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
