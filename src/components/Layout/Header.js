import "./Header.css";
import React from "react";
import HeaderCartButton from "./HeaderCartButton";

import mealimag from "../../Assets/unsplash.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className="header">
        <h1>STEALMEAL</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="main-image">
        <img src={mealimag} alt="helo"></img>
      </div>
    </React.Fragment>
  );
};
export default Header;
