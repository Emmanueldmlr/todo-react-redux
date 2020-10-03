import React from 'react';
import './App.css';
import ProtectedRoute from './Route/protectedRoute'
import PublicRoute from './Route/publicRoute'
import {BrowserRouter as Router,Switch} from "react-router-dom";
import Nav from './Components/nav'
import Homepage from './Pages/homepage'
import Login from './Pages/Auth/login'
import Register from './Pages/Auth/register'
import { connect } from "react-redux";

const App = (props) => {
  const {isAuthed} = props
  return (
    <Router>
      <div className="col-md-6  offset-md-3">
        <Nav />
        <Switch>
          <ProtectedRoute exact isAuthed={isAuthed} path="/" component={Homepage} />
          <PublicRoute exact isAuthed={isAuthed} path="/login" component={Login} />
          <PublicRoute exact isAuthed={isAuthed} path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}


const mapStateToProps = (state) => {
  return {
    isAuthed: state.auth.isAuthed,
  };
};


export default connect(mapStateToProps)(App);
