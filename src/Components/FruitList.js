import React from "react";
import GroceryItem from "./GroceryItem";

function FruitList({ products, onSelectFruit }) {


    return (
        <>
            {
                products.map((product) => (
                    <GroceryItem key={product.id} product={product} onSelectFruit={onSelectFruit} />
                ))
            }
        </>
    )
}

export default FruitList;