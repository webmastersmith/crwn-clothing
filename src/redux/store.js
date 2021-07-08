import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer'

// you can add more functions to middlewares if needed
const middlewares = [logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store
