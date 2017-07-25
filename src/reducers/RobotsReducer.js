import { FETCH_ROBOTS, UPDATE_ROBOT_QA_CATEGORY, ADD_TO_SHIPPING, REMOVE_FROM_SHIPPING } from '../actions';

export const RobotsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ROBOTS:
      return action.payload.data.map(robot => {
        return {
          ...robot,
          qaCategory: [],
          shipped: false
        }
      });
    case UPDATE_ROBOT_QA_CATEGORY:
      //return state;
      return state.map( (robot, i) => {
        //console.log(robot);
        if (robot.id !== action.payload.id) {
          return robot;
        }

        return {
          ...robot,
          qaCategory: [...robot.qaCategory, action.payload.category]
        }
      });
    case ADD_TO_SHIPPING:
      return state.map(robot => {
        if (robot.id !== action.robot.id) {
          return robot;
        }

        return {
          ...robot,
          shipped: true
        }
      });
    case REMOVE_FROM_SHIPPING:
    return state.map(robot => {
      if (robot.id !== action.robot.id) {
        return robot;
      }

      return {
        ...robot,
        shipped: false
      }
    });
    default:
      return state;
  }
}
