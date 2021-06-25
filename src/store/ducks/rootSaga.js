import { all, fork } from 'redux-saga/effects'
import { watchLogin } from './auth/saga'
import { watchEnterprise } from './enterprise/saga'

export default function* IndexSagas() {
  return yield all([fork(watchLogin), fork(watchEnterprise)])
}
