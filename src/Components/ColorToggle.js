import React from "react";

function ColorToggle(props) {
    return (
        <>
            <button id="changeColors-button" onClick={props.onClick}>Change Colors</button>
            <br></br>
            <br></br>
        </>
    )
}

export default ColorToggle;