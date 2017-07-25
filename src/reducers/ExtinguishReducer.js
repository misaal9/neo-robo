import { ADD_TO_EXTINGUISH } from '../actions';

export const ExtinguishReducer = (state=[], action) => {
  switch (action.type) {
    case ADD_TO_EXTINGUISH:
      return [...state, action.payload];
    default:
      return state;
  }
}
