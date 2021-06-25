export const getEnterprise = () => {
  return {
    type: 'GET_ENTERPRISE'
  }
}

export const getEnterpriseSuccess = (enterprises) => {
  return {
    type: 'GET_ENTERPRISE_SUCCESS',
    enterprises
  }
}

export const insertEnterprise = (data) => {
  return {
    type: 'INSERT_ENTERPRISE',
    data
  }
}
