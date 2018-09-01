import actionTypes from 'ACTIONS/actionTypes'
import { initialStore } from 'STORE'

export default (state = initialStore, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return { ...state, count: state.count + 1 }
        case actionTypes.DECREMENT:
            return { ...state, count: state.count - 1 }
        default: return state
    }
}