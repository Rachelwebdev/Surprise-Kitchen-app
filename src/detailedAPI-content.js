import React from "react";
import MealPicture from "./meal-picture";
import MealVideo from "./meal-video";
import RecipeInstruction from "./recipe-instructions";
import Ingredients from "./ingredients";

const DetailedApi = function () {
  return (
    <div className="api-container">
      <MealPicture />
      <MealVideo />
      <RecipeInstruction />
      <Ingredients />
    </div>
  );
};

export default DetailedApi;
