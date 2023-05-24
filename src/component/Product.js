import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
// import { useState } from "react";

// const [count, SetCount] = useState[0];

// function ct() {
//   SetCount(count + 1);
// }
// console.log("counttttttt", count);
// console.log("SetCount", count);
//     Function dynamic() {
//         if(count>0) ?
//

function Product({
  menuData,
  Addcartfunct,
  cartcountinc,
  cartcountdec,
  removecartitem,
  cartobj,
}) {
  const value = (item) => {
    if (cartobj && cartobj.length) {
      const data = cartobj.find((x) => {
        return x.Idd === item.id;
      });

      return data?.quan || "";
    }
  };

  return (
    <div className="Menusize1">
      {menuData.map((item, index) => {
        return (
          <div className="Menusize2">
            <div className="Menusize-image">
              <img src={item.image} />
            </div>
            <div className="Menusize-content">
              <div className="nameprice">
                <div className="name">
                  <h3>{item.name}</h3>
                </div>
                <div className="price"> ₹{item.price} </div>
              </div>

              <p>{item.about}</p>

              <div className="Buttoncart">
                {value(item) ? (
                  <React.Fragment />
                ) : (
                  <button
                    className="cartbutton"
                    onClick={() => {
                      Addcartfunct(item);
                      // ct();
                    }}
                  >
                    Add Item
                  </button>
                )}

                {value(item) ? (
                  <>
                    <button className="cartbutton1">
                      <AiOutlinePlus
                        className="plusbutton"
                        onClick={() => cartcountinc(item.id)}
                      />
                      {value(item)}
                      <AiOutlineMinus
                        className="plusbutton"
                        onClick={() => cartcountdec(item.id)}
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
