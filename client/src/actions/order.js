import axios from 'axios'
export const PROCESS_PAYMENT = 'PROCESS_PAYMENT'

export function processPayment(token, amount, cb) {
    const request = axios.post('/api/orders/charge', {
        description: 'GA Swag',
        source: token.id,
        currency: 'USD',
        amount
    })
    .then(res => {
        if(res.status === 200) {
            const paymentId = res.data.success.id
            cb(paymentId)
            return true
        } 
        return false
    })
    return { type: PROCESS_PAYMENT, payload: request}
}

export const COMPLETE_ORDER = 'COMPLETE_ORDER'
export function completeOrder(order, cb) {
    const request = axios.post('/api/orders', {
        order
    })
    .then(res => {
        if(res.data.success) {
            cb()
            return res.data.order
        }
    })
    return { type: COMPLETE_ORDER, payload: request}
}

