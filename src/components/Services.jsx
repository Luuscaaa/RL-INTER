import PropTypes from 'prop-types';
import styles from './Services.module.css';

function Services({ services }) {
  return (
    <section className={styles.services}>
      <h2>Serviços</h2>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {services && services.length > 0 ? (
          services.map((service, idx) => (
            <div key={idx} className={styles.card} style={{ minWidth: '220px', background: '#fff', border: '2px solid #FFD700', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', padding: '1rem' }}>
              <img src="https://img.icons8.com/ios-filled/50/001F3F/trophy.png" alt="Ícone" style={{ width: 40, marginBottom: 8 }} />
              <h3 style={{ color: '#001F3F' }}>{service.name}</h3>
              <p style={{ color: '#4A4A4A' }}>{service.desc}</p>
              <button style={{ marginTop: '1rem', background: '#FFD700', color: '#001F3F', border: 'none', borderRadius: '6px', padding: '0.5rem 1.5rem' }}>Saiba Mais</button>
            </div>
          ))
        ) : (
          <p>Nenhum serviço cadastrado.</p>
        )}
      </div>
    </section>
  );
}

Services.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object),
};

export default Services;
