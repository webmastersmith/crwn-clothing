import { takeEvery, all, call, put } from 'redux-saga/effects'
import { clearCart } from './cart.actions'
import UserActionTypes from '../user/user.types'

//watcher clear cart
function* onSignOutSuccess() {
  yield takeEvery(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}
//worker clear cart
function* clearCartOnSignOut() {
  yield put(clearCart())
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)])
}
