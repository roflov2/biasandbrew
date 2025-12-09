import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ValueProposition from './components/ValueProposition';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import WhyMe from './components/WhyMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal antialiased selection:bg-sapphire/20">
      <Header />
      <main>
        <Hero />
        <About />
        <ValueProposition />
        <Services />
        <Portfolio />
        <Process />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App


