import PropTypes from 'prop-types';
import styles from './Services.module.css';

function Services({ services }) {
  return (
    <section className={styles.services}>
      {/* ...cards de serviços... */}
    </section>
  );
}

Services.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object),
};

export default Services;
