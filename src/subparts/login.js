import React, { useState } from 'react';
import "./styles/signup.css"

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();
    // Handle sign-up logic
    console.log('Sign up:', { email, password });
  };
  const handleGoogleLogin = () => {
    // Handle Google login logic
    console.log('Google Login');
  };


  return (
    <div className="signup-page">
      <h2>Login</h2>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log in</button>
      </form>

      <div className="login-options">
        <h3>Don't have an account?  <a href='/signup'>Sign Up</a></h3>
        

        <h3>Or login with Google <button className="google-login-button" onClick={handleGoogleLogin}>
         Google
        </button></h3>
        
      </div>
    </div>
  );
};

export default LoginPage;
