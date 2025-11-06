import { FiGithub, FiMail, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'var(--color-tertiary)', padding: '3rem 0' }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '1.5rem'
        }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-light)' }}>
              <span style={{ color: 'var(--color-secondary)' }}>E</span>merson Oliveira
            </h2>
            <p style={{ color: 'var(--color-dark)', marginTop: '0.5rem' }}>Desenvolvedor Fullstack</p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
            <a
              href="https://github.com/emersonloliver1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-light)', transition: 'color 0.3s ease' }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-secondary)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-light)'}
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="mailto:emerson.oliveira@protonmail.com"
              style={{ color: 'var(--color-light)', transition: 'color 0.3s ease' }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-secondary)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-light)'}
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
            <a
              href="https://instagram.com/carl.pisciano"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-light)', transition: 'color 0.3s ease' }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-secondary)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-light)'}
              aria-label="Instagram"
            >
              <FiInstagram size={20} />
            </a>
          </div>
        </div>

        <div style={{ 
          borderTop: '1px solid #2d3748', 
          marginTop: '2rem', 
          paddingTop: '2rem', 
          textAlign: 'center' 
        }}>
          <p style={{ color: 'var(--color-dark)', fontSize: '0.875rem' }}>
            &copy; {currentYear} Emerson Oliveira. Todos os direitos reservados.
          </p>
          <p style={{ color: 'var(--color-dark)', fontSize: '0.75rem', marginTop: '0.5rem' }}>
            Desenvolvido com ❤️ usando React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 