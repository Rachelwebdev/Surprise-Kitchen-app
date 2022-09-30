import React from "react";

const Ingredients = function (props) {
  const IngredientList = props.ingredients;
  return (
    <div className="ing-list">
      <ol>
        {/* <li key="{ing1}">{IngredientList}</li>
        <li key="{ing2}">salt</li>
        <li key="{ing3}">pepper</li>
        <li key="{ing4}">Jollof rice</li> */}
      </ol>
    </div>
  );
};

export default Ingredients;
