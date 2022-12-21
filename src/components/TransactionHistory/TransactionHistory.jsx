import css from "components/TransactionHistory/TransactionHistory.module.css";
import PropTypes from 'prop-types';


export const TransactionHistory = ({ items }) => {
    return (
    <section className="section">
        <div className={`container ${css.containerTransactionHistory}`}>
            <table className={css.table}>
                <thead className={css.tHead}>
                    <tr className={css.tr}>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody className={css.tBody}>
                    {items.map(item => (
                        <tr className={css.tr} key={item.id}>
                            <td>{item.type}</td>
                            <td>{item.amount}</td>
                            <td>{item.currency}</td>
                        </tr>
                    ))}
                </tbody>
            </table>  
        </div>
    </section>
    )
}

TransactionHistory.propTypes = {
    item: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string, 
        currency: PropTypes.string,
        amount: PropTypes.number
    })),
    
}