import React from 'react'
import './sign-up.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
// import md5 from '../../scripts/md5'

import { connect } from 'react-redux'
import { signUpStart } from '../../redux/sign-up/sign-up.action'

class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state
    const { signUpStart } = this.props

    if (password.length < 6 && password !== confirmPassword) {
      alert('password problem')
      return
    }
    signUpStart(displayName, email, password)
    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   )

    //   await createUserProfileDocument(user, { displayName })

    //   this.setState({
    //     displayName: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: '',
    //   })
    // } catch (e) {
    //   console.log('createUserWithEmailAndPassword Error:', e.message)
    // }
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state
    // console.log(md5(this.email))
    return (
      <div className="sign-up">
        <h2 className="title"> SIGN UP</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            handleChange={this.handleChange}
            value={displayName}
            label="Dispaly Name"
            required
          />
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={password}
            label="Password"
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            handleChange={this.handleChange}
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
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (displayName, email, password) =>
    dispatch(signUpStart(displayName, email, password)),
})
export default connect(null, mapDispatchToProps)(SignUp)
