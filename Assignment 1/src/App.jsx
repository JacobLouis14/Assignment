import React, { useState } from "react";

import "./App.css";

function App() {
  const [value, setValue] = useState();
  const [colorValue, setColorValue] = useState("open");

  /**Handling input Value */
  const valueHandler = (value) => {
    setTimeout(() => {
      setValue(value);
    }, 1500);
  };

  /**Menu Handler */
  const menuHandler = (val) => {
    setColorValue(val);
  };

  return (
    <>
      <div className="container">
        <div className="headerSection">
          <div className="headerWrapper">
            <button
              className="text"
              value="open"
              style={
                colorValue === "open"
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "white" }
              }
              onClick={(event) => menuHandler(event.target.value)}
            >
              Open
            </button>
            <button
              className="text"
              value="close"
              style={
                colorValue === "close"
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "white" }
              }
              onClick={(event) => menuHandler(event.target.value)}
            >
              Close
            </button>
            <button
              className="text"
              value="boost"
              style={
                colorValue === "boost"
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "white" }
              }
              onClick={(event) => menuHandler(event.target.value)}
            >
              Boost
            </button>
          </div>
        </div>
        <div className="contentContainer">
          <div className="contentOne">
            <div className="formWrapper">
              <p style={{ color: "white", marginBottom: "1%" }}>Select Asset</p>
              <div className="dropDownWrapper">
                <select className="dropDown">
                  <option value="Option 1">ETH</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                  <option value="Option 4">Option 4</option>
                </select>
              </div>
              <div className="formDiv">
                <p
                  style={{
                    color: "white",
                    marginTop: "6%",
                    marginBottom: "1%",
                  }}
                >
                  Borrow Amount
                </p>
                <p
                  style={{
                    color: "white",
                    padding: "2%",
                    marginTop: "4%",
                    marginBottom: "1%",
                    border: "1px solid white",
                    borderRadius: "10px",
                  }}
                >
                  Max Held Amount: 200
                </p>
              </div>
              <input
                type="number"
                placeholder="Enter Supply Amount"
                className="input"
                onChange={(e) => valueHandler(e.target.value)}
              />
              <button className="btn">Execute</button>
            </div>
          </div>
          <div className="contentSecond">
            <div className="contentSecondFirstDiv">
              {value && (
                <p
                  style={{ color: "white", marginTop: "3%", marginLeft: "3%" }}
                >{`Borrow Amount : ${value}`}</p>
              )}
            </div>
            <div className="contentSecondSecondDiv"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
