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
        <p className="userinfo">+91 8219776387 </p>
      </div>
      {cart &&
        cart.length > 0 &&
        cart.map((item, index) => {
          if (item.quantity >= 1) {
            return (
              <div>
                <div className="Cartlistp">
                  <div className="cartimage">
                    <img
                      className="cartimageandar"
                      src={item.product.image}
                      width={80}
                    />
                  </div>
                  <div className="cartinfo">
                    <span className="cartproductname">
                      {item.product.title}{" "}
                    </span>
                    <div className="cartplusminusbutton">
                      <span> ₹{item.sub_total_price}</span>
                      <div className="cartpluspluscounter">
                        <button
                          onClick={() => cartcountdec(item.id, item.product.id)}
                          className="cartproductminus"
                        >
                          {" "}
                          -
                        </button>
                        <span className="cartquantity">{item.quantity} </span>
                        <button
                          onClick={() => cartcountinc(item.id, item.product.id)}
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
                      onClick={() => removecartitem(item.product.id)}
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
        {cart &&
          cart.length > 0 &&
          cart
            .map((item) => item.sub_total_price)
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
