import { motion } from 'framer-motion';
import { FiStar, FiUsers, FiCheckCircle, FiTrendingUp, FiExternalLink } from 'react-icons/fi';

const Credentials = () => {
  const stats = [
    { icon: <FiCheckCircle size={32} />, value: '50+', label: 'Projetos Entregues' },
    { icon: <FiUsers size={32} />, value: '40+', label: 'Clientes Satisfeitos' },
    { icon: <FiStar size={32} />, value: '4.9/5', label: 'Avaliação Média' },
    { icon: <FiTrendingUp size={32} />, value: '100%', label: 'Taxa de Sucesso' },
  ];

  return (
    <section id="credentials" style={{ padding: '4rem 0', backgroundColor: 'var(--color-primary)' }}>
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', marginBottom: '3rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Credibilidade Comprovada</h2>
          <p className="section-subtitle" style={{ maxWidth: '48rem', margin: '0 auto' }}>
            Experiência reconhecida em plataformas internacionais de freelancing
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              style={{
                backgroundColor: 'var(--color-tertiary)',
                padding: '2rem',
                borderRadius: '1rem',
                textAlign: 'center',
                border: '2px solid transparent',
                transition: 'all 0.3s ease',
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{
                scale: 1.05,
                borderColor: 'var(--color-secondary)',
              }}
            >
              <div style={{
                color: 'var(--color-secondary)',
                marginBottom: '1rem',
                display: 'flex',
                justifyContent: 'center'
              }}>
                {stat.icon}
              </div>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: 'var(--color-light)',
                marginBottom: '0.5rem'
              }}>
                {stat.value}
              </h3>
              <p style={{ color: 'var(--color-dark)', fontSize: '0.9rem' }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{
            backgroundColor: 'linear-gradient(135deg, var(--color-secondary) 0%, #0284c7 100%)',
            background: 'linear-gradient(135deg, var(--color-secondary) 0%, #0284c7 100%)',
            padding: '2.5rem',
            borderRadius: '1rem',
            textAlign: 'center',
            color: 'white',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 style={{
            fontSize: '1.75rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: 'white'
          }}>
            Perfil Verificado no Workana
          </h3>
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '1.5rem',
            opacity: 0.95,
            color: 'white'
          }}>
            Freelancer profissional com histórico comprovado de entregas de alta qualidade
          </p>
          <a
            href="https://www.workana.com/freelancer/4e2ffdb0239edc702166433a238ffbe6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'white',
              color: 'var(--color-secondary)',
              padding: '0.875rem 2rem',
              fontSize: '1rem',
              fontWeight: '600',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Ver Perfil Workana
            <FiExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Credentials;
