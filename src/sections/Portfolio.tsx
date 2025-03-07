import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import bistrohub1 from '../assets/images/projects/bistrohub/1.png';
import bistrohub2 from '../assets/images/projects/bistrohub/2.png';
import bistrohub3 from '../assets/images/projects/bistrohub/3.png';
import connut1 from '../assets/images/projects/connut/5.png';
import connut2 from '../assets/images/projects/connut/6.png';
import docnet1 from '../assets/images/projects/docnet/4.png';

const Portfolio = () => {
  // Categorias de projetos
  const categories = ['Todos', 'Web', 'Mobile', 'Landing Page'];
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const bistrohubImages = [bistrohub1, bistrohub2, bistrohub3];
  const connutImages = [connut1, connut2];
  const docnetImages = [docnet1];

  // Função para trocar a imagem automaticamente
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % 3); // Máximo de 3 imagens
  };

  // Projetos atualizados
  const projects = [
    {
      id: 1,
      title: 'Bistrohub',
      description: 'Sistema de gerenciamento de restaurantes com cardápio digital, pedidos online e gestão de mesas.',
      images: bistrohubImages,
      category: 'Web',
      link: 'https://bistrohub.netlify.app/',
      github: '#',
      technologies: ['React', 'Vite', 'Material-UI', 'CSS'],
    },
    {
      id: 2,
      title: 'Connut',
      description: 'Sistema especializado para nutricionistas, oferecendo gestão de pacientes, consultas e planos alimentares.',
      images: connutImages,
      category: 'Web',
      link: 'https://connut.netlify.app/',
      github: '#',
      technologies: ['React', 'Supabase', 'Material-UI', 'TypeScript'],
    },
    {
      id: 3,
      title: 'DocNet Services',
      description: 'Landing page moderna para empresa de telecomunicações especializada em fibra ótica.',
      images: docnetImages,
      category: 'Landing Page',
      link: 'https://docnetservices.com.br/',
      github: '#',
      technologies: ['React', 'TypeScript', 'SEO', 'Styled Components'],
    }
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
    <section id="portfolio" style={{ padding: '5rem 0', backgroundColor: 'var(--color-tertiary)' }}>
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
            marginBottom: '3rem' 
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: '9999px',
                transition: 'all 0.3s ease',
                backgroundColor: activeCategory === category ? 'var(--color-secondary)' : 'var(--color-primary)',
                color: activeCategory === category ? 'var(--color-primary)' : 'var(--color-light)',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
              }}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grade de projetos */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              style={{ 
                backgroundColor: 'var(--color-primary)', 
                borderRadius: '1rem', 
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div style={{ 
                height: '16rem', 
                backgroundColor: '#f8fafc', 
                position: 'relative',
                overflow: 'hidden'
              }}>
                {project.images ? (
                  <img
                    src={project.images[currentImageIndex % project.images.length]}
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'all 0.5s ease-in-out'
                    }}
                  />
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
                  marginBottom: '1rem' 
                }}>
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      style={{ 
                        fontSize: '0.75rem', 
                        backgroundColor: 'var(--color-tertiary)', 
                        color: 'var(--color-light)', 
                        padding: '0.25rem 0.75rem', 
                        borderRadius: '9999px',
                        border: '1px solid rgba(0, 0, 0, 0.05)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      color: 'var(--color-secondary)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.textDecoration = 'underline';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.textDecoration = 'none';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <FiExternalLink style={{ marginRight: '0.25rem' }} /> Ver projeto
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      color: 'var(--color-secondary)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.textDecoration = 'underline';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.textDecoration = 'none';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <FiGithub style={{ marginRight: '0.25rem' }} /> Código fonte
                  </a>
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