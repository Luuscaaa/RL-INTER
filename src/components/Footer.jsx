import PropTypes from 'prop-types';
import styles from './Footer.module.css';

function Footer({ links }) {
  return (
    <footer className={styles.footer}>
      {/* ...links e ícones sociais... */}
    </footer>
  );
}

Footer.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
};

export default Footer;
