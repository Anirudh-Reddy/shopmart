import '../styles/Product.css'
import { useStateValue } from '../StateProvider' 
const Product = ({id,title,image,price,rating}) => {
    const [{basket},dispatch] = useStateValue();
    function addToBasket(){
      console.log(basket) 
       let data = basket.some(b=>b.id==id)
       if(data){
         alert('Item Already added to cart')
         return;
       }
       dispatch({
           type:'ADD_TO_BASKET',
           item:{
               id,
               title,
               image,
               price,
               rating,
               quantity:1,
           },
       })
    }
    return (
        <div className='product'>
            <div className='product__info'>
                 <p>{title}</p> 
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill()
                    .map((_)=>(<p>⭐</p>))}
                </div>
            </div>
           <img src={image}/>
           <button onClick={addToBasket}>Add to cart</button>
        </div>
    )
}

export default Product
