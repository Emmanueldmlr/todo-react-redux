import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp} from '../../Store/actions/authAction'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Register = (props) => {
    const {authResponse} = props;
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const isLoading = props.isLoading

    const handleSubmit = (e) => {
        e.preventDefault()
        const credentials = {
            'firstName': firstName,
            'email' : email,
            'password': password,
            'confirmPassword' : confirmPassword 
        }
        props.signUp(credentials,props.history)
    }
    return (
      <form onSubmit={handleSubmit}>
        <div className="signup-form">
          <h2>Create Account</h2>
          <p className="lead">
            It's free and hardly takes more than 30 seconds.
          </p>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-user"></i>
              </span>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                className="form-control"
                name="firstName"
                placeholder="First Name"
                required="required"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-paper-plane"></i>
              </span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                name="email"
                placeholder="Email Address"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                required="required"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-lock"></i>
                <i className="fa fa-check"></i>
              </span>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                className="form-control"
                name="confirm_password"
                placeholder="Confirm Password"
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
                Register
              </button>
            )}
          </div>
          <div className="text-center">
            Already have an account? <Link to="/login">Login here</Link>.
          </div>
          <div className="text-center">
            <p style={{"fontSize":"20px", "color":"blue"}}>
              {authResponse !== "" ? authResponse : null}
            </p>
          </div>
        </div>
      </form>
    );
}
const mapStateToProps = (state) => {

    return {
        authResponse: state.auth.authResponse,
        isLoading: state.auth.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (credentials,history) => {
            dispatch(signUp(credentials,history))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)