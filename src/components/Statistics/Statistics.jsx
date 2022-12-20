import PropTypes from 'prop-types';



export const Statistics = ({ title, stats }) => {
    return (
    <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul>
            {stats.map(stat => (
                <li key={stat.id}>
                    <span className="label">{stat.label}</span>
                    <span className="percentage">{stat.percentage}%</span>
                </li>
            ))}
        </ul>  
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