import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--color-primary)',
      zIndex: 50,
    }}>
      <motion.div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          style={{
            width: '4rem',
            height: '4rem',
            borderRadius: '50%',
            border: '4px solid var(--color-secondary)',
            borderTopColor: 'transparent',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.p
          style={{
            marginTop: '1rem',
            color: 'var(--color-light)',
            fontSize: '1.25rem',
            fontWeight: 500,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Carregando...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loader; 