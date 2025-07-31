import PropTypes from 'prop-types';
import styles from './Testimonials.module.css';

function Testimonials({ testimonials }) {
  return (
    <section className={styles.testimonials}>
      <h2>Depoimentos</h2>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {testimonials && testimonials.length > 0 ? (
          testimonials.map((item, idx) => (
            <div key={idx} className={styles.card} style={{ background: '#F5F7FA', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', borderRadius: '8px', padding: '1rem', minWidth: '220px' }}>
              <div style={{ color: '#FFD700', fontSize: 20 }}>★★★★★</div>
              <p style={{ color: '#001F3F', fontWeight: 'bold' }}>{item.name} - {item.city}</p>
              <p style={{ color: '#4A4A4A' }}>{item.text}</p>
            </div>
          ))
        ) : (
          <p>Nenhum depoimento cadastrado.</p>
        )}
      </div>
    </section>
  );
}

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(PropTypes.object),
};

export default Testimonials;
