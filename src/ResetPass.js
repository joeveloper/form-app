import React from "react";

class Reset extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the Reset form</h1>
        <form>
          <label htmlFor="email">EMAIL</label>
          <input type="email" id="email" />
          <button variant="outline-primary" type="submit">
            Reset
          </button>
        </form>
      </div>
    );
  }
}

export default Reset;
