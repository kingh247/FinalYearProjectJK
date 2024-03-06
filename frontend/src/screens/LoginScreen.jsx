import React, { useState } from 'react';
import axios from 'axios';

const LoginScreen = () => {
  // State to hold the username and password entered by the user
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  // to handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      // Making a POST request to the login API endpoint
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        password,
      });

      console.log('Login result:', response.data);

      // Check if the login was successful
      if (response.status === 200) {
        // Check userType from the response
        const { userType } = response.data;

        // Redirect based on userType
        if (response.userType === 'Admin') {
          console.log('Login result:', userType);
          // Redirect to the admin dashboard
          window.location.href = 'http://localhost:3000/admin';
        } else {
          // Redirect to the home screen
          window.location.href = 'http://localhost:3000';
        }
      } else {
        console.log('Login failed. Check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
