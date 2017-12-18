import { combineReducers } from 'redux'
import userReducer from './userReducer'
import productsReducer from './productsReducer'
import cartReducer from './cartReducer'
import helpersReducer from './helpersReducer'
import orderReducer from './orderReducer'
import settingsReducer from './settingsReducer'

export default combineReducers({
    user: userReducer,
    products: productsReducer,
    cart: cartReducer,
    helpers: helpersReducer,
    order: orderReducer,
    settings: settingsReducer
})