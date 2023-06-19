import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "animate.css";

function Product({
  menuData,
  Addcartfunct,
  cartcountinc,
  cartcountdec,
  removecartitem,
  cartobj,
}) {
  const value = (item) => {
    if (cartobj && cartobj.length > 0) {
      const data = cartobj.find((x) => {
        return x.Idd === item.id;
      });
      return data !== undefined ? data?.quan : "";
    }
  };

  return (
    <div className="Menusize1">
      {menuData.map((item, index) => {
        return (
          <div className="Menusize2 animate__animated animate__fadeInLeft">
            <div className="Menusize-image">
              <img src={item.image} />
            </div>
            <div className="Menusize-content">
              <div className="nameprice">
                <div className="name">
                  <div class="animate__animated animate__backInDown">
                    <h3>{item.title}</h3>
                  </div>{" "}
                </div>
                <div className="price animate__fadeInRight">
                  {" "}
                  ₹{item.price}{" "}
                </div>
              </div>

              <p>{item.description}</p>

              <div className="Buttoncart">
                {value(item) ? (
                  <React.Fragment />
                ) : (
                  <button
                    className="cartbutton"
                    onClick={() => {
                      Addcartfunct(item);
                    }}
                  >
                    Add Item
                  </button>
                )}

                {value(item) ? (
                  <>
                    <button className="cartbutton1">
                      <AiOutlineMinus
                        className="plusbutton"
                        onClick={() => cartcountdec(item.id, item.id)}
                      />
                      {value(item)}
                      <AiOutlinePlus
                        className="plusbutton"
                        onClick={() => cartcountinc(item.id, item.id)}
                      />
                    </button>
                    <button
                      onClick={() => removecartitem(item.id)}
                      className="removebutton"
                    >
                      Remove Item
                    </button>
                  </>
                ) : (
                  <React.Fragment />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
