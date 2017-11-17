import axios from 'axios'

export const GET_PRODUCTS = 'GET_PRODUCTS'
export function getProducts() {
    const request = axios({
        method: 'get',
        url: '/api/products'
    })
    .then(res => {
        return res.data.products
    })
    return { type: GET_PRODUCTS, payload: request }
}

export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS'
export function searchProducts(term) {
    console.log(term)
    return { type: SEARCH_PRODUCTS, payload: { term }}
}



