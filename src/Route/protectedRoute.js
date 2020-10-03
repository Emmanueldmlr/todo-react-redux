import React from 'react'
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({isAuthed, component:Component, ...rest }) => (
    <Route {...rest} render={ props => (
      localStorage.getItem('token') && isAuthed  ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", location: { from: props.location } }}
          />
        )
  )} />
)

export default ProtectedRoute
