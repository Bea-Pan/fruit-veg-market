import React, { useState } from "react";
import './App.css';
import Header from "./Components/Header";
import FruitList from "./Components/FruitList";
import ColorToggle from "./Components/ColorToggle";
import Hover from './Components/Hover';
import SelectedFruit from "./Components/SelectedFruit";



const yellow = '#ffff99';
const green = '#99ff99';


function App() {
  const [color, setColor] = useState(yellow);
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [currentDessert, setCurrentDessert] = useState(null);
  const [showSelectedFruit, setShowSelectedFruit] = useState(false);

  function ToggleColor() {
    const newColor = color === yellow ? green : yellow;
    setColor(newColor);

  }

  function handleSelectFruit(fruit) {
    setSelectedFruit(fruit);
    setCurrentDessert(null); // Reset the dessert recommendation when a new fruit is selected
    setShowSelectedFruit(true);// Show the SelectedFruit component when a fruit is selected

  }

  const products = [
    { id: 1, name: 'strawberry' },
    { id: 2, name: 'peas' },
    { id: 3, name: 'cherry' },
    { id: 4, name: 'blueberry' },
    { id: 5, name: 'raspberry' }
  ];

  return (
    <div id="flex-container" style={{ backgroundColor: color }}>
      <div className="child" id="flex-child-1">
        <Header />
        <FruitList products={products} onSelectFruit={handleSelectFruit} />
        <ColorToggle onClick={ToggleColor} />
        <Hover />
      </div>
      {showSelectedFruit ? (<div className="child" id="flex-child-2" style={{ background: '	#3383FF' }}>
        <SelectedFruit
          fruit={selectedFruit}
          currentDessert={currentDessert}
          setCurrentDessert={setCurrentDessert} />
      </div>) : (
        <div className="child" id="unselected-flex-child-2" style={{ background: '#3383FF' }}>
          <h2>Your fruit or veg:</h2>
          <p id="ASCII">¯\_(ツ)_/¯</p>
        </div>
      )
      }

    </div>

  )
}

export default App;
