import PropTypes from 'prop-types';
import styles from './Services.module.css';

function Services({ services }) {
  return (
    <section className={styles.services}>
      <h2 className={styles.servicesTitle}>Serviços</h2>
      <div className={styles.servicesList}>
        {services && services.length > 0 ? (
          services.map((service, idx) => (
            <div 
              key={idx} 
              className={styles.card}
            >
              <img 
                src="https://img.icons8.com/ios-filled/50/001F3F/trophy.png" 
                alt="Ícone" 
                className={styles.cardIcon}
              />
              <h3 className={styles.cardTitle}>{service.name}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
              <button className={styles.cardButton}>Saiba Mais</button>
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
