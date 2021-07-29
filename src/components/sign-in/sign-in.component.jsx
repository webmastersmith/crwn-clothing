import React, { useState } from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.action'
import { connect } from 'react-redux'

function SignIn({ emailSignInStart, googleSignInStart }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    emailSignInStart(email, password)
  }

  return (
    <div className="sign-in">
      <h1>I already have an account</h1>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          label="Password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit">sign in</CustomButton>
          <CustomButton
            onClick={googleSignInStart}
            isGoogleSignIn
            type="button"
          >
            sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
})
export default connect(null, mapDispatchToProps)(SignIn)
