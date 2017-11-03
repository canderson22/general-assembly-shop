export const UPDATE_SIGNUP_FIELDS = 'UPDATE_SIGNUP_FIELDS'

export function updateSignupFields(fields) {
    return { type: UPDATE_SIGNUP_FIELDS, payload: fields}
}

export const REQUEST_SIGNUP = 'REQUEST_SIGNUP'

export function signupSubmit(fields) {
    return { type: REQUEST_SIGNUP, payload: ''}
}
