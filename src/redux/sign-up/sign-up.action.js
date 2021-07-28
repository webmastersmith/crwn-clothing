import SignUpActionTypes from './sign-up.types'

export const signUpStart = () => ({
  type: SignUpActionTypes.SIGN_UP_START,
})
export const signUpSuccess = () => ({
  type: SignUpActionTypes.SIGN_UP_SUCCESS,
})
export const signUpFailure = (error) => ({
  type: SignUpActionTypes.SIGN_UP_FAILURE,
  payload: error,
})
