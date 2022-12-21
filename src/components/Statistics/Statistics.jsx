import PropTypes from 'prop-types';
import css from "components/Statistics/Statistics.module.css";
import { getRandomHexColor } from "utils";



export const Statistics = ({ title, stats }) => {
    return (
    <section className="section">
        <div className={`container ${css.containerStatistics}`}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.stats}>
                {stats.map(stat => (
                    <li className={css.item} key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
                        <span className="label">{stat.label}</span>
                        <span className="percentage">{stat.percentage}%</span>
                    </li>
                ))}
            </ul>  
        </div>
    </section>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired
    })),
    title: PropTypes.string, 
    label: PropTypes.string,
    percentage: PropTypes.number
}