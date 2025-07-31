import PropTypes from 'prop-types';
import styles from './Testimonials.module.css';

function Testimonials({ testimonials }) {
  return (
    <section className={styles.testimonials}>
      {/* ...carrossel de depoimentos... */}
    </section>
  );
}

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(PropTypes.object),
};

export default Testimonials;
