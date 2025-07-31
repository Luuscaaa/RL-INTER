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
    <div className="site-container">
      <Header title="RL Inter" />
      <Hero
        title="Bem-vindo à RL Inter"
        subtitle="Consultoria esportiva para atletas e empresas. Descubra nossos planos e serviços!"
      />
      <Services
        services={[
          { name: 'Assessoria de Corrida', desc: 'Treinos personalizados para todos os níveis.' },
          { name: 'Consultoria Corporativa', desc: 'Programas de saúde para empresas.' },
          { name: 'Triathlon', desc: 'Preparação completa para provas e desafios.' },
        ]}
      />
      <About
        team={[
          { name: 'João Silva', role: 'Coach', photo: 'https://randomuser.me/api/portraits/men/32.jpg' },
          { name: 'Maria Souza', role: 'Nutricionista', photo: 'https://randomuser.me/api/portraits/women/44.jpg' },
        ]}
      />
      <Testimonials
        testimonials={[
          { name: 'Carlos', city: 'SP', text: 'Melhorei meu tempo e qualidade de vida!' },
          { name: 'Ana', city: 'RJ', text: 'Equipe atenciosa e resultados reais.' },
        ]}
      />
      <Plans
        plans={[
          { name: 'Básico', price: 'R$99', features: ['Treino semanal', 'Grupo WhatsApp'] },
          { name: 'Premium', price: 'R$199', features: ['Treino diário', 'Consultoria individual', 'Acesso VIP'] },
        ]}
      />
      <FAQ
        faqs={[
          { question: 'Como funciona a consultoria?', answer: 'Você recebe treinos e acompanhamento online.' },
          { question: 'Posso cancelar quando quiser?', answer: 'Sim, sem fidelidade.' },
        ]}
      />
      <Contact onSubmit={() => alert('Mensagem enviada!')} />
      <Footer
        links={[
          { name: 'Instagram', url: 'https://instagram.com' },
          { name: 'WhatsApp', url: 'https://wa.me/5511999999999' },
        ]}
      />
      <WhatsAppButton phone="5511999999999" />
    </div>
  );
}

export default App;
