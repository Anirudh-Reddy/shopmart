import '../styles/CheckoutProduct.css'
import { useStateValue } from '../StateProvider' 
const CheckoutProduct = ({id,title,image,price,rating}) => {
    const [{basket},dispatch] = useStateValue();  
    function removeProduct(){
         dispatch({
             type:'REMOVE_FROM_BASKET',
             id:id,
         })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />
            <div className='checkoutProduct__info'>
              <p className='checkoutProduct__title'>{title}</p>
              <p className='checkoutProduct__price'>
                  <small>$</small>
                  <strong>{price}</strong>
              </p>  
              <div className='checkoutProduct__rating'>
                    {Array(rating).fill()
                    .map((_)=>(<p>⭐</p>))}
                </div>
            <button onClick={removeProduct} className='checkoutProduct__botton'>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct