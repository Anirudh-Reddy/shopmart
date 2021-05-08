import { useStateValue } from '../StateProvider' 
import '../styles/Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import SubTotal from './SubTotal'
const Checkout = () => {
    const [{basket}] = useStateValue();  
    return (
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
           {basket.map(item=>(
               <CheckoutProduct key={item.id}
               id={item.id} title ={item.title}
               image={item.image} price ={item.price}
               rating={item.rating} />
           ))}
          </div>
          {basket.length>0 && (
              <div className='checkout__right'>
                <SubTotal/>
              </div>
          )}
        </div>
    )
}

export default Checkout
