import React from "react";

const MealPicture = function (props) {
  const mealImage = props.image;

  return (
    <div className="meal-img">
      <img src={mealImage} alt="a plate of food" />
    </div>
  );
};

export default MealPicture;
