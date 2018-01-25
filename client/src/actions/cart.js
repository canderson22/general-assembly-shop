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
        console.log(productReturn)
        return productReturn
    })
    .catch(res => console.log(res.err))
    return { type: ADD_TO_CART, payload: request }
} 

export const UPDATE_CART = 'UPDATE_CART'
export function updateCart(product) {
    var quantity = product.quantity
    product.quantity = 20
    const request = axios({
        method: 'PATCH',
        url: `/api/products/${product._id}`,
        data: {
            product
        }
    })
    .then(res => {
        var productReturn = res.data.product
        productReturn.quantity = quantity
        console.log(productReturn)
        return productReturn
    })
    .catch(err => console.log(err))
    return { type: UPDATE_CART, payload: request }  
}

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export function removeFromCart(id) {
    return { type: REMOVE_FROM_CART, payload: id}
}

export const CLEAR_CART = 'CLEAR_CART'
export function clearCart() {
    return { type: CLEAR_CART, payload: [] }
}