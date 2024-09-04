import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();

    if (!isLogin && password !== repeatPassword) {
      alert("Passwords don't match!");
      return;
    }

    const url = isLogin ? '/api/login' : '/api/register';
    const payload = isLogin
      ? { username, password }
      : { username, password, email };

    try {
      const response = await axios.post(url, payload);
      if (isLogin) {
        localStorage.setItem('token', response.data.token);
        navigate('/cryptx-dashboard');
      } else {
        alert('Registration successful! Please login.');
        setIsLogin(true);
      }
    } catch (error) {
      console.error('Authentication Error:', error);
      alert('Authentication failed.');
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
                />
              </div>
              <div className="group">
                <label htmlFor="email" className="label">Email Address</label>
                <input
                  id="email"
                  type="text"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
