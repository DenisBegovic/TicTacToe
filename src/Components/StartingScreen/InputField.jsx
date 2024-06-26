import React, {useState} from "react";
import ColorSelection from "./ColorSelection";

function InputField({id, name, setName}) {
    const placeholder = `Player ${id}`;

    function handleChange(event) {
        const value = event.target.value;
        setName(value);
    }

    return <div className="input-area">
        <h3>Player {id}</h3>
        <h5>Enter name:</h5>
        {/* <ColorSelection /> */}
        <input placeholder={placeholder} onChange={handleChange} value={name}/>
    </div>
}

export default InputField;