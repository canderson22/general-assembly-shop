import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../actions/cart'

function addToCart(state, newItem) {
    if(state.find(item => item._id === newItem._id)) {
        return state.map(item => {
            if(item._id === newItem._id) {
                item.qty += newItem.qty
            }
            return item
        })
    } else {
        return [
            ...state,
            newItem
        ]
    }
}

function removeFromCart(state, id) {
    var newState = state.filter(item => item._id !== id)
    return newState
}

export default (state=[], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return addToCart(state, action.payload)
        case REMOVE_FROM_CART:
            return removeFromCart(state, action.payload)
        case CLEAR_CART:
            return action.payload
        default:
            return state
    }
}