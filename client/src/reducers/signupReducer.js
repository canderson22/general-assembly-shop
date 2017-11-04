import { UPDATE_SIGNUP_FIELDS, USER_SIGNIN_FAILURE } from '../actions/registration'

const defaultState = {
    fields: {
        f_name: '',
        l_name: '',
        email: '',
        password: '',
        confirmation_password: '',
        phone: ''
    },
    errorMsg: ''
}


export default (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_SIGNUP_FIELDS:
         return Object.assign({}, state, {
             fields: action.payload
         })
         case USER_SIGNIN_FAILURE:
            return Object.assign({}, state, {errorMsg: action.payload})
        default:
            return state
    }
}