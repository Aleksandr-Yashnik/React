import React from 'react';
import '../../components/Button/styles.css';

const Button = ({ name, type }) => {
  return (
    <button className="custom-button" type={type}>
      {name}
    </button>
  );
};

export default Button;
