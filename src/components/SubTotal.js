import '../styles/SubTotal.css'
import { useStateValue } from '../StateProvider' 
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from "../Reducer";
const SubTotal = () => {
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
           <button>Proceed to Checkout</button> 
        </div>
    )
}

export default SubTotal
