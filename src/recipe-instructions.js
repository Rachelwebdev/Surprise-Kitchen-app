import React from "react";

const RecipeInstruction = function (props) {
  const recipeInst = props.instruction;
  return (
    <div className="recipe-cont">
      <h2>Instructions to Follow:</h2>
      <p className="recipe-text">{recipeInst}</p>
    </div>
  );
};

export default RecipeInstruction;
