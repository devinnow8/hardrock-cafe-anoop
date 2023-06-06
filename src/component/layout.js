import Header from "./Header";
import Product from "./Product";
import React, { useEffect, useState } from "react";
import Category from "./Category";
import Cartlist from "./Cartlist";
import BaseAPI from "../Api/BaseAPI";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Layout = () => {
  const navigate = useNavigate();
  const [menuData, setMenudata] = useState([]);
  const [activMenu, setActivMenu] = useState("All");
  const [cart, setCart] = useState([]);
  const [filterditem, setFilterditem] = useState([]);
  let cartobj =
    cart && cart.map((x) => ({ Idd: x.product.id, quan: x.quantity }));
  const [showCart, setShowCart] = useState(false);
  const [cart_id, setCart_id] = useState("");
  const [user, setUser] = useState({});

  //Product
  const getProduct = async () => {
    let user = JSON.parse(localStorage.getItem("userData"));
    if (user) {
      let response = await BaseAPI.get(`user/${user.id}/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.access}`,
        },
      });

      setCart(response?.data?.data?.items);
      setCart_id(response?.data?.data?.id);
    }
  };
  useEffect(() => {
    getApidata();
    getProduct();
  }, []);
  //Authentication

  const addtoCart = async (id, quantity) => {
    let user = JSON.parse(localStorage.getItem("userData"));
    let data = {
      product_id: id,
      quantity: quantity,
    };
    let response = await BaseAPI.post(
      `/user/${user.id}/items/`,
      {
        ...data,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.access}`,
        },
      }
    );
    if (response) {
      getProduct();
    }
  };

  //Remove cart
  const removecart = async (id) => {
    let user = JSON.parse(localStorage.getItem("userData"));
    let res = await BaseAPI.deleteItem(`/user/${user.id}/items/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.access}`,
      },
    });
    if (res) {
      getProduct();
    }
  };

  // Action For empty cart
  useEffect(() => {
    if (cart && cart.length === 0) {
      setShowCart(false);
    }
  }, [cart]);

  //API DATA"
  const getApidata = async (url) => {
    try {
      const res = await BaseAPI.get("list");

      setMenudata(res.data.data);
    } catch (errror) {}
  };

  //Cart Quantity
  const Addcartfunct = (product) => {
    addtoCart(product.id, 1);
  };

  // Category

  const uniqueList = [
    "All",
    ...new Set(
      menuData &&
        menuData.map((curElem) => {
          return curElem.category;
        })
    ),
  ];

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
    setShowCart(false);
  }

  // Cart Increment
  function cartcountinc(id, product_id) {
    let updatedCart =
      cart && cart.filter((item) => item.product.id === product_id);
    addtoCart(updatedCart[0].product.id, updatedCart[0].quantity + 1);
  }

  // Cart Decrement
  function cartcountdec(id, product_id) {
    let updatedCart =
      cart && cart.filter((item) => item.product.id === product_id);
    if (updatedCart[0].quantity === 1) {
      removecart(updatedCart[0].id);
    } else {
      addtoCart(updatedCart[0].product.id, updatedCart[0].quantity - 1);
    }
  }

  // Remove Cart
  function removecartitem(id) {
    let filterdItem = cart && cart.filter((item) => item.product.id === id);
    removecart(filterdItem[0].id);
  }

  return (
    <div className="container">
      <div className="App">
        <Header count={cart && cart.length} handleCartClick={handleCartClick} />
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
  );
};

export default Layout;
