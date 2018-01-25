import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../actions/cart'

const defaultState = JSON.parse(localStorage.getItem('ga-cart')) || []

function addToCart(state, newItem) {
    if(state.find(item => item._id === newItem._id)) {
        var newState = state.map(item => {
            if(item._id === newItem._id) {
                item.quantity += newItem.quantity
            }
            return item
        })
        localStorage.setItem('ga-cart', JSON.stringify(newState))
        return newState
    } else {
        localStorage.setItem('ga-cart', JSON.stringify([
            ...state,
            newItem
        ]))
        return [
            ...state,
            newItem
        ]
    }
}


function removeFromCart(state, id) {
    var newState = state.filter(item => item._id !== id)
    localStorage.setItem('ga-cart', JSON.stringify(newState))
    return newState
}

export default (state = defaultState, action) => {
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