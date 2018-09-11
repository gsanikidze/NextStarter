import { actionTypes } from 'ACTIONS';

const initialState = {
  toggleHeader: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_HEADER:
      return { ...state, toggleHeader: !state.toggleHeader };
    default: return state;
  }
};
