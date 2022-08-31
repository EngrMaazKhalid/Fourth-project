import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  item: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.Amount;

    const existingCartItemIndex = state.item.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.item[existingCartItemIndex];

    let updateditems;

    if (existingCartItem) {
      const updateditem = {
        ...existingCartItem,
        Amount: existingCartItem.Amount + action.item.Amount,
      };
      updateditems = [...state.item];
      updateditems[existingCartItemIndex] = updateditem;
    } else {
      updateditems = state.item.concat(action.item);
    }
    return {
      item: updateditems,
      totalAmount: updateTotalAmount,
    };
  }

  
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.item.findIndex(
      (item) => item.id === action.id
    );
    const existingitem = state.item[existingCartItemIndex];
    const updateTotalAmount = state.totalAmount - existingitem.price;
    let updateditems;
    if (existingitem.Amount === 1) {
      updateditems = state.item.filter(item => item.id !== action.id);
    } else {
      const updateditem = { ...existingitem, Amount: existingitem.Amount - 1 };
      updateditems = [...state.item];
      updateditems[existingCartItemIndex] = updateditem;
    }
    return {
      item: updateditems,
      totalAmount: updateTotalAmount,
    };
  }
  return defaultCartState;
};
const CartContextProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const saveAdditem = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };

  const saveRemoveItem = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };
  const cartContext = {
    item: cartState.item,
    totalAmount: cartState.totalAmount,
    addItem: saveAdditem,
    removeItem: saveRemoveItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
