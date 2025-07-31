import PropTypes from 'prop-types';
import styles from './Hero.module.css';

function Hero({ title, subtitle }) {
  return (
    <section className={styles.hero}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {/* ...CTAs e imagem... */}
    </section>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Hero;
