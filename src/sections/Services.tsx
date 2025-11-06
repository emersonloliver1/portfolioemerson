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
    <section id="services" style={{ padding: '5rem 0' }}>
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              style={{ 
                backgroundColor: 'var(--color-tertiary)', 
                padding: '2rem', 
                borderRadius: '1rem',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
            >
              <div style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>{service.icon}</div>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 'bold', 
                color: 'var(--color-light)', 
                marginBottom: '0.75rem' 
              }}>
                {service.title}
              </h3>
              <p style={{ 
                color: 'var(--color-dark)',
                marginBottom: '1rem',
                flex: 1
              }}>
                {service.description}
              </p>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.5rem'
              }}>
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.75rem',
                      backgroundColor: 'var(--color-primary)',
                      color: 'var(--color-light)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      border: '1px solid rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ textAlign: 'center', marginTop: '3rem' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="#contact" className="btn btn-primary">
            Solicitar orçamento
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 