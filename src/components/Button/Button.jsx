import React from 'react';
import './styles.css';

const Button = ({ name, type = "button", onClick }) => {
  return (
    <button className="custom-button" type={type} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;