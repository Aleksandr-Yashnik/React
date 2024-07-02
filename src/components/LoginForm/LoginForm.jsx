import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import '../LoginForm/LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-form">
      <h2>Login</h2>
      <form>
        <Input
          name="username"
          type="text"
          placeholder="Enter your username"
          label="Username"
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
        <Button
          name="Login"
          type="Login"
        />
      </form>
    </div>
  );
};

export default LoginForm;

