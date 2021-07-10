import React from 'react'
import { withRouter } from 'react-router'

import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCart } from '../../redux/cart/cart.actions'

import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(({ id, ...otherItems }) => (
          <CartItem key={id} {...otherItems} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout')
        dispatch(toggleCart())
      }}
    >
      Go to Checkout
    </CustomButton>
  </div>
)

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
})
export default withRouter(connect(mapStateToProps)(CartDropdown))
