import React, { useState } from 'react';
import Header from "./Header";
import Square from './Square';

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
  console.log(`${player.name}'s inputs are: || ${inputs} ||`);
  for (let j = 0; j < winningCombinations.length; j++) {
      let combination = winningCombinations[j];
      console.log(`Checking for this combination: || ${combination} ||`);
      let i = 0;
      while (inputs.includes(combination[i]) && i < combination.length) {
          console.log(`   Found number ${combination[i]}`);
          i++;
      }
      if (i == 3) {
          console.log(`       Winning combination is ${combination}\n`);
          return [true, combination];
      }
  }
  return [false, []];
}


function Game({players}) {
  const [ player1, player2 ] = players;   
  const [gameWon, setGameWon] = useState(false); 
  const [winnerSquares, setWinnerSquares] = useState([]);
  let moveIndex = 0;

  function updateMoveIndex() {
    moveIndex = moveIndex === 0 ? 1 : 0;
  }

  function getCurrentPlayer() {
    return moveIndex === 0 ? player1 : player2;
  }

  function getCurrentIcon() {
      return getCurrentPlayer().icon;
  }

  function nextMove(squareID) {
    console.log(`Current move number ${moveIndex}`);
    updateMovesArray(squareID);
    let [winnerExists, combination] = checkForWinner(getCurrentPlayer());
    if (winnerExists) {
      setGameWon(true);
      setWinnerSquares(combination);
    }
    updateMoveIndex();
  }

  function updateMovesArray(squareID) {
    getCurrentPlayer().moves.push(squareID);
    console.log(`${player1.name} moves: ${player1.moves} `);
    console.log(`${player2.name} moves: ${player2.moves} `);
  }

  function createSquares() {
      let squares = [];
      for (let i = 1; i <= 9; i++) {
        squares.push(<Square key={i} id={i} getCurrentIcon={getCurrentIcon} nextMove={nextMove} isWinnerSquare={winnerSquares.includes(i)} />)
      }
      return squares;
  }

  return <div className='main'>
            <Header getCurrentPlayer={getCurrentPlayer} />
            <div className="playable-area">
                {createSquares()}
            </div>
          </div>
  
}

export default Game;
