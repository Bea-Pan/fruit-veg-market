import React, { useState } from "react";



function Hover() {
  const hoverMSG = ["Don't do it.", "Stop it.", "That's enough."];
  const [showHover, setShowHover] = useState(false);

  const [currentMSGIndex, setCurrentMSGIndex] = useState(0);

  function showMSG() {
    const nextIndex = (currentMSGIndex + 1) % hoverMSG.length;
    setCurrentMSGIndex(nextIndex);
  }

  function handleHover() {
    setShowHover(true);
    showMSG(); // Call the showMSG function to update the message
  }

  function handleHoverLeave() {
    setShowHover(false);
  }
  return (
    <>
      <button className="hover-button" onMouseOver={handleHover} onMouseLeave={handleHoverLeave}>Don't Hover Over this Button</button>
      {showHover && <h3 style={{ color: "#ff3737" }}>{hoverMSG[currentMSGIndex]}</h3>}
    </>

  )
}

export default Hover;