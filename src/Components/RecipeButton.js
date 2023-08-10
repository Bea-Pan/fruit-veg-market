import React from "react";



function RecipeButton(props) {
    return (
        <>
            <button className="recipe-button" onClick={props.onClick}>{props.buttonText}</button>
        </>
    )
}

export default RecipeButton