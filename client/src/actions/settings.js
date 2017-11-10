export const UPDATE_FIELDS = 'UPDATE_FIELDS'
export function updateFields(fields) {
    return { type: UPDATE_FIELDS, payload: fields }
}