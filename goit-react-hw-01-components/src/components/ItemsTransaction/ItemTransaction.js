import PropTypes from 'prop-types';

const ItemTransactiom = ({id,type,amount,currency}) => {
return (
    <tr key={id}>

            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
    </tr>
   )}

   ItemTransactiom.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
    
       };
  
  export default ItemTransactiom;