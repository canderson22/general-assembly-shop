import { UPDATE_ORDER_FIELDS } from '../actions/order'

const defaultState = {
    fields: {
        address1: '',
        address2: '',
        city: '',
        zipcode: ''
    }
}

export default (state=defaultState, action) => {
    switch (action.type) {
        case UPDATE_ORDER_FIELDS:
            return Object.assign({}, state, {fields: action.payload})
        default:
            return state
    }
}