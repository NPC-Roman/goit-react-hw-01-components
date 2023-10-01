import css from "./transactionhistory.module.css";
import PropTypes from 'prop-types'; 

export const TransactionHistory = ({items}) => {
    return <table className={css.transactionHistory}>
    <thead>
      <tr className={css.tableHeader}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  
    {items.map(({id, type, amount, currency}) => (
    <tbody className={css.tableText} key={id}>
      <tr className={css.tableString}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
      </tbody>))}
  </table>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
    })).isRequired,
}
