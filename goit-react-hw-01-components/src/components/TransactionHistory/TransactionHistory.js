import ItemTransactiom from '../ItemsTransaction/ItemTransaction';
import PropTypes from 'prop-types';


const TransactionHistory = ({items}) => {

    return (
        <table class="transaction-history">
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

                <tbody>
                    {
                        items.map(item => (
                            <ItemTransactiom
                                key={item.id}
                                type={item.type}
                                amount={item.amount}
                                currency={item.currency}
                            />

                        ))
                    }
                </tbody>
  
        </table> )}

TransactionHistory.propTypes = {
    items: PropTypes.object
     };
  
  export default TransactionHistory;