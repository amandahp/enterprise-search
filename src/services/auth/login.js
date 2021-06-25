import axios from 'axios'

export const login = (email, password) => {
  return axios.post(`${process.env.REACT_APP_BASE_URL}login`, {
    email,
    password
  })
}
