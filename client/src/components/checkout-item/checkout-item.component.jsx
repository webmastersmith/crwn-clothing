import React from 'react'

import { connect } from 'react-redux'
import {
  removeCartItem,
  increaseCartItem,
  reduceCartItem,
} from '../../redux/cart/cart.actions'

import './checkout-item.styles.scss'

const CheckoutItem = ({
  cartItem,
  removeCartItem,
  increaseItem,
  reduceItem,
}) => {
  const { name, imageUrl, price, quantity } = cartItem
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={() => reduceItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => increaseItem(cartItem)}>
          &#10095;
        </div>
      </span>

      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => removeCartItem(cartItem)}>
        &#10005;
      </div>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => ({
  removeCartItem: (item) => dispatch(removeCartItem(item)),
  increaseItem: (item) => dispatch(increaseCartItem(item)),
  reduceItem: (item) => dispatch(reduceCartItem(item)),
})
export default connect(null, mapDispatchToProps)(CheckoutItem)
