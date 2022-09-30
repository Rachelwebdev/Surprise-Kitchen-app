import React from "react";
import "./surprise.css";

const SurpriseKitchen = function () {
  return (
    <div className="main-container">
      <h1>WELCOME TO SURPRISE KITCHEN!🥗🥘🍚🍕😋</h1>
      <h2>
        CLICK ON THE BUTTON BELOW TO FIND OUT WHAT MEAL WE WOULD BE PREPARING
        TODAY!
      </h2>
      <button className="btn" type="submit">
        Today's Meal 👩‍🍳
      </button>
    </div>
  );
};

export default SurpriseKitchen;
