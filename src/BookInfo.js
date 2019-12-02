import React from "react";

class BookInfo extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the book Info page</h1>
        <div id="image-div">
          <img src="images/book1.jpg" alt="img" />
        </div>
        <p>This is Book1</p>
      </div>
    );
  }
}

export default BookInfo;
