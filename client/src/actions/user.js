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

// user sign up

export const USER_SIGNIN = 'USER_SIGNIN'
export function userSignin(credentials, successCb, errorCb) {
    const request = clientAuth({
        method: 'post',
        url: '/api/users',
        data: credentials
    })
      .then(res => {
          if(res.data.success) {
              const token = res.data.token
              clientAuth.defaults.headers.common.token = setToken(token)
              successCb()
              return jwtDecode(token)
          } else {
              const errorMsg = res.data.error
              errorCb(errorMsg)
              return null
          }
      })
      return { type: USER_SIGNIN, payload: request}
}

export const USER_LOGIN = 'USER_LOGIN'
export function userLogin(credentials, successCb, errorCb) {
    const request = clientAuth({
        method: 'post',
        url:'/api/users/authenticate',
        data: credentials
    })
      .then(res => {
          if(res.data.success) {
              clientAuth.defaults.headers.common.token = setToken(token)
              successCb()
              return jwtDecode(token)
          } else {
              const errorMsg = res.data.error
              errorCb(errorMsg)
              return null
          }
      })
      return { type: USER_LOGIN, payload: request } 
}

