import React, { useState, useEffect } from "react";
import MealPicture from "./meal-picture";
import MealVideo from "./meal-video";
import RecipeInstruction from "./recipe-instructions";
import Ingredients from "./ingredients";

const url = "https://www.themealdb.com/api/json/v1/1/random.php";

const DetailedApi = function () {
  const [meals, setMeals] = useState([]);

  //use async/await to fetch data
  const getMeals = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setMeals(data.meals);
    console.log(data);
  };

  //Runs the function when the page loads
  useEffect(() => {
    getMeals();
  }, []);
  console.log(meals);
  return (
    <div>
      {meals.map((meal) => {
        return (
          <div className="main-api-container">
            <div className="title-heading">
              <h1 key={meal.idMeal}>Name of Dish: {meal.strMeal}</h1>
              <h2>Meal category: {meal.strCategory}</h2>
              <h3>This is a/an {meal.strArea} Dish</h3>
            </div>

            <div className="api-container">
              <MealPicture image={meal.strMealThumb} />
              <RecipeInstruction instruction={meal.strInstructions} />
              <Ingredients ingredients={meal.strIngredient1} />
              <MealVideo video={meal.strYoutube} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DetailedApi;
