import { SHOW_CART } from '../actions/helpers'

const defaultState = {
    showCart: false,
}

export default (state=defaultState, action) => {
    switch (action.type) {
        case SHOW_CART:
            return Object.assign({}, state, {showCart: action.payload})
        default:
            return state
    }
}