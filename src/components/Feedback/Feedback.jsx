import React, { useState } from 'react';
import Button from '../Button/Button';
import './styles.css';

const Feedback = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setDislikes(dislikes + 1);
  const handleReset = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="feedback-container">
      <div className="feedback-buttons">
        <div className="feedback-button">
          <Button name="👍" onClick={handleLike} />
          <span className="feedback-count">{likes}</span>
        </div>
        <div className="feedback-button">
          <Button name="👎" onClick={handleDislike} />
          <span className="feedback-count">{dislikes}</span>
        </div>
      </div>
      <Button name="Reset Results" onClick={handleReset} />
    </div>
  );
};

export default Feedback;
