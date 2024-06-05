import React from 'react';
import './FlipCard.css';

const FlipCards = ({frontTitle, logo, backData}) => {

  const createList = (items) => (
    <ul>
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );

  return (
    <>
    
    <div className="flip-card"data-aos="zoom-in" >
      <div className="flip-card-inner">
        <div className="flip-card-front">
        {logo }
          <h2>{frontTitle}</h2>
         
        </div>
        <div className="flip-card-back">
          <h2>Tech Stack</h2>
          {createList(backData)}
        </div>
      </div>
    </div>
    
    </>
  )
}

export default FlipCards