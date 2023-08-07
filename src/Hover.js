import React, {useState} from "react";


function Hover(){
    const [showHover, setShowHover] = useState(false);
    function handleHover() {
        setShowHover(true);
      }
    
      function handleHoverLeave() {
        setShowHover(false);
      }
    return (
        <>
            <button onMouseOver={handleHover} onMouseLeave={handleHoverLeave} style={{color:"yellow",backgroundColor:'#ff8484'}}>Don't Hover Over this Button</button>
            {showHover && <h3 style={{color: "#ff3737"}}>Don't do it. Stop it.</h3>}
        </>
        
    )
}

export default Hover;