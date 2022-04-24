import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-container">
      <div className="inner-container">
        <input
          className="input"
          type="text"
          placeholder="Enter Your To-Do..."
        />
      </div>
    </div>
  );
};

export default Main;
