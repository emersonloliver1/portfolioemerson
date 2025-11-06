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
    <section id="about" style={{
      padding: '6rem 0',
      background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
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
              Olá! Meu nome é Emerson Oliveira, sou um profissional alagoano com 27 anos de idade.
              Iniciei minha trajetória no mercado de trabalho aos 16 anos, como aprendiz no Ministério da Economia,
              onde fui selecionado através de um rigoroso processo seletivo. Essa experiência me proporcionou
              valiosos aprendizados sobre disciplina, organização e trabalho em equipe — fundamentos que carrego
              até hoje em minha carreira.
            </p>
            <p style={{ color: 'var(--color-dark)', marginBottom: '1rem' }}>
              Atualmente, sou desenvolvedor fullstack especializado em soluções web. Minha experiência abrange
              desde a criação de interfaces intuitivas e responsivas até a implementação de backends eficientes
              e escaláveis. Trabalho com tecnologias modernas e sou apaixonado por transformar ideias em soluções
              práticas e funcionais. Valorizo a lógica e a criatividade como ferramentas essenciais para resolver
              problemas e criar aplicações que realmente fazem a diferença para os usuários.
            </p>
            <p style={{ color: 'var(--color-dark)' }}>
              Como entusiasta do aprendizado contínuo, estou sempre buscando aprimorar minhas habilidades técnicas
              e explorar novas áreas no universo do desenvolvimento. Com atenção cuidadosa aos detalhes e abordagem
              orientada a resultados, me comprometo em entregar projetos que unem qualidade técnica, inovação e
              eficiência. Acredito que a combinação de integridade e determinação é o que me motiva a crescer
              continuamente e buscar oportunidades desafiadoras que me ajudem a evoluir como profissional.
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  style={{
                    backgroundColor: 'white',
                    padding: '2rem',
                    borderRadius: '1.5rem',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{
                    y: -5,
                    boxShadow: '0 8px 30px rgba(14, 165, 233, 0.15)',
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-secondary)',
                      marginRight: '1rem',
                    }}>
                      {skill.icon}
                    </div>
                    <h4 style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--color-light)'
                    }}>
                      {skill.name}
                    </h4>
                  </div>
                  <ul style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem'
                  }}>
                    {skill.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        style={{
                          color: 'var(--color-dark)',
                          display: 'flex',
                          alignItems: 'center',
                          fontSize: '0.95rem',
                        }}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx }}
                      >
                        <span style={{
                          width: '6px',
                          height: '6px',
                          backgroundColor: 'var(--color-secondary)',
                          borderRadius: '50%',
                          marginRight: '0.75rem'
                        }}></span>
                        {item}
                      </motion.li>
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