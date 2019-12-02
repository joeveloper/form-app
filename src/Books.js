import React from "react";
import { Link } from "react-router-dom";

class Books extends React.Component {
  render() {
    return (
      <div>
        <Link to="/bookinfo">
          <img src="images/book1.jpg" alt="img" />
        </Link>
      </div>
    );
  }
}

export default Books;
