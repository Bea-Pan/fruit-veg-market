import React, {useState} from "react";


import './App.css';
import GroceryItem from './GroceryItem';
import Hover from './Hover';
import SelectedFruit from './SelectedFruit'


const brown = '#ffff99';
const green = '#99ff99';


function App() {
  const [color, setColor] = useState(brown);
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [currentDessert, setCurrentDessert] = useState(null);
  const [showSelectedFruit, setShowSelectedFruit] = useState(false);
  
  function ToggleColor(){
    const newColor = color === brown ? green : brown;
    setColor(newColor);
  
  }
  
  function handleSelectFruit(fruit) {
    setSelectedFruit(fruit);
    setCurrentDessert(null); // Reset the dessert recommendation when a new fruit is selected
    setShowSelectedFruit(true);// Show the SelectedFruit component when a fruit is selected

  }

  const products = [
    { id: 1, name: 'Strawberries' },
    { id: 2, name: 'Peas' },
    { id: 3, name: 'Cherries' },
    { id: 4, name: 'Blueberries' },
    { id: 5, name: 'Raspberries'}
  ];

  return(
    <div id="flex-container" style={{backgroundColor: color}}>
      <div className="child" id="flex-child-1"> 
        <h1>Welcome to the fruit & veg market</h1>
        <img src="/images/Fruits.jpg" alt="Fruits" /><br/>
        {products.map((product)=> (
          <GroceryItem key={product.id} product={product} onSelectFruit={handleSelectFruit}/>
        ))}
        <button id="changeColors" onClick={ToggleColor}>Change Colors</button>
        <br></br>
        <br></br>
        <Hover/>
      </div>
      {showSelectedFruit && (<div className="child" id="flex-child-2" style={{background: 'blue'}}>
         <SelectedFruit 
        fruit={selectedFruit} 
        currentDessert={currentDessert} 
        setCurrentDessert={setCurrentDessert}  />
      </div>)
      }
      
    </div>
    
  )
}

export default App;
