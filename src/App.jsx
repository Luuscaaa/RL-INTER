import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Plans from './components/Plans';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <>
      <Header title="RL Inter" />
      <Hero title="Bem-vindo" subtitle="Consultoria esportiva" />
      <Services services={[]} />
      <About team={[]} />
      <Testimonials testimonials={[]} />
      <Plans plans={[]} />
      <FAQ faqs={[]} />
      <Contact onSubmit={() => {}} />
      <Footer links={[]} />
      <WhatsAppButton phone="55XX9XXXXXXXX" />
    </>
  );
}

export default App;
