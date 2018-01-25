import { GET_PRODUCTS, UPDATE_PRODUCT } from '../actions/products'

function updateProduct(state, payload) {
    const newState = state.map(product => {
        if (product._id === payload._id) {
            product.inventory = payload.inventory
        }
        return product
    })
    return newState
}

export default (state=[], action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return action.payload
        case UPDATE_PRODUCT:
            return updateProduct(state, action.payload)
        default:
            return state
    }
}

