import React from 'react';
import Card from './Card';

const homerData = [
  {
    avatar: "",
    name: "Homer Simpson",
    occupation: "Safety Inspector at Springfield Nuclear Power Plant",
    hobbies: "Drinking beer, watching TV, eating donuts"
  }
];

const Homework02 = () => {
  return (
    <div className="homework02">
      {homerData.map((homer, index) => (
        <Card 
          key={index}
          avatar={homer.avatar}
          name={homer.name}
          occupation={homer.occupation}
          hobbies={homer.hobbies}
        />
      ))}
    </div>
  );
};

export default Homework02;
