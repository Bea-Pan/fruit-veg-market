import React, { useState } from "react";

function SelectedFruit(props) {

    const strawberryDesserts = [
        "Strawberry Junky Funky Pankey",
        "Monday Whirl Strawberry Sundae Swirl",
        "Strawberry Fields Fudge Forever "
    ];

    const peasDesserts = [
        "Peas Bliss Rye Pie",
        "Hot Summer Peas Stunner"
    ];

    const cherriesDesserts = [
        "Hunky Chunky Cherry Funky Custards",
        "Merry Cherry Jelly",
        "Zesty Cherry Festy Fudge",
        "Cherry Juice Mouse",
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
        "Unwary Raspberry Cherry last",
    ];






    const [currentDessertIndex, setCurrentDessertIndex] = useState(0);

    function showNextDessert() {
        if (props.fruit.name === 'Strawberries') {

            const nextIndex = (currentDessertIndex + 1) % strawberryDesserts.length;
            setCurrentDessertIndex(nextIndex);

        } else if (props.fruit.name === 'Peas') {

            const nextIndex = (currentDessertIndex + 1) % peasDesserts.length;
            setCurrentDessertIndex(nextIndex);
        } else if (props.fruit.name === 'Cherries') {

            const nextIndex = (currentDessertIndex + 1) % cherriesDesserts.length;
            setCurrentDessertIndex(nextIndex);
        } else if (props.fruit.name === 'Blueberries') {

            const nextIndex = (currentDessertIndex + 1) % blueberriesDesserts.length;
            setCurrentDessertIndex(nextIndex);
        } else if (props.fruit.name === 'Raspberries') {

            const nextIndex = (currentDessertIndex + 1) % raspberriesDesserts.length;
            setCurrentDessertIndex(nextIndex);
        }
    }



    let selectedDesserts = null;

    if (props.fruit.name === 'Strawberries') {
        selectedDesserts = strawberryDesserts;
    } else if (props.fruit.name === 'Peas') {
        selectedDesserts = peasDesserts;
    } else if (props.fruit.name === 'Cherries') {
        selectedDesserts = cherriesDesserts;
    } else if (props.fruit.name === 'Blueberries') {
        selectedDesserts = blueberriesDesserts;
    } else if (props.fruit.name === 'Raspberries') {
        selectedDesserts = raspberriesDesserts
    }


    const currentDessert = selectedDesserts[currentDessertIndex];

    return (
        <>
            {props.fruit && (
                <>
                    <h2>You've selected: {props.fruit.name}</h2>
                    <img src={`/images/${props.fruit.name}.jpg`} alt={props.fruit.name} className="fruit" /><br />
                    <h3>{props.fruit.name} dessert suggestion:</h3>
                    <figure>
                        <img
                            className="dessert-img"
                            src={`/images/${props.fruit.name}/${currentDessertIndex}.jpg`}
                            alt={`${props.fruit.name} dessert`}
                        />
                        <figcaption>{currentDessert}</figcaption>
                    </figure>

                    <button className="dessert-button" onClick={showNextDessert}>
                        Different Suggestion
                    </button>
                </>
            )}
        </>
    );
}

export default SelectedFruit;