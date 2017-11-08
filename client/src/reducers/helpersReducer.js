import { SHOW_CART } from '../actions/helpers'

const defaultState = {
    viewCart: false
}

export default (state=defaultState, action) => {
    switch (action.type) {
        case SHOW_CART:
            return Object.assign({}, state, {viewCart: action.payload})
        default:
            return state
    }
}