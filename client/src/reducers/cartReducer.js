import { ADD_TO_CART } from '../actions/cart'

const defaultState = {
    cartEmpty: true,
    cart: []
}

function addToCart(state, newItem) {
    var newCart = []
    if(state.cart.findIndex(item => item._id === newItem._id) > -1) {
        newCart = state.cart.map(item => {
            if(item._id === newItem._id) {
                item.qty++
                return item
            }
            return item
        })
    } else {
        newCart = [
            ...state.cart,
            newItem
        ]
    }
    var newState = Object.assign({}, state, {
        cart: newCart,
        cartEmpty: false
    })
    return newState
}

export default (state=defaultState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return addToCart(state, action.payload)
        default:
            return state
    }
}