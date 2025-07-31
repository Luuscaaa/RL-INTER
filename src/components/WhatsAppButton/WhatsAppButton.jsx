import PropTypes from 'prop-types';
import styles from './WhatsAppButton.module.css';

function WhatsAppButton({ phone }) {
  return (
    <a
      href={`https://wa.me/${phone}`}
      className={styles.whatsappButton}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale no WhatsApp"
    >
      <img src="https://img.icons8.com/ios-filled/32/FFFFFF/whatsapp--v1.png" alt="WhatsApp" />
    </a>
  );
}

WhatsAppButton.propTypes = {
  phone: PropTypes.string.isRequired,
};

export default WhatsAppButton;
