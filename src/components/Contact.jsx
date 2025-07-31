import PropTypes from 'prop-types';
import styles from './Contact.module.css';

function Contact({ onSubmit }) {
  return (
    <section className={styles.contact}>
      <h2>Contato</h2>
      <form className={styles.form} onSubmit={e => { e.preventDefault(); onSubmit(); }} style={{ marginBottom: '2rem' }}>
        <label className={styles.label} htmlFor="nome">Nome:</label>
        <input id="nome" type="text" required style={{ display: 'block', marginBottom: 8, width: '100%', padding: '0.5rem' }} />
        <label className={styles.label} htmlFor="email">Email:</label>
        <input id="email" type="email" required style={{ display: 'block', marginBottom: 8, width: '100%', padding: '0.5rem' }} />
        <label className={styles.label} htmlFor="mensagem">Mensagem:</label>
        <textarea id="mensagem" required style={{ display: 'block', marginBottom: 8, width: '100%', padding: '0.5rem' }} />
        <button className={styles.button} type="submit" style={{ background: '#FFD700', color: '#fff', border: 'none', borderRadius: '6px', padding: '0.5rem 1.5rem' }}>Enviar</button>
      </form>
      <div className={styles.map} style={{ width: '100%', height: 300 }}>
        <iframe
          title="Mapa"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-46.693419%2C-23.568704%2C-46.691419%2C-23.566704"
          style={{ width: '100%', height: '100%', border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

Contact.propTypes = {
  onSubmit: PropTypes.func,
};

export default Contact;
