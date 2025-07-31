import PropTypes from 'prop-types';
import styles from './About.module.css';

function About({ team }) {
  return (
    <section className={styles.about}>
      <h2>Sobre a Equipe</h2>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {team && team.length > 0 ? (
          team.map((member, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <img src={member.photo} alt={member.name} style={{ width: 80, height: 80, borderRadius: '50%', border: '2px solid #FFD700', marginBottom: 8 }} />
              <div style={{ color: '#001F3F', fontWeight: 'bold' }}>{member.name}</div>
              <div style={{ color: '#FFD700' }}>{member.role}</div>
              <div style={{ marginTop: 8 }}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#001F3F', marginRight: 8 }}>Instagram</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#001F3F' }}>Facebook</a>
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum membro cadastrado.</p>
        )}
      </div>
    </section>
  );
}

About.propTypes = {
  team: PropTypes.arrayOf(PropTypes.object),
};

export default About;
