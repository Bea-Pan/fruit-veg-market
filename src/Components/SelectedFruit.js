import React, { useState } from "react";
import DessertSuggestion from "./DessertSuggestion";



function SelectedFruit(props) {

    const strawberryDesserts = [
        "Strawberry Junky Funky Pankey",
        "Monday Whirl Strawberry Sundae Swirl",
        "Strawberry Fields Fudge Forever "
    ];

    const peasDesserts = [
        "Peas Bliss Rye Pie",
        "Hot Summer Peas Stunner",
        "Green and Light Pea Delight"
    ];

    const cherriesDesserts = [
        "Hunky Chunky Cherry Funky Custards",
        "Merry Cherry Jelly",
        "Cherry Juice Mousse",
    ];

    const blueberriesDesserts = [
        "Blueberry Blues and Juice",
        "Blueberry Breezy Smoothie Sqeezy",
        "Blueberry Bumble Crumble",
    ];


    const raspberriesDesserts = [
        "Fun Raspberry Triffle Bun",
        "Raspberry and Dairy Fairy",
        "Raspberry Jammin' Donut Drizzle",
    ];


    const [currentDessertIndex, setCurrentDessertIndex] = useState(0);

    function showNextDessert() {
        if (props.fruit.name === 'strawberry') {

            const nextIndex = (currentDessertIndex + 1) % strawberryDesserts.length;
            setCurrentDessertIndex(nextIndex);

        } else if (props.fruit.name === 'peas') {

            const nextIndex = (currentDessertIndex + 1) % peasDesserts.length;
            setCurrentDessertIndex(nextIndex);
        } else if (props.fruit.name === 'cherry') {

            const nextIndex = (currentDessertIndex + 1) % cherriesDesserts.length;
            setCurrentDessertIndex(nextIndex);
        } else if (props.fruit.name === 'blueberry') {

            const nextIndex = (currentDessertIndex + 1) % blueberriesDesserts.length;
            setCurrentDessertIndex(nextIndex);
        } else if (props.fruit.name === 'raspberry') {

            const nextIndex = (currentDessertIndex + 1) % raspberriesDesserts.length;
            setCurrentDessertIndex(nextIndex);
        }
    }



    let selectedDesserts = null;

    if (props.fruit.name === 'strawberry') {
        selectedDesserts = strawberryDesserts;
    } else if (props.fruit.name === 'peas') {
        selectedDesserts = peasDesserts;
    } else if (props.fruit.name === 'cherry') {
        selectedDesserts = cherriesDesserts;
    } else if (props.fruit.name === 'blueberry') {
        selectedDesserts = blueberriesDesserts;
    } else if (props.fruit.name === 'raspberry') {
        selectedDesserts = raspberriesDesserts
    }


    const currentDessert = selectedDesserts[currentDessertIndex];

    return (
        <>
            {props.fruit && (
                <>
                    <h2>Your fruit or veg: {props.fruit.name}</h2>
                    <img src={`/images/${props.fruit.name}.jpg`} alt={props.fruit.name} className="fruit-img" /><br />
                    <DessertSuggestion
                        fruitName={props.fruit.name}
                        currentDessert={currentDessert}
                        showNextDessert={showNextDessert}
                        currentDessertIndex={currentDessertIndex}
                        products={props.products}

                        strawberryDesserts={strawberryDesserts}
                        peasDesserts={peasDesserts}
                        cherriesDesserts={cherriesDesserts}
                        blueberriesDesserts={blueberriesDesserts}
                        raspberriesDesserts={raspberriesDesserts}


                    />
                </>
            )}
        </>
    );
}

export default SelectedFruit;