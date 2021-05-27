import '../styles/SubTotal.css'
import { useStateValue } from '../StateProvider' 
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from "../Reducer";
import { useHistory } from 'react-router';
const SubTotal = () => {
    const history = useHistory()
    const [{basket},dispatch] = useStateValue();  
    return (
        <div className='subTotal'>
            <CurrencyFormat 
             renderText = {(value)=>(
                <>
                <p> 
                    SubTotal ({basket.length}{basket.length>1?' items':' item'}):<strong>{' '+value}</strong>
                </p>
                </>
             )}
              decimalScale = {2}
              value = {getBasketTotal(basket)}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
            />
           <button onClick={e=>history.push('/payment')}>Proceed to Checkout</button> 
        </div>
    )
}

export default SubTotal
