import { FETCH_ROBOTS } from '../actions';

export const RobotsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ROBOTS:
      return action.payload.data;
    default:
      return state;
  }
}
