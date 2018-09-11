import actionTypes from './actionTypes';

const incrementCount = () => dispatch => dispatch({ type: actionTypes.INCREMENT });

const decrementCount = () => dispatch => dispatch({ type: actionTypes.DECREMENT });

const toggleHeader = () => dispatch => dispatch({ type: actionTypes.TOGGLE_HEADER });

export default {
  incrementCount,
  decrementCount,
  toggleHeader,
};
