// LoginPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './indexs.css';
import Landing from  './Landing'

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    alert("Cooking...\nLogged in successfully!");
    setTimeout(() => {
      navigate('/'); // Redirect to your main app route
    }, 1000);
  };

  return (
    <div className='container'>
      <Landing>
        <h1 className="header-top">HUMANS PRESENTS</h1>
        <div className="content">
          <div className="left">
            <div className="left-top">
              {/* Additional left content can go here */}
            </div>
          </div>
          <div className="right">
            <div className="login-card">
              <div className="login-inner">
                <h1>START COOKING</h1>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter Username"
                    required
                    className="input-field"
                  />
                  <p className="error" id="error-email"></p>
                  <div className="password-container">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="Enter Password"
                      required
                      className="input-field password-field"
                    />
                    <span
                      id="togglePassword"
                      className="toggle-password"
                      onClick={handleTogglePassword}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        {showPassword ? (
                          <>
                            <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20C5 20 1 12 1 12a21.4 21.4 0 0 1 4.73-5.18" />
                            <path d="M22.54 11.46C21.39 9.4 18.83 7 12 7c-1.32 0-2.6.19-3.82.56" />
                            <line x1="1" y1="1" x2="23" y2="23" />
                          </>
                        ) : (
                          <>
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </>
                        )}
                      </svg>
                    </span>
                  </div>
                  <p className="error" id="error-password"></p>
                  <button type="submit" className="btn" id="loginBtn" disabled={isSubmitting}>
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <h1 className="header-bottom">NOT A COOKING COMPETITION</h1>
      </Landing>
    </div>
  );
};

export default LoginPage;
