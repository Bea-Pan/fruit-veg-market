import React, { useState } from "react";
import Recipe from "./Recipe";
import RecipeButton from "./RecipeButton";


function DessertSuggestion({
    fruitName,
    currentDessert,
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

                <figcaption>{currentDessert}</figcaption>

            </figure>
            {showRecipe && (
                <div>
                    <p>I have been clicked and rendered</p>
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