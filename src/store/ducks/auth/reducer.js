export const initialState = {
  loading: false,
  error: false,
  token: '',
  user: ''
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, loading: true }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        token: action.token,
        user: action.user
      }
    case 'LOGIN_ERROR':
      return { ...state, loading: false, error: action.error }
    case 'LOGOUT':
      return { ...state, token: '', error: '', user: '', loading: false }
    default:
      return state
  }
}

export default loginReducer
