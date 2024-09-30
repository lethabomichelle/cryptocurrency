import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import '../css/styles.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();

    if (!username || !password || (!isLogin && !email)) {
      alert('All fields are required!');
      return;
    }

    if (!isLogin && password !== repeatPassword) {
      alert("Passwords don't match!");
      return;
    }

    const url = isLogin ? 'http://localhost:5001/api/auth/login' : 'http://localhost:5001/api/auth/register';
    const payload = isLogin
      ? { username, password }
      : { username, password, email };

    try {
      const response = await axios.post(url, payload);
      if (isLogin) {
        localStorage.setItem('token', response.data.token);
        navigate('/Dashboard');
      } else {
        alert('Registration successful! Please login.');
        setIsLogin(true);
      }
    } catch (error) {
      console.error('Authentication Error:', error.response?.data || error.message);
      alert('Authentication failed. Please check your credentials or server status.');
    }
  };

  const handleGoogleResponse = async (credentialResponse) => {
    const { credential } = credentialResponse;
    try {
      const response = await axios.post('http://localhost:5001/api/auth/google', { credential });
      localStorage.setItem('token', response.data.token);
      navigate('/Dashboard');
    } catch (error) {
      console.error('Google Authentication Error:', error.response?.data || error.message);
      alert('Google Authentication failed. Please try again.');
    }
  };

  return (
    <div className="login-wrap">
      <div className="login-html">
        <input
          id="tab-1"
          type="radio"
          name="tab"
          className="sign-in"
          checked={isLogin}
          onChange={() => setIsLogin(true)}
        />
        <label htmlFor="tab-1" className="tab">Sign In</label>
        <input
          id="tab-2"
          type="radio"
          name="tab"
          className="sign-up"
          checked={!isLogin}
          onChange={() => setIsLogin(false)}
        />
        <label htmlFor="tab-2" className="tab">Sign Up</label>

        <div className="login-form">
          {isLogin ? (
            <form className="sign-in-htm" onSubmit={handleAuth}>
              <div className="group">
                <label htmlFor="user" className="label">Username</label>
                <input
                  id="user"
                  type="text"
                  className="input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
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
                />
              </div>
              <div className="group">
                <input
                  id="check"
                  type="checkbox"
                  className="check"
                  defaultChecked
                />
                <label htmlFor="check">
                  <span className="icon"></span> Keep me Signed in
                </label>
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign In" />
              </div>
              <div className="group">
                <GoogleLogin
                  onSuccess={handleGoogleResponse}
                  onError={(error) => {
                    console.error('Google Login Error:', error);
                    alert('Google Login failed. Please try again.');
                  }}
                />
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </form>
          ) : (
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
                />
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign Up" />
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <label htmlFor="tab-1" onClick={() => setIsLogin(true)}>Already a Member?</label>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
