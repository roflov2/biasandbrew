import Header from './components/Header';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Services from './components/Services';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal antialiased selection:bg-sapphire/20">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <Services />
        <Process />
        <WhyUs />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App


