import React, { Component } from "react";
import Head from "next/head";
import doLogin from "../api/admin-user/login";

export async function getServerSideProps() {}
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      credentialError: false,
      emailInputValue: "",
      emailRequiredError: false,
      passwordInputValue: "",
      passwordRequiredError: false,
    };
  }

  updateEmailInputValue = (event) => {
    this.setState({
      emailInputValue: event.target.value,
      emailRequiredError: false,
    });
  };

  updatePasswordInputValue = (event) => {
    this.setState({
      passwordInputValue: event.target.value,
      passwordRequiredError: false,
    });
  };

  submitLoginRequest = async () => {
    if (!this.state.emailInputValue || !this.state.passwordInputValue) {
      !this.state.emailInputValue &&
        this.setState({ emailRequiredError: true });
      !this.state.passwordInputValue &&
        this.setState({ passwordRequiredError: true });
      return;
    }
    this.setState({ loading: true });
    const response = await doLogin(
      this.state.emailInputValue,
      this.state.passwordInputValue
    );
    if (!response.success) {
      this.setState({
        loading: false,
        credentialError: "Unable to login, please check credential",
        emailRequiredError: false,
        passwordRequiredError: false,
      });
      return;
    }
    this.setState({
      loading: false,
      credentialError: "",
      emailRequiredError: false,
      passwordRequiredError: false,
    });
    window.location.href = "/";
    return;
  };

  render() {
    return (
      <div className="layout-wrapper">
        <Head>
          <title>Login | Admin</title>
        </Head>
        <div className="login-wrapper">
          <div className="login-content-container">
            <div className="login-form-container">
              {this.state.credentialError ? (
                <div className="login-form-error-block">
                  <span>Email address and/or password is incorrect.</span>
                </div>
              ) : null}
              <div className="login-form-top-header">
                <span>Admin Login</span>
              </div>
              <div className="login-form-field">
                <input
                  onChange={this.updateEmailInputValue}
                  value={this.state.emailInputValue}
                  type="email"
                  autoComplete="new-password"
                  placeholder="Email Address"
                  className={
                    this.state.credentialError || this.state.emailRequiredError
                      ? "error"
                      : null
                  }
                />
                {this.state.emailRequiredError ? (
                  <div className="login-form-error-msg">
                    <span>Email field is required.</span>
                  </div>
                ) : null}
              </div>
              <div className="login-form-field">
                <input
                  onChange={this.updatePasswordInputValue}
                  value={this.state.passwordInputValue}
                  type="password"
                  autoComplete="new-password"
                  placeholder="Password"
                  className={
                    this.state.credentialError ||
                    this.state.passwordRequiredError
                      ? "error"
                      : null
                  }
                />
                {this.state.passwordRequiredError ? (
                  <div className="login-form-error-msg">
                    <span>Password field is required.</span>
                  </div>
                ) : null}
              </div>
              <div className="login-form-submit-btn-container">
                {!this.state.loading ? (
                  <div
                    onClick={() => this.submitLoginRequest()}
                    className="login-form-submit-btn"
                  >
                    <span>Login</span>
                  </div>
                ) : (
                  <div className="login-form-submit-btn loading">
                    <span>Loading</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
