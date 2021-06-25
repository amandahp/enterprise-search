import { put, takeLatest, call } from 'redux-saga/effects'

import { login } from '../../../services/auth/login'
import { loginSuccess, loginError } from './actions'

function* callLoginApi({ email, password }) {
  try {
    const response = yield call(login, email, password)
    const { data } = response
    const { token, user } = data
    yield put(loginSuccess(token, user))
  } catch (e) {
    yield put(loginError(e))
  }
}

export function* watchLogin() {
  yield takeLatest('LOGIN', callLoginApi)
}
