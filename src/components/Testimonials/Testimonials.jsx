import PropTypes from 'prop-types';
import styles from './Testimonials.module.css';

function Testimonials({ testimonials }) {
  return (
    <section className={styles.testimonials}>
      <h2>Depoimentos</h2>
      <div className={styles.testimonialsList}>
        {testimonials && testimonials.length > 0 ? (
          testimonials.map((item, idx) => (
            <div key={idx} className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>★★★★★</div>
              <p className={styles.testimonialName}>{item.name} - {item.city}</p>
              <p className={styles.testimonialText}>{item.text}</p>
            </div>
          ))
        ) : (
          <p>Nenhum depoimento cadastrado.</p>
        )}
      </div>
    </section>
  );
}

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(PropTypes.object),
};

export default Testimonials;
