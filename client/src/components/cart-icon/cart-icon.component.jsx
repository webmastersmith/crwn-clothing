import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { toggleCart } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

const CartIcon = ({ toggleCart, itemCount }) => (
  <div className="cart-icon" onClick={toggleCart}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
)

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
})
const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
