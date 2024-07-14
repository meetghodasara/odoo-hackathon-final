import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./form.css";

const Login = () => {
  // make the form input state
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const [message, setMessage] = React.useState("");

  // handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // simulate authentication with a delay
    setTimeout(() => {
      if (email === "test@example.com" && password === "password") {
        setError(false);
        setMessage("Login successful!");
      } else {
        setError(true);
        setMessage("Invalid email or password.");
      }
    }, 1000);
  };
  // handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  // render the login form
  return (
    <div>
      <div className="login-main">
        <div className="login-img">
          <img src="img/login.jpg" alt="login" />
        </div>
        <div className="login-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <h1>Welcome!</h1>
            <p>Please sign in to access your account.</p>
            {error && <p className="error-message">{message}</p>}
            <div className="user-input">
              <TextField
                id="user-email"
                label="User email"
                variant="outlined"
                value={email}
                onChange={handleChange}
                name="email"
              />
            </div>
            <div className="user-input">
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                value={password}
                onChange={handleChange}
                name="password"
                type="password"
              />
              <div className="forgot-password">
                <a href="#">Forgot Password?</a>
              </div>
              <div className="btn">
                <Button variant="contained" type="submit">
                  Sign In
                </Button>
              </div>
              <div className="new-user">
                <p>
                  Don't have an account? <Link to="/register">Sign Up</Link>
                </p>
              </div>
            </div>
            <div className="terms-conditions">
              <p>
                By signing in, you agree to our Terms of Service and Privacy
                Policy.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
