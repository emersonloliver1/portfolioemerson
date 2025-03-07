import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiLayout, FiServer } from 'react-icons/fi';

const About = () => {
  const skills = [
    { name: 'Frontend', icon: <FiLayout size={24} />, items: ['React', 'Next.js', 'TypeScript', 'CSS'] },
    { name: 'Backend', icon: <FiServer size={24} />, items: ['Node.js', 'Express', 'NestJS', 'Django'] },
    { name: 'Banco de Dados', icon: <FiDatabase size={24} />, items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'] },
    { name: 'Outros', icon: <FiCode size={24} />, items: ['Git', 'Docker', 'AWS', 'CI/CD'] },
  ];

  return (
    <section id="about" style={{ padding: '5rem 0', backgroundColor: 'var(--color-tertiary)' }}>
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Sobre Mim</h2>
          <p className="section-subtitle" style={{ maxWidth: '48rem', margin: '0 auto' }}>
            Conheça um pouco mais sobre minha trajetória e habilidades
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr', 
          gap: '3rem', 
          alignItems: 'center' 
        }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-light)', marginBottom: '1rem' }}>
              Quem sou eu
            </h3>
            <p style={{ color: 'var(--color-dark)', marginBottom: '1rem' }}>
              Olá! Sou Emerson Oliveira, um desenvolvedor fullstack apaixonado por criar soluções digitais 
              que combinam design elegante com funcionalidade robusta. Com 26 anos de idade e experiência 
              sólida no desenvolvimento web, estou sempre em busca de novos desafios.
            </p>
            <p style={{ color: 'var(--color-dark)', marginBottom: '1rem' }}>
              Minha jornada na programação começou com curiosidade e se transformou em paixão. 
              Hoje, trabalho com as mais modernas tecnologias para entregar projetos que não apenas 
              atendem, mas superam as expectativas dos clientes.
            </p>
            <p style={{ color: 'var(--color-dark)' }}>
              Quando não estou codificando, gosto de explorar novas tecnologias, contribuir para 
              projetos open-source e compartilhar conhecimento com a comunidade de desenvolvedores.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-light)', marginBottom: '1.5rem' }}>
              Minhas habilidades
            </h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr', 
              gap: '1.5rem' 
            }}>
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  style={{ 
                    backgroundColor: 'var(--color-primary)', 
                    padding: '1.5rem', 
                    borderRadius: '0.5rem' 
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ color: 'var(--color-secondary)', marginRight: '0.75rem' }}>{skill.icon}</span>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--color-light)' }}>{skill.name}</h4>
                  </div>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {skill.items.map((item, idx) => (
                      <li key={idx} style={{ color: 'var(--color-dark)', display: 'flex', alignItems: 'center' }}>
                        <span style={{ 
                          width: '0.5rem', 
                          height: '0.5rem', 
                          backgroundColor: 'var(--color-secondary)', 
                          borderRadius: '50%', 
                          marginRight: '0.5rem' 
                        }}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 