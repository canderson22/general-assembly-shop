import axios from 'axios'
import jwtDecode from 'jwt-decode'

const clientAuth = axios.create()
clientAuth.defaults.headers.common.token = getToken()

function getToken() {
    return localStorage.getItem('token')
}

function setToken(token) {
    localStorage.setItem('token', token)
    return token
}

// signup actions 
export const GET_CURRENT_USER = 'GET_CURRENT_USER'

export function getCurrentUser() {
    const token = getToken()
    if(token) {
        return { type: GET_CURRENT_USER, payload: jwtDecode(token)}
    }
    return { type: GET_CURRENT_USER, payload: null}
}

export const USER_LOGOUT = 'USER_LOGOUT'
export function userLogout() {
    localStorage.removeItem('token')
    delete clientAuth.defaults.headers.common.token
    return { type: USER_LOGOUT, payload: null}
}