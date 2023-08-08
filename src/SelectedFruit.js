import React from "react";

function SelectedFruit(props) {

    function dessertIdeas() {
        if (props.fruit.name === 'Strawberries') {
            return (
                <figure>
                    <img className="dessert-img" src="/images/Strawberry-Funky.jpg" alt="strawberry pancakes" />
                    <figcaption>Strawberry Junky Funky Pankey</figcaption>
                </figure>
            );
        } else if (props.fruit.name === 'Peas') {
            return (
                <figure>
                    <img className="dessert-img" src="/images/Peas-Pods.jpeg" alt="peas in pods" />
                    <figcaption>Best Enjoyed Straight from the Pod</figcaption>
                </figure>
            );
        } else if (props.fruit.name === 'Cherries') {
            return (
                <figure>
                    <img className="dessert-img" src="/images/Cherry-Custards.jpg" alt="cherry custards" />
                    <figcaption>Hunky Chunky Cherry Funky Custards</figcaption>
                </figure>
            );
        } else if (props.fruit.name === 'Blueberries') {
            return (
                <figure>
                    <img className="dessert-img" src="/images/Blueberry-Juice.jpg" alt="blueberry juice" />
                    <figcaption>Blueberry Blues and Juice</figcaption>
                </figure>
            );
        } else if (props.fruit.name === 'Raspberries') {
            return (
                <figure>
                    <img className="dessert-img" src="/images/Raspberry-Triffle.jpg" alt="raspberry brownie" />
                    <figcaption>Fun Raspberry Trifle Bun</figcaption>
                </figure>
            );
        }
    }

    function otherDessert() {


        //strawberries

        const strawberryDesserts = [
            "Monday Whirl Strawberry Sundae Swirl",
            "Strawberry Fields Fudge Forever "
        ]

        const indexS = Math.floor(Math.random() * strawberryDesserts.length);


        //peas
        const peasDesserts = [
            "Peas Bliss Rye Pie",
            "Hot Summer Peas Stunner"
        ]

        const indexP = Math.floor(Math.random() * peasDesserts.length);


        //cherries
        const cherriesDesserts = [
            "Merry Cherry Jelly",
            "Zesty Cherry Festy Fudge",
            "Cherry Juice Mouse",
        ]

        const indexC = Math.floor(Math.random() * cherriesDesserts.length);


        //blueberries 
        const blueberriesDesserts = [
            "Blueberry Breezy Smoothie Sqeezy",
            "Blueberry Bumble Crumble",

        ]

        const indexB = Math.floor(Math.random() * blueberriesDesserts.length);


        //raspberries
        const raspberriesDesserts = [
            "Raspberry and Dairy Fairy",
            "Raspberry Jammin' Donut Drizzle",
            "Unwary Raspberry Cherry"
        ]

        const indexR = Math.floor(Math.random() * raspberriesDesserts.length);


        //selecting the right recipes for the chosen fruit
        let randomDessert;
        if (props.fruit && props.fruit.name === 'Strawberries') {
            randomDessert = strawberryDesserts[indexS];
        } else if (props.fruit && props.fruit.name === 'Peas') {
            randomDessert = peasDesserts[indexP];
        } else if (props.fruit && props.fruit.name === 'Cherries') {
            randomDessert = cherriesDesserts[indexC]
        } else if (props.fruit && props.fruit.name === 'Blueberries') {
            randomDessert = blueberriesDesserts[indexB]
        } else if (props.fruit && props.fruit.name === 'Raspberries') {
            randomDessert = raspberriesDesserts[indexR]
        }

        props.setCurrentDessert(randomDessert);

    }

    return (

        <>
            {props.fruit && (
                <>
                    <h2>You've selected: {props.fruit.name}</h2>
                    <img src={`/images/${props.fruit.name}.jpg`} alt="" className="fruit" /><br />
                    <h3>{props.fruit.name} dessert suggestion:</h3>
                    <h4>{props.currentDessert ? props.currentDessert : dessertIdeas()}</h4>
                    <button className="dessert-button" onClick={otherDessert}>Different Suggestion</button>
                </>
            )}

        </>
    )
}

//export default SelectedFruit;