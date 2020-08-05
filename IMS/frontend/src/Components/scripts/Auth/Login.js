import React, { Component } from "react";
import { connect } from "react-redux";
import { onLogin } from "../../Redux/Authentication/AuthAction";
import { withRouter } from "react-router-dom";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  _onHandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  _onSubmit = () => {
    const { email, password } = this.state;
    const newUser = {
      email,

      password,
    };
    console.log(newUser);
    this.props.onLogin(newUser, this.props.history);
  };
  render() {
    const { email, password } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-4" />
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h3 className="text-center">Login</h3>

                  <input
                    type="email"
                    value={email}
                    name="email"
                    onChange={this._onHandleChange}
                  />

                  <input
                    type="password"
                    value={password}
                    name="password"
                    onChange={this._onHandleChange}
                  />
                  <button className="btn-primary" onClick={this._onSubmit}>
                    Login
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null, { onLogin })(withRouter(Login));
