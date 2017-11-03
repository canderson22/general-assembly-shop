import { GET_CURRENT_USER, USER_LOGOUT } from '../actions/user'

export default (state=null, action) => {
    switch (action.type) {
        case GET_CURRENT_USER:
            return action.payload
        case USER_LOGOUT:
            return action.payload
        default:
            return state
    }
}