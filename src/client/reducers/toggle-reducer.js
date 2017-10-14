import { TOGGLE_CHANGE } from '../constants/actionTypes';

const initialState = false;

const toggle = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CHANGE:
      return !state;
    default:
      return state;
  }
};

export default toggle;
