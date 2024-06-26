import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link component

const SignUpScreen = () => {
  // State to hold the username, email, password, and error messages
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    // Hardcode userType to 'User'
    const userType = 'User';

    axios
      .post('http://localhost:5000/api/signup', {
        // Sending signup request to the server
        username,
        email,
        password,
        userType,
      })
      .then((result) => {
        console.log(result);
        // Redirect to login page upon successful signup
        window.location.href = '/login';
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setError(err.response.data.message); // to show user the erro message from backend
      });
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>

        <form onSubmit={submitHandler}>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpScreen;

