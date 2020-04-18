import React from "react";
import style from "./LogInForm.module.css";
import images from "/../../../public/Images/Images";
import fakeUsers from "/../../../public/Data/FakeUsers.json";

class LogInForm extends React.Component {
  constructor() {
    super();
    this.state = {
      hidden: true,
      userUsername: "",
      userPassword: "",
      currentUser: "",
      backgroundColor: "",
      border: ""
    };
    this.toggleHidden = this.toggleHidden.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkInfo = this.checkInfo.bind(this);
  }

  checkInfo(event) {
    const { style } = event.target;
    event.preventDefault();
    const user = fakeUsers.find(
      user =>
        user.username === this.state.userUsername &&
        user.password === this.state.userPassword
    );

    if (user) {
      this.props.nextPage();
    } else {
      this.setState({
        backgroundColor: "#ffcdd2",
        border: "2px solid red"
      });
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      border: "",
      backgroundColor: ""
    });
  }
  toggleHidden() {
    this.setState({
      hidden: !this.state.hidden
    });
  }

  render() {
    console.log(this.state.style);
    return (
      <div className={style.form}>
        <form onSubmit={this.checkInfo}>
          <br />
          <br />
          <label>
            Username:{" "}
            <input
              type="text"
              style={{
                backgroundColor: this.state.backgroundColor,
                border: this.state.border
              }}
              value={this.state.userUsername}
              name="userUsername"
              placeholder="Your username"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Password:
            <input
              name="userPassword"
              style={{
                backgroundColor: this.state.backgroundColor,
                border: this.state.border
              }}
              type={this.state.hidden ? "password" : "text"}
              value={this.state.userPassword}
              placeholder="Your Password"
              onChange={this.handleChange}
            />
            <p className={style.changeFormP} onClick={this.props.changeForm}>
              {" "}
              You don’t have an account? Click here!
            </p>
          </label>

          <input type="submit" value="Log Into Your Account!" />
        </form>
        <img
          src={this.state.hidden ? images.eyeballClosed : images.eyeballOpen}
          alt="hide/show"
          onClick={this.toggleHidden}
          className={style.eyeball}
        />
      </div>
    );
  }
}

export default LogInForm;
