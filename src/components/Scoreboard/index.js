import React from 'react';
import './index.css';

const Scoreboard = (props) => {
  const { score, highScore } = props;

  return(
    <div id='scoreboard-container'>
      <div className='score-box'>
        <label htmlFor='scoreDisplay'>Score</label>
        <p>{score}</p>       
      </div>
      <div className='score-box'>
        <label htmlFor='highScoreDisplay'>High Score</label>
        <p>{highScore}</p>
      </div>
    </div>
  );
}

export default Scoreboard;