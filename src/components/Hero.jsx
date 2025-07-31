import PropTypes from 'prop-types';
import styles from './Hero.module.css';

function Hero({ title, subtitle }) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className={styles.ctaGroup}>
          <a className={styles.btnPrimary} href="#services">Quero Saber Mais</a>
          <a className={styles.btnSecondary} href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Esporte" />
      </div>
    </section>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Hero;
