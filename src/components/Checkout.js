import { useStateValue } from '../StateProvider' 
import '../styles/Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import SubTotal from './SubTotal'
const Checkout = () => {
    const [{basket}] = useStateValue();  
    return (
        <div>
        <div className='checkout'>
          <div className='checkout__left'>
            <img className='checkout__ad'></img>
              {basket?.length===0 ?(
              <div>
                  <h2>Your Shopping Basket is empty</h2>
              </div>
          ):(
              <div>
                  <h2 className='checkout_title'>Your Shopping Basket</h2>
              </div>
          )} 
           {basket.map((item,i)=>(
               <CheckoutProduct 
               id={item.id} title ={item.title}
               image={item.image} price ={item.price}
               rating={item.rating} key={i} />
           ))}
          </div>
          <div className='checkout__right'>

          </div>
        </div>
            {basket.length>0 && (
              <div className='subTotalDiv'>
                <SubTotal/>
              </div>
          )}
        </div>
    )
}

export default Checkout
