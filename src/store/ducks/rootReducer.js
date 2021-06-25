import { combineReducers } from 'redux'

import loginReducer from './auth/reducer'
import enterpriseReducer from './enterprise/reducer'

const rootReducer = combineReducers({
  loginReducer,
  enterpriseReducer
})

export default rootReducer
