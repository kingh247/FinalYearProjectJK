import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      // Sending login request to the server
      const response = await axios.post('/api/login', { username, password });
      const data = response.data;

      console.log('Login result:', data);
      // Redirecting user based on userType
      if (data.userType === 'Admin') {
        console.log('User is an admin');
        window.location.href = 'http://localhost:3000/admin';
      } else {
        console.log('User is not an admin');
        window.location.href = 'http://localhost:3000';
      }
      // Storing user data in localStorage
      localStorage.setItem('userData', JSON.stringify(data));
    } catch (error) {
      console.error('Error:', error.response.data.error);
      setError(error.response.data.error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
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
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;

// import React, { useState } from 'react';

// const LoginScreen = () => {
//   // State to hold the username and password entered by the user
//   const [username, setUsername] = useState();
//   const [password, setPassword] = useState();

//   // to handle form submission
//   const submitHandler = async (e) => {
//     e.preventDefault();

//     fetch('/api/login', {
//       method: 'POST',
//       body: JSON.stringify({ username, password }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Log the response for debugging
//         console.log('Login result:', data);

//         // Check if the user is an admin based on userType field
//         if (data.userType === 'Admin') {
//           // User is an admin, handle accordingly
//           console.log('User is an admin');
//           window.location.href = 'http://localhost:3000/admin';
//           // Redirect to admin dashboard or perform admin-specific actions
//           //    // Store token in localStorage

//         } else {
//           // User is not an admin, handle accordingly
//           console.log('User is not an admin');
//           window.location.href = 'http://localhost:3000';
//           // Redirect to regular user dashboard or perform regular user actions
//         }
//         // Store user data in local storage
//         localStorage.setItem('userData', JSON.stringify(data));
//       })
//       .catch((error) => console.error('Error:', error));
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2>Login</h2>
//         <form onSubmit={submitHandler}>
//           <div className="form-group">
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//         <p>
//           Don't have an account? <a href="/signup">Sign up</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginScreen;
