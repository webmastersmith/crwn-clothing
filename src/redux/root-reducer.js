import { combineReducers } from 'redux'
import userReducer from './user/user-reducer'

// state is one big JSON object
export default combineReducers({
  user: userReducer,
})
