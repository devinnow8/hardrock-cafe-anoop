import React from "react";
import Logo from "../Image/Logo.svg";
import { HiShoppingCart } from "react-icons/hi";
function Header() {
  return (
    <div>
      <div className="parent">
        <div className="Applogo">
          <img className="Logo1" src={Logo} />
        </div>
        <div className="Title1"> S U N R I S E</div>
        <div className="Frontcartlogo">
          <HiShoppingCart className="Frontcartlogo1" />
        </div>
      </div>
      <div className="Title2"> Our Menu </div>
    </div>
  );
}
export default Header;
