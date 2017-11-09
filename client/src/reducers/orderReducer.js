import { PROCESS_PAYMENT, COMPLETE_ORDER } from '../actions/order'


const defaultState = {
  processPayment: false,
  order: null
}

export default (state=defaultState, action) => {
    switch (action.type) {
        case PROCESS_PAYMENT:
            return Object.assign({}, state, {processPayment: action.payload})
        case COMPLETE_ORDER:
            return Object.assign({}, state, { order: action.payload})
        default:
            return state
    }
}