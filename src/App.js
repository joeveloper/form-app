import React from "react";
import Register from "./Register";
import Login from "./Login";
import { Link, Route } from "react-router-dom";
import ResetPass from "./ResetPass";
import Home from "./Home";
import Books from "./Books";
import BookInfo from "./BookInfo";
import "./style.css";

function App() {
  return (
    <div>
      <div id="navi-bar">
        <ul>
          <li class="navi-links">
            <Link to="/">Home</Link>
          </li>
          <li class="navi-links">
            <Link to="/login">Login</Link>
          </li>
          <li class="navi-links">
            <Link to="/register">Register</Link>
          </li>
          <li class="navi-links">
            <Link to="/reset">Reset Password</Link>
          </li>
          <li class="navi-links">
            <Link to="/books">Books Link</Link>
          </li>
        </ul>
      </div>

      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/reset" component={ResetPass} />
      <Route path="/books" component={Books} />
      <Route path="/bookinfo" component={BookInfo} />
    </div>
  );
}

export default App;
