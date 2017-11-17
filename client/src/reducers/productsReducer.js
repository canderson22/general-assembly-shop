import { GET_PRODUCTS, SEARCH_PRODUCTS } from '../actions/products'
var products = []

function searchProducts(state, payload) {
    const term = payload.term.toLowerCase()
    const newState = products.filter(item => {
        let title = item.title.toLowerCase()
        return title.indexOf(term) > -1
    })
    return newState
}



export default (state=[], action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            products = action.payload
            return action.payload
        case SEARCH_PRODUCTS:
            return searchProducts(state, action.payload)
        default:
            return state
    }
}