import { motion } from 'framer-motion';
import { 
  FiLayout, 
  FiGlobe, 
  FiServer, 
  FiDatabase,
  FiSettings,
  FiTool,
  FiSearch,
  FiShield,
  FiSmartphone
} from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      title: 'Desenvolvimento Web Frontend',
      description: 'Criação de interfaces modernas e responsivas utilizando React, TypeScript e bibliotecas modernas. Foco em performance, acessibilidade e experiência do usuário.',
      icon: <FiLayout size={36} />,
      features: ['React/Next.js', 'TypeScript', 'UI/UX Design', 'Responsividade'],
      delay: 0.1,
    },
    {
      title: 'Desenvolvimento Web Backend',
      description: 'Desenvolvimento de APIs robustas e escaláveis, integração com bancos de dados e serviços externos, implementação de autenticação e autorização.',
      icon: <FiServer size={36} />,
      features: ['Node.js', 'APIs RESTful', 'Bancos de Dados', 'Segurança'],
      delay: 0.2,
    },
    {
      title: 'Aplicações Web Fullstack',
      description: 'Desenvolvimento completo de aplicações web, desde o frontend até o backend, incluindo banco de dados, autenticação e deploy.',
      icon: <FiGlobe size={36} />,
      features: ['Arquitetura Completa', 'Integrações', 'Deploy', 'Manutenção'],
      delay: 0.3,
    },
    {
      title: 'Banco de Dados e APIs',
      description: 'Modelagem e implementação de bancos de dados, desenvolvimento de APIs RESTful, documentação e testes.',
      icon: <FiDatabase size={36} />,
      features: ['SQL/NoSQL', 'API Design', 'Documentação', 'Testes'],
      delay: 0.4,
    },
    {
      title: 'Desenvolvimento Mobile',
      description: 'Criação de aplicativos móveis multiplataforma com React Native, incluindo integrações com APIs e serviços nativos.',
      icon: <FiSmartphone size={36} />,
      features: ['React Native', 'iOS/Android', 'APIs Nativas', 'Performance'],
      delay: 0.5,
    },
    {
      title: 'DevOps e Infraestrutura',
      description: 'Configuração de ambientes, CI/CD, monitoramento e otimização de performance para aplicações web.',
      icon: <FiSettings size={36} />,
      features: ['CI/CD', 'Docker', 'Cloud', 'Monitoramento'],
      delay: 0.6,
    },
    {
      title: 'Manutenção e Suporte',
      description: 'Serviços contínuos de manutenção, atualizações de segurança, correção de bugs e melhorias de performance.',
      icon: <FiTool size={36} />,
      features: ['Atualizações', 'Correções', 'Melhorias', 'Suporte'],
      delay: 0.7,
    },
    {
      title: 'SEO e Performance',
      description: 'Otimização para mecanismos de busca, melhorias de performance e acessibilidade para melhor ranqueamento.',
      icon: <FiSearch size={36} />,
      features: ['Otimização', 'Performance', 'Analytics', 'Relatórios'],
      delay: 0.8,
    },
    {
      title: 'Segurança e Proteção',
      description: 'Implementação de práticas de segurança, proteção contra vulnerabilidades e conformidade com LGPD.',
      icon: <FiShield size={36} />,
      features: ['HTTPS/SSL', 'Autenticação', 'LGPD', 'Backups'],
      delay: 0.9,
    }
  ];

  return (
    <section id="services" style={{
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
          <h2 className="section-title">Meus Serviços</h2>
          <p className="section-subtitle" style={{ maxWidth: '48rem', margin: '0 auto' }}>
            Soluções completas em desenvolvimento web e mobile, com foco em qualidade e resultados
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              style={{
                position: 'relative',
                backgroundColor: 'white',
                padding: '2.5rem',
                borderRadius: '1.5rem',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              whileHover={{
                y: -8,
                boxShadow: '0 12px 40px rgba(14, 165, 233, 0.15)',
                borderColor: 'rgba(14, 165, 233, 0.3)',
              }}
            >
              {/* Gradient overlay on hover */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #0ea5e9, #06b6d4)',
                  opacity: 0,
                }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '18px',
                  background: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-secondary)',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
                  opacity: 0,
                }}
                className="icon-bg" />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  {service.icon}
                </div>
              </motion.div>

              <h3 style={{
                fontSize: '1.35rem',
                fontWeight: 700,
                color: 'var(--color-light)',
                marginBottom: '1rem',
                lineHeight: 1.3,
              }}>
                {service.title}
              </h3>

              <p style={{
                color: 'var(--color-dark)',
                marginBottom: '1.5rem',
                flex: 1,
                lineHeight: 1.6,
                fontSize: '0.95rem',
              }}>
                {service.description}
              </p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(0, 0, 0, 0.06)',
              }}>
                {service.features.map((feature, idx) => (
                  <motion.span
                    key={idx}
                    style={{
                      fontSize: '0.8rem',
                      backgroundColor: '#f0f9ff',
                      color: '#0369a1',
                      padding: '0.4rem 0.9rem',
                      borderRadius: '8px',
                      fontWeight: 500,
                      border: '1px solid #bae6fd',
                    }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: '#0ea5e9',
                      color: 'white',
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{
            textAlign: 'center',
            marginTop: '4rem',
            padding: '3rem 2rem',
            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
            borderRadius: '2rem',
            border: '2px dashed rgba(14, 165, 233, 0.3)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'white',
              borderRadius: '50px',
              marginBottom: '1rem',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>⚡</span>
            <span style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--color-secondary)',
            }}>
              Resposta em até 24h
            </span>
          </motion.div>

          <h3 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 800,
            marginBottom: '1rem',
            color: 'var(--color-light)',
          }}>
            Pronto para transformar sua ideia em realidade?
          </h3>

          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-dark)',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem',
          }}>
            Solicite um orçamento gratuito e descubra como posso ajudar seu projeto a decolar
          </p>

          <motion.a
            href="#contact"
            className="btn btn-primary"
            style={{
              fontSize: '1.1rem',
              padding: '1.2rem 3rem',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar Orçamento Gratuito →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 