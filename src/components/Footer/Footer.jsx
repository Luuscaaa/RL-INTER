import PropTypes from 'prop-types';
import styles from './Footer.module.css';

function Footer({ links }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        {links && links.length > 0 ? (
          links.map((link, idx) => (
            <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
              <img src="https://img.icons8.com/ios-filled/24/FFD700/link.png" alt={link.name} className={styles.footerIcon} />
              {link.name}
            </a>
          ))
        ) : (
          <span>Nenhum link cadastrado.</span>
        )}
      </div>
      <div className={styles.footerCopy}>© {new Date().getFullYear()} RL Inter</div>
    </footer>
  );
}

Footer.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
};

export default Footer;
