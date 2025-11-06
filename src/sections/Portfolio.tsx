import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

// Projetos existentes
import connut1 from '../assets/images/projects/connut/5.png';
import connut2 from '../assets/images/projects/connut/6.png';
import docnet1 from '../assets/images/projects/docnet/4.png';

// Novos projetos - Clientes
import unictava1 from '../assets/images/projects/unictava/1.png';
import unictava2 from '../assets/images/projects/unictava/2.png';
import indaia1 from '../assets/images/projects/indaia/1.png';
import indaia2 from '../assets/images/projects/indaia/2.png';
import indaia3 from '../assets/images/projects/indaia/3.png';
import resilience1 from '../assets/images/projects/resilience/1.png';
import resilience2 from '../assets/images/projects/resilience/2.png';
import reviver1 from '../assets/images/projects/reviver/1.png';
import reviver2 from '../assets/images/projects/reviver/2.png';

// Novos projetos - Proprietários
import pulodogato1 from '../assets/images/projects/pulodogato/1.png';
import pulodogato2 from '../assets/images/projects/pulodogato/2.png';
import orion1 from '../assets/images/projects/orion/1.png';
import orion2 from '../assets/images/projects/orion/2.png';
import agendaja1 from '../assets/images/projects/agendaja/1.png';
import agendaja2 from '../assets/images/projects/agendaja/2.png';

const Portfolio = () => {
  // Categorias de projetos
  const categories = ['Todos', 'Projetos de Clientes', 'Projetos Proprietários'];
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Arrays de imagens
  const unictavaImages = [unictava1, unictava2];
  const indaiaImages = [indaia1, indaia2, indaia3];
  const resilienceImages = [resilience1, resilience2];
  const reviverImages = [reviver1, reviver2];
  const pulodogatoImages = [pulodogato1, pulodogato2];
  const orionImages = [orion1, orion2];
  const agendajaImages = [agendaja1, agendaja2];
  const connutImages = [connut1, connut2];
  const docnetImages = [docnet1];

  // Função para trocar a imagem automaticamente
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % 3); // Máximo de 3 imagens
  };

  // Projetos completos
  const projects = [
    // PROJETOS DE CLIENTES
    {
      id: 1,
      title: 'Unictava',
      description: 'Site institucional para empresa italiana líder em realidade virtual. Desenvolvido com Next.js para otimização de SEO e performance, integrando soluções modernas de backend.',
      images: unictavaImages,
      category: 'Projetos de Clientes',
      link: 'https://www.unictava.com/pt-BR',
      github: 'https://github.com/emersonloliver1',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'React'],
    },
    {
      id: 2,
      title: 'Indaiá Eventos - Gestão de Contratos',
      description: 'Sistema completo de gestão de contratos e orçamentos para eventos. Inclui autenticação, dashboard analytics, geração de PDFs e assinatura digital de contratos.',
      images: indaiaImages,
      category: 'Projetos de Clientes',
      link: 'https://contrato-orcamento.eventosindaia.com.br/',
      github: 'https://github.com/emersonloliver1',
      technologies: ['Next.js', 'PostgreSQL', 'Supabase', 'PDF Generation'],
    },
    {
      id: 3,
      title: 'Eximio - Plataforma de Educação Médica',
      description: 'Plataforma robusta de educação continuada para formação de médicos. Sistema complexo com gestão de cursos, avaliações e certificações em ambiente corporativo.',
      images: docnetImages,
      category: 'Projetos de Clientes',
      link: 'https://www.eximio.com.br/',
      github: 'https://github.com/emersonloliver1',
      technologies: ['Angular', 'Python', 'Django', 'PostgreSQL'],
    },
    {
      id: 4,
      title: 'DocNet Services',
      description: 'Landing page moderna e responsiva para empresa de telecomunicações de Maceió. Foco em conversão, SEO otimizado e performance de carregamento.',
      images: docnetImages,
      category: 'Projetos de Clientes',
      link: 'https://docnetservices.com.br/',
      github: 'https://github.com/emersonloliver1',
      technologies: ['React', 'Vite', 'TypeScript', 'SEO'],
    },
    {
      id: 5,
      title: 'Clínica Resilience',
      description: 'Sistema de agendamento inteligente para clínica de psicologia. Interface intuitiva com gestão de horários, notificações e histórico de pacientes.',
      images: resilienceImages,
      category: 'Projetos de Clientes',
      link: 'https://www.clinicaresilience.com/',
      github: 'https://github.com/emersonloliver1',
      technologies: ['React', 'Node.js', 'MongoDB', 'Calendar API'],
    },
    {
      id: 6,
      title: 'Reviver - Avaliação de Desempenho',
      description: 'Sistema especializado de avaliação de desempenho clínico. Dashboard analytics com métricas em tempo real, relatórios personalizados e backend as a service.',
      images: reviverImages,
      category: 'Projetos de Clientes',
      link: 'https://reviver-three.vercel.app',
      github: 'https://github.com/emersonloliver1',
      technologies: ['Next.js', 'Firebase', 'Analytics', 'Charts'],
    },

    // PROJETOS PROPRIETÁRIOS
    {
      id: 7,
      title: 'Pulo do Gato App',
      description: 'PWA de ofertas locais georreferenciadas. Marketplace completo com sistema de cashback, notificações push e painel administrativo para comerciantes.',
      images: pulodogatoImages,
      category: 'Projetos Proprietários',
      link: 'https://pulodogatoapp.com.br',
      github: 'https://github.com/emersonloliver1',
      technologies: ['Next.js', 'Node.js', 'PWA', 'Geolocation'],
    },
    {
      id: 8,
      title: 'Orion - Gestão Empresarial',
      description: 'ERP completo para pequenas e médias empresas. Gestão financeira, estoque, vendas, CRM e relatórios gerenciais integrados em um sistema único.',
      images: orionImages,
      category: 'Projetos Proprietários',
      link: 'https://www.orionapp.site',
      github: 'https://github.com/emersonloliver1',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Charts'],
    },
    {
      id: 9,
      title: 'AgendaJa',
      description: 'Plataforma SaaS de agendamento online para pequenos negócios. Sistema multi-tenant com automação de lembretes, gestão de disponibilidade e integração WhatsApp.',
      images: agendajaImages,
      category: 'Projetos Proprietários',
      link: 'https://agendaja.space/',
      github: 'https://github.com/emersonloliver1',
      technologies: ['Flask', 'Python', 'SQLite', 'WhatsApp API'],
    },
    {
      id: 10,
      title: 'Connut - Gestão Nutricional',
      description: 'Sistema especializado para gestão de cozinhas hospitalares. Controle de dietas, relatórios nutricionais, gestão de estoque e integração com prontuário eletrônico.',
      images: connutImages,
      category: 'Projetos Proprietários',
      link: 'https://connut.netlify.app/',
      github: 'https://github.com/emersonloliver1',
      technologies: ['React', 'Vite', 'Supabase', 'Material-UI'],
    },
  ];

  // Filtra os projetos com base na categoria selecionada
  const filteredProjects = activeCategory === 'Todos'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  // Efeito para trocar as imagens a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="portfolio" style={{
      padding: '6rem 0',
      background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
      position: 'relative'
    }}>
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Meu Portfólio</h2>
          <p className="section-subtitle" style={{ maxWidth: '48rem', margin: '0 auto' }}>
            Confira alguns dos projetos que desenvolvi recentemente
          </p>
        </motion.div>

        {/* Filtro de categorias */}
        <motion.div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
            padding: '1rem',
            background: 'white',
            borderRadius: '1rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
            maxWidth: '800px',
            margin: '0 auto 3rem',
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              style={{
                padding: '0.75rem 1.75rem',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '0.95rem',
                backgroundColor: activeCategory === category ? 'var(--color-secondary)' : 'transparent',
                color: activeCategory === category ? 'white' : 'var(--color-light)',
                border: activeCategory === category ? 'none' : '2px solid rgba(0, 0, 0, 0.06)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
              }}
              onClick={() => setActiveCategory(category)}
              whileHover={{
                scale: 1.05,
                backgroundColor: activeCategory === category ? 'var(--color-secondary)' : '#f0f9ff',
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: activeCategory === category
                  ? '0 4px 16px rgba(14, 165, 233, 0.3)'
                  : '0 0 0 rgba(0, 0, 0, 0)',
              }}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'var(--gradient-primary)',
                    borderRadius: '12px',
                    zIndex: -1,
                  }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Grade de projetos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              style={{
                backgroundColor: 'white',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                position: 'relative',
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(14, 165, 233, 0.15)',
              }}
            >
              <div style={{
                height: '18rem',
                backgroundColor: '#f8fafc',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {project.images ? (
                  <>
                    <img
                      src={project.images[currentImageIndex % project.images.length]}
                      alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'all 0.6s ease-in-out',
                      }}
                    />
                    {/* Gradient overlay */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.3))',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                    className="project-overlay" />

                    {/* Category badge */}
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      padding: '0.5rem 1rem',
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--color-secondary)',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    }}>
                      {project.category === 'Projetos de Clientes' ? '🤝 Cliente' : '⚡ Proprietário'}
                    </div>
                  </>
                ) : (
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <p style={{ color: 'var(--color-light)', fontSize: '1.125rem', fontWeight: 500 }}>
                      Imagem do Projeto
                    </p>
                  </div>
                )}
              </div>
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 'bold', 
                  color: 'var(--color-light)', 
                  marginBottom: '0.5rem' 
                }}>
                  {project.title}
                </h3>
                <p style={{ 
                  color: 'var(--color-dark)', 
                  marginBottom: '1rem',
                  flex: 1
                }}>
                  {project.description}
                </p>
                
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.5rem'
                }}>
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      style={{
                        fontSize: '0.8rem',
                        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                        color: '#0369a1',
                        padding: '0.4rem 0.9rem',
                        borderRadius: '8px',
                        fontWeight: 600,
                        border: '1px solid #bae6fd',
                      }}
                      whileHover={{
                        scale: 1.05,
                        background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                        color: 'white',
                        borderColor: '#0284c7',
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div style={{
                  display: 'flex',
                  gap: '0.75rem',
                  marginTop: 'auto',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                }}>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1rem',
                      background: 'var(--gradient-primary)',
                      color: 'white',
                      borderRadius: '10px',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      textDecoration: 'none',
                      boxShadow: '0 2px 8px rgba(14, 165, 233, 0.2)',
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 4px 16px rgba(14, 165, 233, 0.3)',
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink size={16} />
                    Ver Projeto
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0.75rem',
                      border: '2px solid rgba(14, 165, 233, 0.3)',
                      borderRadius: '10px',
                      color: 'var(--color-secondary)',
                      textDecoration: 'none',
                    }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: '#f0f9ff',
                      borderColor: 'var(--color-secondary)',
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiGithub size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ textAlign: 'center', marginTop: '3rem' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="#contact" className="btn btn-outline">
            Vamos trabalhar juntos
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 