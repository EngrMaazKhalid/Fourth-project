import { useReducer } from "react";
import CartContext from "./CartContext";


const defaultCartState = {
    item:[],
    totalAmount:0,

} 


const cartReducer= (state, action )=>{
if(action.type=== 'ADD'){
const updateitem =  state.item.concat(action.item)
const updateTotalAmount = state.totalAmount + action.item.price * action.item.Amount
return{
item: updateitem,
totalAmount: updateTotalAmount
}
}
return defaultCartState
}
const CartContextProvider= (props) => {
    
    const [cartState, dispatchCart]  =useReducer(cartReducer, defaultCartState)
    
    const saveAdditem=(item) =>{
dispatchCart({type:'ADD', item: item})
    }

    const saveRemoveItem  =(id) =>{
dispatchCart({type:'REMOVE', id:id})
    }
    const cartContext={
        item:cartState.item,
        totalAmount:cartState.totalAmount,
        addItem: saveAdditem,
        removeitem: saveRemoveItem 
    }

    return(
        <CartContext.Provider value={cartContext}>
        {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;