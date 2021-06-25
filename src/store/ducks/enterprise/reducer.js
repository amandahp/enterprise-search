export const initialState = {
  loading: false,
  enterprises: []
}

const enterpriseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ENTERPRISE':
      return { ...state, loading: true }
    case 'GET_ENTERPRISE_SUCCESS':
      return { ...state, loading: false, enterprises: action.enterprises }
    case 'INSERT_ENTERPRISE':
      return { ...state, loading: true }
    default:
      return state
  }
}

export default enterpriseReducer
