import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        agency: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        // Basic validation
        if (!formData.name || !formData.email || !formData.message || formData.message.length < 20) {
            setStatus('error');
            return;
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
                    ...formData,
                    subject: "New Contact from biasandbrew.dev",
                    from_name: "Bias and Brew Website"
                }),
            });

            const result = await response.json();
            if (result.success) {
                setStatus('success');
                setFormData({ name: '', agency: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Let's Talk</h2>
                        <p className="text-xl text-charcoal/70 mb-8">
                            Ready to build AI systems you can trust? Let's have a chat.
                        </p>

                        <div className="space-y-6">

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h4 className="font-bold text-charcoal mb-2">Connect on LinkedIn</h4>
                                <a href="https://www.linkedin.com/in/konstantin-pokaluhin/" target="_blank" rel="noopener noreferrer" className="text-sapphire hover:underline">View Profile &rarr;</a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
                        {status === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-charcoal mb-2">Message Sent!</h3>
                                <p className="text-charcoal/70 mb-8">Thank you for reaching out. I'll get back to you shortly.</p>
                                <button onClick={() => setStatus('idle')} className="text-sapphire font-medium hover:underline">Send another message</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">Name <span className="text-ruby">*</span></label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-sapphire focus:ring-2 focus:ring-sapphire/20 outline-none transition-all"
                                        placeholder="Jane Smith"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="agency" className="block text-sm font-medium text-charcoal mb-2">Agency / Department</label>
                                    <input
                                        type="text"
                                        id="agency"
                                        name="agency"
                                        value={formData.agency}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-sapphire focus:ring-2 focus:ring-sapphire/20 outline-none transition-all"
                                        placeholder="Department of Transport"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">Email <span className="text-ruby">*</span></label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-sapphire focus:ring-2 focus:ring-sapphire/20 outline-none transition-all"
                                        placeholder="jane.smith@gov.au"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">Message <span className="text-ruby">*</span></label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-sapphire focus:ring-2 focus:ring-sapphire/20 outline-none transition-all resize-none"
                                        placeholder="How can I help you?"
                                    ></textarea>
                                    {status === 'error' && formData.message.length > 0 && formData.message.length < 20 && (
                                        <p className="text-ruby text-xs mt-1">Message must be at least 20 characters.</p>
                                    )}
                                </div>

                                {status === 'error' && (
                                    <div className="flex items-center gap-2 text-ruby text-sm bg-ruby/5 p-3 rounded-lg">
                                        <AlertCircle size={16} />
                                        <span>Something went wrong. Please try again or email me directly.</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full py-4 bg-sapphire text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                    {status !== 'submitting' && <Send size={18} />}
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
