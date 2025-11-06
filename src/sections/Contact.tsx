import { motion } from 'framer-motion';
import { FiMail, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      title: 'Email',
      content: 'emerson.oliveira@protonmail.com',
      link: 'mailto:emerson.oliveira@protonmail.com',
    },
    {
      icon: <FaWhatsapp size={24} />,
      title: 'WhatsApp',
      content: '(82) 98222-0095',
      link: 'https://wa.link/k7jlyh',
    },
    {
      icon: <FiMapPin size={24} />,
      title: 'Localização',
      content: 'Maceió / AL',
      link: 'https://maps.google.com/?q=Maceió+Alagoas',
    },
  ];

  return (
    <section id="contact" style={{ padding: '5rem 0' }}>
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle" style={{ maxWidth: '48rem', margin: '0 auto' }}>
            Vamos conversar sobre seu projeto e como posso ajudar a transformar suas ideias em realidade
          </p>
        </motion.div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'var(--color-tertiary)',
                  padding: '2rem',
                  borderRadius: '0.5rem',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                className="contact-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
                }}
              >
                <div style={{
                  color: 'var(--color-secondary)',
                  marginRight: '1.5rem',
                  backgroundColor: 'var(--color-primary)',
                  padding: '1rem',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {info.icon}
                </div>
                <div>
                  <h4 style={{ color: 'var(--color-light)', fontWeight: 500, marginBottom: '0.5rem', fontSize: '1.25rem' }}>
                    {info.title}
                  </h4>
                  <a
                    href={info.link}
                    style={{
                      color: 'var(--color-dark)',
                      transition: 'color 0.3s ease',
                      fontSize: '1.125rem'
                    }}
                    target={info.title === 'Localização' || info.title === 'WhatsApp' ? '_blank' : undefined}
                    rel={info.title === 'Localização' || info.title === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-secondary)'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-dark)'}
                  >
                    {info.content}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            style={{ textAlign: 'center', marginTop: '3rem' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="https://wa.link/k7jlyh" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Fale comigo no WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 