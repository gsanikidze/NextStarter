import actionTypes from './actionTypes'

const incrementCount = () => dispatch => {
    return dispatch({ type: actionTypes.INCREMENT })
}

const decrementCount = () => dispatch => {
    return dispatch({ type: actionTypes.DECREMENT })
}

const toggleHeader = () => dispatch => {
    return dispatch({ type: actionTypes.TOGGLE_HEADER })
}

export default {
    incrementCount,
    decrementCount,
    toggleHeader
}