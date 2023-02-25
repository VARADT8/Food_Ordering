import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultvalue = {
  items: [],
  totalamount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateTotalAmount =
      state.totalamount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let updateItems;

    if (existingCartItem) {
      const updateitem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updateItems = [...state.items];
      updateItems[existingCartItemIndex] = updateitem;
    } else {
      updateItems = state.items.concat(action.item);
    }

    return {
      items: updateItems,
      totalamount: updateTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updateTotalAmount = state.totalamount - existingItem.price;
    let updateItems;
    if (existingItem.amount === 1) {
      updateItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updateitem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      updateItems = [...state.items];
      updateItems[existingCartItemIndex] = updateitem;
    }
    return {
      items: updateItems,
      totalamount: updateTotalAmount,
    };
  }
  return defaultvalue;
};

const CartProvider = (props) => {
  const [cartState, dispatchAction] = useReducer(cartReducer, defaultvalue);
  const addCartItemHandler = (item) => {
    dispatchAction({ type: "ADD", item: item });
  };
  const removecartitemhandler = (id) => {
    dispatchAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalamount: cartState.totalamount,
    additem: addCartItemHandler,
    removeitem: removecartitemhandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
