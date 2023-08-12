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
            <h3>{fruitName} dessert for today:</h3>
            <figure>
                <h2 class="dessert-title">{currentDessertKey}</h2>
                {!showRecipe &&
                    (<img
                        className="dessert-img"
                        src={`/images/${fruitName}/${currentDessertIndex}.jpg`}
                        alt={`${fruitName} dessert`}
                    />)
                }
                <div>
                    <RecipeButton onClick={handleClick} buttonText={showRecipe ? "Hide recipe" : "See recipe"} />
                    <button className="recipe-button" onClick={showNextDessert}>
                        Different Dessert
                    </button>
                </div>

            </figure>
            {showRecipe && (
                <>

                    <div>
                        <Recipe products={products} currentDessert={currentDessert} />
                        <img
                            className="dessert-img-bottom"
                            src={`/images/${fruitName}/${currentDessertIndex}.jpg`}
                            alt={`${fruitName} dessert`}
                        />
                        <figcaption>{currentDessertKey}</figcaption>
                    </div>
                    <RecipeButton onClick={handleClick} buttonText={showRecipe ? "Hide recipe" : "See recipe"} />

                </>
            )}
        </>
    )
}

export default DessertSuggestion;