import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <h1>This is the login form</h1>
          <label htmlFor="email">EMAIL</label>
          <input type="email" id="email" />
          <label htmlFor="password">PASSWORD</label>
          <input type="password" id="password" value="" />
        </form>
        <button variant="outline-primary" type="submit">
          Login
        </button>
        <div>
          <p>
            <Link to="/reset">Forgot Password?</Link>
          </p>
          <p>
            Click <Link to="/register">Here</Link> if you do not have a account
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
