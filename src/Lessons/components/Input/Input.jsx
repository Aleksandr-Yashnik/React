import React from 'react';
import '../../components/Input/Input.css';

const Input = ({ name, type, placeholder, label }) => {
  return (
    <div className="input-container">
      <label className="input-label" htmlFor={name}>{label}</label>
      <input className="custom-input" id={name} name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
