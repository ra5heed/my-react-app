import React from "react";

const LoginPage = () => {
  return (
    <div className="login-container">
      {/* Left Image Section */}

      {/* Right Form Section */}
      <div className="form-section">
        <div className="form-card">
          <h1>WELCOME!</h1>

          <form>
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="••••••••" />
            </div>

            <div className="form-options">
              <label className="remember">
                <input type="checkbox" /> Remember Me
              </label>
              <a href="#" className="forgot">
                Forgot Password?
              </a>
            </div>

            <button className="primary-btn">Login</button>
          </form>

          <div className="divider">or</div>

          <div className="social-buttons">
            <button className="google-btn">Sign in with Google</button>
            <button className="apple-btn">Sign in with Apple</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
