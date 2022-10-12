import { useState, useEffect } from "react";
import MealPicture from "./meal-picture";
import MealVideo from "./meal-video";
import RecipeInstruction from "./recipe-instructions";
import Ingredients from "./ingredients";
import "./detailedAPI.css";

const url = "https://www.themealdb.com/api/json/v1/1/random.php";

const Details = function () {
  const [meals, setMeals] = useState([]);

  //use async/await to fetch data
  const getMeals = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setMeals(data.meals);
  };

  const ingredientArray = meals.map((meal) => {
    for (let [key, value] of Object.entries(meal)) {
      if (key.includes("strIngredient")) {
        meal += value;
        return meal;
      }
    }
  });

  console.log(ingredientArray);

  //Runs the function when the page loads
  useEffect(() => {
    getMeals();
  }, []);

  return (
    <div>
      {meals.map((meal) => {
        return (
          <>
            <div key={meal.strMeal} className="main-api-container">
              <div className="title-heading">
                <h1>
                  <span>Name of Dish: </span> {meal.strMeal}
                </h1>
                <h2>
                  <span>Meal Category: </span> {meal.strCategory}
                </h2>
                <h3>
                  <span>Meal Description:</span> This is a/an {meal.strArea}
                  Dish
                </h3>
              </div>

              <div key={meal.strMeal} className="api-container">
                <div className="image-video-container">
                  <MealPicture image={meal.strMealThumb} title={meal.strMeal} />
                  <MealVideo video={meal.strYoutube} title={meal.strMeal} />
                </div>
                <RecipeInstruction
                  instruction={meal.strInstructions}
                  title={meal.strMeal}
                />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Details;
