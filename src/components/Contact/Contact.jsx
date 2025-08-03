import PropTypes from 'prop-types';
import styles from './Contact.module.css';

function Contact({ onSubmit }) {
  return (
    <section className={styles.contact}>
      <h2>Contato</h2>
      <form className={styles.form + ' ' + styles.formMargin} onSubmit={e => { e.preventDefault(); onSubmit(); }}>
        <label className={styles.label} htmlFor="nome">Nome:</label>
        <input id="nome" type="text" required className={styles.inputField} />
        <label className={styles.label} htmlFor="email">Email:</label>
        <input id="email" type="email" required className={styles.inputField} />
        <label className={styles.label} htmlFor="mensagem">Mensagem:</label>
        <textarea id="mensagem" required className={styles.textareaField} />
        <button className={styles.contactButton} type="submit">Enviar</button>
      </form>
      <div className={styles.map} style={{ width: '100%', height: 300 }}>
        <iframe
          title="Localização"
          src="https://www.google.com/maps/embed?..."
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={styles.mapIframe}
        />
      </div>
    </section>
  );
}

Contact.propTypes = {
  onSubmit: PropTypes.func,
};

export default Contact;
