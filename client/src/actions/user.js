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

// LOG OUT USER
export const USER_LOGOUT = 'USER_LOGOUT'
export function userLogout() {
    localStorage.removeItem('token')
    delete clientAuth.defaults.headers.common.token
    return { type: USER_LOGOUT, payload: null}
}

// SIGN UP USER

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

//  USER LOGIN 
export const USER_LOGIN = 'USER_LOGIN'
export function userLogin(credentials, successCb, errorCb) {
    const request = clientAuth({
        method: 'post',
        url:'/api/users/auth',
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
              console.log(errorMsg)
              errorCb(errorMsg)
              return null
          }
      })
      return { type: USER_LOGIN, payload: request } 
}

export const UPDATE_USER = 'UPDATE_USER'
export function updateUser(fields) {
    console.log(fields)
    const request = clientAuth({
        method: 'patch',
        url: `/api/users/${fields._id}`,
        data: fields
    })
    .then(res => res.data.token)
    .then(token => {
        clientAuth.defaults.headers.common.token = setToken(token)
        return jwtDecode(token)
    })
    return { type: UPDATE_USER, payload: request }
}

export const DELETE_USER = 'DELETE_USER'
export function deleteUser(_id) {
    const request = clientAuth({
        method: 'delete',
        url: `/api/users/${_id}`
    })
    .then((res) => {
        localStorage.removeItem('token')
        delete clientAuth.defaults.headers.common.token
        return null
    })
    return { type: DELETE_USER, payload: request}
}