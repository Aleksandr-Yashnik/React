import React from 'react';
import './Card.css';

const Card = ({ avatar, name, occupation, hobbies }) => {
  return (
    <div className="card">
      <img src={avatar} alt={`${name}'s avatar`} className="card-avatar" />
      <div className="card-info">
        <h2 className="card-name">{name}</h2>
        <p className="card-occupation">Occupation: {occupation}</p>
        <p className="card-hobbies">Hobbies: {hobbies}</p>
      </div>
    </div>
  );
};

export default Card;
