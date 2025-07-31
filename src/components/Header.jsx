import PropTypes from 'prop-types';
import styles from './Header.module.css';

function Header({ title }) {
  return (
    <header className={styles.header}>
      <div className={styles.logoSquare}>
        {/* Quadrado simulando logo */}
      </div>
      <nav className={styles.menuCenter}>
        <ul className={styles.navList}>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#depoimentos">Depoimentos</a></li>
          <li><a href="#planos">Planos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
      <div className={styles.ctaRight}>
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fale no WhatsApp
        </a>
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
