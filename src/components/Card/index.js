import React from 'react';
import './index.css';

const Card = (props) => {
  const { data, selectCard } = props;

  const handleClick = () => {
    selectCard(data.id);
  }

  return(
    <div className='card-container' id={data.id} onClick={handleClick} >
      <div className='card-color' style={{backgroundColor: data.hex}}></div>
      <p className='card-nameplate'>{data.name}</p>
    </div>
  );
}

export default Card;