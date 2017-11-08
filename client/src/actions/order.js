export const UPDATE_ORDER_FIELDS = 'UPDATE_ORDER_FIELDS'
export function updateOrderFields(fields) {
    return { type: UPDATE_ORDER_FIELDS, payload: fields}
}