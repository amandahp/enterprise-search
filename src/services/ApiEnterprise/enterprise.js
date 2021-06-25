import axios from 'axios'

export const getEnterprise = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}empresa`)
  return response
}

export const insert = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}empresa`,
    data
  )
  return response
}
