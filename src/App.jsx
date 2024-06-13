import React, { useState } from 'react';
import Game from './Components/Game/Game';
import StartingScreen from "./Components/StartingScreen/StartingScreen";
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
  const [seed, setSeed] = useState(1);

  function refreshGame() {
    setSeed(seed + 1);
  }

  function startGame(name1, name2) {
    setPlayers([new Player(name1, cross), new Player(name2, circle)]);
    setGameisOn(true);
  }

  return gameIsOn ? <Game key={seed} players={players} refreshGame={refreshGame} /> : <StartingScreen startGame={startGame}/>
}

export default App;
