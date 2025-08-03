import PropTypes from 'prop-types';
import styles from './About.module.css';

function About({ team }) {
  return (
    <section className={styles.about}>
      <h2>Sobre a Equipe</h2>
      <div className={styles.aboutList}>
        {team && team.length > 0 ? (
          team.map((member, idx) => (
            <div key={idx} className={styles.aboutMember}>
              <img src={member.photo} alt={member.name} className={styles.aboutPhoto} />
              <div className={styles.aboutName}>{member.name}</div>
              <div className={styles.aboutRole}>{member.role}</div>
              <div className={styles.aboutLinks}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.aboutLink}>Instagram</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.aboutLink}>Facebook</a>
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
