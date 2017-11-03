import { UPDATE_SIGNUP_FIELDS } from '../actions/registration'

const defaultState = {
    f_name: '',
    l_name: '',
    email: '',
    password: '',
    confirmation_password: '',
    phone: ''
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_SIGNUP_FIELDS:
         return action.payload
        default:
            return state
    }
}