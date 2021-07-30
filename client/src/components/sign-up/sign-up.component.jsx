import React, { useState } from 'react'
import './sign-up.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
// import md5 from '../../scripts/md5'

import { connect } from 'react-redux'
import { signUpStart } from '../../redux/user/user.action'

function SignUp({ signUpStart }) {
  const [userCred, setUserCred] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const { displayName, email, password, confirmPassword } = userCred

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password.length < 6 && password !== confirmPassword) {
      alert('password problem')
      return
    }
    signUpStart(displayName, email, password)
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setUserCred({ ...userCred, [name]: value })
  }

  return (
    <div className="sign-up">
      <h2 className="title"> SIGN UP</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          handleChange={handleChange}
          value={displayName}
          label="Dispaly Name"
          required
        />
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          value={password}
          label="Password"
          required
        />
        <FormInput
          name="confirmPassword"
          type="password"
          handleChange={handleChange}
          value={confirmPassword}
          label="Confirm Password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit">sign up</CustomButton>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (displayName, email, password) =>
    dispatch(signUpStart({ displayName, email, password })),
})
export default connect(null, mapDispatchToProps)(SignUp)
