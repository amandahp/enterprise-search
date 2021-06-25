import React from 'react'

import { Home, Login, Registration, NotFound } from '../pages'
import { PublicRoute } from './publicRoutes'
import { PrivateRoute } from './privateRoutes'

const routes = [
  { path: '/home', component: Home, private: true },
  { path: '/registration', component: Registration, private: true },
  { path: '/login', component: Login, private: false },
  { path: '*', component: NotFound, private: true }
]

const buildRoutes = () => {
  return routes.map((route, index) => {
    return route.private ? (
      <PrivateRoute key={`route-${index}`} {...route} />
    ) : (
      <PublicRoute key={`route-${index}`} {...route} />
    )
  })
}

export default buildRoutes
