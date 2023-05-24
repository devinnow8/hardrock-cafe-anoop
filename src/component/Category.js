import React from "react";
const Category = ({ activMenu, filteritem, uniqueList }) => {
  return (
    <nav className="navbar">
      <div className="Title2"> Our Menu </div>
      <div className="Optionbutton">
        {uniqueList.map((curElem, index) => {
          return (
            <button
              className={`Optionbutton1 ${
                activMenu === curElem ? "activeMenu" : ""
              }`}
              key={index}
              onClick={() => filteritem(curElem)}
            >
              {curElem}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Category;
