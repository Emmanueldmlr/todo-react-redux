import React from 'react'
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({isAuthed,component:Component, ...rest}) => (

  <Route {...rest} render={ props => (!isAuthed ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/", location: { from: props.location } }}
          />
        )
  )} />
)

export default PublicRoute
