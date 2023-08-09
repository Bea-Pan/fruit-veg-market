import React from "react";

function DessertSuggestion({ fruitName, currentDessert, showNextDessert, currentDessertIndex }) {
    return (
        <>
            <h3>{fruitName} dessert suggestion:</h3>
            <figure>
                <img
                    className="dessert-img"
                    src={`/images/${fruitName}/${currentDessertIndex}.jpg`}
                    alt={`${fruitName} dessert`}
                />
                <figcaption>{currentDessert}</figcaption>
            </figure>

            <button className="dessert-button" onClick={showNextDessert}>
                Different Suggestion
            </button>
        </>
    )
}

export default DessertSuggestion;