import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
  selectCartItems,
  selectCartItemsTotal,
} from '../../redux/cart/cart.selectors'

import './checkout.styles.scss'

const removeItem = (item) => item

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <p>{cartItem.name}</p>
    ))}
    <div className="total">
      <span>Total: ${total}</span>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal,
})
const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)
