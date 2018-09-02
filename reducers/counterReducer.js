import { actionTypes } from 'ACTIONS'

const initialState = {
    count: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return { ...state, count: state.count + 1 }
        case actionTypes.DECREMENT:
            return { ...state, count: state.count - 1 }
        default: return state
    }
}