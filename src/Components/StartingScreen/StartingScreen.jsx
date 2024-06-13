import React, { useState } from "react";
import InputField from "./InputField";

function StartingScreen(props) {
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    
    function onStart() {
        props.startGame(name1 === '' ? "Player1" : name1, name2 === '' ? "Player2" : name2);
    }

    return <>
        <h1 className="title">Dynamic TicTacToe</h1> 
        <div className="starting-screen">
            <div className="input-container">
                <InputField key={1} id={1} name={name1} setName={setName1}/>
                <InputField key={2} id={2} name={name2} setName={setName2}/>
            </div> 
            <button className="start-btn" onClick={onStart}>Start Game</button>
        </div>
    </>
    
}

export default StartingScreen;
