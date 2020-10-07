import React, { useState, useEffect } from 'react';
import './index.css';

import * as blueData from '../../data/blue.json';
import Card from '../Card';

const Gameboard = (props) => {
  const [pickedCards, setPickedCards] = useState([]);
  const [cardList, setCardList] = useState(blueData.blue);
  const { score, setScore, highScore, setHighScore } = props;

  const selectCard = (id) => {
    if (pickedCards.includes(id)) {
      if (highScore < score) {
        setHighScore(score);
      }
      setScore(0);
      setPickedCards([]);
    } else {
      setScore(score + 1);
      if (highScore <= score) {
        setHighScore(highScore + 1);
      }
      setPickedCards((prevState) => [...prevState, id]);
    }
  }

  // Reshuffle card after every selection
  useEffect(() => {
    let workingDeck = cardList;

    // Durstenfeld Shuffle
    for (let i = workingDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [workingDeck[i], workingDeck[j]] = [workingDeck[j], workingDeck[i]];
    }

    setCardList(workingDeck);
  }, [cardList, pickedCards]);

  return(
    <div id='gameboard'>
      {cardList.map((card, index) =>
        <Card key={index} data={card} selectCard={selectCard} />
      )}
    </div>
  );
}

export default Gameboard;