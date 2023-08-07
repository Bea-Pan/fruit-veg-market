import React from "react";


//this function adds buttons with fruit
function GroceryItem(props){
    function handleClick(){
        props.onSelectFruit(props.product)
    }
    return <button onClick={handleClick}>{props.product.name}</button>
}

export default GroceryItem;