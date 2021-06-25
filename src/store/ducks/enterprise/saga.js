import { put, takeLatest, call } from 'redux-saga/effects'

import {
  getEnterprise,
  insert
} from '../../../services/ApiEnterprise/enterprise'
import { getEnterpriseSuccess } from './actions'

function* callGetEnterprise() {
  try {
    const response = yield call(getEnterprise)
    const { data } = response
    yield put(getEnterpriseSuccess(data))
  } catch (e) {
    console.log(e)
  }
}

function* insertEnterprise({ data: insertData }) {
  try {
    yield call(insert, insertData)
    const response = yield call(getEnterprise)
    const { data } = response
    yield put(getEnterpriseSuccess(data))
  } catch (e) {
    console.log(e)
  }
}

export function* watchEnterprise() {
  yield takeLatest('GET_ENTERPRISE', callGetEnterprise),
    yield takeLatest('INSERT_ENTERPRISE', insertEnterprise)
}
