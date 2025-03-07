import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        width: '100%',
        zIndex: 40,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'var(--color-primary)' : 'transparent',
        boxShadow: scrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
      }}
    >
      <div className="container flex justify-between items-center">
        <motion.a
          href="#home"
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'var(--color-light)',
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span style={{ color: 'var(--color-secondary)' }}>E</span>merson
        </motion.a>

        {/* Desktop Menu */}
        <motion.ul
          className="hidden md:flex"
          style={{ gap: '2rem' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                style={{
                  color: 'var(--color-light)',
                  transition: 'color 0.3s ease',
                }}
                onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-secondary)'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-light)'}
              >
                {link.name}
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden"
          style={{ color: 'var(--color-light)', background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={toggleMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </motion.button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'var(--color-primary)',
              zIndex: 50,
            }}
            className="md:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
              <button
                style={{ color: 'var(--color-light)', background: 'none', border: 'none', cursor: 'pointer' }}
                onClick={toggleMenu}
              >
                <FiX size={24} />
              </button>
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', marginTop: '4rem' }}>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '1.25rem',
                      color: 'var(--color-light)',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-secondary)'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-light)'}
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 