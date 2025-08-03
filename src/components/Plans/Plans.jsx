import PropTypes from 'prop-types';
import styles from './Plans.module.css';

function Plans({ plans }) {
  return (
    <section className={styles.plans}>
      <h2>Planos</h2>
      <table className={styles.plansTable}>
        <thead>
          <tr>
            <th>Plano</th>
            <th>Preço</th>
            <th>Recursos</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {plans && plans.length > 0 ? (
            plans.map((plan, idx) => (
              <tr key={idx} className={idx === 1 ? styles.plansHighlight : ''}>
                <td>{plan.name}</td>
                <td>{plan.price}</td>
                <td>{plan.features.join(', ')}</td>
                <td><button className={styles.plansButton}>Contratar</button></td>
              </tr>
            ))
          ) : (
            <tr><td colSpan={4}>Nenhum plano cadastrado.</td></tr>
          )}
        </tbody>
      </table>
    </section>
  );
}

Plans.propTypes = {
  plans: PropTypes.arrayOf(PropTypes.object),
};

export default Plans;
