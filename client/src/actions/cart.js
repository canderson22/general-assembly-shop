
export const ADD_TO_CART = 'ADD_TO_CART'
export function addToCart(item) {
    return { type: ADD_TO_CART, payload: item }
} 

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export function removeFromCart(id) {
    return { type: REMOVE_FROM_CART, payload: id}
}

export const CLEAR_CART = 'CLEAR_CART'
export function clearCart() {
    return { type: CLEAR_CART, payload: [] }
}