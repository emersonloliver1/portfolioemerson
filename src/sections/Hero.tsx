import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import profileImage from '../assets/images/profile.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      paddingTop: '5rem'
    }}>
      <div className="container">
        <div className="hero-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              style={{ 
                color: 'var(--color-secondary)', 
                fontWeight: 500, 
                marginBottom: '1rem' 
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Olá, meu nome é
            </motion.p>
            <motion.h1
              style={{ 
                fontSize: 'clamp(2.5rem, 8vw, 4rem)', 
                fontWeight: 'bold', 
                color: 'var(--color-light)', 
                marginBottom: '1rem' 
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Emerson Oliveira
            </motion.h1>
            <motion.h2
              style={{ 
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', 
                fontWeight: 'bold', 
                color: 'var(--color-dark)', 
                marginBottom: '1.5rem' 
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Desenvolvedor Fullstack
            </motion.h2>
            <motion.p
              style={{ 
                color: 'var(--color-dark)', 
                maxWidth: '32rem', 
                marginBottom: '2rem' 
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Transformo ideias em soluções digitais elegantes e funcionais. 
              Especializado em desenvolvimento web completo, desde o front-end 
              até o back-end, criando experiências digitais memoráveis.
            </motion.p>
            <motion.div
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a href="#contact" className="btn btn-primary">
                Entre em contato
              </a>
              <a href="#portfolio" className="btn btn-outline">
                Ver portfólio
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="profile-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div style={{ 
              position: 'relative', 
              width: '20rem', 
              height: '20rem', 
              borderRadius: '50%', 
              backgroundColor: 'var(--color-tertiary)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              overflow: 'hidden',
              boxShadow: '0 0 2rem rgba(100, 255, 218, 0.2)'
            }}>
              <img 
                src={profileImage} 
                alt="Emerson Oliveira" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                background: 'linear-gradient(to bottom right, rgba(100, 255, 218, 0.2), transparent)' 
              }} />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          style={{ 
            position: 'absolute', 
            bottom: '2.5rem', 
            left: '50%', 
            transform: 'translateX(-50%)' 
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <a href="#about" style={{ color: 'var(--color-secondary)' }}>
            <FiArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 