import axios from 'axios'

export const ADD_TO_CART = 'ADD_TO_CART'
export function addToCart(product, cb) {
    cb()
    product.inventory = product.inventory - product.quantity
    const request = axios({
        method: 'PATCH',
        url: `/api/products/${product._id}`,
        data: {
            product
        }
    })
    .then(res => {
        var productReturn = res.data.product
        productReturn.quantity = product.quantity
        return productReturn
    })
    .catch(res => console.log(res.err))
    return { type: ADD_TO_CART, payload: request }
} 

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export function removeFromCart(product, cb) {
    product.inventory += product.quantity
    cb(product)
    return { type: REMOVE_FROM_CART, payload: product._id}
}

export const CLEAR_CART = 'CLEAR_CART'
export function clearCart() {
    return { type: CLEAR_CART, payload: [] }
}