import PropTypes from 'prop-types';
import styles from './Footer.module.css';

function Footer({ links }) {
  return (
    <footer className={styles.footer}>
      <div style={{ marginBottom: '1rem' }}>
        {links && links.length > 0 ? (
          links.map((link, idx) => (
            <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', marginRight: 16 }}>
              <img src="https://img.icons8.com/ios-filled/24/FFD700/link.png" alt={link.name} style={{ verticalAlign: 'middle', marginRight: 4 }} />
              {link.name}
            </a>
          ))
        ) : (
          <span>Nenhum link cadastrado.</span>
        )}
      </div>
      <div style={{ color: '#fff', fontSize: 14 }}>© {new Date().getFullYear()} RL Inter</div>
    </footer>
  );
}

Footer.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
};

export default Footer;
