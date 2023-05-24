import React from "react";
import { MdDelete } from "react-icons/md";

function Cartlist({
  cart,
  removecartitem,
  clearcart,
  cartcountdec,
  cartcountinc,
}) {
  return (
    <div>
      <div>
        <p className="userinfo">+91 8219776387</p>
      </div>
      {console.log("cart===>innn", cart)}
      {cart.map((item, index) => {
        if (item.quantity >= 1) {
          return (
            <div>
              <div className="Cartlistp">
                <div className="cartimage">
                  <img className="cartimageandar" src={item.image} width={80} />
                </div>
                <div className="cartinfo">
                  <span className="cartproductname">{item.name} </span>
                  <div className="cartplusminusbutton">
                    <span> ₹{item.price * item.quantity}</span>
                    <div className="cartpluspluscounter">
                      <button
                        onClick={() => cartcountdec(item.id)}
                        className="cartproductminus"
                      >
                        {" "}
                        -
                      </button>
                      <span className="cartquantity">{item.quantity} </span>
                      <button
                        onClick={() => cartcountinc(item.id)}
                        className="cartproductplus"
                      >
                        {" "}
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="Deletecartbutton">
                  <MdDelete
                    onClick={() => removecartitem(item.id)}
                    className="Deletecartbuttonlogo"
                  />
                </div>
              </div>
            </div>
          );
        }
      })}
      <p className="Price">
        <span> Total Price ₹ </span>
        {cart
          .map((item) => item.price * item.quantity)
          .reduce((total, value) => total + value, 0)}
      </p>
      <div className="Clearitemcart">
        <button onClick={() => clearcart()}>
          <MdDelete className="Clearitemcartlogo" />
          <span className="ClearAll"> Clear All</span>
        </button>
      </div>
    </div>
  );
}

export default Cartlist;
