export const initialState = {
    basket:[],
    user:null,
}
export const getBasketTotal=(basket)=>{
  return basket?.reduce((amount,item)=>(item.price*item.quantity)+amount,0)
}
function reducer(state,action){
   // console.log(state)
    console.log(action)
    switch(action.type){
      case 'SET_USER':
          return {
              ...state,
              user:action.user
          }
      case 'ADD_TO_BASKET':
          console.log('a :',state)
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
       case 'CLEAR_BASKET':
           console.log('cb:',state)
           return {
              ...state,
              basket:[],
            }
        case 'CHANGE_QUANTITY':
            let newQuantity = [...state.basket].find(item=>item.id==action.id)
            newQuantity.quantity = action.quantity
            return {
             ...state,
             basket:[...state.basket]
            }    
       default:
        return {state}
    }
}

export default reducer;