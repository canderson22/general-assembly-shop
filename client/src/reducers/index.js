import { combineReducers } from 'redux'
import userReducer from './userReducer'
import signupReducer from './signupReducer'
import productsReducer from './productsReducer'

export default combineReducers({
    user: userReducer,
    signup: signupReducer,
    products: productsReducer
})