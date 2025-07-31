import PropTypes from 'prop-types';
import styles from './Contact.module.css';

function Contact({ onSubmit }) {
  return (
    <section className={styles.contact}>
      {/* ...formulário e mapa... */}
    </section>
  );
}

Contact.propTypes = {
  onSubmit: PropTypes.func,
};

export default Contact;
