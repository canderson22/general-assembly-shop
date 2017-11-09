import { SHOW_CART, SHOW_SEARCH } from '../actions/helpers'

const defaultState = {
    viewCart: false,
    viewSearch: false
}

export default (state=defaultState, action) => {
    switch (action.type) {
        case SHOW_CART:
            return Object.assign({}, state, {viewCart: action.payload})
        case SHOW_SEARCH:
            return Object.assign({}, state, {viewSearch: action.payload})
        default:
            return state
    }
}