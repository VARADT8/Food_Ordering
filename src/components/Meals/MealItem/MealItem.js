import "./MealItem.css";
import { useContext } from "react";
import React from "react";
import CartContext from "../../../store/cart-context";

import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$ ${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.additem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className="meal">
      <div>
        <div>{props.name}</div>
        <div className="description ">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
