import React from "react";

const MealPicture = function (props) {
  const mealImage = props.image;
  const mealTitle = props.title;
  return (
    <div className="meal-img">
      <h2 className="image-heading">A Picture of {mealTitle}</h2>
      <img src={mealImage} alt="a plate of food" />
    </div>
  );
};

export default MealPicture;
