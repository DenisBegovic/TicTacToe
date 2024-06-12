import React from "react";

function RestartGame(props) {
   
    function handleClick() {
        console.log(`Restart clicked`);
        props.restart();
    }

    return <button  
                onClick={handleClick} 
                className="restart">
                Restart Game
            </button>
}

export default RestartGame;