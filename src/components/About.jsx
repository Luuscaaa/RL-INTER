import PropTypes from 'prop-types';
import styles from './About.module.css';

function About({ team }) {
  return (
    <section className={styles.about}>
      {/* ...fotos da equipe e redes sociais... */}
    </section>
  );
}

About.propTypes = {
  team: PropTypes.arrayOf(PropTypes.object),
};

export default About;
