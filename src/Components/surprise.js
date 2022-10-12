import React from "react";
import "./surprise.css";
import { Link } from "react-router-dom";

const SurpriseKitchen = function () {
  return (
    <>
      <div className="main-container">
        <h1>WELCOME TO SURPRISE KITCHEN!🥗🥘🍚🍕😋</h1>
        <h2>
          CLICK ON THE BUTTON BELOW TO FIND OUT WHAT MEAL WE WOULD BE PREPARING
          TODAY!
        </h2>
        <div className="button-container">
          <Link to="/details" className="btn-submit" type="submit">
            Today's Meal 👩‍🍳
          </Link>
        </div>
      </div>
    </>
  );
};

export default SurpriseKitchen;
