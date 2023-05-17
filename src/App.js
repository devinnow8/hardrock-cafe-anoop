import "./App.css";
import Category from "./component/Category";
import Header from "./component/Header";
import menuData from "./component/Menudata";
import { AiOutlinePlusCircle } from "react-icons/ai";
function App() {
  return (
    <div className="container">
      <div className="App">
        <Header />
        <Category />
        <div className="Menusize1">
          {menuData.map((item) => {
            return (
              <div className="Menusize2">
                <div className="Menusize-image">
                  <img src={item.image} />
                </div>
                <div className="Menusize-content">
                  <div className="nameprice">
                    <div className="name">
                      <h2>{item.name}</h2>
                    </div>
                    <div className="price"> ₹{item.price} </div>
                  </div>

                  <p>{item.about}</p>
                  <div className="Buttoncart">
                    <button className="cartbutton">
                      Add <AiOutlinePlusCircle />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default App;
