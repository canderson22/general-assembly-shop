import { combineReducers } from 'redux'
import userReducer from './userReducer'
import signupReducer from './signupReducer'

export default combineReducers({
    user: userReducer,
    signup: signupReducer
})