import { ADD_TO_RECYCLED } from '../actions';

export const RecycleReducer = (state=[], action) => {
  switch (action.type) {
    case ADD_TO_RECYCLED:
      return [...state, action.payload];
    default:
      return state;
  }
}
