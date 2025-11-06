import { motion } from 'framer-motion';
import { FiStar, FiUsers, FiCheckCircle, FiTrendingUp, FiExternalLink, FiAward } from 'react-icons/fi';

const Credentials = () => {
  const stats = [
    {
      icon: <FiCheckCircle size={32} />,
      value: '50+',
      label: 'Projetos Entregues',
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    },
    {
      icon: <FiUsers size={32} />,
      value: '40+',
      label: 'Clientes Satisfeitos',
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
    },
    {
      icon: <FiStar size={32} />,
      value: '4.9/5',
      label: 'Avaliação Média',
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
    },
    {
      icon: <FiTrendingUp size={32} />,
      value: '100%',
      label: 'Taxa de Sucesso',
      color: '#0ea5e9',
      gradient: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)'
    },
  ];

  return (
    <section id="credentials" style={{
      padding: '6rem 0',
      background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
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
          marginBottom: '4rem'
        }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              style={{
                position: 'relative',
                background: 'white',
                padding: '2.5rem 2rem',
                borderRadius: '1.5rem',
                textAlign: 'center',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                overflow: 'hidden',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{
                y: -8,
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
              }}
            >
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: stat.gradient,
              }} />

              <motion.div
                style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 1.5rem',
                  borderRadius: '20px',
                  background: stat.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  boxShadow: `0 8px 24px ${stat.color}40`,
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {stat.icon}
              </motion.div>

              <motion.h3
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  background: stat.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '0.5rem',
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1), duration: 0.5, type: "spring" }}
              >
                {stat.value}
              </motion.h3>

              <p style={{
                color: 'var(--color-dark)',
                fontSize: '0.95rem',
                fontWeight: 500,
              }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{
            position: 'relative',
            background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
            padding: '3.5rem 2.5rem',
            borderRadius: '2rem',
            textAlign: 'center',
            color: 'white',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(14, 165, 233, 0.3)',
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Decorative circles */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-30px',
            left: '-30px',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
          }} />

          <motion.div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1.5rem',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50px',
              marginBottom: '1.5rem',
              backdropFilter: 'blur(10px)',
            }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <FiAward size={20} />
            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Perfil Verificado</span>
          </motion.div>

          <h3 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: 900,
            marginBottom: '1rem',
            color: 'white',
            position: 'relative',
            zIndex: 1,
          }}>
            Credibilidade Internacional no Workana
          </h3>

          <p style={{
            fontSize: '1.1rem',
            marginBottom: '2rem',
            opacity: 0.95,
            color: 'white',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            position: 'relative',
            zIndex: 1,
          }}>
            Freelancer profissional com histórico comprovado de entregas de alta qualidade e satisfação garantida
          </p>

          <motion.a
            href="https://www.workana.com/freelancer/4e2ffdb0239edc702166433a238ffbe6"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              backgroundColor: 'white',
              color: 'var(--color-secondary)',
              padding: '1rem 2.5rem',
              fontSize: '1.05rem',
              fontWeight: '700',
              borderRadius: '1rem',
              textDecoration: 'none',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
              zIndex: 1,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
            }}
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.3)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            Ver Perfil Workana
            <FiExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Credentials;
