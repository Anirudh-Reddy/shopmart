export const initialState = {
    basket:[
    //     {
    //       id:'2' ,
    //       title:'OnePlus 9 5G (Arctic Sky, 8GB RAM, 128GB Storage)',
    //       price:499.99,
    //       rating:5,
    //       image:'https://images-na.ssl-images-amazon.com/images/I/61fy%2Bu9uqPL._SL1500_.jpg' ,   
    // }
],
    user:null,
}
export const getBasketTotal=(basket)=>{
  return basket?.reduce((amount,item)=>item.price+amount,0)
}
function reducer(state,action){
    console.log(state,action)
    switch(action.type){
      case 'ADD_TO_BASKET':
          return {
              ...state,
              basket: [...state.basket,action.item],
            }
      case 'REMOVE_FROM_BASKET':
          let newBasket = [...state.basket].filter(item=>item.id!==action.id);
          return {
              ...state,
              basket:newBasket,
            }
       default:
        return {state}
    }
}

export default reducer;