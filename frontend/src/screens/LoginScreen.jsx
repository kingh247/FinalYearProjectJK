import React, { useState } from 'react';
import axios from 'axios';

const LoginScreen = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/api/login', { username, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));

    //  login logic here using the username and password state values
    console.log('Logging in with:', { username, password });
  };
  // .then((result) => {
  //       console.log(result);

  //       // Check if the status is 200
  //       if (result.data === 200) {
  //         // Redirect to the home screen or the desired route
  //         window.location.href = 'http://localhost:3000';
  //       } else {
  //         console.log('Login failed. Check your credentials.');
  //       }
  //     })
  //     .catch((err) => console.log(err));
  //   }

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
