import { ADD_TO_CART } from '../actions/cart'

function addToCart(state, newItem) {
    var newState = []
    if(state.findIndex(item => item._id === newItem._id) > -1) {
        newState = state.map(item => {
            if(item._id === newItem._id) {
                item.qty++
                return item
            }
            return item
        })
    } else {
        newState = [
            ...state,
            newItem
        ]
    }
    return newState
}

export default (state=[], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return addToCart(state, action.payload)
        default:
            return state
    }
}