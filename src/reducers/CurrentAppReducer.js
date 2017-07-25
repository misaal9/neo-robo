/*eslint-disable*/
import {
  ON_LOAD,
  QA_START,
  QA_COMPLETE,
  CHANGE_APP_STATUS
} from '../actions';

export const CurrentAppReducer = (state=ON_LOAD, action) => {
  switch (action.type) {
    case CHANGE_APP_STATUS:
      return action.newStatus;
    default:
      return state;
  }
};
