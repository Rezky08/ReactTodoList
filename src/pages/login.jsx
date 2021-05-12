import React from "react";
import API from "../API";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      valid: false,
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  validateInput() {
    if (this.state.email !== "" && this.state.password !== "") {
      this.setState({ valid: true });
    } else {
      this.setState({ valid: false });
    }
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
    this.validateInput();
  }
  handleChangePassword(event) {
    this.setState({ password: event.target.value });
    this.validateInput();
  }
  handleSuccesLogin(response) {
    const { data } = response;
    localStorage.setItem("token", data?.auth_token);
    if (localStorage.getItem("token")) {
      this.props.history.push("/");
    }
  }
  async handleFormSubmit(event) {
    event.preventDefault();
    API.post("/auth/login", {
      email: this.state.email,
      password: this.state.password,
    })
      .then(this.handleSuccesLogin)
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} method="POST">
        <div className="login--container h-screen flex flex-col">
          <div className="login--box flex flex-col gap-4 my-auto mx-auto shadow-md p-12 w-1/2 rounded-md">
            <input
              value={this.state.email}
              placeholder="Email"
              type="email"
              name="email"
              className="shadow-md h-8 px-3 rounded-md"
              onChange={this.handleChangeEmail}
            ></input>
            <input
              value={this.state.password}
              placeholder="Password"
              type="password"
              name="password"
              className="shadow-md h-8 px-3 rounded-md"
              onChange={this.handleChangePassword}
            ></input>
            <div className="flex flex-row justify-end">
              <button
                type="submit"
                disabled={!this.state.valid}
                className={`${
                  this.state.valid ? "bg-purple-700" : "bg-purple-300"
                } p-2 rounded-md px-10 text-white font-bold`}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(Login);
