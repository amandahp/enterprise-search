export const login = (email, password) => {
  return {
    type: 'LOGIN',
    email,
    password
  }
}

export const loginSuccess = (token, user) => {
  return {
    type: 'LOGIN_SUCCESS',
    token,
    user
  }
}

export const loginError = (error) => {
  return {
    type: 'LOGIN_ERROR',
    error
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}
