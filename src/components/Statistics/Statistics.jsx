import PropTypes from 'prop-types';



export const Statistics = ({ title, stats }) => {
    return (
    <section class="statistics">
        {title && <h2 class="title">{title}</h2>}
        <ul>
            {stats.map(stat => (
                <li key={stat.id}>
                    <span class="label">{stat.label}</span>
                    <span class="percentage">{stat.percentage}%</span>
                </li>
            ))}
        </ul>  
    </section>
    )
}

Statistics.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string, 
    label: PropTypes.string,
    percentage: PropTypes.number
}