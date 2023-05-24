import React from "react";
import Logo from "../Image/Logo.svg";
import { HiShoppingCart } from "react-icons/hi";
function Header(props) {
  return (
    <div>
      <div className="parent">
        <div className="Applogo">
          <img className="Logo1" src={Logo} />
        </div>
        <div className="Title1"> F O O D N O O P</div>
        <div onClick={() => props.handleCartClick()} className="Frontcartlogo">
          <HiShoppingCart className="Frontcartlogo1" />
          <sup> {props.count}</sup>
        </div>
      </div>
    </div>
  );
}
export default Header;
