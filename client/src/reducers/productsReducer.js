import { GET_PRODUCTS, UPDATE_PRODUCT } from '../actions/products'


// function searchProducts(state, payload) {
//     const term = payload.term.toLowerCase()
//     const newState = defaultProducts.filter(item => {
//         let title = item.title.toLowerCase()
//         return title.indexOf(term) > -1
//     })
//     return newState
// }

// function changeQuantity(state, payload) {
//     const newState = state.map(item => {
//         if(payload._id === item._id) {
//             item.qty = payload.qty
//         }
//         return item
//     })
//     return newState
// }

function updateProduct(state, payload) {
    const newState = state.map(product => {
        if (product._id === payload._id) {
            product.inventory = payload.inventory
        }
        return product
    })
    return newState
}

// function putBackItems(state, payload) {
//     const newState = state.map(item => {
//         if (item._id === payload._id) {
//             item.inStock += payload.qty
//         }
//         return item
//     })
//     return newState
// }

export default (state=[], action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return action.payload
        // case SEARCH_PRODUCTS:
        //     return searchProducts(state, action.payload)
        // case QUANTITY_CHANGE:
        //     return changeQuantity(state, action.payload)
        case UPDATE_PRODUCT:
            return updateProduct(state, action.payload)
        // case PUT_BACK_ITEMS:
        //     return putBackItems(state, action.payload)
        default:
            return state
    }
}

