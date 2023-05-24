import "./App.css";
import Header from "./component/Header";

import Product from "./component/Product";
import React, { useEffect, useState } from "react";
import menu from "./component/Menudata";
import Category from "./component/Category";
import Cartlist from "./component/Cartlist";

function App() {
  const [menuData, setMenudata] = useState(menu);
  const [activMenu, setActivMenu] = useState("All");
  const [cart, setCart] = useState([]);

  let cartobj = cart.map((x) => ({ Idd: x.id, quan: x.quantity }));

  console.log(cart);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    console.log("showCart11", cart);

    if (cart.length === 0) {
      setShowCart(false);
      console.log("showCart22", showCart);
    }
  }, [cart]);

  const Addcartfunct = (product) => {
    console.log(product);

    const index = cart.findIndex((item) => item.id === product.id);

    if (index === -1) {
      const updateCAArt = cart.concat({ ...product, quantity: 1 });
      setCart(updateCAArt);
    } else {
      cart[index].quantity += 1;
      const updateCAArt = [...cart];
      setCart(updateCAArt);
    }
  };

  const uniqueList = [
    "All",
    ...new Set(
      menu.map((curElem) => {
        return curElem.category;
      })
    ),
  ];
  console.log(uniqueList);
  const filteritem = (category) => {
    const updatelist = menu.filter((curElem) => {
      if (category === "All") {
        return curElem;
      } else {
        return curElem.category === category;
      }
    });
    setActivMenu(category);
    setMenudata(updatelist);
  };
  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  function clearcart() {
    setCart([]);
    console.log("showCart", showCart);
    setShowCart(false);
  }
  function cartcountinc(id) {
    const updatecart = cart.map((item, index) => {
      return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
    });

    setCart(updatecart);
  }
  function cartcountdec(id) {
    const updatecart = cart
      .map((item) => {
        return item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item;
      })
      .filter((item) => !!item.quantity);
    setCart(updatecart);
  }

  function removecartitem(id) {
    const remove = cart.filter((item, index) => {
      return item.id !== id;
    });
    setCart(remove);
  }

  console.log("cart===>", cart);
  return (
    <div>
      <div className="container">
        <div className="App">
          <Header count={cart.length} handleCartClick={handleCartClick} />
          {!showCart && (
            <Category
              activMenu={activMenu}
              filteritem={filteritem}
              uniqueList={uniqueList}
            />
          )}
          {showCart ? (
            <Cartlist
              cart={cart}
              removecartitem={removecartitem}
              clearcart={clearcart}
              cartcountinc={cartcountinc}
              cartcountdec={cartcountdec}
            />
          ) : (
            <Product
              menuData={menuData}
              Addcartfunct={Addcartfunct}
              cartcountinc={cartcountinc}
              cartcountdec={cartcountdec}
              removecartitem={removecartitem}
              cartobj={cartobj}
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
