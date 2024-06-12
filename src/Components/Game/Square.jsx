import React, {useState} from "react";

function Square(props) {
    const [isClicked, setIsClicked] = useState(false);
    const [squareIcon, setSquareIcon] = useState();

    const winnerStyle = props.isWinnerSquare ? {backgroundColor: "pink"} : {};

    function handleClick() {
        if (!isClicked) {
            setSquareIcon(() => {
                return props.getCurrentIcon();
            });
            setIsClicked(true);
            props.nextMove(props.id);

            setTimeout(() => {
                setIsClicked(false);
                setSquareIcon();
            }, 8000);
        }
    }

    return <div style={winnerStyle} onClick={handleClick} className="field">{isClicked && squareIcon}</div>;
}

export default Square;