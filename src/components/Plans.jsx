import PropTypes from 'prop-types';
import styles from './Plans.module.css';

function Plans({ plans }) {
  return (
    <section className={styles.plans}>
      {/* ...tabela de planos... */}
    </section>
  );
}

Plans.propTypes = {
  plans: PropTypes.arrayOf(PropTypes.object),
};

export default Plans;
