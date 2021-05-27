import '../styles/CheckoutProduct.css'
import { useStateValue } from '../StateProvider' 
const CheckoutProduct = ({id,title,image,price,rating,quantity,hideButton}) => {
    const [{basket},dispatch] = useStateValue();  
    function removeProduct(){
         dispatch({
             type:'REMOVE_FROM_BASKET',
             id:id,
         })
    }
    function changeQuantity(e){
        dispatch({
            type:'CHANGE_QUANTITY',
            id:id,
            quantity:e.target.value,
        })
    }
    return (
        <div className='checkoutProduct'>
            <div><img className='checkoutProduct__image' src={image} /></div>
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
               {hideButton && (
                   <p>Quantity: {quantity}</p>
               )}
               {!hideButton && (
                   <div>
                   <label className='checkoutProduct__quantity'>Quantity </label>    
                   <input className='checkoutProduct__quantityInput' onChange={changeQuantity} 
                    min='1' defaultValue={1} type='number' /> 
                    <div><button onClick={removeProduct} className='checkoutProduct__button'>Remove from basket</button></div>
                 </div>
               )}
            </div>
        </div>
    )
}

export default CheckoutProduct
