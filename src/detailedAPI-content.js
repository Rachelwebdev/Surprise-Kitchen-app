import React, { useEffect } from "react";
import MealPicture from "./meal-picture";
import MealVideo from "./meal-video";
import RecipeInstruction from "./recipe-instructions";
import Ingredients from "./ingredients";

const DetailedApi = function () {
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/random.php`
      );
      let actualdata = await response.json();

      console.log(actualdata);
    }
    getData();
  }, []);
  return (
    <>
      <h1 className="heading">Name of Dish:</h1>
      <div className="api-container">
        <MealPicture />
        <MealVideo />
        <RecipeInstruction />
        <Ingredients />
      </div>
    </>
  );
};

export default DetailedApi;
