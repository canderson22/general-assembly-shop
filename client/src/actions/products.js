import axios from 'axios'

// LOAD ALL PRODUCTS
export const GET_PRODUCTS = 'GET_PRODUCTS'
export function getProducts(successCb, errorCb) {
    const request = axios({
        method: 'get',
        url: '/api/products'
    })
    .then(res => {
        var products = res.data.products
        successCb()
        return products
    })
    .catch((err) => {
        errorCb(err)
    })
    return { type: GET_PRODUCTS, payload: request }
}

// export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS'
// export function searchProducts(term, products) {
//     return { type: SEARCH_PRODUCTS, payload: { term }}
// }

// export const QUANTITY_CHANGE = 'QUANTITY_CHANGE'
// export function quantityChange(_id, qty) {
//     return { type: QUANTITY_CHANGE, payload: {_id, qty}}
// }

// // for updating products based on quantity that the user has added to thier cart
// export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS'
// export function updateProducts(item) {
//     return { type: UPDATE_PRODUCTS, payload: item}
// }

// // for updating products by removing items form cart
// export const PUT_BACK_ITEMS = 'PUT_BACK_ITEMS'
// export function putItemsBack(item) {
//     return { type: PUT_BACK_ITEMS, payload: item }
// }





