import { takeLatest, all, put, call } from 'redux-saga/effects'
import SignUpActionTypes from './sign-up.types'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import { emailSignInStart } from '../../redux/user/user.action'
import { signUpSuccess, signUpFailure } from './sign-up.action'

// watcher sign up
function* onSignUpStart() {
  yield takeLatest(SignUpActionTypes.SIGN_UP_START, signUp)
}

function* signUp(displayName, email, password) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password)

    yield createUserProfileDocument(user, { displayName })
    yield put(emailSignInStart(email, password))
  } catch (error) {
    yield put(signUpFailure(error.message))
  }
}

export function* signUpSagas() {
  yield all([call(onSignUpStart)])
}
