export const UPDATE_SIGNUP_FIELDS = 'UPDATE_SIGNUP_FIELDS'

export function updateSignupFields(fields) {
    return { type: UPDATE_SIGNUP_FIELDS, payload: fields}
}

export const USER_SIGNIN_FAILURE = 'USER_SIGNIN_FAILURE'
export function userSigninFailure(errorMsg) {
    return { type: USER_SIGNIN_FAILURE, payload: errorMsg }
}
