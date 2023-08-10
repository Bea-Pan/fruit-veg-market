import React from "react";


function Recipe({ currentDessert, products }) {


    const recipesByProductId = {
        1:
            [
                "Recipe for Strawberry Junky Funky Pankey",
                "Monday Whirl Strawberry Sundae Swirl",
                "Strawberry Fields Fudge Forever"
            ],
        2:
            [
                "Recipe for Peas Bliss Rye Pie",
                "Recipe for Hot Summer Peas Stunner",
                "Green and Light Pea Delight"
            ],
        3:
            [
                "Recipe for Hunky Chunky Cherry Funky Custards",
                "Merry Cherry Jelly",
                "Cherry Juice Mousse",
            ],
        4:
            [
                "Recipe for Blueberry Blues and Juice",
                "Recipe for Blueberry Breezy Smoothie Sqeezy",
                "Recipe for Blueberry Bumble Crumble",
            ],
        5:
            [
                "Recipe for Fun Raspberry Triffle Bun",
                "Recipe for Raspberry and Dairy Fairy",
                "Recipe for Raspberry Jammin' Donut Drizzle",
            ]
    };

    const selectedProduct = products.find(product => product.name === currentDessert);
    const selectedRecipe = selectedProduct ? recipesByProductId[selectedProduct.id] || [] : [];




    return (
        <div>
            {currentDessert}

            {selectedRecipe.map((recipe, index) => (
                <div key={index}>{recipe}</div>
            ))}
            <p>I'm calling from Recipe.js</p>
            <br />
        </div>
    )
}

export default Recipe;