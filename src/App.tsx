import { useEffect, useState } from 'react';
import Credentials from './sections/Credentials';
import Footer from './components/Footer';
import Loader from './components/Loader';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen">
      <main>
        <section className="hero-shell">
          <div className="container hero-content">
            <span className="eyebrow">Portfolio atualizado</span>
            <h1>Emerson Oliveira</h1>
            <p>
              Desenvolvedor fullstack com foco em interfaces modernas, entregas
              consistentes e projetos que performam bem em producao.
            </p>
          </div>
        </section>
        <Credentials />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
