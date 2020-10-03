import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {connect} from "react-redux"
import {logout} from '../Store/actions/authAction'

const Nav = (props) => {
  const {user,isAuthed} = props
  const handleLogout = () => {
    props.logout()
  }
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="row col-md-12">
        <div className="col-md-2">
          <Link className="navbar-brand" to="/">
            MyTodo
          </Link>
        </div>
        {
          !isAuthed ? 
          <div className={`col-md-8 row text-right`}>
            <div className="text-right  col-md-12">
              <Link className="navbar-brand" to="/register">
                Register
              </Link>
              <Link className="navbar-brand" to="/login">
                Login
                <FontAwesomeIcon
                  style={{ color: "red", marginLeft: "5px" }}
                  icon={faSignInAlt}
                />
              </Link>
            </div> 
          </div>
          :
          <div className="text-right col-md-6">
            <div style={{ "cursor" : "pointer" }} onClick={handleLogout} className="navbar-brand" >
              {user.firstName}
              <FontAwesomeIcon
                style={{ color: "red", marginLeft: "5px" }}
                icon={faPowerOff}
              />
            </div>
          </div>
        } 
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    isAuthed : state.auth.isAuthed
  };
};

 const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Nav)
