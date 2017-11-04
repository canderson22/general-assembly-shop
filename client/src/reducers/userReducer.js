import { GET_CURRENT_USER, USER_LOGOUT, USER_SIGNIN, USER_LOGIN } from '../actions/user'

export default (state=null, action) => {
    switch (action.type) {
        case GET_CURRENT_USER:
            return action.payload
        case USER_LOGOUT:
            return action.payload
        case USER_SIGNIN:
            return action.payload
        case USER_LOGIN:
            return action.payload
        default:
            return state
    }
}