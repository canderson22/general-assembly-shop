import { PROCESS_PAYMENT, COMPLETE_ORDER , PROCESSING} from '../actions/order'


const defaultState = {
  processPayment: 'pending',
  order: null,
  processing: false
}

export default (state=defaultState, action) => {
    switch (action.type) {
        case PROCESS_PAYMENT:
            return Object.assign({}, state, {processPayment: action.payload})
        case COMPLETE_ORDER:
            return Object.assign({}, state, { order: action.payload})
        case PROCESSING:
            return Object.assign({}, state, { processing: action.payload })
        default:
            return state
    }
}