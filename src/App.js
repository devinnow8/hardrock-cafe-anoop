import "./App.css";
import Header from "./component/Header";
import axios from "axios";
import Product from "./component/Product";
import React, { useEffect, useState } from "react";
import Category from "./component/Category";
import Cartlist from "./component/Cartlist";
import { MdSystemSecurityUpdateWarning } from "react-icons/md";

function App() {
  const [menuData, setMenudata] = useState([]);
  const [activMenu, setActivMenu] = useState("All");
  const [cart, setCart] = useState([]);
  const [filterditem, setFilterditem] = useState([]);
  let cartobj = cart.map((x) => ({ Idd: x.id, quan: x.quantity }));
  const [showCart, setShowCart] = useState(false);

  // Action For empty cart
  useEffect(() => {
    console.log("showCart11", cart);

    if (cart.length === 0) {
      setShowCart(false);
      console.log("showCart22", showCart);
    }
  }, [cart]);

  //API DATA"
  const url = "http://192.168.1.204:8000/";
  const getApidata = async (url) => {
    try {
      const res = await axios.get(url);
      console.log("ffffff", res.data);

      setMenudata(res.data);
    } catch (errror) {
      console.log("error");
    }
  };
  useEffect(() => {
    getApidata(`${url}`);
  }, []);

  //Cart Quantity
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

  // Category

  const uniqueList = [
    "All",
    ...new Set(
      menuData.map((curElem) => {
        return curElem.category;
      })
    ),
  ];
  console.log(uniqueList);

  useEffect(() => {
    setFilterditem(menuData);
  }, [menuData]);

  //Category Filter
  const filteritem = (category) => {
    const updatelist = menuData.filter((curElem) => {
      if (category === "All") {
        return curElem;
      } else {
        return curElem.category === category;
      }
    });
    setActivMenu(category);
    setFilterditem(updatelist);
  };
  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  //Clear Cart

  function clearcart() {
    setCart([]);
    console.log("showCart", showCart);
    setShowCart(false);
  }

  // Cart Increment
  function cartcountinc(id) {
    const updatecart = cart.map((item, index) => {
      return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
    });

    setCart(updatecart);
  }

  // Cart Decrement
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

  // Remove Cart
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
              menuData={filterditem}
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
              menuData={filterditem}
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
