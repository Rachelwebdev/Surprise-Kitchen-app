import React from "react";

const RecipeInstruction = function (props) {
  const recipeInst = props.instruction;
  const recipeTitle = props.title;
  return (
    <div className="recipe-cont">
      <h2 className="recipe-heading">{recipeTitle} Recipe</h2>
      <p className="recipe-description">{recipeInst}</p>
    </div>
  );
};

export default RecipeInstruction;
