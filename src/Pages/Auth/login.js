import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import { login } from "../../Store/actions/authAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Login = (props) => {
  const {authResponse} = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoading = props.isLoading;
  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {
      email: email,
      password: password,
    };
    props.login(params, props.history)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="signup-form">
          <h2>Sign In</h2>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-paper-plane"></i>
              </span>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required="required"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-lock"></i>
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                name="password"
                placeholder="Password"
                required="required"
              />
            </div>
          </div>
          <div className="form-group">
            {isLoading ? (
              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg"
                disabled="disabled"
              >
                <FontAwesomeIcon icon={faSpinner} pulse size="3x" />
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg"
              >
                Login
              </button>
            )}
          </div>
          <div className="text-center">
            Dont have an account? <Link to="/register">Register here</Link>.
          </div>
          <div className="text-center">
            <p style={{ fontSize: "20px", color: "blue" }}>
              {authResponse !== "" ? authResponse : null}
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    authResponse: state.auth.authResponse,
    isLoading : state.auth.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials,history) => {
      dispatch(login(credentials,history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
