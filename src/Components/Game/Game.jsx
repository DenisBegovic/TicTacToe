import React, { useState } from 'react';
import Header from "./Header";
import Square from './Square';
import RestartGame from './Restart';

const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]

function checkForWinner(player) {
  const inputs = player.moves;
  for (let j = 0; j < winningCombinations.length; j++) {
      let combination = winningCombinations[j];
      let i = 0;
      while (inputs.includes(combination[i]) && i < combination.length) {
          i++;
      }
      if (i == 3) {
          return [true, combination];
      }
  }
  return [false, []];
}


function Game({players, refreshGame}) {
  const [ player1, player2 ] = players;   
  const [gameWon, setGameWon] = useState(false); 
  const [winnerSquares, setWinnerSquares] = useState([]);

  let moveIndex = 0;

  function getCurrentPlayer() {
    return moveIndex === 0 ? player1 : player2;
  }

  function getCurrentIcon() {
      return getCurrentPlayer().icon;
  }

  function nextMove(squareID) {
    getCurrentPlayer().moves.push(squareID);
    let [winnerExists, combination] = checkForWinner(getCurrentPlayer());
    if (winnerExists) {
      setGameWon(true);
      setWinnerSquares(combination);
    }
    moveIndex = moveIndex === 0 ? 1 : 0;
  }

  function createSquares() {
      let squares = [];
      for (let i = 1; i <= 9; i++) {
        squares.push(<Square key={i} id={i} getCurrentIcon={getCurrentIcon} nextMove={nextMove} isWinnerSquare={winnerSquares.includes(i)} />)
      }
      return squares;
  }

  function onRestart() {
    player1.moves = [];
    player2.moves = [];
    refreshGame();
  }

  return <div className='main'>
            <Header />
            <div className="playable-area">
                {createSquares()}
            </div>
            <RestartGame restart={onRestart} />
          </div>
}

export default Game;
