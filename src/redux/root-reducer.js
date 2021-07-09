import { combineReducers } from 'redux'
import userReducer from './user/user-reducer'
import cartReducer from './cart/cart.reducer'

// state is one big JSON object
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
})
