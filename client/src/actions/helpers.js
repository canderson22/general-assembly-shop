export const SHOW_CART = 'SHOW_CART'
export function showCart(show) {
    return { type: SHOW_CART, payload: show}
}

export const SHOW_SEARCH = 'SHOW_SEARCH'
export function showSearch(show) {
    return { type: SHOW_SEARCH, payload: show}
}