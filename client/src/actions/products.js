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

export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export function updateProduct(product) {
    const request = axios({
        method: 'PATCH',
        url: `/api/products/${product._id}`,
        data: {
            product
        }
    })
    .then(res => {
        var returnProduct = res.data.product
        return product
    })
    return { type: UPDATE_PRODUCT, payload: request }
}
