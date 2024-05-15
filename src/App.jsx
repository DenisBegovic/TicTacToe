import React, { useState } from 'react';
import Game from './Components/Game';
import StartingScreen from "./Components/StartingScreen";
import { circle, cross } from '../src/assets/icons';

class Player {
  constructor(name, icon) {
    this.name = name;
    this.icon = icon;
    this.moves = [];
  }
}

function App() {
  const [gameIsOn, setGameisOn] = useState(false);
  const [players, setPlayers] = useState([]);

  function startGame(name1, name2) {
    setPlayers([new Player(name1, cross), new Player(name2, circle)]);
    setGameisOn(true);
  }

  return gameIsOn ? <Game players={players}/> : <StartingScreen startGame={startGame}/>
}

export default App;
