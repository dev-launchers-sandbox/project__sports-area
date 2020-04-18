import React from "react";
import LogInForm from "../../common/LogInForm/LogInForm";
import SignInForm from "../../common/SignInForm/SignInForm";
class LogInPage extends React.Component {
  constructor() {
    super();
    this.state = {
      form: "SignIn"
    };
    this.changeForm = this.changeForm.bind(this);
  }

  changeForm() {
    if (this.state.form === "LogIn") {
      this.setState({
        form: "SignIn"
      });
    } else {
      this.setState({
        form: "LogIn"
      });
    }
  }

  render() {
    const form = this.state.form;
    if (form === "LogIn") {
      return (
        <LogInForm
          nextPage={this.props.nextPage}
          changeForm={this.changeForm}
        />
      );
    } else {
      return (
        <SignInForm
          nextPage={this.props.nextPage}
          changeForm={this.changeForm}
        />
      );
    }
  }
}

export default LogInPage;
