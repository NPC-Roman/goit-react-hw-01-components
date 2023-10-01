import PropTypes from 'prop-types'; 
import css from './statistics.module.css'

export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    <ul className={css.statList}>

      {stats.map(({ id, label, percentage }) => (
        <li
        style= {{
          backgroundColor: getRandomHexColor()
        }}
          className={css.item}
          key={id}
        >
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

function getRandomHexColor() {
  return `#${(Math.random() * 0xFFFFFF | 0).toString(16).padStart(6, '0')}`;
}

Statistics.propTypes = {
  title: PropTypes.string,

  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,    
    label: PropTypes.string,
    percentage: PropTypes.number,
  })).isRequired,
}
