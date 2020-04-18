import React from "react";
import style from "./SignInForm.module.css";
import images from "/../../../public/Images/Images";
class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      email: "",
      password: "",
      value: "",
      username: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    console.log(props);
  }

  toggleHidden() {
    this.setState({
      hidden: !this.state.hidden
    });
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div className={style.form}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:{" "}
            <input
              type="text"
              value={this.state.email}
              name="email"
              placeholder="example@gmail.com"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Username:{" "}
            <input
              type="text"
              value={this.state.username}
              name="username"
              placeholder="Cool_Username"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Password:
            <input
              name="password"
              type={this.state.hidden ? "password" : "text"}
              value={this.state.password}
              placeholder="Your Password"
              onChange={this.handleChange}
            />
            <p className={style.changeFormP} onClick={this.props.changeForm}>
              {" "}
              Already have an account? Click Me!
            </p>
          </label>

          <input
            onClick={this.props.nextPage}
            type="submit"
            value="Create Your Account!"
          />
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
export default SignInForm;
