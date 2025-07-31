import PropTypes from 'prop-types';
import styles from './Header.module.css';

function Header({ title }) {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      {/* ...menu e botão WhatsApp... */}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
