import React from "react";
import Register from "./Register";
import Login from "./Login";
import { Link, Route } from "react-router-dom";
import ResetPass from "./ResetPass";
import Home from "./Home";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/reset">Reset Password</Link>
        </li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/reset" component={ResetPass} />
    </div>
  );
}

export default App;
