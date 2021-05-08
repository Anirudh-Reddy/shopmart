import '../styles/Product.css'
const Product = ({id,title,image,price,rating}) => {
    return (
        <div className='product'>
            <div className='product__info'>
                 <p>{title}</p> 
                <p className='product__price'>
                    <strong>{price}</strong>
                    <small>$</small>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill()
                    .map((_)=>(<p>:star</p>))}
                </div>
            </div>
           <img src={image}/>
           <button>Add to cart</button>
        </div>
    )
}

export default Product
