import React from "react";

function ColorOption() {
    const style = {backgroundColor: "blue",
    width: "30px",
    heigth: "30px"
    }

    function handleClick() {

    }

    return <button style={style} onClick={handleClick}></button>
}

export default ColorOption;