import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const PrivateRoute = (props) => {
  const location = useLocation()

  const token = useSelector((state) => state.loginReducer.token)

  if (token)
    return <Route path={props.path} component={props.component} exact />

  return <Redirect to={{ pathname: '/login', state: { from: location } }} />
}
