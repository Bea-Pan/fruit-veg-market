import React, { useState } from "react";
import Recipe from "./Recipe";
import RecipeButton from "./RecipeButton";


function DessertSuggestion({
    fruitName,
    currentDessert,
    currentDessertKey,
    showNextDessert,
    currentDessertIndex,
    products }) {

    const [showRecipe, setShowRecipe] = useState(false);

    function handleClick() {
        setShowRecipe(prevShowRecipe => !prevShowRecipe);
    }

    return (
        <>
            <h3>{fruitName} dessert suggestion:</h3>
            <figure>
                <img
                    className="dessert-img"
                    src={`/images/${fruitName}/${currentDessertIndex}.jpg`}
                    alt={`${fruitName} dessert`}
                />
                <div>
                    <RecipeButton onClick={handleClick} buttonText={showRecipe ? "Hide recipe" : "See recipe"} />
                    <RecipeButton buttonText="Add your recipe" />
                </div>

                <figcaption>{currentDessertKey}</figcaption>

            </figure>
            {showRecipe && (
                <div>
                    <Recipe products={products} currentDessert={currentDessert} />
                </div>
            )}


            <button className="dessert-button" onClick={showNextDessert}>
                Different Suggestion
            </button>
        </>
    )
}

export default DessertSuggestion;