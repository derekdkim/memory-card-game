import React, { useState } from 'react';
import './index.css';

import Scoreboard from '../Scoreboard';
import Gameboard from '../Gameboard';

const Game = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return(
    <div id='game'>
      <h1>Shades of Blue Memory Game</h1>
      <p>How well can you remember different shades of blue?</p>
      <p>Click on each card without clicking it more than once!</p>
      <Scoreboard score={score} highScore={highScore} />
      <Gameboard score={score} setScore={setScore} highScore={highScore} setHighScore={setHighScore} />
    </div>
  );
}

export default Game;