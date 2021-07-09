import React from 'react'
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import { toggleCart } from '../../redux/cart/cart.actions'

const totalItems = (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)

const CartIcon = ({ toggleCart, cartItems }) => (
  <div className="cart-icon" onClick={toggleCart}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{totalItems(cartItems)}</span>
  </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
})
const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
