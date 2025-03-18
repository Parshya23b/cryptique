import React, { useState, useEffect } from 'react';

function SignupForm({ onBackToLogin }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(
      fullName.trim() !== '' && 
      email.trim() !== '' && 
      password.trim() !== '' && 
      password === confirmPassword
    );
  }, [fullName, email, password, confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup form submitted with:', { fullName, email, password });
    // Here you would typically handle user registration
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form-container">
      <div className="header">
        <h1>Sign up</h1>
      </div>

      <div className="signup-option">
        <p>Already have an account?</p>
        <a href="#" onClick={onBackToLogin}>Sign in</a>
      </div>

      <div className="social-login">
        <button className="google-btn">
          <div className="google-icon">
            <svg width="20" height="20" viewBox="0 0 20 20">
              <path d="M19.8 10.2c0-.7-.1-1.4-.2-2h-9.6v3.8h5.5c-.2 1.2-1 2.3-2.1 3v2.5h3.4c2-1.8 3-4.5 3-7.3z" fill="#4285F4"/>
              <path d="M10 20c2.9 0 5.3-1 7-2.6l-3.4-2.6c-.9.6-2.1 1-3.6 1-2.8 0-5.1-1.9-6-4.4H.5v2.7c1.8 3.5 5.4 5.9 9.5 5.9z" fill="#34A853"/>
              <path d="M4 10.2c-.2-.6-.4-1.3-.4-2s.1-1.4.4-2V3.5H.5c-.8 1.6-1.3 3.4-1.3 5.2 0 1.8.5 3.6 1.3 5.2l3.5-2.7z" fill="#FBBC05"/>
              <path d="M10 3.9c1.6 0 3 .5 4.1 1.6l3-3C15.3.9 12.9 0 10 0 5.9 0 2.3 2.4.5 5.9l3.5 2.7c.8-2.5 3.2-4.7 6-4.7z" fill="#EA4335"/>
            </svg>
          </div>
          Continue with Google
        </button>
      </div>

      <div className="or-divider">
        <div className="line"></div>
        <div className="or-text">OR</div>
        <div className="line"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input 
            type="text" 
            id="fullName" 
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="signupEmail">Email address</label>
          <input 
            type="email" 
            id="signupEmail" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="signupPassword">Password</label>
          <div className="password-input-container">
            <input 
              type={showPassword ? "text" : "password"} 
              id="signupPassword" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button 
              type="button" 
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="password-input-container">
            <input 
              type={showPassword ? "text" : "password"} 
              id="confirmPassword" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <button 
          type="submit" 
          className={`submit-btn ${isFormValid ? 'active' : ''}`}
        >
          Create Account
        </button>
      </form>

      <div className="terms-privacy">
        <p>By signing up, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></p>
      </div>
    </div>
  );
}

export default SignupForm;