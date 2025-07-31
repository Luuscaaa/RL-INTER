import PropTypes from 'prop-types';
import styles from './Hero.module.css';

function Hero({ title, subtitle }) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div style={{ marginTop: '1.5rem' }}>
          <button style={{ marginRight: '1rem', padding: '0.75rem 2rem', border: '2px solid #001F3F', background: 'transparent', color: '#001F3F', borderRadius: '6px' }}>Quero Saber Mais</button>
          <button style={{ padding: '0.75rem 2rem', background: '#FFD700', color: '#001F3F', border: 'none', borderRadius: '6px' }}>Falar no WhatsApp</button>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Esporte" style={{ maxWidth: '100%', borderRadius: '12px', margin: '2rem auto' }} />
      </div>
    </section>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Hero;
