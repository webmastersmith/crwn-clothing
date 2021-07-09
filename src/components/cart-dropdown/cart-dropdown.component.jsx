import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import { connect } from 'react-redux'

const CartDropdown = ({ hidden }) => (
  <div className={`cart-dropdown ${hidden ? 'hidden' : ''}`}>
    <div className="cart-items">CartDropdown</div>
    <CustomButton>Go to Checkout</CustomButton>
  </div>
)

const mapStateToProps = (state) => ({
  hidden: state.cart.hidden, //props.hidden
})
export default connect(mapStateToProps)(CartDropdown)
