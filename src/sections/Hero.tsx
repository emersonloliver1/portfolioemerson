import { motion } from 'framer-motion';
import { FiArrowDown, FiMapPin, FiAward } from 'react-icons/fi';
import { FaReact, FaNode, FaPython, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiMongodb, SiNextdotjs } from 'react-icons/si';
import profileImage from '../assets/images/profile.jpg';
import './Hero.css';

const Hero = () => {
  const techIcons = [
    { icon: <FaReact />, name: 'React', color: '#61DAFB' },
    { icon: <SiNextdotjs />, name: 'Next.js', color: '#000000' },
    { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
    { icon: <FaNode />, name: 'Node.js', color: '#339933' },
    { icon: <FaPython />, name: 'Python', color: '#3776AB' },
    { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#4169E1' },
    { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
    { icon: <FaDocker />, name: 'Docker', color: '#2496ED' },
  ];

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '5rem',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #f0f9ff 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background shapes */}
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge de disponibilidade */}
            <motion.div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '50px',
                marginBottom: '1.5rem',
                border: '1px solid rgba(14, 165, 233, 0.2)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#10b981',
                animation: 'pulse-glow 2s ease-in-out infinite',
              }} />
              <span style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--color-light)',
              }}>
                Disponível para novos projetos
              </span>
            </motion.div>

            <motion.p
              style={{
                color: 'var(--color-secondary)',
                fontWeight: 600,
                marginBottom: '1rem',
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <FiMapPin size={18} />
              Olá, meu nome é
            </motion.p>

            <motion.h1
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '1rem',
                lineHeight: 1.1,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Emerson Oliveira
            </motion.h1>

            <motion.h2
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                fontWeight: 700,
                color: 'var(--color-light)',
                marginBottom: '1.5rem',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Desenvolvedor Fullstack
              <span style={{
                display: 'inline-block',
                marginLeft: '0.5rem',
                fontSize: '2rem',
              }}>
                🚀
              </span>
            </motion.h2>

            <motion.p
              style={{
                color: 'var(--color-dark)',
                maxWidth: '36rem',
                marginBottom: '2rem',
                fontSize: '1.125rem',
                lineHeight: 1.7,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Transformo ideias em soluções digitais elegantes e funcionais.
              Especializado em desenvolvimento web completo, desde o front-end
              até o back-end, criando experiências digitais memoráveis.
            </motion.p>

            {/* Stats badges */}
            <motion.div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2rem',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div style={{
                padding: '0.75rem 1.25rem',
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '12px',
                border: '1px solid rgba(14, 165, 233, 0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <FiAward style={{ color: 'var(--color-secondary)' }} size={20} />
                <span style={{ fontWeight: 600, color: 'var(--color-light)' }}>50+ Projetos</span>
              </div>
              <div style={{
                padding: '0.75rem 1.25rem',
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '12px',
                border: '1px solid rgba(14, 165, 233, 0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <span style={{ fontSize: '1.25rem' }}>⭐</span>
                <span style={{ fontWeight: 600, color: 'var(--color-light)' }}>4.9/5 Rating</span>
              </div>
            </motion.div>

            <motion.div
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <a href="#contact" className="btn btn-primary">
                Solicitar Orçamento →
              </a>
              <a href="#portfolio" className="btn btn-outline">
                Ver Projetos
              </a>
            </motion.div>

            {/* Tech stack badges */}
            <motion.div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginTop: '2.5rem',
                paddingTop: '2.5rem',
                borderTop: '1px solid rgba(14, 165, 233, 0.1)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <span style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--color-dark)',
                marginRight: '0.5rem',
              }}>
                Tech Stack:
              </span>
              {techIcons.map((tech, index) => (
                <motion.div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    background: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '8px',
                    fontSize: '1.25rem',
                    color: tech.color,
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    cursor: 'pointer',
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {tech.icon}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="profile-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.div
              style={{
                position: 'relative',
                width: 'clamp(280px, 40vw, 450px)',
                height: 'clamp(280px, 40vw, 450px)',
              }}
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Glow effect */}
              <div style={{
                position: 'absolute',
                inset: '-20px',
                background: 'linear-gradient(135deg, #0ea5e9, #06b6d4, #0ea5e9)',
                borderRadius: '50%',
                filter: 'blur(40px)',
                opacity: 0.3,
                animation: 'pulse-glow 3s ease-in-out infinite',
              }} />

              {/* Image container with glassmorphism border */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                padding: '8px',
                background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #0284c7 100%)',
                boxShadow: '0 20px 60px rgba(14, 165, 233, 0.3)',
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  position: 'relative',
                  background: 'white',
                }}>
                  <img
                    src={profileImage}
                    alt="Emerson Oliveira - Desenvolvedor Fullstack"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, transparent 60%)',
                  }} />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '10%',
                  right: '-10%',
                  padding: '0.75rem 1rem',
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '12px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>💼</span>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-dark)' }}>Projetos</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-light)' }}>50+</div>
                </div>
              </motion.div>

              <motion.div
                style={{
                  position: 'absolute',
                  bottom: '15%',
                  left: '-10%',
                  padding: '0.75rem 1rem',
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '12px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>⭐</span>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-dark)' }}>Rating</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-light)' }}>4.9/5</div>
                </div>
              </motion.div>
            </motion.div>
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