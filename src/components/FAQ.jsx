import PropTypes from 'prop-types';
import styles from './FAQ.module.css';

function FAQ({ faqs }) {
  return (
    <section className={styles.faq}>
      {/* ...perguntas e respostas... */}
    </section>
  );
}

FAQ.propTypes = {
  faqs: PropTypes.arrayOf(PropTypes.object),
};

export default FAQ;
