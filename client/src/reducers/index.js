import { combineReducers } from 'redux'
import userReducer from './userReducer'
import signupReducer from './signupReducer'
import productsReducer from './productsReducer'
import cartReducer from './cartReducer'

export default combineReducers({
    user: userReducer,
    signup: signupReducer,
    products: productsReducer,
    cart: cartReducer
})