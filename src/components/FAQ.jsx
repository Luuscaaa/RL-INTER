import PropTypes from 'prop-types';
import styles from './FAQ.module.css';

function FAQ({ faqs }) {
  return (
    <section className={styles.faq}>
      <h2>Perguntas Frequentes</h2>
      {faqs && faqs.length > 0 ? (
        faqs.map((item, idx) => (
          <div key={idx}>
            <div className={styles.question}>{item.question}</div>
            <div className={styles.answer}>{item.answer}</div>
          </div>
        ))
      ) : (
        <p>Nenhuma pergunta cadastrada.</p>
      )}
    </section>
  );
}

FAQ.propTypes = {
  faqs: PropTypes.arrayOf(PropTypes.object),
};

export default FAQ;
