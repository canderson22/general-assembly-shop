import { combineReducers } from 'redux'
import userReducer from './userReducer'
import signupReducer from './signupReducer'
import productsReducer from './productsReducer'
import cartReducer from './cartReducer'
import helpersReducer from './helpersReducer'
import orderReducer from './orderReducer'

export default combineReducers({
    user: userReducer,
    signup: signupReducer,
    products: productsReducer,
    cart: cartReducer,
    helpers: helpersReducer,
    order: orderReducer
})