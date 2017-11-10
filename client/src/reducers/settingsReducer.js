import { UPDATE_FIELDS } from '../actions/settings'



export default (state = {
    f_name: '',
    l_name: ''
}, action) => {
    switch (action.type) {
        case UPDATE_FIELDS:
            return Object.assign({}, state, action.payload)
        default:
            return state
    }
}