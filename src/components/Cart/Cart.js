import "./Cart.css";
import CartItem from "./CartItem";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import React from "react";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalamount = `$${cartCtx.totalamount.toFixed(2)}`;
  const isitem = cartCtx.items.length > 0;
  
  const CartItemRemoveHandler = (id) => {
    cartCtx.removeitem(id);
  };
  const CartItemAddHandler = (item) => {
    cartCtx.additem({ ...item, amount: 1 });
  };
  const cartitem = (
    <ul className="cart-item">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={CartItemAddHandler.bind(null, item)}
          onAdd={CartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onclose}>
      {cartitem}

      <div className="total">
        <span>Amount</span>
        <span>{totalamount}</span>
      </div>
      <div className="actions">
        <button className=" button--alt" onClick={props.onClose}>
          Cancel
        </button>
        {isitem && <button>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
