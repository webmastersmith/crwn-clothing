import { CartActionTypes } from './cart.types'

export const toggleCart = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
})

export const removeCartItem = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
})

export const increaseCartItem = (item) => ({
  type: CartActionTypes.INCREASE_ITEM,
  payload: item,
})

export const reduceCartItem = (item) => ({
  type: CartActionTypes.REDUCE_ITEM,
  payload: item,
})
