import React from "react";
import Picture from "./meal-picture";
import Video from "./meal-video";
import Ingredients from "./ingredients";
import RecipeInstructions from "./recipe-instructions";

function DetailedPage() {
  return (
    <div className="detailed-container">
      <Picture />
      <Video />
      <Ingredients />
      <RecipeInstructions />
    </div>
  );
}

export default DetailedPage;
