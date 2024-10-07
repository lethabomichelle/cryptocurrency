import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/styles.css';

const AuthPage = ({ onSignUpSuccess }) => {  // Accept the onSignUpSuccess prop
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!username || !password || !email) {
      alert('All fields are required!');
      console.log({ username, password, email }); // Log field values for debugging
      return;
    }

    if (password !== repeatPassword) {
      alert("Passwords don't match!");
      return;
    }

    const url = 'http://localhost:5001/api/auth/register';
    const payload = { username, password, email };

    try {
      const response = await axios.post(url, payload);
      // Save token and call the onSignUpSuccess to update the auth state
      localStorage.setItem('token', response.data.token);
      onSignUpSuccess(); // Call this to update authentication state
      navigate('/Dashboard'); // Navigate to the dashboard after successful signup
    } catch (error) {
      // Enhance error logging
      console.error('Registration Error:', error.response?.data || error.message);
      alert('Registration failed. Please check your details or server status.');
    }
  };

  return (
    <div className="login-wrap">
      <div className="login-html">
        <input
          id="tab-2"
          type="radio"
          name="tab"
          className="sign-up"
          checked={true} // Set to true since we are only allowing sign-up
          readOnly
        />
        <label htmlFor="tab-2" className="tab">Sign Up</label>

        <div className="login-form">
          <form className="sign-up-htm" onSubmit={handleAuth}>
            <div className="group">
              <label htmlFor="user" className="label">Username</label>
              <input
                id="user"
                type="text"
                className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required 
                autoComplete="username"
              />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">Password</label>
              <input
                id="pass"
                type="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
            </div>
            <div className="group">
              <label htmlFor="repeatPass" className="label">Repeat Password</label>
              <input
                id="repeatPass"
                type="password"
                className="input"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
            </div>
            <div className="group">
              <label htmlFor="email" className="label">Email Address</label>
              <input
                id="email"
                type="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>
            <div className="group">
              <input type="submit" className="button" value="Sign Up" />
            </div>
            <div className="hr"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;







