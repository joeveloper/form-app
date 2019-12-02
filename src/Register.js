import React from "react";

class Register extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the register form</h1>

        <form>
          <label htmlFor="name">NAME</label>
          <input type="text" id="name" />
          <label htmlFor="email">EMAIL</label>
          <input type="email" id="email" />
          <label htmlFor="password">PASSWORD</label>
          <input type="password" id="password" />
          <label htmlFor="gender">GENDER</label>
          <input type="radio" id="male" name="gender" />
          Male
          <input type="radio" id="female" name="gender" />
          Female
          <label htmlFor="phone">PHONE</label>
          <input type="number" id="phone" />
          <button variant="outline-primary" type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
