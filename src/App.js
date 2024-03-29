import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartShown, isCartShown] = useState(false);
  const showcarthandler = () => {
    isCartShown(true);
  };
  const hidecarthandler = () => {
    isCartShown(false);
  };

  return (
    <CartProvider>
      {cartShown && <Cart onClose={hidecarthandler} />}

      <Header onShowCart={showcarthandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
